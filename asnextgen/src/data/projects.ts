export type ProjectStage =
  | "Researching"
  | "Planning"
  | "Designing"
  | "In Development"
  | "Testing"
  | "Completed";

export type ProjectCategory = "Platform" | "Enterprise" | "Utility";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  stage: ProjectStage;
  progress: number;
  stack: string[];
  problem: string;
  solution: string;
  expectedCapabilities: string[];
  roadmap: string[];
}

export const projects: Project[] = [
  {
    slug: "ai-business-platform",
    name: "AI Business Platform",
    category: "Platform",
    description:
      "An intelligent business operations platform integrating AI-driven insights, workflow automation and real-time analytics.",
    longDescription:
      "A comprehensive business intelligence platform that leverages AI to streamline operations, surface actionable insights and automate repetitive workflows across departments.",
    stage: "Researching",
    progress: 20,
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI API"],
    problem:
      "Small and mid-sized businesses lack affordable access to the kind of AI-driven operational intelligence that large enterprises take for granted.",
    solution:
      "A modular, cloud-native platform that brings AI-powered reporting, forecasting and automation to businesses of any size.",
    expectedCapabilities: [
      "Natural language querying of business data",
      "Automated report generation",
      "Workflow automation engine",
      "Real-time performance dashboards",
      "Integration with common business tools",
    ],
    roadmap: [
      "Requirements research and market analysis",
      "Core architecture design",
      "AI integration layer development",
      "Dashboard and reporting module",
      "Beta testing with pilot businesses",
    ],
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    category: "Enterprise",
    description:
      "A full-featured hospital operations platform covering patient records, billing, doctor scheduling and department coordination.",
    longDescription:
      "An end-to-end hospital management solution designed to digitise and streamline clinical and administrative workflows — from patient registration to discharge summary.",
    stage: "In Development",
    progress: 55,
    stack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    problem:
      "Many regional hospitals manage patient data and billing through disconnected systems or manual processes, causing delays and errors.",
    solution:
      "A unified hospital OS with modules for OPD/IPD management, electronic health records, billing, pharmacy and lab integration.",
    expectedCapabilities: [
      "Electronic Health Records (EHR)",
      "Doctor and department scheduling",
      "Patient billing and insurance tracking",
      "Pharmacy and lab module integration",
      "Real-time ward and bed management",
    ],
    roadmap: [
      "Core patient registration module — complete",
      "Doctor scheduling system — in progress",
      "Billing and insurance module",
      "Lab and pharmacy integration",
      "QA and user acceptance testing",
    ],
  },
  {
    slug: "school-erp",
    name: "School ERP",
    category: "Enterprise",
    description:
      "A comprehensive school management platform with attendance, grading, parent portals and administration tools.",
    longDescription:
      "A purpose-built ERP for educational institutions, consolidating student records, attendance tracking, grade management, communication and fee collection into one platform.",
    stage: "Designing",
    progress: 35,
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
    problem:
      "Schools with multiple branches struggle to coordinate attendance, grades, parent communication and administration through fragmented tools.",
    solution:
      "A single platform giving teachers, administrators and parents a unified view of the school's operations.",
    expectedCapabilities: [
      "Student enrolment and records management",
      "Automated attendance tracking",
      "Grade and examination management",
      "Parent communication portal",
      "Fee collection and accounting",
    ],
    roadmap: [
      "UX research and wireframing",
      "Database schema design",
      "Core authentication and user roles",
      "Student and attendance modules",
      "Parent portal development",
    ],
  },
  {
    slug: "restaurant-management-system",
    name: "Restaurant Management System",
    category: "Utility",
    description:
      "A POS and operations system for restaurants with table management, order tracking and kitchen display integration.",
    longDescription:
      "A complete restaurant management solution from order taking to kitchen display to billing, designed for small to mid-scale restaurants.",
    stage: "Planning",
    progress: 10,
    stack: ["React Native", "Node.js", "MySQL", "Socket.io"],
    problem:
      "Restaurant operators need affordable, reliable software that handles orders, kitchen communication and billing without expensive hardware dependencies.",
    solution:
      "A tablet-first POS system with real-time kitchen display, table management and daily analytics.",
    expectedCapabilities: [
      "Table and order management",
      "Real-time kitchen display system",
      "Billing with split-payment support",
      "Menu and inventory management",
      "Daily and weekly sales reports",
    ],
    roadmap: [
      "Market and user research",
      "System architecture planning",
      "UI/UX wireframes",
      "Core POS module",
      "KDS integration",
    ],
  },
  {
    slug: "portfolio-builder",
    name: "Portfolio Builder",
    category: "Platform",
    description:
      "A guided platform for students and developers to build, host and publish professional portfolios without writing code.",
    longDescription:
      "A no-code portfolio creation platform that guides users through building a professional online presence — particularly designed for students and early-career developers.",
    stage: "In Development",
    progress: 80,
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    problem:
      "Students completing internships often lack a polished portfolio to showcase their work, directly limiting their job prospects.",
    solution:
      "A structured, template-based portfolio builder that makes it easy to showcase projects, skills and experience — published in minutes.",
    expectedCapabilities: [
      "Guided portfolio builder with templates",
      "Project and skills showcase",
      "Custom domain support",
      "Resume export (PDF)",
      "Public shareable URL",
    ],
    roadmap: [
      "Template system — complete",
      "Project upload and editor — complete",
      "Custom domain integration — in progress",
      "Resume export",
      "Public launch",
    ],
  },
  {
    slug: "smart-attendance-system",
    name: "Smart Attendance System",
    category: "Utility",
    description:
      "An automated attendance tracking system for colleges and enterprises using QR codes and real-time reporting.",
    longDescription:
      "A digital attendance system that eliminates manual registers through QR code scanning, geolocation verification and automated report generation.",
    stage: "In Development",
    progress: 60,
    stack: ["React", "Firebase", "Node.js", "QR Code API"],
    problem:
      "Colleges and offices still rely on paper or spreadsheets for attendance, making it difficult to track patterns, generate reports or prevent proxy entries.",
    solution:
      "A QR-code-based attendance system with real-time dashboards, absentee alerts and exportable reports.",
    expectedCapabilities: [
      "QR code generation and scanning",
      "Geolocation verification",
      "Real-time attendance dashboard",
      "Automated absentee alerts",
      "Report generation and export",
    ],
    roadmap: [
      "QR generation and scanning — complete",
      "Real-time dashboard — in progress",
      "Geolocation verification",
      "Alert system",
      "Admin reporting module",
    ],
  },
  {
    slug: "e-commerce-platform",
    name: "E-Commerce Platform",
    category: "Platform",
    description:
      "A scalable, multi-vendor e-commerce platform with product management, payments and order fulfilment.",
    longDescription:
      "A full-featured e-commerce platform designed for multi-vendor marketplaces, covering product listing, cart, checkout, payment processing and seller dashboards.",
    stage: "Planning",
    progress: 5,
    stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "TypeScript"],
    problem:
      "SMEs wanting to sell online face a choice between expensive platforms with limited customisation or building from scratch.",
    solution:
      "A modular, developer-friendly e-commerce platform customisable for any business model.",
    expectedCapabilities: [
      "Multi-vendor marketplace support",
      "Product and inventory management",
      "Stripe payment integration",
      "Order tracking and fulfilment",
      "Seller and buyer dashboards",
    ],
    roadmap: [
      "Requirements and architecture planning",
      "Database and API design",
      "Product and cart module",
      "Payment integration",
      "Seller onboarding flow",
    ],
  },
  {
    slug: "learning-management-system",
    name: "Learning Management System",
    category: "Platform",
    description:
      "A feature-complete LMS for creating, distributing and tracking online courses and learning programmes.",
    longDescription:
      "An LMS built for educational institutions and corporate training — supporting course creation, video delivery, assessments and learner progress tracking.",
    stage: "Researching",
    progress: 15,
    stack: ["Next.js", "Node.js", "MongoDB", "AWS S3", "TypeScript"],
    problem:
      "Institutions need affordable, flexible LMS platforms that don't require expensive licensing or complex setup.",
    solution:
      "An open, extensible LMS with course builder, live session support, assessments and a learner analytics dashboard.",
    expectedCapabilities: [
      "Course and module builder",
      "Video and content delivery",
      "Assessments and quizzes",
      "Learner progress tracking",
      "Certificates and badges",
    ],
    roadmap: [
      "Competitive research and feature mapping",
      "System architecture and database design",
      "Course builder module",
      "Learner experience design",
      "Assessment and grading engine",
    ],
  },
];
