export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  stack: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "High-performance web applications built with modern React and Next.js architectures. From marketing sites to complex full-stack platforms.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "GraphQL"],
    icon: "Globe",
  },
  {
    id: "mobile-applications",
    number: "02",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps delivering native-quality experience on both iOS and Android from a single codebase.",
    stack: ["Flutter", "React Native", "iOS", "Android", "Mobile APIs"],
    icon: "Smartphone",
  },
  {
    id: "enterprise-software",
    number: "03",
    title: "Enterprise Software",
    description:
      "Purpose-built ERP systems, business platforms and workflow tools designed around how your organisation actually operates.",
    stack: ["ERP Systems", "Business Platforms", "Workflow Engines", "Node.js"],
    icon: "Building2",
  },
  {
    id: "ai-intelligent-systems",
    number: "04",
    title: "AI & Intelligent Systems",
    description:
      "AI-powered applications, automation pipelines and intelligent workflow integrations that make software smarter.",
    stack: ["AI Integration", "Python", "FastAPI", "OpenAI API", "Automation"],
    icon: "Brain",
  },
  {
    id: "saas-cloud-platforms",
    number: "05",
    title: "SaaS & Cloud Platforms",
    description:
      "Scalable, multi-tenant SaaS products and cloud applications built on modern, maintainable architectures.",
    stack: ["SaaS Architecture", "AWS", "Supabase", "PostgreSQL", "Docker"],
    icon: "Cloud",
  },
  {
    id: "digital-transformation",
    number: "06",
    title: "Digital Transformation",
    description:
      "Modernising legacy systems, integrating siloed tools and optimising performance to prepare your organisation for scale.",
    stack: [
      "System Integration",
      "Migration",
      "CI/CD",
      "DevOps",
      "API Design",
    ],
    icon: "Zap",
  },
];
