"use client";
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Top 5 Mutual Funds to Watch in 2024",
    category: "Mutual Funds",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    excerpt: "Discover the most promising mutual funds that are poised for significant growth in the upcoming financial year."
  },
  {
    id: 2,
    title: "Why Digital Gold is the Smart Investor's Choice",
    category: "Digital Gold",
    date: "Nov 05, 2023",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=800&auto=format&fit=crop",
    excerpt: "Learn how digital gold offers the security of physical gold without the hassle of storage and making charges."
  },
  {
    id: 3,
    title: "Navigating Corporate FDs: A Complete Guide",
    category: "Fixed Deposits",
    date: "Nov 28, 2023",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop",
    excerpt: "Explore how corporate fixed deposits can provide higher returns compared to traditional bank FDs with calculated risks."
  }
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
          <div style={{ position: 'relative', display: 'inline-block', padding: '0 2rem' }}>
            
            {/* Doodles */}
            <div className="doodle-icon float-1" style={{ position: 'absolute', top: '-20px', left: '-15px', color: '#f59e0b' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-15deg)' }}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            
            <div className="doodle-icon float-2" style={{ position: 'absolute', top: '-10px', right: '-25px', color: '#10b981' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(10deg)' }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>

            <div className="doodle-icon float-3" style={{ position: 'absolute', bottom: '-15px', right: '15px', color: '#3b82f6', zIndex: -1 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(25deg)' }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>

            <h2 className="why-title text-gradient" style={{ marginBottom: "0.5rem", position: 'relative', zIndex: 2 }}>
              Latest Insights
            </h2>
            <div className="animated-underline" style={{ margin: "0 auto" }}></div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="blog-grid blog-desktop-only">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} loading="lazy" />
                <span className="blog-category-tag">{blog.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {blog.date}
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href="#" className="blog-read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: Featured Hero + Compact Strips */}
        <div className="blog-mobile-only">
          {/* Featured Card */}
          <article className="blog-card blog-featured">
            <div className="blog-image-wrapper">
              <img src={blogs[0].image} alt={blogs[0].title} loading="lazy" />
              <span className="blog-category-tag">{blogs[0].category}</span>
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {blogs[0].date}
              </div>
              <h3 className="blog-title">{blogs[0].title}</h3>
              <a href="#" className="blog-read-more">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* Compact Strip Cards */}
          {blogs.slice(1).map((blog) => (
            <article key={blog.id} className="blog-card blog-strip">
              <div className="blog-strip-image">
                <img src={blog.image} alt={blog.title} loading="lazy" />
                <span className="blog-category-tag blog-strip-tag">{blog.category}</span>
              </div>
              <div className="blog-strip-content">
                <div className="blog-date">{blog.date}</div>
                <h3 className="blog-title">{blog.title}</h3>
                <a href="#" className="blog-read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
