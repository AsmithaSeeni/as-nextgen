export type JobType = "Internship" | "Full-Time" | "Associate";
export type JobLocation = "Remote" | "Hybrid" | "On-site";

export interface Job {
  id: string;
  title: string;
  type: JobType;
  location: JobLocation;
  domain: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "frontend-developer-intern",
    title: "Frontend Developer Intern",
    type: "Internship",
    location: "Remote",
    domain: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Git"],
    responsibilities: [
      "Build and maintain responsive UI components using React and TypeScript",
      "Collaborate with the design team to implement pixel-accurate interfaces",
      "Write clean, maintainable and well-documented code",
      "Participate in code reviews and team standups",
      "Contribute to real client and internal projects",
    ],
    requirements: [
      "Currently enrolled in a Computer Science or related degree programme",
      "Solid understanding of HTML, CSS and JavaScript fundamentals",
      "Familiarity with React or strong willingness to learn quickly",
      "Basic understanding of version control with Git",
      "Minimum availability of 20 hours per week",
    ],
  },
  {
    id: "backend-developer-intern",
    title: "Backend Developer Intern",
    type: "Internship",
    location: "Remote",
    domain: "Backend Development",
    skills: ["Node.js", "MongoDB", "REST APIs", "Express", "Git"],
    responsibilities: [
      "Design and implement RESTful APIs using Node.js and Express",
      "Work with databases including MongoDB and PostgreSQL",
      "Collaborate with frontend developers on API contracts and data structures",
      "Assist in system architecture and performance optimisation",
      "Write thorough technical documentation",
    ],
    requirements: [
      "Currently enrolled in a Computer Science or related degree programme",
      "Understanding of server-side development concepts",
      "Familiarity with any backend language (Node.js, Python, Java)",
      "Basic knowledge of databases and SQL/NoSQL",
      "Minimum availability of 20 hours per week",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Associate",
    location: "Remote",
    domain: "Design",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Design Systems",
    ],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Create wireframes, prototypes and high-fidelity mockups in Figma",
      "Conduct user research and translate findings into design decisions",
      "Develop and maintain a consistent design system",
      "Collaborate closely with engineering to ensure accurate implementation",
    ],
    requirements: [
      "Strong portfolio demonstrating UI/UX work across web and mobile",
      "Proficiency in Figma",
      "Understanding of user-centred design principles",
      "Ability to communicate design decisions clearly",
      "Minimum availability of 20 hours per week",
    ],
  },
  {
    id: "mobile-app-developer-intern",
    title: "Mobile App Developer Intern",
    type: "Internship",
    location: "Remote",
    domain: "Mobile Development",
    skills: ["React Native", "Flutter", "Dart", "JavaScript", "Git"],
    responsibilities: [
      "Build cross-platform mobile applications using React Native or Flutter",
      "Integrate with RESTful APIs and backend services",
      "Ensure consistent performance and UX across iOS and Android",
      "Debug and optimise mobile application performance",
      "Work within an agile development team",
    ],
    requirements: [
      "Currently enrolled in a Computer Science or related degree programme",
      "Understanding of mobile development fundamentals",
      "Experience with React Native or Flutter (or strong willingness to learn)",
      "Familiarity with mobile design patterns",
      "Minimum availability of 20 hours per week",
    ],
  },
];
