import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.crmtravelpocket.cloud',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
