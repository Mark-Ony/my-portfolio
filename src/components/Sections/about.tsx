"use client";
import { motion } from 'framer-motion';
import { Cpu, Zap, Code, CheckCircle, Sparkles, Globe, Server, Brain } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
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
            <span className="bg-gradient-to-r from-emerald-400 to-orange-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Developer & AI Specialist
          </p>
        </motion.div>

        {/* Main Container with Glass Effect */}
        <div className="relative">
          {/* Background Container with Glass Effect */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
          

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/about.jpg"
                    alt="Mark Onyango"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                {/* Glowing Border Effect */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg opacity-60" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-orange-400 rounded-tr-lg opacity-60" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg opacity-60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-orange-400 rounded-br-lg opacity-60" />
              </motion.div>

              {/* Right Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Building Intelligent Solutions for Modern Businesses
                  </h3>
                  
                  <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                      I specialize in creating{' '}
                      <span className="text-emerald-400 font-semibold">AI-powered applications</span>{' '}
                      and{' '}
                      <span className="text-orange-400 font-semibold">automation solutions</span>{' '}
                      that transform how businesses operate.
                    </p>
                    
                    <p>
                      With expertise in full-stack development and AI integration, I build scalable systems that combine 
                      cutting-edge technology with practical business needs.
                    </p>
                    
                    <p>
                      My focus is on delivering solutions that are not only technically advanced but also user-friendly 
                      and aligned with business objectives.
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    "Full Stack Web Development",
                    "AI Agents and Integration", 
                    "Business Process Automation",
                    "DevOps & CI/CD Implementation",
                    "Real-time System Design",
                    "Cloud Architecture & Scaling"
                  ].map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
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
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all group"
                  >
                    <span>Let us Work Together</span>
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-emerald-500/30 rounded-tl-lg" />
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-orange-500/30 rounded-tr-lg" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b border-l border-emerald-500/30 rounded-bl-lg" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-orange-500/30 rounded-br-lg" />
        </div>
      </div>
    </section>
  );
}