import React, { useEffect, useRef, useState } from 'react';

import { COLORS, MQ } from 'src/theme';
// import { COLORS, fontAvenirRoman, MQ, gradient_1, gradient_2 } from 'src/theme';
import { Box, SxProps, Hidden, Typography } from '@mui/material';

import Image from 'next/image';

import PageProvider from 'src-new/components/PageProvider';

import Button from 'src-new/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';

import * as routes from 'src/routes';

import useOnScreen from 'src-new/utils/useOnScreen';

import iconBugImage from 'public/uxp/uxp-priority-bug-fixes-icon.svg';
import iconForksImage from 'public/uxp/uxp-no-longterm-forks-icon.svg';
import iconProductivityImage from 'public/uxp/uxp-enhanced-productivity-icon.svg';
import iconSupportImage from 'public/uxp/uxp-247-customer-support-icon.svg';
import iconTestedImage from 'public/uxp/uxp-tested-by-upbound-icon.svg';
import AddIcon from '@mui/icons-material/Add';
import Section from 'src-new/components/Section';
// import EnterpriseReadyIcon from 'public/new-images/home-page/features/EnterpriseReadyIcon.svg';
// import DeployWithConfidenceIcon from 'public/new-images/home-page/features/DeployWithConfidenceIcon.svg';
// import EfficiencyEaseIcon from 'public/new-images/home-page/features/EfficiencyEaseIcon.svg';
import uxpHero from 'public/new-images/products-page/UXP-images/UXP-Page-Image-hero.svg';
import uxpImgOneMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-1-main.svg';
import uxpImgOneSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-1-additional.svg';
import uxpImgOneMobileMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-1-mobile-main.svg';
import uxpImgOneMobileSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-1-mobile-additional.svg';
import uxpImgTwoMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-2-main.svg';
import uxpImgTwoSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-2-additional.svg';
import uxpImgTwoMobileMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-2-mobile-main.svg';
import uxpImgTwoMobileSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-2-mobile-additional.svg';
import uxpImgThreeMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-3-main.svg';
import uxpImgThreeSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-3-additional.svg';
import uxpImgThreeMobileMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-3-mobile-main.svg';
import uxpImgThreeMobileSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-3-mobile-additional.svg';
import uxpImgFourMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-4-main.svg';
import uxpImgFourSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-4-additional.svg';
import uxpImgFourMobileMain from 'public/new-images/products-page/UXP-images/UXP-Page-Image-4-mobile-main.svg';
import uxpImgFourMobileSmall from 'public/new-images/products-page/UXP-images/UXP-Page-Image-4-mobile-additional.svg';

const headerSection: SxProps = {
  backgroundColor: COLORS.firefly,
  pt: { _: 16, md: 23.5 },
  pb: 10,
  // pt: { _: 13, md: 40 },
  // pb: { _: 60, xs: 80, md: 10 },
};

const headerWrapper: SxProps = {
  [MQ.md]: {
    flex: 1,
    width: '100%',
    minWidth: '60%',
    maxWidth: '60%',
    pr: '28px',
    pl: '0px',
    display: 'flex',
    flexDirection: 'column',
  },
  '@media screen and (min-width: 884px)': {
    minWidth: '50%',
    maxWidth: '50%',
  },
};

const headerContainer: SxProps = {
  [MQ.md]: { width: '100%', maxWidth: '501px' },
  textAlign: { _: 'center', md: 'left' },
};

const headerImagesContainer: SxProps = {
  position: 'relative',
  ml: '30px',
  maxWidth: '500px',
  margin: '0 auto',
  [MQ.md]: {
    position: 'absolute',
    maxWidth: '40%',
    top: '5.5%',
    right: '2%',
    ml: '30px',
    zIndex: '1',
  },
  [MQ.xl]: {
    right: '8%',
  },
  '@media screen and (min-width: 884px)': {
    maxWidth: '50%',
  },
};

