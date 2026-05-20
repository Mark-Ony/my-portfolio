"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Server,
  Database,
  CreditCard,
  GitBranch,
  Sparkles,
  MessageSquare,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SkillCardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  gradient: string;
  index: number;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
const SkillCard = ({
  title,
  subtitle,
  icon: Icon,
  skills,
  gradient,
  index,
}: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-white border border-gray-200 rounded-2xl p-7 hover:border-sky-300/70 hover:shadow-lg hover:shadow-sky-100/60 transition-all duration-400 flex flex-col gap-6"
  >
    {/* Icon + title */}
    <div className="flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm flex-shrink-0`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-900 leading-tight">{title}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-gray-100 group-hover:bg-sky-100 transition-colors" />

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg group-hover:border-sky-200 group-hover:bg-sky-50/50 group-hover:text-sky-700 transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories: Omit<SkillCardProps, "index">[] = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces users trust",
    icon: Code2,
    gradient: "from-sky-500 to-blue-600",
    skills: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Responsive Design",
      "App Router",
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Reliable server-side systems",
    icon: Server,
    gradient: "from-blue-600 to-indigo-600",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Webhook Architecture",
      "TypeORM",
      "JWT Auth",
      "Role-Based Access",
      "Middleware Design",
    ],
  },
  {
    title: "AI & Automation",
    subtitle: "LLMs in production workflows",
    icon: Brain,
    gradient: "from-violet-500 to-purple-700",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG Systems",
      "AI Agents",
      "n8n Automation",
      "Intent Detection",
      "Prompt Engineering",
      "Workflow Orchestration",
    ],
  },
  {
    title: "Payments & Commerce",
    subtitle: "Global and emerging market rails",
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      "Stripe",
      "M-Pesa Daraja",
      "STK Push",
      "Webhook Confirmations",
      "Subscription Billing",
      "Payment Flows",
      "Order Management",
    ],
  },
  {
    title: "Database & Data Layer",
    subtitle: "Structured for scale",
    icon: Database,
    gradient: "from-orange-500 to-amber-500",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Realtime Subscriptions",
      "Schema Design",
      "pgvector",
      "Redis",
      "MongoDB",
      "TypeORM Migrations",
    ],
  },
  {
    title: "DevOps & Tooling",
    subtitle: "Shipping with discipline",
    icon: GitBranch,
    gradient: "from-rose-500 to-pink-600",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Postman Testing",
      "Vercel",
      "Railway",
      "Environment Config",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Soft ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-3">
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I build{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              with
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Full-stack and AI engineering across the modern web stack —
            from intelligent automation to production payment systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-100"
        >
          <p className="text-gray-400 text-sm">
            Every skill above is backed by something I&apos;ve shipped.
          </p>
          <div className="flex gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-400/25 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              See Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:border-sky-300 hover:text-sky-600 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}