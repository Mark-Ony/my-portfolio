"use client";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/20" />
      
      {/* Minimal Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Profile Image - Clean */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-48 h-48 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-20" />
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/assets/mark.jpg"
                alt="Mark Onyango"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Headline - Direct */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Hi, Am <span className="text-blue-600">Mark Onyango</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-700 font-medium"
            >
              Full Stack Developer & AI Specialist
            </motion.p>
          </div>

          {/* Tagline - Concise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-600">
              Building intelligent web applications and AI solutions that drive business transformation.
            </p>
          </motion.div>

          {/* CTA Buttons - Clean */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-blue-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}