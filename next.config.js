/** @type {import('next').NextConfig} */

const API_HOST_DOMAIN = process.env.API_HOST?.replace('https://', '') || '';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination:
      //     '/',
      //   permanent: true,
      // },
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
