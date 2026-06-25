export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Cloud Computing & DevOps',
    items: ['AWS (S3, EC2, SageMaker)', 'Google Cloud (Colab, AI)', 'Microsoft Azure (GCCH, Data Factory, DevOps)', 'OSC', 'GitHub', 'Git', 'Docker', 'Singularity', 'Agile'],
  },
  {
    category: 'Machine Learning & AI',
    items: ['PyTorch', 'LangChain/LangGraph', 'scikit-learn', 'vLLM', 'Pandas', 'Azure AI Foundry', 'Hugging Face', 'Data Clustering', 'Databricks'],
  },
  {
    category: 'Technology & Tools',
    items: ['Linux (RHEL, Ubuntu, Debian, AWS, Arch)', 'Windows', 'Kafka', 'Spark', 'Airflow', 'SQLite', 'PostgreSQL'],
  },
]

export const experience = [
  {
    title: 'AI Engineer Intern',
    company: 'Union Home Mortgage',
    location: 'Strongsville, OH',
    period: 'May 2025 – August 2025',
    bullets: [
      'Utilized ML-based data clustering, LLM engineering, and RAG to automate an internal tool used company-wide, saving partners an estimated 15 hours per week.',
      'Built and Dockerized a FastAPI-based microservice for document retrieval and OCR/VLM-powered data extraction (PDF, DOCX, Excel) from SharePoint and the web, enabling automated data processing across two internal systems.',
    ],
  },
  {
    title: 'Cybersecurity & Software Intern',
    company: 'SenseICs Corporation',
    location: 'Columbus, OH',
    period: 'August 2024 – May 2025',
    bullets: [
      'Developed a secure AI application used on actively deployed DoD contracts. Used a custom fine-tuned and quantized LLM model with a SQLite vector store for RAG. Containerized with Singularity on HPC servers at OSC.',
    ],
  },
  {
    title: 'AI & Software Intern',
    company: 'Hain Capital Group',
    location: 'Rutherford, NJ',
    period: 'May 2024 – July 2024',
    bullets: [
      'Engineered an AI-powered financial document analysis application using Microsoft Azure, capable of processing 1,000+ page files and extracting key data into Excel; saved $25K annually by eliminating outsourced processing.',
      'Leveraged OpenAI API, Azure AI Foundry, and containerized local portion of application with Docker to optimize efficiency and scalability.',
    ],
  },
  {
    title: 'IT & Software Consultant',
    company: 'Kaplan Consulting LLC',
    location: 'Beachwood, OH',
    period: 'July 2023 – May 2024',
    bullets: [
      'Used Python to recover a locked critical email account, contributing to a favorable outcome in a $4M civil case.',
      'Delivered tailored IT and software solutions, resolving over eight company-wide issues and enhancing operational efficiency.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'VE Solutions',
    location: 'Parma, OH',
    period: 'June 2023 – August 2023',
    bullets: [
      'Trained and quantized a custom YOLO object detection model on NVIDIA Jetson Nano, utilized in a prototype smart cooler.',
      'Processed and trained varying computer vision models using AWS services, including EC2, S3, and SageMaker.',
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
      'Worked on object detection for autonomous drones; placed 4th in 2024 and 7th in 2025 SUAS competitions.',
      'Trained YOLO and other computer vision models, and deployed them on an Nvidia Jetson Orin AGX mounted on the drone.',
      'Designed a pipeline for training, testing, and fine-tuning computer vision models, generating easily interpretable data on model performance to accelerate development cycles.',
    ],
  },
  {
    role: 'Member',
    organization: 'OSU AI Club',
    location: 'Columbus, OH',
    period: 'September 2023 – Present',
    bullets: [
      'Led a team in three AI-focused hackathons, developing an email-scraping bot for inbox organization, a locally hosted Phi-3 chatbot for offline use, and a Whisper-powered multi-chat app to assist the deaf and hard of hearing.',
    ],
  },
]
