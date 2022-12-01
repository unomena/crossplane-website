/** @type {import('next').NextConfig} */

const API_HOST_DOMAIN = process.env.API_HOST?.replace('https://', '') || '';

const nextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://docs.crossplane.io/:path*',
      },
      {
        source: '/favicons/:path*',
        destination: 'https://docs.crossplane.io/:path*',
      },
      {
        source: '/images/:path*',
        destination: 'https://docs.crossplane.io/images/:path*',
      },
    ];
  },
  images: {
    domains: ['i.ytimg.com', 'localhost', API_HOST_DOMAIN],
  },
  env: {
    apiHost: process.env.API_HOST,
  },
};

module.exports = nextConfig;
