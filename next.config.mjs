/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tech-career.org',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
};

export default nextConfig;
