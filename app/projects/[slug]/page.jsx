import projects from "../../data/projects.json";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground loading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Featured Image Placeholder */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted mb-12 border border-border">
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-lg font-medium">Project Screenshot / Demo Video</span>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Key Features</h2>
                    <ul className="space-y-3">
                        {project.features && project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="glass-card p-6 rounded-xl border border-border">
                    <h3 className="font-bold text-lg mb-4 text-foreground">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-6 rounded-xl border border-border space-y-4">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Links</h3>
                     <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                     >
                        <Github size={20} /> Source Code
                    </Link>
                    <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                     >
                        <ExternalLink size={20} /> Live Demo
                    </Link>
                </div>
            </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
