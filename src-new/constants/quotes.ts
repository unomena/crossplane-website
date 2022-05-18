import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import plotlyQuoteBg from 'public/new-images/home-page/quotes/plotly-quote-bg.png';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import dbQuoteBg from 'public/new-images/home-page/quotes/db-quote-bg.png';
import bpcLogo from 'public/new-images/trusted-logos/millennium-bpc.svg';
import mbcpQuoteBg from 'public/new-images/home-page/quotes/mbcp-quote-bg.png';

const quotes = [
  {
    title: 'We found in Upbound a unique vision…',
    body: `…that aligned perfectly with our roadmap as well as a set
  of enterprise services that allowed us to innovate faster than ever before."`,
    full: `We found in Upbound a unique vision that aligned perfectly with our
  roadmap as well as a set of enterprise services that allowed us to innovate faster than ever before.`,
    person: 'Nuno Guedes',
    role: 'Millennium bcp',
    logo: bpcLogo,
    logoSize: { width: 105, height: 33 },
    bgImage: mbcpQuoteBg.src,
  },
  {
    title: 'Upbound Cloud automates and simplifies…',
    body: `…how software developers manage the lifecycle 
    of our application portfolios, allowing us to innovate more quickly."`,
    full: `Upbound Cloud automates and simplifies how software developers manage the lifecycle 
    of our application portfolios, allowing us to innovate more quickly.`,
    person: 'Jan Willies',
    role: 'Platform Architect at Accenture referring to Deutsche Bahn',
    logo: dbLogo,
    logoSize: { width: 52, height: 37 },
    bgImage: dbQuoteBg.src,
  },
  {
    title: 'We chose Upbound as our partner in this important transformation…',
    body: `…because they created Crossplane and offer 
    enterprise-grade products and services that will 
    help us accelerate time to market."`,
    full: `We chose Upbound as our partner in this important transformation because
    they created Crossplane and offer enterprise-grade products and services that will 
    help us accelerate time to market.`,
    person: 'Jack Parmer',
    role: 'CEO and co-founder Plotly',
    logo: plotlyLogo,
    logoSize: { width: 105, height: 33 },
    bgImage: plotlyQuoteBg.src,
  },
];

export default quotes;
