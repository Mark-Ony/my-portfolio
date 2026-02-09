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
      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 -translate-y-10 translate-x-10 rotate-45 bg-gradient-to-br from-emerald-500/10 to-orange-500/10 blur-xl" />
        
        {/* Header */}
        <div className="relative flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
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
              <div className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl group-hover:border-gray-700 transition-colors">
                <span className="text-gray-300 text-sm font-medium">{skill}</span>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'AI Development',
    icon: Brain,
    skills: ['LangChain', 'OpenAI API', 'LLM Integration', 'RAG Systems', 'Vector DBs', 'Prompt Engineering', ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Terraform',  'Jenkins', 'Monitoring'],
    color: 'from-green-500 to-emerald-500',
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
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-orange-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
          <h3 className="text-2xl font-bold text-white text-center mb-10">
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
                <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{skill.label}</h4>
                      <p className="text-gray-500 text-sm">{skill.description}</p>
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
          <p className="text-gray-400 mb-6">
            Ready to bring your vision to life with cutting-edge technology?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}