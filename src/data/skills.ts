export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C"],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "YOLO",
      "NLP",
      "Computer Vision",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
    ],
  },
  {
    name: "Web Development",
    skills: [
      "Next.js",
      "React",
      "Angular",
      "Vue.js",
      "Laravel",
      "Express.js",
      "Spring Boot",
      "Node.js",
    ],
  },
  {
    name: "Blockchain",
    skills: ["Hedera SDK", "Smart Contracts", "Distributed Systems"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "REST API", "Linux"],
  },
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: number;
  icon?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Information Technology Security - Python",
    issuer: "ITS",
    year: 2024,
  },
  {
    id: 2,
    title: "Information Technology Security - AI",
    issuer: "ITS",
    year: 2024,
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Computer Engineering",
    institution: "International Institute of Technology (IIT)",
    location: "Sfax, Tunisia",
    period: "2023 - 2026 (Expected)",
    description:
      "Specializing in Software Engineering with focus on AI, Machine Learning, and Blockchain",
  },
  {
    id: 2,
    degree: "Engineering Preparatory Program",
    institution: "Engineering Preparatory Institute of Sfax (IPEIS)",
    location: "Sfax, Tunisia",
    period: "2021 - 2023",
    description: "Passed National Entrance Exam for Engineering Schools",
  },
];
