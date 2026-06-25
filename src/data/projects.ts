export interface Project {
  name: string
  description: string
  tech: string[]
  github: string | null
  url: string | null
  status: 'live' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    name: 'Personal Portfolio',
    description: 'Static personal portfolio site built with Nuxt.js/Vue.js, hosted on AWS CloudFront + private S3 with OAC. Infrastructure managed with Terraform and deployed via GitHub Actions OIDC.',
    tech: ['Nuxt.js', 'Vue.js', 'AWS CloudFront', 'AWS S3', 'Terraform'],
    github: 'https://github.com/seanbrod/sb-portfolio',
    url: null,
    status: 'live',
  },
  {
    name: 'Personal Stock Analysis',
    description: 'Personal tooling for stock data retrieval and analysis.',
    tech: ['Python'],
    github: 'https://github.com/seanbrod/PersonalStockAnalysis',
    url: null,
    status: 'in-progress',
  },
  {
    name: 'Spotify Organizer',
    description: 'Spotify playlist organization and management tool.',
    tech: [],
    github: null,
    url: null,
    status: 'planned',
  },
]