// TEMPORARILY COMMENTED OUT UNTIL HEADER IMAGE UPDATE
// const headerImagesContainer: SxProps = {
//   position: 'absolute',
//   right: '0',
//   ml: '30px',
//   maxWidth: '500px',
//   zIndex: '1',
//   [MQ.md]: {
//     maxWidth: '40%',
//     top: '5.5%',
//     right: '8%',
//     // top: '4%',
//     zIndex: '1',
//   },
//   '@media screen and (min-width: 884px)': {
//     maxWidth: '50%',
//   },
// };

const headerButtons: SxProps = {
  mb: { _: 6, sm: 10 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'left' },
  flexDirection: { _: 'column', sm: 'row' },
  textAlign: 'center',

  '& .MuiButton-startIcon': {
    mr: '5px !important',
    display: 'flex',
    alignItems: 'center',
  },

  '& > button, a': {
    mx: { _: 0, sm: '10px' },
    width: { _: 225, sm: 'unset' },
    minWidth: 208,

    ':first-of-type': {
      ml: 0,
      mb: { _: '20px', sm: 0 },
    },
    '& ~ a': {
      mr: 0,
    },
  },
};

const ctaBox: SxProps = {
  [MQ.xl]: {
    '& > div': {
      pt: 3,
    },
  },

  '& h2': {
    [MQ.xl]: {
      fontSize: '42px',
    },
  },
};

// const smallTitleStyle: SxProps = {
//   ...fontAvenirRoman,
//   ml: 1.5,
//   fontSize: '13px',
//   lineHeight: '16px',
//   letterSpacing: '-0.13px',

//   [MQ.md]: {
//     fontSize: '20px',
//     lineHeight: '56px',
//     letterSpacing: '-0.2px',
//   },
// };

type FeatureData = {
  icon: StaticImageData;
  title: string;
  body: React.ReactNode;
};

const features: FeatureData[] = [
  {
    icon: iconForksImage,
    title: 'No Longterm Forks',
    body: (
      <span>
        We are still good open source citizens despite inventing Crossplane. UXP is a downstream
        distribution we can support, releasing patches and fixes to you without waiting on a
        community-driven release process. All bug fixes get merged upstream over time.
      </span>
    ),
  },
  {
    icon: iconTestedImage,
    title: 'Tested By Upbound',
    body: (
      <span>
        Universal Crossplane releases follow open source Crossplane releases by one to two weeks
        which allows the Upbound team to observe, test, and address any issues experienced by
        upstream Crossplane users.
      </span>
    ),
  },
  {
    icon: iconBugImage,
    title: 'Priority Bug Fixes',
    body: (
      <span>
        Universal Crossplane allows you to get patches fast without waiting on open source
        Crossplane release cycles. UXP is maintained entirely by our team at Upbound. When bugs are
        reported, we prioritize and address them ASAP.
      </span>
    ),
  },
  {
    icon: iconProductivityImage,
    title: 'Enhanced Productivity',
    body: (
      <span>
        Developing Providers and Configurations for the first time can be tricky, but UXP makes it
        easier by integrating with the Upbound CLI.
      </span>
    ),
  },
  {
    icon: iconSupportImage,
    title: '24/7 Customer Support',
    body: (
      <span>
        Universal Crossplane customers enjoy the peace of mind that they will receive 24/7 support
        for all of their deployments.
      </span>
    ),
  },
];

const Feature = ({ feature: { icon, title, body } }: { feature: FeatureData }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Img src={icon} alt="Fork" width={64} sx={{ mx: 'auto' }} />
    <Header variant="h5" bold={true} color="white" sx={{ m: '20px auto' }}>
      {title}
    </Header>
    <Paragraph color="white">{body}</Paragraph>
  </Box>
);

// NOTE: <IMAGE> USED FOR CMS PURPOSES
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type StepBlockProps = {
  step: {
    // smallTitle: string;
    bigTitle: string;
    body: string;
    // body: string | JSX.Element;
    // linkText: string;
    // href: string;
    // icon: string | StaticImport;
    imgSmall: string | StaticImport;
    imgSmallMobile: string | StaticImport;
    imgBig: string | StaticImport;
    imgBigMobile: string | StaticImport;
    offsetTop: string;
    offsetRight: string;
    offsetMobileTop: string;
    offsetMobileRight: string;
    reversed?: Boolean;
  };
};

