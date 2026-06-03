"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MarketTicker from "@/components/MarketTicker";
import { blogs } from "@/data/blogsData";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories (sorted)
  const categories = ["All", ...Array.from(new Set(blogs.map(b => b.category))).sort()];

  // Filter posts
  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter(b => b.category === selectedCategory);

  // Helper to count blogs in each category
  const getCategoryCount = (category: string) => {
    if (category === "All") return blogs.length;
    return blogs.filter(b => b.category === category).length;
  };

  // Reset page when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Split into Featured (recent 3) and Remaining (paginated)
  const featuredBlogs = filteredBlogs.slice(0, 3);
  const remainingBlogs = filteredBlogs.slice(3);

  // Pagination parameters
  const postsPerPage = 3; // 3 posts per page matches one full row on desktop
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = remainingBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(remainingBlogs.length / postsPerPage);

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />
      </div>

      {/* Custom Brutalist Blog Header */}
      <div className="blog-listing-header">
        <div className="blog-listing-badge">Resources</div>
        <h1 className="blog-listing-title text-gradient">Latest Insights</h1>
        <p className="blog-listing-subtitle">
          Explore our curated articles, deep-dives, and financial advice to grow your wealth.
        </p>
      </div>

      <div className="blogs-container animate-fade-in">
        {/* Category Filters */}
        <div className="blogs-filter-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={`blogs-filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              <span className="blogs-filter-btn-text">{category}</span>
              <span className="blogs-filter-btn-count">{getCategoryCount(category)}</span>
            </button>
          ))}
        </div>

        {/* Featured Section */}
        {featuredBlogs.length > 0 && (
          <div style={{ marginBottom: "3.5rem" }}>
            <h2 className="blogs-section-subtitle">Featured Insights</h2>
            <div className="blog-grid blogs-listing-grid">
              {featuredBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                    <span className="blog-read-more">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Remaining Paginated Section */}
        {currentPosts.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="blogs-section-subtitle">More Articles</h2>
            <div className="blog-grid blogs-listing-grid">
              {currentPosts.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                    <span className="blog-read-more">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
            <p>No articles found in this category.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="blogs-pagination">
            <button 
              className="pagination-btn prev"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Prev
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  className={`pagination-num-btn ${currentPage === pageNum ? "active" : ""}`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button 
              className="pagination-btn next"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
