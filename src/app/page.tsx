import { Hero } from "@/components/Sections/hero";
import { About } from "@/components/Sections/about/about.server";
import { Skills } from "@/components/Sections/skills/skills";
import { Testimonials } from "@/components/cards/testimonial-card";
import { Contact } from "@/components/form/contactform";
import { Projects } from "@/components/Projects";
import { getAllProjects } from '@/lib/projects';

export default  async function Home() {
  const projects = await getAllProjects();

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
    <section id="projects">
        <Projects projects={projects} />
          </section>

      <Testimonials />

      <section id="contact">
        <Contact />
      </section>

    
      
    </main>
  );
}