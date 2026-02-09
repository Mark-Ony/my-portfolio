import { Hero } from "@/components/Sections/hero";
import { About } from "@/components/Sections/about/about.server";
import { Skills } from "@/components/Sections/skills/skills";
import { Testimonials } from "@/components/cards/testimonial-card";
export default function Home() {
  return (
    <main>
      <section id="hero">
       <Hero />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
       <Skills />
      </section>
      <Testimonials />
      
    </main>
  );
}