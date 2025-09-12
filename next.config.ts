import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/blog',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true
};

export default nextConfig;
