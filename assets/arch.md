# AWS Architecture — Static Portfolio

```mermaid
flowchart LR
    Browser([End User])

    subgraph CF_LAYER [CloudFront]
        CF[Distribution]
        OAC[Origin Access Control]
        Headers[Response Headers Policy]
        ErrorRouting[Custom Error Responses]
    end

    subgraph S3_LAYER [S3]
        S3Site[Static Site Bucket]

        subgraph NuxtApp [Nuxt Build Output]
            Index[index.html\nShell + router]
            Assets[_nuxt/\nJS · CSS · fonts]
            Pages[About · Resume\nProjects]
        end
    end

    Browser -->|HTTPS request| CF
    CF --> Headers
    CF --> ErrorRouting
    CF --> OAC
    OAC -->|s3| S3Site
    S3Site --> NuxtApp
```

## Resources

| Resource | Details |
|---|---|
| **CloudFront Distribution** | Global CDN; HTTPS-only, gzip, managed CachingOptimized policy |
| **Origin Access Control** | SigV4-signed requests — S3 bucket rejects all other access |
| **Security Headers Policy** | HSTS · X-Frame-Options · X-Content-Type-Options · Referrer-Policy · XSS-Protection |
| **Custom Error Responses** | 403/404 → `/index.html` (HTTP 200) so Nuxt's client-side router handles all paths |
| **S3 Bucket — Static Site** | Hosts built Nuxt output; fully private, versioning enabled |
