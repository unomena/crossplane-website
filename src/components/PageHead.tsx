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
            cms_head_props?.og_twitter_image?.meta?.download_url ||
            `https://www.upbound.io${metaImg}`
          }
        />
        <meta
          name="twitter:image"
          content={
            cms_head_props?.og_twitter_image?.meta?.download_url ||
            `https://www.upbound.io${metaImg}`
          }
        />

        <meta name="twitter:card" content={cms_head_props?.twitter_card || 'summary'} />
        <meta name="twitter:site" content={cms_head_props?.twitter_site || '@upbound_io'} />
        {cms_head_props?.twitter_creator && (
          <meta name="twitter:creator" content={cms_head_props?.twitter_creator} />
        )}

        <meta property="og:site_name" content="Upbound.io" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta
          name="google-site-verification"
          content="91G6D43ldYFs2uuHH6DtkaHxczYfEAN06ZUe2T4R2cM"
        />
        <meta name="msvalidate.01" content="21094C7C2D174370733E7BAA109FD424" />
      </Head>
      {/* eslint-disable max-len */}
      <Script id="seo-init" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Upbound",
            "legalName": "Upbound, Inc.",
            "founder": "Bassam Tabbara",
            "foundingDate": "October 2017",
            "foundingLocation": "Seattle, Washington",
            "location": {
              "@type": "Place",
              "name": "Seattle, Washington"
            },
            "description": "Upbound Cloud delivers a single point of control to manage the lifecycle of your Crossplane clusters across teams and clouds.",
            "member": {
              "@type": "OrganizationRole",
              "roleName": "CEO",
              "member": {
                "@type": "Person",
                "name": "Bassam Tabbara"
              }
            },
            "url": "//upbound.io",
            "logo": "//upbound.io/images/large-logo.png",
            "sameAs": ["//www.linkedin.com/company/upbound-io/", "//twitter.com/upbound_io"]
          }
        `}
      </Script>
      <Script id="clarity-init" type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "96cq5uw00g");
        `}
      </Script>
      {/* eslint-enable */}
    </>
  );
};

export default PageHead;
