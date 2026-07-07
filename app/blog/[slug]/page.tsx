import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import MarketTicker from "@/components/MarketTicker";
import { blogs } from "@/data/blogsData";
import { Metadata } from "next";
import ShareButtons from "../../../components/ShareButtons";

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

  // 3. Remove all anchor tags from the text, leaving only the inner content
  cleanContent = cleanContent.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, '$1');

  // 4. Remove "READ ALSO" or "ALSO READ" sections
  cleanContent = cleanContent.replace(/<p[^>]*>(?:(?!<\/p>)[\s\S])*?(?:READ\s*ALSO|ALSO\s*READ)(?:(?!<\/p>)[\s\S])*?<\/p>/gi, '');

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />
      </div>

      <article className="premium-article-wrap animate-fade-in">
        {/* Back Link */}
        <nav className="article-breadcrumb">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>

          <span className="breadcrumb-separator">&gt;</span>

          <Link href="/blogs" className="breadcrumb-link">
            Blog
          </Link>

          <span className="breadcrumb-separator">&gt;</span>

          <span className="breadcrumb-current">
            {post.title}
          </span>
        </nav>

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
        <div className="premium-article-banner" style={{ position: "relative" }}>
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" priority />
        </div>

        {/* Body Content */}
        <div
          className="premium-prose"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <ShareButtons
            url={`${process.env.NEXT_APP_URL}/blog/${post.slug}`}
            title={post.title}
          />
        </div>
      </article>
    </main>
  );
}
