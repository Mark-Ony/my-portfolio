"use client";
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  "AI-powered automation systems integrated with real-time messaging platforms",
  "End-to-end payment infrastructure — Stripe, M-Pesa, and webhook-driven order flows",
  "LLM-based agents and RAG pipelines built for production business workflows",
  "Backend orchestration using Express.js, event-driven architecture, and n8n",
  "Real-time dashboards with live data sync via Supabase Realtime",
  "Full-stack delivery from schema design to deployed, user-facing product",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Full-Stack & AI Engineer building intelligent systems for modern businesses
          </p>
        </motion.div>

        {/* Main Container */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/about.jpg"
                    alt="Mark Onyango"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Glow on hover */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-sky-400 rounded-tl-lg opacity-60" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg opacity-60" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-sky-400 rounded-bl-lg opacity-60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg opacity-60" />
              </motion.div>

              {/* Right — Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    I build full-stack systems where AI, APIs, and real-time data work together seamlessly
                  </h3>

                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>
                      I&apos;m a Full-Stack and AI Engineer who designs and ships production-ready
                      platforms — from intelligent automation pipelines to commerce systems
                      that handle payments, messaging, and data at scale.
                    </p>
                    <p>
                      My focus is on systems that actually work in the real world: clean
                      backend architecture, reliable third-party integrations, and AI that
                      adds measurable value to the products it powers.
                    </p>
                    <p>
                      I work across the full stack — from database schema and API design
                      to frontend dashboards — and I care about shipping things that are
                      fast, maintainable, and built to last.
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  {highlights.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-sky-500" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-4"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all group"
                  >
                    <span>Let&apos;s Work Together</span>
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>

            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-sky-400/30 rounded-tl-lg" />
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-blue-400/30 rounded-tr-lg" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b border-l border-sky-400/30 rounded-bl-lg" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-blue-400/30 rounded-br-lg" />
        </div>

      </div>
    </section>
  );
}