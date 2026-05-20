"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/app/Data/projects"

// ─── Category badge colours ───────────────────────────────────────────────────
const categoryStyle: Record<Project["category"], string> = {
  AI:           "bg-violet-50 text-violet-600 border-violet-200",
  "Full-Stack": "bg-sky-50 text-sky-600 border-sky-200",
  Backend:      "bg-emerald-50 text-emerald-600 border-emerald-200",
};

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => router.push(`/projects/${project.slug}`)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            router.push(`/projects/${project.slug}`);
          }
        }}
        className="group bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-5 hover:border-sky-300/70 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-400 h-full cursor-pointer"
      >
        {/* Top row — category + external icon links */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle[project.category]}`}>
            {project.category}
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-sky-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title + tagline */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 group-hover:bg-sky-100 transition-colors" />

        {/* Tags — show first 5 only */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg group-hover:border-sky-200 group-hover:bg-sky-50/50 group-hover:text-sky-700 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-xs font-medium text-gray-400 px-2.5 py-1">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>

        {/* View details hint */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View details <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export function Projects() {
  // Calculate stats
  const totalProjects = projects.length;
  const liveProjects = projects.filter(p => p.live).length;
  const totalTags = [...new Set(projects.flatMap(p => p.tags))].length;

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Ambient glows - repositioned for balance */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              MY WORK
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              shipped
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end systems — from database schema to deployed product.
          </p>
        
        </motion.div>


        

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA - Improved */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm">More on GitHub — I ship regularly.</p>
          </div>
          
          <motion.a
            href="https://github.com/Mark-Ony"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/25"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              <Github className="w-4 h-4" />
              View GitHub
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}