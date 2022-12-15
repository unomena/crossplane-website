import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

const PageHead: React.FC<{
  displayTitle?: string;
  metaDescription?: string;
  metaImg?: string;
  cms_head_props?: CMSHeadProps;
}> = ({ displayTitle, metaDescription, metaImg, cms_head_props }) => {
  return (
    <>
      <Head>
        <title>{cms_head_props?.seo_title || cms_head_props?.title || displayTitle}</title>
        <meta name="description" content={cms_head_props?.search_description || metaDescription} />
        {cms_head_props?.seo_keywords && (
          <meta name="keywords" content={cms_head_props?.seo_keywords} />
        )}

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={cms_head_props?.og_twitter_title || displayTitle} />
        <meta name="twitter:title" content={cms_head_props?.og_twitter_title || displayTitle} />

        <meta
          property="og:description"
          content={cms_head_props?.og_twitter_description || metaDescription}
        />
        <meta
          name="twitter:description"
          content={cms_head_props?.og_twitter_description || metaDescription}
        />

        {cms_head_props?.og_twitter_url && (
          <meta property="og:url" content={cms_head_props?.og_twitter_url} />
        )}
        {cms_head_props?.og_twitter_url && (
          <meta name="twitter:url" content={cms_head_props?.og_twitter_url} />
        )}

        <meta
          property="og:image"
          content={
            cms_head_props?.og_twitter_image?.meta?.download_url || `http://crossplane.io${metaImg}`
          }
        />
        <meta
          name="twitter:image"
          content={
            cms_head_props?.og_twitter_image?.meta?.download_url || `http://crossplane.io${metaImg}`
          }
        />

        <meta name="twitter:card" content={cms_head_props?.twitter_card || 'summary'} />
        <meta name="twitter:site" content={cms_head_props?.twitter_site || '@crossplane_io'} />
        {cms_head_props?.twitter_creator && (
          <meta name="twitter:creator" content={cms_head_props?.twitter_creator} />
        )}

        <meta property="og:site_name" content="crossplane.io" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      {/* eslint-disable max-len */}
      <Script id="seo-init" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Crossplane",
            "email": "info@crossplane.io",
            "foundingDate": "December 2018",
            "description": "Crossplane is an open-source framework for building control planes and was the first to recognize Kubernetes for its control plane, and not as a container orchestrator, and has been leading the effort to democratize control plane technology in the cloud-native community.",
            "memberOf": {
              "@type": "Organization",
              "name": "CNCF",
              "alternateName": "Cloud Native Computing Foundation",
              "url": "//cncf.io"
            }
            "url": "//crossplane.io",
            "logo": "//raw.githubusercontent.com/crossplane/artwork/master/logo/logo-horizontal-whitetext-bluebg.png",
            "sameAs": ["//twitter.com/crossplane_io"]
          }
        `}
      </Script>
    </>
  );
};

export default PageHead;
