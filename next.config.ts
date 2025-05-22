
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 🔑 Disable Image Optimization API (no server needed)
  },
  // Optional: Add trailing slash for better compatibility
  trailingSlash: true,
};

export default nextConfig;