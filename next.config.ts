import type { NextConfig } from "next";

const replitDomains = (process.env.REPLIT_DOMAINS || '')
  .split(',')
  .map((d) => d.trim())
  .filter(Boolean)

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
      allowedOrigins: [
        ...replitDomains,
        '*.replit.dev',
        '*.worf.replit.dev',
        '*.janeway.replit.dev',
        '*.replit.app',
        '*.repl.co',
      ],
    },
  },
  allowedDevOrigins: ['*.replit.dev', '*.worf.replit.dev', '*.janeway.replit.dev'],
};

export default nextConfig;
