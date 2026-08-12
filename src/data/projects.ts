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
    name: 'Spotify Organizer',
    description: 'Tool to untangle a disorganized Spotify library. Analyzes songs across all your playlists and reorganizes them into logical groups based on genre, tempo, and vibe using Spotify\'s Web API.',
    tech: ['Python', 'Spotify Web API', 'Scikit-Learn', 'SQLite'],
    github: 'https://github.com/seanbrod/spotify-organizer',
    url: null,
    status: 'in-progress',
  },
  {
    name: 'Personal Stock Analysis',
    description: 'Real-time stock analysis platform that streams ticker data from financial APIs through Kafka into Spark, computing moving averages and detecting anomalies. Results are stored in PostgreSQL and visualized in Grafana dashboards. A Scrapy crawler feeds news and financial report data into the same pipeline. Created as an exploration on different technologies and to give me practice with financial analysis.',
    tech: ['Python', 'Kafka', 'Apache Spark', 'PostgreSQL', 'Grafana', 'Docker', 'Scrapy'],
    github: 'https://github.com/seanbrod/PersonalStockAnalysis',
    url: null,
    status: 'in-progress',
  },
  {
    name: 'Agent Researcher',
    description: 'Multi-agent AI researcher which goes out and pull relevent news based on interests. More of a personal experiment in building multi-agent systems locally after building large scale systems in industry.',
    tech: ['Python', 'MCP', 'Google A2A'],
    github: null,
    url: null,
    status: 'planned',
  },
]
