variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name — used to namespace the IAM role and policy"
  type        = string
  default     = "portfolio"
}

variable "github_org" {
  description = "GitHub user or org that owns the repo (e.g. seanbrod)"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name without the org prefix (e.g. sb-portfolio)"
  type        = string
}
