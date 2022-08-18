import React, { useEffect, useRef, useState } from 'react';

import { COLORS, MQ } from 'src/theme';
// import { COLORS, fontAvenirRoman, MQ, gradient_1, gradient_2 } from 'src/theme';
import { Box, SxProps, Hidden, Typography } from '@mui/material';

import Image from 'next/image';

import PageProvider from 'src-new/components/PageProvider';
import { Wave } from 'src/components/Wave';

import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';

import * as routes from 'src/routes';

import useOnScreen from 'src-new/utils/useOnScreen';

import heroOval from 'public/hero-oval.svg';
import connectUXPImage from 'public/uxp/connect-uxp.svg';
import connectUXPMobileImage from 'public/uxp/connect-uxp-mobile.svg';
import hero3xImage from 'public/uxp/hero@3x.png';
import heroMobile3xImage from 'public/uxp/hero-mobile@3x.png';
import iconBugImage from 'public/uxp/icon-bug.svg';
import iconForksImage from 'public/uxp/icon-forks.svg';
import iconProductivityImage from 'public/uxp/icon-productivity.svg';
import iconSupportImage from 'public/uxp/icon-support.svg';
import iconTestedImage from 'public/uxp/icon-tested.svg';
import installCLIImage from 'public/uxp/install-cli.svg';
import installCLIMobileImage from 'public/uxp/install-cli-mobile.svg';
import installUXPImage from 'public/uxp/install-uxp.svg';
import installUXPMobileImage from 'public/uxp/install-uxp-mobile.svg';
import manageImage from 'public/uxp/manage.svg';
import manageMobileImage from 'public/uxp/manage-mobile.svg';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import EnterpriseReadyIcon from 'public/new-images/home-page/features/EnterpriseReadyIcon.svg';
// import DeployWithConfidenceIcon from 'public/new-images/home-page/features/DeployWithConfidenceIcon.svg';
// import EfficiencyEaseIcon from 'public/new-images/home-page/features/EfficiencyEaseIcon.svg';

