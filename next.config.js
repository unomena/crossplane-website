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
      {
        source: '/products/cloud',
        destination: '/products/universal-cloud-platform',
        permanent: true,
      },
      {
        source: '/products/uxp',
        destination: '/products/universal-cloud-platform',
        permanent: true,
      },
      {
        source: '/products/registry',
        destination: 'https://marketplace.upbound.io',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['i.ytimg.com'],
  },
};

module.exports = nextConfig;
