"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/database.types';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  // Format date safely
  const formattedDate = project.created_at 
    ? new Date(project.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
      })
    : 'Recent';

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 w-full bg-gray-100">
            {project.image_url && (
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            )}
            
            {/* Featured Badge - positioned absolute on image */}
            {project.featured && (
              <span className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-medium rounded-full shadow-lg">
                Featured Project
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Title & Meta */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h1>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <time className="text-sm">
                    {formattedDate}
                  </time>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              )}
              
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Live Site
                </a>
              )}

              {!project.github_url && !project.live_url && (
                <p className="text-gray-500 text-sm">
                  Links coming soon
                </p>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}