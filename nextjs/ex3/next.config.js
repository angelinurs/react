/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        destination: 'http://makeup-api.herokuapp.com/:path*',
        source: '/:path*',
      },
    ];
  }
}

module.exports = nextConfig
