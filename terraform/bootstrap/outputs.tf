output "deployer_role_arn" {
  description = "Role ARN to set as AWS_ROLE_ARN in GitHub Actions secrets"
  value       = aws_iam_role.deployer.arn
}

output "oidc_provider_arn" {
  description = "GitHub OIDC provider ARN"
  value       = aws_iam_openid_connect_provider.github.arn
}
