import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Sparkles, Zap, Award, Clock } from "lucide-react";
import { projects, getProjectBySlug } from "@/app/Data/projects"

// ─── Static params for Next.js build optimisation ────────────────────────────
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // If slug doesn't match any project, show 404
  if (!project) notFound();

  const categoryStyle: Record<typeof project.category, string> = {
    AI:           "bg-violet-50 text-violet-600 border-violet-200",
    "Full-Stack": "bg-sky-50 text-sky-600 border-sky-200",
    Backend:      "bg-emerald-50 text-emerald-600 border-emerald-200",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      {/* ── Top nav bar ── Modern glassmorphism ─────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sky-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:border-gray-900 hover:text-gray-900 hover:shadow-md transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/25"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">

        {/* ── Hero Section ── Centered and modern ───────────────────────────── */}
        <div className="text-center mb-16">
          {/* Category badge */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle[project.category]}`}>
              {project.category}
            </span>
          </div>

          {/* Title with gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>

          {/* Quick info badges - Modern addition */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-600">2024</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
              <Zap className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-600">Production Ready</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
              <Award className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-600">Open Source</span>
            </div>
          </div>
        </div>

        {/* ── Tags ── Modern pill design ────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 pb-8 border-b border-gray-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-medium text-gray-600 bg-gradient-to-br from-gray-50 to-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-sky-200 hover:text-sky-600 hover:shadow-sm transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── What I built ── Modern card design ────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span className="text-xs font-semibold text-sky-600 tracking-wide">KEY FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What I built
            </h2>
          </div>
          
          <div className="grid gap-4">
            {project.highlights.map((point, idx) => (
              <div 
                key={point} 
                className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed pt-1 flex-1">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Architecture ── Glassmorphism card ────────────────────────────── */}
        {project.architecture && (
          <section className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
                <Zap className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-xs font-semibold text-indigo-600 tracking-wide">TECHNICAL DEEP DIVE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Architecture
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.architecture}
              </p>
            </div>
          </section>
        )}

        {/* ── Challenges ── Modern highlighted section ──────────────────────── */}
        {project.challenges && (
          <section className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-4">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-semibold text-amber-600 tracking-wide">LEARNING & GROWTH</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key challenge
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" />
              <div className="pl-8 py-2">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.challenges}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── Modern dual action ──────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 pb-8 border-t border-gray-200">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sky-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all projects
          </Link>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:border-gray-900 hover:text-gray-900 hover:shadow-md transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/25"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </a>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}