const StepBlock = ({ step }: StepBlockProps) => {
  // const { smallTitle, bigTitle, body, linkText, href, icon, img, imgMobile, reversed } = step;
  const {
    bigTitle,
    body,
    imgBig,
    imgBigMobile,
    imgSmall,
    imgSmallMobile,
    offsetTop,
    offsetRight,
    offsetMobileTop,
    offsetMobileRight,
    reversed,
  } = step;

  // let smallTitleGradient = gradient_1;
  // if (reversed) {
  //   smallTitleGradient = gradient_2;
  // }

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
        color: COLORS.linkWater,
        position: 'relative',
        flexDirection: 'column',
        [MQ.lg]: {
          alignItems: 'center',
          flexDirection: reversed ? 'row-reverse' : 'row',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          [MQ.lg]: {
            flex: 1,
            width: '50%',
            minWidth: '50%',
            maxWidth: '50%',
            pr: reversed ? '0px' : '28px',
            pl: reversed ? '28px' : '0px',
          },
        }}
      >
        {/* <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              maxHeight: 16,
              maxWidth: 16,
              [MQ.md]: {
                maxHeight: 'unset',
                maxWidth: 'unset',
              },
            }}
          >
            <Image src={icon} alt="icon" />
          </Box>
          <Typography sx={{ ...smallTitleStyle, ...smallTitleGradient }}>{smallTitle}</Typography>
        </Box> */}
        <Typography variant="h2_new" sx={{ maxWidth: 450, mb: 2.5 }}>
          {bigTitle}
        </Typography>
        <Typography
          variant="body_normal"
          sx={{
            maxWidth: 496,
            '& a': {
              color: COLORS.cornflower,
              textDecoration: 'none',
            },
          }}
        >
          {body}
        </Typography>
        {/* <Link
          href={href}
          muiProps={{
            color: reversed ? COLORS.sun : COLORS.turquoise,
            sx: { mt: 5 },
          }}
          hasArrow
        >
          {linkText}
        </Link> */}
        <Box
          ref={hiddenBarRef}
          sx={{ width: '100%', height: '1px', position: 'absolute', bottom: 0 }}
        />
      </Box>
      <Box
        sx={{
          mt: '40px',
          [MQ.lg]: {
            flex: 1,
            mt: 0,
            width: '50%',
            minWidth: '50%',
            maxWidth: '50%',
            pr: reversed ? '28px' : '0px',
            pl: reversed ? '0px' : '28px',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { _: 'fit-content', lg: 'unset' },
            ml: { _: '-14px', lg: 0 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              transition: 'transform 1.5s',
              transform: show ? '' : `translate(100vw)`,

              [MQ.lg]: {
                transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
                ml: reversed ? '-68px' : 0,
              },
            }}
          >
            <Hidden lgDown>
              <Image src={imgBig} alt="feature-img-big" />
            </Hidden>
            <Hidden lgUp>
              <Image src={imgBigMobile} alt="feature-img-big-mobile" />
            </Hidden>
          </Box>
          <Hidden lgDown>
            <Box
              sx={{
                position: 'absolute',
                top: offsetTop,
                right: offsetRight,
                transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
                transition: 'transform 2s',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Image src={imgSmall} alt="feature-img-small" />
              </Box>
            </Box>
          </Hidden>
          <Hidden lgUp>
            <Box
              sx={{
                position: 'absolute',
                top: offsetMobileTop,
                right: offsetMobileRight,
                transition: 'transform 2s',
                transform: show ? '' : `translate(-100vw)`,

                [MQ.lg]: {
                  transform: show ? '' : `translate(${reversed ? '-100vw' : '100vw'})`,
                },
              }}
            >
              <Image src={imgSmallMobile} alt="feature-img-small-mobile" />
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

const steps = [
  {
    // smallTitle: 'Step 1',
    bigTitle: 'Production-ready Crossplane',
    body: `Upbound lets you easily upgrade your platform to our downstream distribution of Crossplane, UXP,
     as well as our Official Providers so you can build your platform on a solid foundation.`,
    // linkText: 'Learn More',
    // href: routes.cloudCliDocsUrl,
    // icon: EnterpriseReadyIcon,
    imgBig: uxpImgOneMain,
    imgBigMobile: uxpImgOneMobileMain,
    imgSmall: uxpImgOneSmall,
    imgSmallMobile: uxpImgOneMobileSmall,
    offsetTop: '-14px',
    offsetRight: '-60px',
    offsetMobileTop: '-14px',
    offsetMobileRight: '-60px',
    reversed: false,
  },
  {
    // smallTitle: 'Step 2',
    bigTitle: 'All the flexibility of open source without the risk',
    body: `Universal Crossplane (UXP) runs anywhere — both on-premise and on any cloud solution. 
    Install into any cluster to expose Custom Resource Definitions (CRDs) and a standard API 
    across your entire infrastructure and service providers.`,
    // linkText: 'Learn More About Kubeconfig',
    // href: 'https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/',
    // icon: DeployWithConfidenceIcon,
    imgBig: uxpImgTwoMain,
    imgBigMobile: uxpImgTwoMobileMain,
    imgSmall: uxpImgTwoSmall,
    imgSmallMobile: uxpImgTwoMobileSmall,
    offsetTop: '2px',
    offsetRight: '-19px',
    offsetMobileTop: '2px',
    offsetMobileRight: '-19px',
    reversed: true,
  },
  {
    // smallTitle: 'Step 3',
    bigTitle: 'Complete resource coverage + stable APIs',
    body: `Upbound Official Providers have 100% resource coverage of each cloud provider API, 
    and resource parity with Terraform. All resource APIs are v1beta1 or higher, giving your 
    platform teams a stable foundation to build your internal cloud platform.
    `,
    // body: (
    //   <>
    //     Before you can connect UXP to <a href={routes.productsUbcRoute}>Upbound Cloud</a>, you will
    //     need to create a free Upbound account. Along with your free account you will get your
    //     real-time dashboard for UXP.
    //   </>
    // ),
    // linkText: 'Create Your Free Account',
    // href: routes.cloudRegisterUrl,
    // icon: EfficiencyEaseIcon,
    imgBig: uxpImgThreeMain,
    imgBigMobile: uxpImgThreeMobileMain,
    imgSmall: uxpImgThreeSmall,
    imgSmallMobile: uxpImgThreeMobileSmall,
    offsetTop: '66px',
    offsetRight: '-22px',
    offsetMobileTop: '34px',
    offsetMobileRight: '-32px',
    reversed: false,
  },
  {
    // smallTitle: 'Step 4',
    bigTitle: 'Trusted Crossplane experts at your side',
    body: `Upbound invented, contributed and maintains the Crossplane project. 
    So when you partner with Upbound, you partner with the project's leading experts. 
    Get 24/7 support as we help you implement enterprise-grade reference architectures 
    and integrations for Crossplane.`,
    // linkText: 'Log In to Your Account',
    // href: routes.cloudLoginUrl,
    // icon: EfficiencyEaseIcon,
    imgBig: uxpImgFourMain,
    imgBigMobile: uxpImgFourMobileMain,
    imgSmall: uxpImgFourSmall,
    imgSmallMobile: uxpImgFourMobileSmall,
    offsetTop: '-10px',
    offsetRight: '31px',
    offsetMobileTop: '-2px',
    offsetMobileRight: '7px',
    reversed: true,
  },
];

const StepsSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': { pb: { _: 5, lg: 15 } },
      }}
    >
      {steps.map((step) => (
        <StepBlock key={step.bigTitle} step={step} />
      ))}
    </Box>
  );
};

