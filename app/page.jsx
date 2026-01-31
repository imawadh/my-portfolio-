import dynamic from 'next/dynamic';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";

const Certifications = dynamic(() => import("./components/certifications"));
const Experience = dynamic(() => import("./components/experience"));
const Projects = dynamic(() => import("./components/projects"));
const FreelanceReviews = dynamic(() => import("./components/freelance-reviews"));
const Contact = dynamic(() => import("./components/contact"));
const Footer = dynamic(() => import("./components/footer"));

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <FreelanceReviews />
      <Contact />
      <Footer />
    </main>
  );
}