const hero: SxProps = {
  backgroundColor: COLORS.firefly,

  [MQ.lg]: {
    backgroundImage: `url(${heroOval.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top 55px right',
  },
};

const featureTile: SxProps = {
  ml: '50px',
  mr: '50px',
  flex: '0 1 280px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

  [MQ.md]: {
    alignItems: 'flex-start',
  },
};

const headerButtons: SxProps = {
  mt: { _: 5, sm: 7.5 },
  mb: { _: 6, sm: 10 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'left' },
  flexDirection: { _: 'column', sm: 'row' },

  '& > button, a': {
    mx: { _: 0, sm: '10px' },

    ':not(:last-of-type)': {
      mb: { _: '20px', sm: 0 },
    },
  },
};

const ctaBox: SxProps = {
  '& > div': {
    pt: 2,
  },

  [MQ.lg]: {
    '& h2': {
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
  <Box my="30px" sx={featureTile}>
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
    img: string | StaticImport;
    imgMobile: string | StaticImport;
    reversed?: Boolean;
  };
};

const StepBlock = ({ step }: StepBlockProps) => {
  // const { smallTitle, bigTitle, body, linkText, href, icon, img, imgMobile, reversed } = step;
  const { bigTitle, body, img, imgMobile, reversed } = step;

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
              transition: 'transform 1.5s',
              transform: show ? '' : `translate(100vw)`,

              [MQ.lg]: {
                transform: show ? '' : `translate(${reversed ? '-50vw' : '50vw'})`,
                ml: reversed ? '-68px' : 0,
              },
            }}
          >
            <Hidden lgDown>
              <Image src={img} alt="feature-img-big" />
            </Hidden>
            <Hidden lgUp>
              <Image src={imgMobile} alt="feature-img-big-mobile" />
            </Hidden>
          </Box>
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
    img: installCLIImage,
    imgMobile: installCLIMobileImage,
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
    img: installUXPImage,
    imgMobile: installUXPMobileImage,
    reversed: true,
  },
  {
    // smallTitle: 'Step 3',
    bigTitle: 'Complete Resource Coverage + Stable APIs',
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
    img: connectUXPImage,
    imgMobile: connectUXPMobileImage,
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
    img: manageImage,
    imgMobile: manageMobileImage,
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
        '& > div': { pb: { _: 10, lg: 25 } },
      }}
    >
      {steps.map((step) => (
        <StepBlock key={step.bigTitle} step={step} />
      ))}
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
      ctaTitle="Ready to Supercharge Your Open Source Crossplane?"
      // eslint-disable-next-line max-len
      ctaParagraph="As the contributor and key maintainer of open source Crossplane, Upbound is your trusted partner in all things Crossplane."
      ctaBtnText="Schedule a Demo"
      ctaBtnLink={routes.contactRoute}
      ctaBtnTwo={true}
      ctaBtnTwoText="Join Our Slack Channel"
      ctaBtnTwoLink={routes.crossplaneSlackUrl}
      ctaCustomSx={ctaBox}
    >
      <Box sx={{ bgcolor: COLORS.elephant }}>
        <Box sx={hero}>
          <Box
            display="flex"
            maxWidth="1100px"
            mx="auto"
            px="30px"
            alignItems="center"
            flexDirection={{ _: 'column', lg: 'row' }}
          >
            <Box
              flex={6}
              mr={{ _: '0', lg: '110px' }}
              mt={{ _: '20px', lg: '150px' }}
              textAlign={{ _: 'center', lg: 'left' }}
              display={{ _: 'flex', lg: 'block' }}
              flexDirection="column"
              alignItems="center"
            >
              <Header variant="h2" bold={true} color="white" sx={{ mt: '25px' }}>
                The Easiest Way to Run + Scale Crossplane in Production
              </Header>
              <Header variant="h6" color="white" sx={{ mt: '20px', mb: '40px' }}>
                With security, support and official providers, Universal Crossplane (UXP), gives you
                everything you need to scale Crossplane.
              </Header>
              <Box sx={headerButtons}>
                <Button
                  styleType="gradientContained"
                  startIcon={<RocketLaunchIcon />}
                  href={routes.contactRoute}
                >
                  Get a Demo
                </Button>
                <Button styleType="whiteOutlined" href="/whitepapers/scaling-crossplane">
                  How to scale XP
                </Button>
              </Box>
            </Box>
            <Box
              flex={7}
              mt={{ _: '0', lg: '65px' }}
              mb={{ _: '-125px', lg: '0' }}
              width="100%"
              position="relative"
              zIndex={20}
            >
              <Hidden lgUp>
                <Img src={heroMobile3xImage} priority alt="console screenshot" width="100%" />
              </Hidden>
              <Hidden lgDown>
                <Img src={hero3xImage} priority alt="console screenshot" width="100%" />
              </Hidden>
            </Box>
          </Box>
          <Wave type="elephant" />
        </Box>
        <Box px="30px" sx={{ bgcolor: COLORS.elephant, position: 'relative' }}>
          <StepsSection />
          <Box textAlign="center" mb={2}>
            <Button styleType="cornflowerContained" href={routes.contactRoute}>
              Request a Demo
            </Button>
          </Box>
        </Box>
        <Wave type="firefly" />
        <Box
          sx={{
            bgcolor: COLORS.firefly,
            pt: { _: '10px', md: '0' },
          }}
        >
          <Box maxWidth="1100px" mx="auto" px="30px" textAlign="center">
            <Header variant="h2" bold={true} color="white" sx={{ mb: '20px' }}>
              What Makes UXP Different From Open Source Crossplane?
            </Header>
            <Header variant="h6" color="white">
              Enterprise UXP provides you with a single pane of glass and real-time dashboards for
              all UXP instances along with unlimited private listings in the Registry. It also
              includes 24/7 support and optional professional services delivered by the world’s
              foremost Crossplane experts.
            </Header>
          </Box>
          <Box
            maxWidth="1100px"
            mx="auto"
            px="30px"
            mt="80px"
            mb={40}
            textAlign={{ _: 'center', md: 'left' }}
          >
            <Box display="flex" m="-30px -50px" flexDirection="row" flexWrap="wrap">
              {features.map((feature, i) => (
                <Feature key={i} feature={feature} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default UXP;
