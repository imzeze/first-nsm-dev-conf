/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://nsm-dev-conf.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
