import React from 'react';

import Head from 'next/head';
import Script from 'next/script';
// import Script from 'next/script';

const defaultTitle = 'Upbound - The Universal Cloud Platform';
const defaultDescription =
  'The Upbound universal cloud platform empowers you to manage infrastructure, eliminate configuration drift, and ' +
  'empower developers with self-service infrastructure.';

const PageHead: React.FC<{
  displayTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
}> = ({
  displayTitle = defaultTitle,
  metaTitle = displayTitle,
  metaDescription = defaultDescription,
}) => {
  return (
    <>
      <Head>
        <title>{displayTitle}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={metaTitle} />
        <meta property="twitter:title" content={metaTitle} />

        <meta name="description" property="og:description" content={metaDescription} />
        <meta property="twitter:description" content={metaDescription} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@upbound_io" />
        <meta name="twitter:image:src" content="https://upbound.io/twitter-card.png?1" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* <meta
          name="google-site-verification"
          content="91G6D43ldYFs2uuHH6DtkaHxczYfEAN06ZUe2T4R2cM"
        />
        <meta name="msvalidate.01" content="21094C7C2D174370733E7BAA109FD424" /> */}
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
