/** @type {import('next').NextConfig} */

const API_HOST_DOMAIN = process.env.API_HOST?.replace('https://', '') || '';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/',
        destination: '/docs/v1.9.html',
        permanent: false,
      },
      {
        source: '/docs',
        destination: '/docs/v1.9.html',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // master
      // {
      //   source: '/docs/master/media/:path*',
      //   destination:
      //     'https://crossplane.io/docs/master/media/:path*',
      // },
      // {
      //   source: '/docs/v1.9.html',
      //   destination:
      //     'https://crossplane.io/docs/v1.9.html',
      // },
      // {
      //   source: '/docs/v1.9/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.9/:path*',
      // },
      // v1.9
      {
        source: '/docs/:path*',
        destination: 'https://docs.crossplane.io/:path*',
      },

      // {
      //   source: '/docs/v1.9/media/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.9/media/:path*',
      // },
      // {
      //   source: '/docs/v1.9.html',
      //   destination:
      //     'https://crossplane.io/docs/v1.9.html',
      // },
      // {
      //   source: '/docs/v1.9/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.9/:path*',
      // },
      // // v1.10
      // {
      //   source: '/docs/v1.10/media/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.10/media/:path*',
      // },
      // {
      //   source: '/docs/v1.10.html',
      //   destination:
      //     'https://crossplane.io/docs/v1.10.html',
      // },
      // {
      //   source: '/docs/v1.10/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.10/:path*',
      // },
      // // v1.8
      // {
      //   source: '/docs/v1.8/media/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.8/media/:path*',
      // },
      // {
      //   source: '/docs/v1.8.html',
      //   destination:
      //     'https://crossplane.io/docs/v1.8.html',
      // },
      // {
      //   source: '/docs/v1.8/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.8/:path*',
      // },
      // // v1.7
      // {
      //   source: '/docs/v1.7/media/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.7/media/:path*',
      // },
      // {
      //   source: '/docs/v1.7.html',
      //   destination:
      //     'https://crossplane.io/docs/v1.7.html',
      // },
      // {
      //   source: '/docs/v1.7/:path*',
      //   destination:
      //     'https://crossplane.io/docs/v1.7/:path*',
      // },
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
