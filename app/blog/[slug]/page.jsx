import { getPostBySlug, getPostSlugs } from "../../lib/markdown";
import { notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import Script from "next/script";

// Generate static params for static site generation
export function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.md$/, ""),
  }));
}

// Generate perfect SEO metadata utilizing the OG Image API
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const postInfo = await getPostBySlug(resolvedParams.slug);
  
  if (!postInfo) {
    return { title: "Post Not Found" };
  }

  const { title, excerpt, date } = postInfo.meta;
  const description = excerpt || "Read this article by Awadh Kishor Singh.";
  const url = `https://awadh.tech/blog/${resolvedParams.slug}`;
  // Use dynamically generated OG image. Note: Absolute URLs are generally required for OG images.
  const ogImage = `https://awadh.tech/api/og?title=${encodeURIComponent(title || "Blog")}&description=${encodeURIComponent(description)}`;

  return {
    title: `${title} | Awadh Kishor Singh`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const postInfo = await getPostBySlug(resolvedParams.slug);

  if (!postInfo) {
    notFound();
  }

  const { meta, content } = postInfo;

  return (
    <>
    <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": meta.title,
            "description": meta.excerpt,
            "datePublished": meta.date,
            "author": {
              "@type": "Person",
              "name": "Awadh Kishor Singh",
              "url": "https://awadh.tech"
            }
          })
        }}
    />
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link
          href="/blog"
          aria-label="Back to Blog index"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={20} /> Back to Insights
        </Link>
        
        <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground font-heading leading-tight tracking-tight">
                {meta.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground border-b border-border pb-8">
                <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary"/>
                    <time dateTime={meta.date}>
                        {new Date(meta.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>
                <div className="w-1 h-1 bg-border rounded-full" />
                <span>By Awadh Kishor Singh</span>
            </div>
        </header>

        <div 
          className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>

      <Footer />
    </main>
    </>
  );
}
