/** @type {import('next').NextConfig} */

const API_HOST_DOMAIN = process.env.API_HOST?.replace('https://', '') || '';

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
      {
        source: '/brand',
        destination:
          'https://www.lingoapp.com/88697/k/Upbound-Brand-RQg9x0?kit_token=Pz_534vvKdLpdCj-KO0G6EIP5C-Ki0mRkCJtGZnK1x4',
        permanent: true,
      },
      {
        source: '/pricing',
        destination:
          '/products/universal-cloud-platform',
        permanent: true,
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
