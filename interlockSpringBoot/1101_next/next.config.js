/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        destination: 'http://localhost:9090/:path*',
        source: '/:path*',
      },
    ];
  },

}

module.exports = nextConfig
