import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverSourceMaps: false,
  },
};

export default nextConfig;
