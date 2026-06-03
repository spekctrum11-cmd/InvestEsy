import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import MarketTicker from "@/components/MarketTicker";
import { blogs } from "@/data/blogsData";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) {
    return {
      title: "Blog Post Not Found | InvestEsy",
    };
  }
  return {
    title: `${post.title} | InvestEsy Blogs`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // 1. Remove the cover image from the body content to prevent duplicate image rendering
  let cleanContent = post.content;
  const figureRegex = new RegExp(`<figure[^>]*>\\s*<img[^>]+src=["']` + post.image + `["'][^>]*>\\s*</figure>`, 'i');
  const imgRegex = new RegExp(`<img[^>]+src=["']` + post.image + `["'][^>]*>`, 'i');

  if (figureRegex.test(cleanContent)) {
    cleanContent = cleanContent.replace(figureRegex, '');
  } else if (imgRegex.test(cleanContent)) {
    cleanContent = cleanContent.replace(imgRegex, '');
  }

  // 2. Clean up srcset and sizes on any other inline images to ensure local fallback images are used
  cleanContent = cleanContent
    .replace(/srcset="[^"]*"/gi, '')
    .replace(/sizes="[^"]*"/gi, '')
    .replace(/srcset=\\"[^"\\]*\\"/gi, '')
    .replace(/sizes=\\"[^"\\]*\\"/gi, '');

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />
      </div>

      <article className="premium-article-wrap animate-fade-in">
        {/* Back Link */}
        <Link href="/blogs" className="premium-article-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Insights
        </Link>

        {/* Header */}
        <header className="premium-article-header">
          <div className="premium-article-cat-badge">{post.category}</div>
          <h1 className="premium-article-title">{post.title}</h1>
          
          <div className="premium-article-author-card">
            <div className="premium-article-avatar">IE</div>
            <div className="premium-article-author-info">
              <span className="premium-article-author-name">InvestEsy Editorial</span>
              <div className="premium-article-publish-details">
                <time>{post.date}</time>
                <span className="bullet-separator">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Cover Banner */}
        <div className="premium-article-banner">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Body Content */}
        <div 
          className="premium-prose"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </article>
    </main>
  );
}
