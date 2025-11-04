export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "work" | "project";
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Backend Developer Intern",
    company: "Altavo Partners (Hedera Blockchain)",
    location: "Paris, France (Remote)",
    period: "Summer 2025",
    type: "work",
    description:
      "Developed backend services for a blockchain platform as part of the Hedera Africa Hackathon.",
    achievements: [
      "Developed backend services using Node.js, PostgreSQL, and Docker",
      "Integrated Hedera SDK for blockchain functionality",
      "Enhanced system reliability by implementing robust API endpoints",
      "Optimized database queries for improved performance",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Hedera SDK",
      "Blockchain",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Intelligent Online Classroom System (PFA Project)",
    location: "IIT Sfax",
    period: "2025",
    type: "project",
    description:
      "Built an intelligent multimodal AI system for online education with real-time facial expression analysis.",
    achievements: [
      "Built secure web application using Angular with interactive quizzes",
      "Implemented webcam recording and synchronized multimodal dataset collection",
      "Designed AI system combining YOLO for face detection",
      "Developed custom generative model for real-time facial expression analysis",
      "Integrated NLP for chat-based understanding",
    ],
    technologies: [
      "Angular",
      "YOLO",
      "NLP",
      "Computer Vision",
      "AI/ML",
      "Python",
      "TensorFlow",
    ],
  },
  {
    id: 3,
    role: "Full-Stack Developer Intern",
    company: "Infotech Consulting Services (ICS)",
    location: "Sfax, Tunisia",
    period: "Summer 2024",
    type: "work",
    description: "Developed a comprehensive university management system.",
    achievements: [
      "Developed 'Geex' project using Laravel and Vue.js",
      "Managed university schedules and exam logistics",
      "Built administration system for students, classes, and professors",
      "Implemented resource management features",
    ],
    technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "JavaScript"],
  },
];
