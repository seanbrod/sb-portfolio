#which aws region to deploy into
variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}
#env label (dev/prod/etc) used to namespace resource names
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}
#prefixes every resource name so you can tell what owns what in aws
variable "project_name" {
  description = "Project name used to namespace all resources"
  type        = string
  default     = "your-project"
}
#name of s3 bucket that holds .tfstate file (remote state backend)
variable "state_bucket" {
  description = "S3 bucket name for Terraform remote state (must be globally unique)"
  type        = string
  default     = "terraform-state-your-project"
}
#name of dynamoDB table used for state locking
variable "lock_table" {
  description = "DynamoDB table name for Terraform state locking"
  type        = string
  default     = "terraform-state-lock-your-project"
}
#controls which cloudfront edge locations are used
variable "price_class" {
  description = "CloudFront price class. PriceClass_100 = US/Canada/Europe (cheapest for dev)."
  type        = string
  default     = "PriceClass_100"
}
