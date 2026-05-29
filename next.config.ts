import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    preloadEntriesOnStart: false,
  },
};

export default nextConfig;
