"use client";
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-40 h-40 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-gray-800 overflow-hidden bg-gray-900 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Hi, I am <span className="bg-gradient-to-r from-emerald-400 to-orange-500 bg-clip-text text-transparent">Mark Onyango</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-300 font-medium"
            >
              Full Stack Developer & AI Specialist
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-emerald-400 font-medium">Available for projects</span>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              I build intelligent web applications and automation solutions that 
              transform businesses through cutting-edge technology and AI integration.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transition-shadow"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-700 text-gray-300 font-semibold rounded-full hover:bg-gray-900/50 hover:border-emerald-500/30 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-12"
          >
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Next.js', 'Node.js', 'Python', 'AI/ML', 'DevOps'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-gray-300 text-sm hover:border-emerald-500/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}