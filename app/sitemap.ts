import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogsData";

const BASE_URL = "https://investesy.in";

const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "awards", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "become-a-partner", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "blogs", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "bonds", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "career", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "choose-your-own-funds", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "contact-us", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "current-nfo", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "disclosure", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "educational-videos", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "faqs", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "fixed-deposits", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "fund-factsheets", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "gallery", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "health-insurance", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "home-loan", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "key-management", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "kyc-fatca-forms", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "latest-nav", priority: 0.6, changeFrequency: "daily" as const },
    { url: "life-insurance", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "mf-forms", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "mutual-funds", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "nps", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "open-free-demat-account", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "past-sip-performance", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "pms-aif", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "portfolio-x-ray", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "scheme-comparison", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "scheme-performance", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "systematic-investment-plan", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = staticRoutes.map((route) => ({
        url: `${BASE_URL}/${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    // Add homepage without trailing slash
    staticPages.unshift({
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1.0,
    });

    // Add dynamic blog post pages
    const blogPages = blogs.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}