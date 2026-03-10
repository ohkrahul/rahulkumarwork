/* ============================================
   HOME PAGE — Client Conversion Layout
   
   Section order optimized for freelance conversion:
   1. Hero (value prop + availability + stats)
   2. TechMarquee (credibility strip)
   3. Projects (proof of work)
   4. Services (how I help + deliverables)
   5. Process (how easy it is to work with me)
   6. Testimonials (social proof / results)
   7. FAQ (remove objections)
   8. About (personal connection)
   9. Contact (strong CTA)
   ============================================ */

import Hero from "@/sections/Hero";
import TechMarquee from "@/sections/TechMarquee";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import Achievements from "@/sections/Achievements";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Hero: Value prop + availability badge + dual CTA + stats */}
      <Hero />

      {/* Tech Marquee: Infinite scrolling tech stack */}
      <TechMarquee />

      {/* Projects: Featured work — show, don't tell */}
      <Projects />

      {/* Services: How I help + deliverables */}
      <Services />

      {/* Process: How easy it is to work with me */}
      <Process />

      {/* Achievements: Hackathon wins & recognition */}
      <Achievements />

      {/* Testimonials: Client results & social proof */}
      <Testimonials />

      {/* FAQ: Remove hiring objections */}
      <FAQ />

      {/* About: Personal connection + toolkit */}
      <About />

      {/* Contact: Strong CTA with form + trust signals */}
      <Contact />
    </>
  );
}
