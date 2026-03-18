import dynamic from 'next/dynamic';
import Script from 'next/script';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import HomeTracker from "./components/home-tracker";

const Certifications = dynamic(() => import("./components/certifications"));
const Experience = dynamic(() => import("./components/experience"));
const Projects = dynamic(() => import("./components/projects"));
const FreelanceReviews = dynamic(() => import("./components/freelance-reviews"));
const Contact = dynamic(() => import("./components/contact"));
const Footer = dynamic(() => import("./components/footer"));

export default async function Home() {
  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Awadh Kishor Singh",
            "jobTitle": "Full Stack Developer",
            "url": "https://awadh.tech",
            "alternateName": ["imawadh", "im_awadh", "im_awadh_"],
            "sameAs": [
              "https://github.com/imawadh",
              "https://www.linkedin.com/in/imawadh"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          })
        }}
      />
      <main className="flex min-h-screen flex-col bg-background">
      <HomeTracker />
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
    </>
  );
}
