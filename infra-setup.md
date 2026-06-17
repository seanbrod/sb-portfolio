# Infrastructure as Code (IaC) and Github Actions CI/CD Template

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DEVELOPER WORKFLOW                                │
│                                                                             │
│   Developer  ──────>  Git Push  ─────>  GitHub Repository                  │
│                                               │                             │
└───────────────────────────────────────────────┼─────────────────────────────┘
                                                │ Triggers on push to main
                                                ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      GITHUB ACTIONS CI/CD PIPELINE                         │
│                                                                             │
│   deploy.yml Workflow                                                       │
│     Step 1: Checkout Code                                                   │
│     Step 2: Setup Terraform                                                 │
│     Step 3: Configure AWS via OIDC (no stored keys) ────────┐               │
│     Step 4: Terraform Init (connect to remote state) ───────┤               │
│     Step 5: Format Check                                    │               │
│     Step 6: Validate                                        │               │
│     Step 7: Plan                                            │               │
│     Step 8: Apply                                           │               │
│                                                             │               │
│   GitHub Secrets (non-sensitive identifiers only):          │               │
│     • AWS_ROLE_ARN      — OIDC role to assume               │               │
│     • AWS_REGION        — target region                     │               │
│     • TF_STATE_BUCKET   — S3 bucket for remote state        │               │
│     • TF_LOCK_TABLE     — DynamoDB table for state locking  │               │
└─────────────────────────────────────────────────────────────┼───────────────┘
                                                              │ OIDC token exchange
                                                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                               AWS ACCOUNT                                   │
│                                                                             │
│   IAM OIDC Identity Provider (token.actions.githubusercontent.com)          │
│     └─> IAM Role: github-actions-terraform-deployer                         │
│           • Scoped trust policy (your repo + main branch only)              │
│           • S3 + DynamoDB access for state management                       │
│           • Resource permissions for your infrastructure                    │
│                                                                             │
│   STATE MANAGEMENT                  TERRAFORM CONFIG                        │
│     S3 Bucket (remote state)   <──  terraform/envs/dev/                     │
│       • Versioning enabled             main.tf      — provider, backend     │
│       • AES256 encryption              variables.tf — input variables       │
│       • Public access blocked          outputs.tf   — resource outputs      │
│     DynamoDB Table (locking)                                                │
│       • Prevents concurrent runs                                            │
│                                                                             │
│   DEPLOYED RESOURCES                                                        │
│     Default tags auto-applied: Environment, Project, ManagedBy              │
│     Add your actual resources to main.tf                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: OIDC auth, Terraform plan + apply
├── scripts/
│   └── bootstrap-state.sh      # One-time setup: S3 state bucket + DynamoDB lock table
├── .env.example                # Template for local .env (never commit .env)
├── terraform/
│   ├── envs/
│   │   └── dev/
│   │       ├── main.tf         # Provider, backend, resources
│   │       ├── variables.tf    # Input variable declarations
│   │       ├── outputs.tf      # Output values
│   │       └── terraform.tfvars.example  # Local config template
│   └── modules/                # Reusable Terraform modules
└── README.md
```

## Prerequisites

- AWS account with permissions to create IAM roles, S3, and DynamoDB
- AWS CLI installed and configured locally (for the one-time bootstrap)
- Terraform >= 1.12.0 (optional — only needed for local runs)

---

## Setup Guide

### Step 1: Bootstrap Local AWS Credentials

You need local credentials once to create the state infrastructure. This is a personal admin account or your SSO session — it is **not** what GitHub Actions uses.

```bash
aws configure
# Enter your Access Key ID, Secret Access Key, region, and output format
aws sts get-caller-identity  # verify it works
```

### Step 2: Create Remote State Infrastructure

S3 bucket names are globally unique — choose a name that won't collide across projects.

Create your local `.env` from the example file and fill in your values:

```bash
cp .env.example .env
# edit .env — set PROJECT_NAME and AWS_REGION
```

Then run the bootstrap script:

```bash
chmod +x scripts/bootstrap-state.sh
./scripts/bootstrap-state.sh           # loads .env by default
./scripts/bootstrap-state.sh .env.prod # or pass a custom env file
```

The script creates the S3 bucket (with versioning, encryption, and public access blocked) and the DynamoDB lock table, then prints the exact values you'll need for Step 4.

> `.env` is git-ignored. Never commit it.

### Step 3: Create the OIDC IAM Role for GitHub Actions

This replaces the legacy IAM user + static key approach. GitHub Actions exchanges a short-lived OIDC token for temporary AWS credentials — no secrets to rotate or leak.

#### 3a — Create the OIDC Identity Provider (once per AWS account)

```bash
aws iam create-open-id-connect-provider \
  --url "https://token.actions.githubusercontent.com" \
  --client-id-list "sts.amazonaws.com" \
  --thumbprint-list "6938fd4d98bab03faadb97b34396831e3780aea1"