const HeaderSection = () => {
  const productsHeaderRef = useRef(undefined);
  const isVisible = useOnScreen(productsHeaderRef);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  return (
    <Box ref={productsHeaderRef}>
      <Box sx={headerWrapper}>
        <Box sx={headerContainer}>
          <Typography variant="h2_new">
            The easiest way to run + scale Crossplane in production
          </Typography>
          <Typography variant="body_normal" sx={{ mt: '20px', mb: '40px' }}>
            With security, support and official providers, Universal Crossplane (UXP), gives you
            everything you need to scale Crossplane.
          </Typography>
          <Box sx={headerButtons}>
            <Button
              styleType="gradientContained"
              startIcon={<AddIcon />}
              href={routes.contactRoute}
            >
              Get a Demo
            </Button>
            <Button
              styleType="whiteOutlined"
              href="/whitepaper/forrester-best-practices-kubernetes"
            >
              How to scale XP
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={headerImagesContainer}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              transform: show ? '' : 'translate(50vw)',
              transition: 'transform 1.5s',
            }}
          >
            <Image src={uxpHero} alt="feature-img-big" />
          </Box>
          {/* TEMPORARILY COMMENTED OUT UNTIL HEADER IMAGE UPDATE
           <Box
            sx={{
              position: 'absolute',
              top: '29%',
              right: '0',
              transform: show ? '' : 'translate(100vw)',
              transition: 'transform 2s',
            }}
          >
            <Image src={uxpHero} alt="feature-img-small" />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

const displayTitle = 'Universal Crossplane';
const metaDescription =
  'Upbound Universal Crossplane is an open source downstream distribution of Crossplane built with developer ' +
  "productivity and enterprise readiness in mind. Universal Crossplane is delivered by the world's foremost " +
  'Crossplane experts with 24/7 support.';

const UXP = () => {
  return (
    <PageProvider
      displayTitle={displayTitle}
      metaDescription={metaDescription}
      ctaTitle={'Ready to Supercharge Your \n Open Source Crossplane?'}
      // eslint-disable-next-line max-len
      ctaParagraph="As the contributor and key maintainer of open source Crossplane, Upbound is your trusted partner in all things Crossplane."
      ctaBtnText="Schedule a Demo"
      ctaBtnLink={routes.contactRoute}
      ctaBtnTwo={true}
      ctaBtnTwoText="Join Our Slack Channel"
      ctaBtnTwoLink={routes.crossplaneSlackUrl}
      ctaCustomSx={ctaBox}
    >
      <Section sx={headerSection}>
        <HeaderSection />
      </Section>

      <Section
        bgcolor
        angleTop="topRight"
        sx={{ pb: { _: 10, md: 16 }, pt: { _: 16, md: 23.5 }, zIndex: '-2' }}
      >
        <StepsSection />
        <Box textAlign="center">
          <Button styleType="cornflowerContained" href={routes.contactRoute}>
            Request a Demo
          </Button>
        </Box>
      </Section>
      <Box sx={{ bgcolor: COLORS.elephant }}>
        <Section
          angleTop="topRight"
          sx={{ pb: 40, pt: { _: 16, md: 23.5 }, zIndex: '-2', bgcolor: COLORS.firefly }}
        >
          <Box textAlign="center" mb={10}>
            <Typography variant="h2_new" sx={{ mb: 3.75 }}>
              What Makes UXP Different From Open Source Crossplane?
            </Typography>
            <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
              Enterprise UXP provides you with a single pane of glass and real-time dashboards for
              all UXP instances along with unlimited private listings in the Registry. It also
              includes 24/7 support and optional professional services delivered by the world’s
              foremost Crossplane experts.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridGap: '40px',
              gridTemplateColumns: 'repeat(1,1fr)',

              [MQ.md]: {
                gridTemplateColumns: 'repeat(2,1fr)',
              },
              [MQ.lg]: {
                gridTemplateColumns: 'repeat(3,1fr)',
              },
            }}
          >
            {features.map((feature, i) => (
              <Feature key={i} feature={feature} />
            ))}
          </Box>
        </Section>
      </Box>
    </PageProvider>
  );
};

export default UXP;
