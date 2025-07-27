import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { isServer }) => {
    // Handle native modules for lightningcss
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    
    return config;
  },
  // Add settings to help with hydration issues
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
