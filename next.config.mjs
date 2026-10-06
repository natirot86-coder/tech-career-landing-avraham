/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Trusted, locally-committed SVGs only (brand/partner logos under /public) — never
    // used for remote or user-supplied SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
