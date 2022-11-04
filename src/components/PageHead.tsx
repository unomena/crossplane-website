import React from 'react';

import Head from 'next/head';

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
    </>
  );
};

export default PageHead;
