export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['PyTorch', 'scikit-learn', 'vLLM', 'Pandas', 'Hugging Face', 'Data Clustering', 'Databricks'],
  },
  {
    category: 'Agentic AI & LLM',
    items: ['LangChain/LangGraph', 'MCP', 'Google A2A', 'Azure AI Foundry', 'AWS Bedrock'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'OSC', 'Docker', 'Singularity', 'Terraform', 'GitHub', 'Git'],
  },
  {
    category: 'Data & Systems',
    items: ['Kafka', 'Spark', 'PostgreSQL', 'SQLite', 'NoSQL', 'Linux (RHEL, Ubuntu, Debian, Arch)', 'Agile'],
  },
  {
    category: 'Languages',
    items: ['English (native)', 'Mandarin (proficient)', 'ASL (basic)'],
  },
]

export const experience = [
  {
    title: 'Software Developer Intern',
    company: 'Progressive Insurance',
    location: 'Mayfield Village, OH',
    period: 'May 2026 – Present',
    bullets: [
      'Engineered a multi-agent daily research system using frontier LLMs, MCP, AWS, Terraform, and Google A2A that autonomously surfaces emerging tech trends and delivers curated digest emails to internal subscribers.',
      'Designed and built a full-stack Nuxt.js application that automates the project intake lifecycle for the Innovation Services team. Engineered a voice-to-voice AI agent meeting interface, secure authentication, and a serverless AWS backend (DynamoDB, S3, SNS, SES, Bedrock) deployed via Terraform to eliminate manual intake workflows.',
    ],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Union Home Mortgage',
    location: 'Strongsville, OH',
    period: 'May 2025 – August 2025',
    bullets: [
      'Automated a company-wide internal tool using ML-based data clustering, LLM engineering, and RAG, saving partners an estimated 15 hours per week.',
      'Built and Dockerized a FastAPI-based microservice for document retrieval and OCR/VLM-powered data extraction (PDF, DOCX, Excel) from SharePoint and the web, enabling automated data processing across two internal systems.',
    ],
  },
  {
    title: 'Cybersecurity & Software Intern',
    company: 'SenseICs Corporation',
    location: 'Columbus, OH',
    period: 'August 2024 – May 2025',
    bullets: [
      'Supported DoD CMMC 2.0 Level 2 compliance by assessing security requirements and evaluating Managed Service Providers for strategic partnerships.',
      'Developed a secure AI application on actively deployed DoD contracts, using a custom fine-tuned and quantized LLM with a SQLite vector store for RAG; containerized with Singularity on HPC servers at OSC.',
    ],
  },
  {
    title: 'AI & Software Intern',
    company: 'Hain Capital Group',
    location: 'Rutherford, NJ',
    period: 'May 2024 – July 2024',
    bullets: [
      'Engineered an AI-powered financial document analysis application using Microsoft Azure, capable of processing 1,000+ page files and extracting key data into Excel; saved $25K annually by eliminating outsourced processing.',
      'Leveraged OpenAI API and Azure AI Foundry, containerizing the application with Docker to improve deployment efficiency and scalability.',
    ],
  },
  {
    title: 'IT & Software Consultant',
    company: 'Kaplan Consulting LLC',
    location: 'Beachwood, OH',
    period: 'July 2023 – May 2024',
    bullets: [
      'Recovered a locked critical email account using Python, directly contributing to a favorable outcome in a $4M civil case.',
      'Delivered tailored IT and software solutions across eight+ company-wide issues, improving operational workflows and system reliability.',
    ],
  },
  {
    title: 'IT & Software Consultant',
    company: 'National Diagnostic Imaging',
    location: 'Beachwood, OH',
    period: 'February 2022 – May 2024',
    bullets: [
      'Managed the recovery and restoration of company accounts and data following a ransomware attack, ensuring a swift return to essential operations.',
      'Trained team members on software tools and workflows, improving daily productivity and reducing reliance on external IT support.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'VE Solutions',
    location: 'Parma, OH',
    period: 'June 2023 – August 2023',
    bullets: [
      'Trained and quantized a custom YOLO object detection model for deployment on NVIDIA Jetson Nano, integrated into a prototype smart cooler product.',
      'Trained and evaluated multiple computer vision models using AWS EC2, S3, and SageMaker for scalable model development.',
    ],
  },
  {
    title: 'IT Intern',
    company: 'Direct Recruiters Inc.',
    location: 'Solon, OH',
    period: 'May 2023',
    bullets: [
      'Integrated new accounts into the DRI network during a company merger, using MongoDB for structured data management.',
    ],
  },
]

export const education = [
  {
    institution: 'The Ohio State University',
    location: 'Columbus, OH',
    degree: 'Computer Science & Engineering, 2027',
    gpa: '3.76',
    bullets: [
      'Specialization in Artificial Intelligence | Minors in Business & Math',
      "Honors & Scholars Student, Computing Excellence Scholar & Choose Ohio First Mentor, Dean's List",
    ],
  },
]

export const involvement = [
  {
    role: 'Software Member & Treasurer',
    organization: 'BuckeyeVertical',
    location: 'Columbus, OH',
    period: 'August 2023 – Present',
    bullets: [
      'Secured sponsorships from Anduril, General Electric, and Boom Supersonic as Treasurer, nearly doubling the organization\'s annual budget from the prior year.',
      'Placed 4th out of 70+ teams at the 2024 SUAS Competition and 7th in 2025, developing autonomous drones for real-world package delivery missions.',
      'Led object detection development — trained YOLO and CV models deployed on Nvidia Jetson Orin AGX, and designed a training and fine-tuning pipeline on OSC HPC resources.',
    ],
  },
  {
    role: 'Member',
    organization: 'OSU AI Club',
    location: 'Columbus, OH',
    period: 'September 2023 – Present',
    bullets: [
      'Developed a custom CNN using PyTorch on the FER2013 dataset for emotion recognition.',
      'Led a team in three AI-focused hackathons, building an email-scraping bot, a locally hosted Phi-3 chatbot for offline use, and a Whisper-powered multi-chat app to assist the deaf and hard of hearing.',
    ],
  },
  {
    role: 'Founder & President',
    organization: 'Irish Culture Club',
    location: 'Solon, OH',
    period: 'August 2021 – May 2023',
    bullets: [
      'Founded the Irish Culture Club, growing membership to 80+ students and fostering cultural engagement across the school community.',
    ],
  },
  {
    role: 'Volunteer',
    organization: 'Friendship Circle of Cleveland',
    location: 'Cleveland, OH',
    period: 'February 2022 – May 2023',
    bullets: [
      'Dedicated 50+ hours to nurturing relationships with children with disabilities, enhancing community inclusion and support.',
    ],
  },
]
