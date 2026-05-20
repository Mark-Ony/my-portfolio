export interface Project {
  slug: string;             // used as the URL: /projects/[slug]
  title: string;
  tagline: string;          // short one-liner shown on the card
  description: string;      // longer paragraph for the detail page
  category: "AI" | "Full-Stack" | "Backend";
  tags: string[];
  github: string;
  live?: string;

  // Detail page fields
  highlights: string[];     // 4-6 bullet points of what you built
  architecture?: string;    // optional: how the system is structured
  challenges?: string;      // optional: what was hard and how you solved it
}

export const projects: Project[] = [
  {
    slug: "smart-ecommerce-sales-assistant",
    title: "Smart E-Commerce Sales Assistant",
    tagline: "AI sales agent for WhatsApp, Instagram & TikTok sellers",
    description:
      "A full-stack AI automation platform that unifies multi-platform social commerce into one intelligent dashboard. The system detects buying intent, collects customer details, triggers payments, and handles fulfilment — all automatically. Built for sellers who run their business on messaging apps.",
    category: "AI",
    tags: ["Next.js 14", "OpenAI", "n8n", "Supabase", "WhatsApp Cloud API", "M-Pesa Daraja", "Express.js", "Recharts"],
    github: "https://github.com/TrevorAntonioNanjiniah/smart-sales-pro/tree/mark",
    highlights: [
      "AI WhatsApp sales agent with real-time intent detection and automated M-Pesa STK Push",
      "Multi-role seller dashboard with Kanban lead pipeline, payment history, and analytics",
      "7 n8n automation workflows — AI caption generator, follow-up agent, auto-repost scheduler, and daily revenue reports",
      "Express.js webhook layer routing events from WhatsApp, M-Pesa, and Instagram to the correct workflows",
      "9-table Supabase PostgreSQL schema with Realtime subscriptions powering live dashboard updates",
      "WhatsApp deep link system pre-loading full product context into every customer chat",
    ],
    architecture:
      "WhatsApp, M-Pesa, and Instagram events hit a central Express.js webhook layer, which routes each event to the correct n8n workflow. Workflows handle AI processing, payment triggers, and data writes to Supabase. The Next.js dashboard subscribes to Supabase Realtime for live updates without polling.",
    challenges:
      "The hardest part was making the M-Pesa STK Push flow fully end-to-end — from intent detection to Daraja callback confirmation to automatic order creation — reliably in under 5 seconds. This required careful webhook sequencing and idempotency checks to avoid duplicate orders.",
  },
  {
    slug: "pata-house",
    title: "Pata House",
    tagline: "Production-grade property listing platform for agents and buyers",
    description:
      "A full-stack property management system built to streamline how agents post and manage listings and how buyers discover and inquire about properties. Features secure JWT authentication, role-based access control, a RESTful API, and CI-ready test coverage. Built during industrial attachment at Lish AI Labs, Nakuru.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "PostgreSQL", "TypeORM", "JWT", "Tailwind CSS", "Express.js", "Postman"],
    github: "https://github.com/developers-mania/Pata-house-project",
    highlights: [
      "Secure JWT authentication with cookie-based sessions for agents and buyers",
      "Role-based access control — agents manage listings, buyers browse and inquire",
      "Full RESTful API: auth, listings CRUD, and protected routes with ownership checks",
      "TypeORM entities and migrations for a clean, versioned PostgreSQL schema",
      "CI-ready Postman test suite covering auth flows, RBAC enforcement, and fault tolerance",
      "Responsive React frontend with dynamic routing and real-time state management",
    ],
    architecture:
      "React frontend communicates with an Express.js REST API. All protected routes require a valid JWT passed via secure cookie. TypeORM handles all database operations against PostgreSQL, with migrations managing schema changes. Role middleware enforces agent vs buyer permissions at the route level.",
    challenges:
      "Designing the role-based access system so that agents could only modify their own listings — not other agents' — required careful ownership checks at both the middleware and controller levels, not just at the route level.",
  },
  // ── Add more projects below ───────────────────────────────────────────────
];

// Helper to find a project by its slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}