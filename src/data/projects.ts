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
    description: 'This site — a static portfolio built with Nuxt.js/Vue.js, hosted on AWS CloudFront with a private S3 origin (OAC). Infrastructure provisioned with Terraform and deployed via GitHub Actions using OIDC.',
    tech: ['Nuxt.js', 'Vue.js', 'AWS CloudFront', 'AWS S3', 'Terraform', 'GitHub Actions'],
    github: 'https://github.com/seanbrod/sb-portfolio',
    url: 'https://seanbroderick.dev/',
    status: 'live',
  },
  {
    name: 'Personal Stock Analysis',
    description: 'Real-time stock analysis platform that streams ticker data from financial APIs through Kafka into Spark, computing moving averages and detecting anomalies. Results are stored in PostgreSQL and visualized in Grafana dashboards. A Scrapy crawler feeds news and financial report data into the same pipeline.',
    tech: ['Python', 'Kafka', 'Apache Spark', 'PostgreSQL', 'Grafana', 'Docker', 'Scrapy'],
    github: 'https://github.com/seanbrod/PersonalStockAnalysis',
    url: null,
    status: 'in-progress',
  },
  {
    name: 'Spotify Organizer',
    description: 'Tool to untangle a disorganized Spotify library — analyzes songs across all your playlists and reorganizes them into logical groups based on genre, tempo, and vibe using Spotify\'s audio features API.',
    tech: ['Python', 'Spotify API'],
    github: 'https://github.com/seanbrod/spotify-organizer',
    url: null,
    status: 'in-progress',
  },
]
