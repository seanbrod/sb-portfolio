
# ─── Cloudflare Zone Lookups ──────────────────────────────────────────────────
data "cloudflare_zone" "primary" {
  name = var.primary_domain
}

data "cloudflare_zone" "secondary" {
  name = var.secondary_domain
}

# ─── ACM Certificate (must use us_east_1 alias — CloudFront is a global service) ──
resource "aws_acm_certificate" "site" {
  provider          = aws.us_east_1
  domain_name       = var.primary_domain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# ─── ACM DNS Validation via Cloudflare ────────────────────────────────────────
#ACM emits one CNAME record per validated domain; create each one in Cloudflare
resource "cloudflare_record" "acm_validation" {
  for_each = {
    for dvo in aws_acm_certificate.site.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      value = dvo.resource_record_value
      type  = dvo.resource_record_type
    }
  }

  zone_id = data.cloudflare_zone.primary.id
  name    = trimsuffix(each.value.name, ".")
  content = trimsuffix(each.value.value, ".")
  type    = each.value.type
  ttl     = 60
  proxied = false
}

#blocks until ACM confirms the cert is fully issued
resource "aws_acm_certificate_validation" "site" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.site.arn
  validation_record_fqdns = [for record in cloudflare_record.acm_validation : record.hostname]
}

# ─── Primary Domain DNS ───────────────────────────────────────────────────────
#apex CNAME → CloudFront; proxied = false so CloudFront sees the real client IP
#and can write native access logs to S3 without Cloudflare's proxy masking them
resource "cloudflare_record" "primary_apex" {
  zone_id = data.cloudflare_zone.primary.id
  name    = "@"
  content = aws_cloudfront_distribution.site.domain_name
  type    = "CNAME"
  ttl     = 300
  proxied = false
}

# ─── Secondary Domain Redirect ────────────────────────────────────────────────
#placeholder proxied A records activate Cloudflare's SSL and proxy on the secondary zone;
#traffic never reaches 192.0.2.1 — Cloudflare intercepts and the page rule redirects it
resource "cloudflare_record" "secondary_apex" {
  zone_id = data.cloudflare_zone.secondary.id
  name    = "@"
  content = "192.0.2.1"
  type    = "A"
  ttl     = 1
  proxied = true
}

resource "cloudflare_record" "secondary_www" {
  zone_id = data.cloudflare_zone.secondary.id
  name    = "www"
  content = "192.0.2.1"
  type    = "A"
  ttl     = 1
  proxied = true
}

#301 permanent redirect: all seanmbroderick.com traffic → seanbroderick.dev
#uses the modern Dynamic Redirect ruleset (replaces deprecated cloudflare_page_rule)
#requires "Transform Rules > Edit" on the Cloudflare API token
resource "cloudflare_ruleset" "secondary_redirect" {
  zone_id     = data.cloudflare_zone.secondary.id
  name        = "redirect-to-primary"
  description = "301 redirect all traffic to ${var.primary_domain}"
  kind        = "zone"
  phase       = "http_request_dynamic_redirect"

  rules {
    action      = "redirect"
    description = "Redirect all to primary domain, preserving path and query string"
    enabled     = true
    expression  = "true"

    action_parameters {
      from_value {
        status_code = 301
        target_url {
          #concat preserves the original path (e.g. /resume → seanbroderick.dev/resume)
          expression = "concat(\"https://${var.primary_domain}\", http.request.uri.path)"
        }
        preserve_query_string = true
      }
    }
  }
}
