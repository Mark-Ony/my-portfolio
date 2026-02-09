"use client";
import { motion } from 'framer-motion';
import { Code2, Bot, Server, Database, Globe, Cpu, Zap, GitBranch, Sparkles, Brain, Cloud, Terminal } from 'lucide-react';

// Card Component
interface SkillCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  color: string;
  index: number;
}

const SkillCard = ({ title, icon: Icon, skills, color, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-400/50 hover:shadow-xl transition-all duration-500 overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 -translate-y-10 translate-x-10 rotate-45 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-xl" />
        
        {/* Header */}
        <div className="relative flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 + index * 0.1 }}
              className="relative"
            >
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl group-hover:border-blue-200 transition-colors">
                <span className="text-gray-700 text-sm font-medium">{skill}</span>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const skillCategories = [
  {
    title: 'Web Development',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Supabase'],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'AI Development',
    icon: Brain,
    skills: ['LangChain', 'OpenAI API', 'LLM Integration', 'RAG Systems', 'Vector DBs', 'Prompt Engineering'],
    color: 'from-blue-700 to-cyan-600',
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Terraform', 'Jenkins', 'Monitoring'],
    color: 'from-blue-500 to-cyan-400',
  },
];

const additionalSkills = [
  { icon: Zap, label: 'API Integration', description: 'Seamless 3rd party integrations' },
  { icon: Database, label: 'Database Design', description: 'Scalable data architecture' },
  { icon: GitBranch, label: 'Version Control', description: 'Git workflows & CI/CD' },
  { icon: Terminal, label: 'System Design', description: 'High-performance architecture' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent solutions
          </p>
        </motion.div>

        {/* Main Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} {...category} index={index} />
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{skill.label}</h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to bring your vision to life with cutting-edge technology?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}