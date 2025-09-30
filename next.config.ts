import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to enable API routes and server-side functionality
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
