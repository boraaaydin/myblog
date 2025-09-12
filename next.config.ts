import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true
};

export default nextConfig;
