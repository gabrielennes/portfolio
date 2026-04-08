export const site = {
  name: "Gabriel",
  title: "Software Engineer",
  tagline:
    "Backend systems, APIs, and integrations — from spreadsheets to production pipelines.",
  bio: `I'm a Software Engineer with experience building backend systems, APIs, and integrations.

Currently focused on international opportunities and scalable system design.`,
  email: "your.email@example.com",
  location: "Open to remote & international roles",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
  },
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "Flask",
    "PostgreSQL",
    "SQL Server",
    "REST APIs",
    "Webhooks",
    "Meta Cloud API",
  ],
  howISolveProblems: {
    title: "How I solve problems",
    intro:
      "I care about shipping solutions that hold up in the real world — not just code that compiles.",
    points: [
      "I focus on real-world solutions, not just code.",
      "I design APIs with scalability and maintainability in mind.",
      "I prioritize simplicity to make debugging and iteration easier.",
      "I'm comfortable with real-world constraints: external APIs, approvals, and integrations.",
    ],
  },
  projects: [
    {
      featured: true,
      title: "WhatsApp Automation System",
      subtitle: "Automated report delivery using WhatsApp Cloud API",
      problem:
        "Companies were manually sending reports to clients — slow, repetitive, and error-prone.",
      solution:
        "A Python-based pipeline that reads Excel files, resolves the correct PDFs, and delivers them automatically via WhatsApp using Meta's Cloud API.",
      stack: ["Python", "REST APIs", "Webhooks", "Excel processing", "Meta Cloud API"],
      challenges: [
        "Meta API approval and compliance",
        "WhatsApp template validation and messaging rules",
        "Reliable delivery status handling via webhooks",
      ],
      results: [
        "Fully automated end-to-end delivery",
        "Less manual work and fewer mistakes",
        "Real-time status tracking for sends",
      ],
    },
    {
      title: "ERP System",
      subtitle: "Business management platform",
      problem:
        "The business needed a single place to manage operations, finances, and users instead of scattered tools.",
      solution:
        "A full ERP-style web application with authentication, role-based access, dashboards, and integrations backed by a relational database.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs"],
      challenges: [],
      results: [],
      features: [
        "User authentication and authorization",
        "Financial and operational dashboards",
        "API integrations with external services",
        "Modular architecture for evolving requirements",
      ],
    },
    {
      title: "WMS Integration API",
      subtitle: "ERP ↔ warehouse management integration",
      problem:
        "Warehouse and ERP data lived in different systems; operations needed consistent, automated sync.",
      solution:
        "Flask-based APIs to connect the ERP with warehouse management systems, including SQL Server-backed workflows and business logic in the database layer.",
      stack: ["Python (Flask)", "SQL Server", "Stored procedures"],
      challenges: [],
      results: [],
      highlights: [
        "SQL Server integration for transactional data",
        "Data processing and validation in the API layer",
        "Multiple endpoints tailored to warehouse and ERP operations",
      ],
    },
  ],
} as const;

export type SiteProject = (typeof site.projects)[number];
