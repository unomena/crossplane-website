import React, { memo, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { COLORS, gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Grid } from '@mui/material';

import useOnScreen from 'src-new/utils/useOnScreen';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';
import CornerCard from 'src-new/elements/CornerCard';
import Slider from 'src-new/components/Slider';

import heroMain from 'public/new-images/products-page/hero-main.svg';
import heroFlyover from 'public/new-images/products-page/hero-flyover.svg';
import platformOne from 'public/new-images/products-page/001-platform.svg';
import platformTwo from 'public/new-images/products-page/002-platform.svg';
import platformThree from 'public/new-images/products-page/003-platform.svg';
import platformFour from 'public/new-images/products-page/004-platform.svg';
import platformFive from 'public/new-images/products-page/005-platform.svg';
import platformSix from 'public/new-images/products-page/006-platform.svg';
import platformFlyoverOne from 'public/new-images/products-page/001-platform-flyover.svg';
import platformFlyoverTwo from 'public/new-images/products-page/002-platform-flyover.svg';
import platformFlyoverThree from 'public/new-images/products-page/003-platform-flyover.svg';
import platformFlyoverFour from 'public/new-images/products-page/004-platform-flyover.svg';
import platformFlyoverFive from 'public/new-images/products-page/005-platform-flyover.svg';
import platformFlyoverSix from 'public/new-images/products-page/006-platform-flyover.svg';
import sectionBg from 'public/new-images/home-page/header-bg.jpg';
import productDiagram from 'public/new-images/products-page/product-diagram.svg';
import dbLogo from 'public/new-images/trusted-logos/db.svg';
import plotlyLogo from 'public/new-images/trusted-logos/plotly.svg';
import bpcLogo from 'public/new-images/trusted-logos/millennium-bpc.svg';
import arrowCircle from 'public/new-images/icons/arrow-circle.svg';
import quoteCircle from 'public/new-images/icons/quote-circle.svg';
import shapesIcon from 'public/new-images/icons/shapes-icon.svg';

const productsSectionHeader: SxProps = {
  textAlign: 'center',
};
const caseStudiesSection: SxProps = {
  backgroundImage: `url(${sectionBg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',

  '@media screen and (min-width: 1980px)': {
    backgroundSize: 'contain',
  },
};

const headerButtons: SxProps = {
  mt: 7.5,
  mb: 10,
  display: 'flex',
  alignItems: 'center',
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type FeatureBlockProps = {
  smallTitle: string;
  bigTitle: string;
  body: string;
  href: string;
  imgBig: string | StaticImport;
  imgSmall: string | StaticImport;
  imgSmallOffset: { top: number; right: number };
  reversed?: Boolean;
};

const FeatureBlock = ({
  bigTitle,
  body,
  href,
  imgBig,
  imgSmall,
  imgSmallOffset,
  reversed,
}: FeatureBlockProps) => {
  const hiddenBarRef = useRef(undefined);
  const isVisible = useOnScreen(hiddenBarRef);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: COLORS.linkWater,
        flexDirection: reversed ? 'row-reverse' : 'row',
        position: 'relative',
        // backgroundColor: COLORS.elephant,
        // position: 'sticky',
        // top: '0',
        // width: '100%',
        // height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '50%',
          minWidth: '50%',
          maxWidth: '50%',
          pr: reversed ? '0px' : '28px',
          pl: reversed ? '28px' : '0px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2_new" sx={{ maxWidth: 450, mb: 2.5 }}>
          {bigTitle}
        </Typography>
        <Typography variant="body_normal" sx={{ maxWidth: 496 }}>
          {body}
        </Typography>
        <Link
          href={href}
          muiProps={{
            color: reversed ? COLORS.sun : COLORS.turquoise,
            sx: { mt: 5 },
          }}
          hasArrow
        >
          Learn More
        </Link>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: '50%',
          minWidth: '50%',
          maxWidth: '50%',
          pr: reversed ? '28px' : '0px',
          pl: reversed ? '0px' : '28px',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              ml: reversed ? '-68px' : 0,
              transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
              transition: 'transform 1.5s',
            }}
          >
            <Image src={imgBig} alt="feature-img-big" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: imgSmallOffset.top,
              right: imgSmallOffset.right,
              transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
              transition: 'transform 2s',
            }}
          >
            <Image src={imgSmall} alt="feature-img-small" />
          </Box>
        </Box>
      </Box>
      <Box
        ref={hiddenBarRef}
        sx={{ width: '100%', height: '1px', position: 'absolute', bottom: 0 }}
      />
    </Box>
  );
};

const features = [
  {
    smallTitle: 'Enterprise ready',
    bigTitle: 'Fully-managed control planes',
    body: `Control planes running in Upbound
    are designed to be high performance, scalable, multitenant,
    and secure for the most demanding platforms.`,
    href: '/',
    imgBig: plotlyLogo,
    imgSmall: plotlyLogo,
    imgSmallOffset: { top: 103, right: -68 },
    reversed: false,
  },
  {
    smallTitle: 'Deploy with confidence',
    bigTitle: 'Best-in-class platform building blocks',
    body: `Upbound Marketplace is a one-stop-shop
    for all the components you need in your platform
    powered by an Upbound control plane. Supported and
    Certified listings are available so you can run your
    platform in production with confidence.`,
    href: '/',
    imgBig: plotlyLogo,
    imgSmall: plotlyLogo,
    imgSmallOffset: { top: 67, right: 0 },
    reversed: true,
  },
  {
    smallTitle: 'Efficiency + ease',
    bigTitle: 'Self-Service Console',
    body: `The Upbound Console is dynamically rendered
    from your Upbound control plane and the Crossplane
    packages installed in it. Centralize control and empower
    your team to deploy without red tape.`,
    href: '/',
    imgBig: plotlyLogo,
    imgSmall: plotlyLogo,
    imgSmallOffset: { top: 54, right: -17 },
    reversed: false,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ '& > div:not(:last-of-type)': { pb: 25 } }}>
      {features.map((feature) => (
        <FeatureBlock
          key={feature.smallTitle}
          smallTitle={feature.smallTitle}
          bigTitle={feature.bigTitle}
          body={feature.body}
          href={feature.href}
          imgBig={feature.imgBig}
          imgSmall={feature.imgSmall}
          imgSmallOffset={feature.imgSmallOffset}
          reversed={feature.reversed}
        />
      ))}
    </Box>
  );
};

type Props = {};

const Products = ({}: Props) => {
  const productsHeader = useRef(undefined);
  const isVisible = useOnScreen(productsHeader);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);
  return (
    <PageProvider displayTitle="Products">
      <Section sx={{ pt: 40, pb: 20, overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          ref={productsHeader}
        >
          <Box
            sx={{
              flex: 1,
              width: '50%',
              minWidth: '50%',
              maxWidth: '50%',
              pr: '28px',
              pl: '0px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ maxWidth: '501px' }}>
              <Typography variant="h1_new" sx={{ mb: 3, ...gradient_1 }}>
                Upbound
              </Typography>
              <Typography variant="body_big">
                The easiest way to build, deploy, and manage your internal cloud platforms using
                control planes.
              </Typography>
              <Box sx={headerButtons}>
                <Button styleType="gradientContained" sx={{ width: 156, mr: 3 }}>
                  Try for free
                </Button>
                <Link href="/" muiProps={{ color: '#fff' }} hasArrow>
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '4%',
              right: '0',
              zIndex: '1',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  transform: show ? '' : 'translate(50vw)',
                  transition: 'transform 1.5s',
                }}
              >
                <Image src={heroMain} alt="feature-img-big" />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '29%',
                  right: '0',
                  transform: show ? '' : 'translate(100vw)',
                  transition: 'transform 2s',
                }}
              >
                <Image src={heroFlyover} alt="feature-img-small" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section bgcolor angleTop="topRight" sx={{ pt: 23.5, pb: 10, zIndex: '-2' }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            A platform for building internal cloud platforms
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', height: '540px' }}>
          <Image
            src={productDiagram}
            alt="Internal cloud platform"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Section>
      <Section bgcolor sx={{ py: 23.5, position: 'relative' }}>
        <FeaturesSection />
      </Section>
      <Section sx={{ pt: 23.5, pb: 34.125, overflow: 'hidden', ...caseStudiesSection }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 3.75 }}>
            Any platform. Any business
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
            Upbound can manage any infrastructure environment — cloud or on-prem. Customers compose
            their own custom API interface into their custom platform running on Upbound
          </Typography>
        </Box>
        <Box sx={{ my: 10, ...gridLayout }}>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    lineHeight: '34px',
                  }}
                >
                  Internal Developer Platform
                </Typography>
                <Typography variant="body_small">
                  Upbound makes building Internal Developer Platforms straightforward. Platform
                  teams compose their custom cloud API, and Upbound dynamically renders a
                  self-service console for it.
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
                <Image src={shapesIcon} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    lineHeight: '34px',
                  }}
                >
                  Infrastructure-as-Code Modernization
                </Typography>
                <Typography variant="body_small">
                  Upbound’s control planes continuously reconcile infrastructure resources they
                  manage, eliminating configuration drift entirely. Using control planes, teams can
                  unify both their application and infrastructure deployment workflows.
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
                <Image src={shapesIcon} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard icon={arrowCircle} iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h3_new"
                  sx={{
                    mb: 3,
                    lineHeight: '34px',
                  }}
                >
                  Global Application Deployment
                </Typography>
                <Typography variant="body_small">
                  Deploy workloads across zones, regions, and vendors by building applications
                  against your Internal Cloud Platforms running in Upbound. Infrastructure
                  environment where the application is deployed simply becomes a configuration
                  detail chosen during deployment.
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
                <Image src={shapesIcon} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
        </Box>
        <Box sx={productsSectionHeader}>
          <Typography variant="h3_new" sx={{ mb: 7.5 }}>
            Trusted by the industry’s best
          </Typography>
        </Box>

        <Slider>
          <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
            <Box display="flex" flexDirection="column" maxWidth="744px">
              <Box flex={1}>
                <Typography variant="body_big">
                  We chose Upbound as our partner in this important transformation because they
                  created Crossplane and offer enterprise-grade products and services that will help
                  us accelerate time to market."
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ position: 'relative', width: '105px', height: '33px', mr: 2 }}>
                  <Image src={plotlyLogo} alt="plotly" layout="fill" objectFit="contain" />
                </Box>
                <Box>
                  <Typography variant="h6_new">Jack Parmer</Typography>
                  <Typography
                    variant="body_xs"
                    sx={{ fontFamily: 'Avenir-Oblique', maxWidth: '200px' }}
                  >
                    CEO and co-founder Plotly
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CornerCard>

          <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography variant="body_big">
                  Upbound Cloud automates and simplifies how software developers manage the
                  lifecycle of our application portfolios, allowing us to innovate more quickly.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ position: 'relative', width: '52px', height: '37px', mr: 2 }}>
                  <Image src={dbLogo} alt="DB" layout="fill" objectFit="contain" />
                </Box>
                <Box>
                  <Typography variant="h6_new">Jan Willies</Typography>
                  <Typography
                    variant="body_xs"
                    sx={{ fontFamily: 'Avenir-Oblique', maxWidth: '200px' }}
                  >
                    Platform Architect at Accenture referring to Deutsche Bahn
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CornerCard>
          <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography variant="body_big">
                  We found in Upbound a unique vision that aligned perfectly with our roadmap as
                  well as a set of enterprise services that allowed us to innovate faster than ever
                  before"
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ position: 'relative', width: '105px', height: '33px', mr: 2 }}>
                  <Image src={bpcLogo} alt="DB" layout="fill" objectFit="contain" />
                </Box>
                <Box>
                  <Typography variant="h6_new">Nuno Guedes</Typography>
                  <Typography
                    variant="body_xs"
                    sx={{ fontFamily: 'Avenir-Oblique', maxWidth: '200px' }}
                  >
                    Millennium bcp
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CornerCard>
        </Slider>
      </Section>
    </PageProvider>
  );
};

export default Products;
