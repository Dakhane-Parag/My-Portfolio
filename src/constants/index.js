export const myProjects = [
  {
    id: 1,
    title: "CodeSage AI - Multi-Agent GitHub Code Review Platform",
    description:
      "An event-driven FastAPI backend that ingests GitHub webhooks to automatically extract pull request data and orchestrate automated code reviews with zero human intervention.",
    subDescription: [
      "Architected a multi-agent AI system using LangGraph and Google Gemini, executing 4 specialized agents concurrently.",
      "Implemented a NoSQL persistence layer using MongoDB to track review history and post aggregated reports directly to PRs.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/demo.png",
    tags: [
      { id: 1, name: "LangGraph", path: "/assets/logos/LangGraph.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 2,
    title: "BrandFlow AI - Social Media Content Automation Platform",
    description:
      "A responsive web application integrating a MongoDB Atlas database and the Meta Graph API to securely manage and publish marketing content directly to Instagram.",
    subDescription: [
      "Engineered a generative AI pipeline utilizing Google Gemini for dynamic copywriting and PollinationsAI for image generation.",
      "Architected a production-grade deployment by serving the frontend globally via Vercel and configuring an AWS EC2 backend.",
    ],
    href: "https://brandflow-ai-three.vercel.app/",
    logo: "",
    image: "/assets/projects/brandflow.png",
    tags: [
      { id: 1, name: "AWS EC2", path: "/assets/logos/ec2.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 3,
    title: "WealthWise - RAG-Based AI Financial Retrieval System",
    description:
      "A production-grade RAG pipeline using FastAPI and FAISS that performs high-dimensional vector retrieval over financial documents, improving semantic search accuracy.",
    subDescription: [
      "Reduced average query latency by 60% through pre-computed embeddings and index caching.",
      "Built a React frontend delivering source-cited, context-grounded responses.",
    ],
    href: "https://wealthwise-beta.vercel.app/",
    logo: "",
    image: "/assets/projects/wealthwise.png",
    tags: [
      { id: 1, name: "", path: "/assets/logos/react.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 3, name: "Javascript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "FileVault - Secure File Storage and Sharing",
    description:
      "A secure cloud-based platform for uploading, storing, and sharing files with strong access control and encryption.",
    subDescription: [
      "Enables users to safely store files and share them with controlled permissions.",
      "Focuses on privacy, security, and ease of access across devices.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/filevault.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/docker.svg" },
    ],
  },
  {
    id: 5,
    title: "Wrap-Pay - Multi Wallet Crypto Payment SDK",
    description:
      "A crypto payment SDK that enables applications to accept payments from multiple wallets across different blockchain networks.",
    subDescription: [
      "Simplifies crypto payments by supporting multiple wallets through a single integration.",
      "Designed for seamless usage in e-commerce and decentralized applications.",
    ],
    href: "https://wrap-payments.vercel.app/",
    logo: "",
    image: "/assets/projects/wrap.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "Solidity", path: "/assets/logos/solidity.svg" },
    ],
  },
  {
    id: 6,
    title: "ChatVerse - Real-Time Chat Application",
    description:
      "A real-time messaging platform that allows users to communicate instantly with live status and message history.",
    subDescription: [
      "Supports instant messaging with real-time updates and online presence.",
      "Provides a smooth and modern chat experience across devices.",
    ],
    href: "https://chatverse-3vpz.onrender.com/",
    logo: "",
    image: "/assets/projects/chatverse.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "Mongo DB", path: "/assets/logos/mongodb.svg" },
    ],
  },
];


export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Dakhane-Parag",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/parag-dakhane-77a271263",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Twitter",
    href: "https://x.com/Dakhane_Parag/",
    icon: "/assets/socials/twitter.svg",
  },
];

export const experiences = [
  {
    title: "Software Development Engineer Intern",
    job: "BlueStock Fintech",
    date: "June 2025 - August 2025",
    contents: [
      "Assigned to build the IPO page module completely from scratch, including layout, data structure, and component logic.",
      "Developed basic APIs to handle IPO data retrieval and server-side request processing.",
      "Performed basic web scraping to gather IPO information from trusted financial sources.",
      "Collaborated with senior developers to ensure clean data flow, accuracy, and scalability.",
      "Delivered a maintainable IPO module ready for integration into the main platform."
    ],
  },
  {
    title: "Freelance Frontend Developer",
    job: "IvyStays",
    date: "November 2024 - December 2024",
    contents: [
      "Designed and developed the villa-booking website pages using clean HTML, CSS, and basic JavaScript.",
      "Created responsive layouts and interactive UI elements for booking sections and villa detail pages.",
      "Improved on-page SEO by optimizing metadata, headings, asset loading, and semantic HTML structure.",
      "Delivered fully structured frontend pages ready for backend API integration.",
    ],
  },
];