```

> If the provider already exists you'll get an `EntityAlreadyExists` error — that's fine, skip this step.

#### 3b — Create the trust policy

Replace `YOUR-GITHUB-USERNAME` and `YOUR-REPO-NAME` with your values. The `ref:refs/heads/main` condition locks the role to the main branch only.

```bash
cat > /tmp/trust-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:YOUR-GITHUB-USERNAME/YOUR-REPO-NAME:ref:refs/heads/main"
        }
      }
    }
  ]
}
EOF
```

#### 3c — Create the IAM role

```bash
aws iam create-role \
  --role-name github-actions-terraform-deployer \
  --assume-role-policy-document file:///tmp/trust-policy.json
```

#### 3d — Attach permissions

Attach the minimum policies needed. Expand this list as your infrastructure grows.

```bash
# State management
aws iam attach-role-policy \
  --role-name github-actions-terraform-deployer \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess

aws iam attach-role-policy \
  --role-name github-actions-terraform-deployer \
  --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess

# Add additional policies for the resources you will deploy, e.g.:
# arn:aws:iam::aws:policy/AmazonEC2FullAccess
# arn:aws:iam::aws:policy/AWSLambda_FullAccess
```

#### 3e — Note the Role ARN

```bash
aws iam get-role \
  --role-name github-actions-terraform-deployer \
  --query 'Role.Arn' \
  --output text
# Output: arn:aws:iam::123456789012:role/github-actions-terraform-deployer
```

### Step 4: Configure GitHub Repository Secrets

In your repository: **Settings → Secrets and variables → Actions → New repository secret**

| Secret name      | Value                                              |
|------------------|----------------------------------------------------|
| `AWS_ROLE_ARN`   | The role ARN from Step 3e                          |
| `AWS_REGION`     | e.g. `us-east-1`                                  |
| `TF_STATE_BUCKET`| The S3 bucket name from Step 2 (`$STATE_BUCKET`)  |
| `TF_LOCK_TABLE`  | The DynamoDB table name from Step 2 (`$LOCK_TABLE`)|

No AWS access keys are stored anywhere.

### Step 5: Configure Local Variables

```bash
cd terraform/envs/dev
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars — set project_name, state_bucket, lock_table, region
```

> `terraform.tfvars` is git-ignored. Never commit it.

To run Terraform locally:

```bash
terraform init \
  -backend-config="bucket=<your-state-bucket>" \
  -backend-config="region=<your-region>" \
  -backend-config="dynamodb_table=<your-lock-table>"

terraform plan
```

### Step 6: Add Your Resources and Deploy

1. Replace the example resource in `terraform/envs/dev/main.tf` with your actual infrastructure
2. Commit and push to `main`
3. GitHub Actions runs automatically: plan → apply

Monitor the run under the **Actions** tab in your repository.

---

## .gitignore Requirements

The following must always be git-ignored (already configured in this repo):

```
.terraform/          # local provider cache
*.tfstate            # state files contain resource IDs and secrets
*.tfstate.*          # backup and numbered state files
terraform.tfvars     # local variable values (may contain account-specific info)
backend.hcl          # local backend config
*.tfplan             # plan output files
```

Never commit any of these files. If a `.tfstate` file is accidentally committed, treat it as a credentials leak and rotate any exposed values immediately.

---

## Adding More Environments

1. Copy `terraform/envs/dev/` to `terraform/envs/prod/`
2. Update the `environment` variable default to `"prod"`
3. Use a different backend `key` (e.g., `prod/terraform.tfstate`) — you can reuse the same S3 bucket
4. Add a new GitHub Actions workflow or extend `deploy.yml` with a second job

---

## Troubleshooting

**OIDC token exchange fails (`AssumeRoleWithWebIdentity`):**
- Verify the trust policy `sub` condition exactly matches your `org/repo:ref:refs/heads/main`
- Confirm the workflow has `id-token: write` permission (already set in `deploy.yml`)
- Check the OIDC provider thumbprint is correct for your region

**`BucketAlreadyExists` when creating state bucket:**
- S3 names are global — add a unique suffix (e.g., your AWS account ID or a random string)

**`Error acquiring the state lock`:**
- Another run is in progress, or a previous run crashed and left a lock
- Remove the stuck lock: `aws dynamodb delete-item --table-name <lock-table> --key '{"LockID":{"S":"<state-key>"}}'`

**`Access Denied` during Terraform init:**
- Verify the IAM role has S3 and DynamoDB permissions for your specific bucket/table
- Check that the role ARN in `AWS_ROLE_ARN` matches what was created in Step 3

**Resources not deleted when removed from config:**
- Confirm remote state is initialised (backend block is present in `main.tf`)
- Run `terraform state list` to verify the resource is tracked
