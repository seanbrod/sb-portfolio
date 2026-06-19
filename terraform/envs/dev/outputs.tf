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

output "site_bucket_name" {
  description = "S3 bucket name for the static site (used for artifact sync)"
  value       = aws_s3_bucket.site.id
}

output "site_bucket_arn" {
  description = "S3 bucket ARN for the static site"
  value       = aws_s3_bucket.site.arn
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (used for cache invalidation after deploys)"
  value       = aws_cloudfront_distribution.site.id
}
