/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lsky.95271111.xyz',
      },
    ],
  },
};

module.exports = nextConfig; 