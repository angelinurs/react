/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        destination: 'http://makeup-api.herokuapp.com/api/:path*',
        source: '/api/:path*',
      },
      {
        destination: 'http://localhost:8080/mem/:path*',
        source: '/mem/:path*',
      },
    ];
  },

}

module.exports = nextConfig
