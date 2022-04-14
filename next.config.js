/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/jobs',
        destination: 'https://boards.greenhouse.io/upbound',
        permanent: true,
      },
      {
        source: '/openings',
        destination: 'https://boards.greenhouse.io/upbound',
        permanent: true,
      },
      {
        source: '/company',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
