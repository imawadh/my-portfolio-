import { getAllPosts } from "../lib/markdown";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog | Awadh Kishor Singh",
  description: "Read the latest articles, tutorials, and insights on web development, React, and Next.js by Awadh Kishor Singh.",
  openGraph: {
    title: "Blog | Awadh Kishor Singh",
    description: "Read the latest articles, tutorials, and insights on web development.",
    url: "https://awadh.tech/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[80vh]">
        <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-heading">
                Insights & <span className="text-primary">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thoughts on software engineering, web development, and building products. By Awadh Kishor Singh (imawadh).
            </p>
        </div>

        {posts.length === 0 ? (
           <div className="text-center text-muted-foreground p-12 glass-card rounded-2xl border border-border">
               <p className="text-lg">No posts published yet. Check back soon!</p>
           </div>
        ) : (
            <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="glass-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group h-full flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
                    <div className="flex items-center gap-2 text-sm text-primary mb-4 font-medium">
                        <Calendar size={16} />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </article>
                </Link>
            ))}
            </div>
        )}
      </section>
      
      <Footer />
    </main>
  );
}
