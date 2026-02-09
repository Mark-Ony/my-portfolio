import Image from "next/image";
import { CheckCircle, Sparkles } from "lucide-react";
import { FadeIn } from "./motion.client";
import { ABOUT_POINTS } from "./about.config";

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <header className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-orange-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Developer & AI Specialist</p>
          </header>
        </FadeIn>

        {/* Glass Container */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/about.jpg"
                  alt="Mark Onyango"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Building Intelligent Solutions for Modern Businesses
                </h3>

                <p className="text-gray-300 text-lg">
                  I build <span className="text-emerald-400 font-semibold">AI-powered applications</span>{" "}
                  and <span className="text-orange-400 font-semibold">automation solutions</span>{" "}
                  that scale with real business needs.
                </p>

                {/* Points */}
                <ul className="space-y-4">
                  {ABOUT_POINTS.map((point, i) => (
                    <FadeIn key={point} delay={i * 0.1}>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>

                {/* CTA */}
                <FadeIn delay={0.4}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition"
                  >
                    Let’s Work Together
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
