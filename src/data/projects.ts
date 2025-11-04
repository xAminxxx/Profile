export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "AI/ML" | "Blockchain" | "Web" | "Full-Stack";
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hedera Blockchain Platform",
    description:
      "Backend services for a decentralized blockchain platform built for Hedera Africa Hackathon",
    longDescription:
      "Developed a robust backend infrastructure for a blockchain platform using Hedera SDK. Implemented secure API endpoints, optimized database queries, and integrated Docker for containerization. The platform handles distributed ledger transactions with high reliability and performance.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Hedera SDK",
      "REST API",
      "Blockchain",
    ],
    category: "Blockchain",
    featured: true,
    demo: "https://youtu.be/F2wRcFhlHmg?si=zpy4pGSwNFE72pfA",
  },
  {
    id: 2,
    title: "Intelligent Online Classroom",
    description:
      "Multimodal AI system combining facial expression analysis with NLP for intelligent education",
    longDescription:
      "Built a sophisticated web application featuring real-time facial expression analysis using YOLO and custom generative models. The system synchronizes webcam recordings with quiz responses to create a multimodal dataset. Integrated NLP for chat-based understanding, enabling intelligent interaction analysis in online education environments.",
    technologies: [
      "Angular",
      "Python",
      "YOLO",
      "TensorFlow",
      "NLP",
      "Computer Vision",
      "WebRTC",
    ],
    category: "AI/ML",
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Geex University Management",
    description:
      "Comprehensive university management system for schedules, exams, and administration",
    longDescription:
      "Developed a full-featured university management platform handling schedules, exam logistics, student enrollment, class assignments, professor management, and resource allocation. Built with Laravel backend and Vue.js frontend for a smooth, responsive user experience.",
    technologies: [
      "Laravel",
      "Vue.js",
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API",
    ],
    category: "Full-Stack",
    featured: true,
    github: "#",
    demo: "#",
  },
];

export const projectCategories = [
  "All",
  "AI/ML",
  "Blockchain",
  "Web",
  "Full-Stack",
] as const;
