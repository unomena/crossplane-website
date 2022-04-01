// to be fixed - look at https://www.npmjs.com/package/next-absolute-url

function hostname() {
  return 'upbound.io';
  // if (typeof location !== 'object' || !location.hostname) {
  //   return 'upbound.io';
  // }

  // return location.hostname.replace(/^www./, '');
}

function protocol() {
  return 'https:';
  // if (typeof location !== 'object' || !location.protocol) {
  //   return 'https:';
  // }

  // return location.protocol;
}

function port() {
  return '';
  // if (typeof location !== 'object' || !location.port) {
  //   return '';
  // }

  // return `:${location.port}`;
}

const domain = () => 'cloud';

const cloudUrl = protocol() + '//' + domain() + '.' + hostname() + port();

// Cloud Routes

export const cloudRegistryUrl = cloudUrl + '/browse';
export const cloudLoginUrl = cloudUrl + '/login';
export const cloudRegisterUrl = cloudUrl + '/register';
export const cloudDocsUrl = cloudUrl + '/docs';
export const cloudCliDocsUrl = cloudDocsUrl + '/cli';
export const cloudUxpDocsUrl = cloudDocsUrl + '/uxp';

// Routes

export const homeRoute = '/';
export const aboutRoute = '/about';
export const faqRoute = '/faq';
export const partnersRoute = '/partners';
export const pricingRoute = '/pricing';
export const privacyRoute = '/privacy';
export const tncRoute = '/terms';
export const sitemapRoute = '/sitemap-0.xml';

// "/products" Routes

export const productsUbcRoute = '/products/cloud';
export const productsRegistryRoute = '/products/registry';
export const productsUxpRoute = '/products/uxp';

// "/why-upbound" Routes

export const whyUpboundUniversalCloudPlatformRoute = '/why-upbound/universal-cloud-platform';
export const whyUpboundBeyondIacRoute = '/why-upbound/beyond-iac';
export const whyUpboundEmpowerRoute = '/why-upbound/empower-platform-teams';
export const whyUpboundSelfServiceRoute = '/why-upbound/self-service';

// External URLs

export const upboundBlogUrl = 'https://blog.upbound.io/';
export const upboundStatusUrl = 'https://status.upbound.io/';
export const upboundGreenhouseUrl = 'https://boards.greenhouse.io/upbound';
export const upboundZendeskUrl = 'https://upbound.zendesk.com/';
export const cncfUrl = 'https://www.cncf.io/';
export const enterpriseBlogUrl = 'https://blog.upbound.io/upbound-enterprise-and-unified-pricing/';

// Crossplane URLs

export const crossplaneUrl = 'https://crossplane.io';
export const crossplaneDocsUrl = 'https://crossplane.io/docs';
export const crossplaneSlackUrl = 'http://slack.crossplane.io/';
export const crossplaneSlackUpboundChannelUrl =
  'https://crossplane.slack.com/app_redirect?channel=C01TRKD4623';
export const crossplaneRoadmapUrl =
  'https://github.com/crossplane/crossplane/blob/master/ROADMAP.md';
export const crossplaneContributingUrl =
  'https://github.com/crossplane/crossplane/blob/master/CONTRIBUTING.md';

// Social media URLs

export const facebookUrl = 'https://www.facebook.com/upboundio/';
export const githubUrl = 'https://www.github.com/upbound/';
export const linkedinUrl = 'https://www.linkedin.com/company/upbound-io/';
export const twitterUrl = 'https://twitter.com/upbound_io';
export const youtubeUrl = 'https://www.youtube.com/channel/UCm_v2HL0pdqtShHD-ZDDTaA';

// Hubspot URLs

export const partnerRegistrationUrl = 'https://upbound.hubspotpagebuilder.com/partner-registration';
export const contactSalesUrl = 'https://upbound.hubspotpagebuilder.com/contact';

// Customer URLs

export const customerSlot1Url = 'https://www.dfds.com/';
export const customerSlot2Url = 'https://www.grupoboticario.com.br/';
export const customerSlot3Url = 'https://www.bahn.com/';
export const customerSlot4Url = 'https://plotly.com/';
export const customerSlot5Url = 'https://www.ptc.com/';

// Emails
export const infoEmail = 'info@upbound.io';
export const infoEmailUrl = 'mailto:' + infoEmail;
