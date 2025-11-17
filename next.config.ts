import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Helps worktrees use their own dependency roots
    root: __dirname,
  },
};

export default nextConfig;
