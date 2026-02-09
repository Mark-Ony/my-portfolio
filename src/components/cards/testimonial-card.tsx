"use client";
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    content: 'The AI automation solution reduced our operational costs by 60% and improved customer satisfaction dramatically. Exceptional work!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataFlow Solutions',
    content: 'Outstanding DevOps expertise. The infrastructure is rock-solid and scales effortlessly. Best investment we made this year.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager, GlobalCorp',
    content: 'The AI agents handle hundreds of tasks daily with incredible accuracy. It\'s like having a team of tireless assistants.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-orange-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/30 to-black border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                <Quote className="w-10 h-10 text-emerald-400/30 mb-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                 
                  &quot;{testimonial.content}&quot;
                  
                </p>

                <div className="border-t border-gray-800 pt-6">
                  <div className="text-white font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}