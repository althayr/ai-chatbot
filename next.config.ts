import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true
  },
  serverExternalPackages: ['google-auth-library'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs', 'child_process' etc. on the client
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        os: false,
        path: false,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

export default nextConfig;
