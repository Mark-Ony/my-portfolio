import Image from "next/image";
import { CheckCircle, Sparkles } from "lucide-react";
import { FadeIn } from "./motion.client";
import { ABOUT_POINTS } from "./about.config";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">
                About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
              </span>
            </h2>
            <p className="text-gray-600">Developer & AI Specialist</p>
          </header>
        </FadeIn>

        {/* Glass Container */}
        <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <FadeIn direction="left">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/assets/aboutimage.jpg"
                  alt="Mark Onyango"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Blue overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10" />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Building Intelligent Solutions for Modern Businesses
                </h3>

                <p className="text-gray-600 text-lg">
                  I build <span className="text-blue-600 font-semibold">AI-powered applications</span>{" "}
                  and <span className="text-cyan-600 font-semibold">automation solutions</span>{" "}
                  that scale with real business needs.
                </p>

                {/* Points */}
                <ul className="space-y-4">
                  {ABOUT_POINTS.map((point, i) => (
                    <FadeIn key={point} delay={i * 0.1}>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>

                {/* CTA */}
                <FadeIn delay={0.4}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
                  >
                    Letus Work Together
                    <Sparkles className="w-4 h-4" />
                  </a>
                </FadeIn>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}