//this is the main page component for the portfolio website, it imports and renders all the different sections of the site, including the hero, about, skills, projects, testimonials, and contact sections. It also includes dynamic routing for individual project details pages.

import { Hero } from "@/components/Sections/Hero/Page";
import { Skills } from "@/components/Sections/skills/Page";
import { About } from "@/components/Sections/About/Page";
import { Contact } from "@/components/Sections/Contact/Contact-Formspree"
import { Projects } from "@/app/projects/page";


export default  async function Home() {
  

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
      <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

    
      
    </main>
  );
}