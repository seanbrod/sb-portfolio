output "acm_certificate_arn" {
  description = "Validated ACM certificate ARN attached to the CloudFront distribution"
  value       = aws_acm_certificate_validation.site.certificate_arn
}

output "primary_domain" {
  description = "Primary domain served by CloudFront"
  value       = var.primary_domain
}

output "environment" {
  description = "Environment name"
  value       = var.environment
}

output "aws_region" {
  description = "AWS region"
  value       = var.aws_region
}

output "project_name" {
  description = "Project name"
  value       = var.project_name
}
#used in github actions deply step to know where to aws s3 sync the built files
output "site_bucket_name" {
  description = "S3 bucket name for the static site (used for artifact sync)"
  value       = aws_s3_bucket.site.id
}
#meeded if IAM policies elswhere ref bucket
output "site_bucket_arn" {
  description = "S3 bucket ARN for the static site"
  value       = aws_s3_bucket.site.arn
}
#cloudfront url where site is reachable after deploy
output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}
#used in CI to run aws cloudfront create-invalidation so cloudfront serves new files on deploy
output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (used for cache invalidation after deploys)"
  value       = aws_cloudfront_distribution.site.id
}
