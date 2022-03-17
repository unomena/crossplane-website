import React from 'react';

import Image, { ImageProps } from 'next/image';

import { styled } from '@mui/system';
import { COLORS, MQ } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import { JoinUs } from 'src/components/JoinUs';
import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';

import { Anchor } from 'src/elements/Anchor';
import { AnchorButton } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';

import * as routes from 'src/routes';

import heroOval from 'public/hero-oval.svg';
// import hero1x from 'public/partners/hero.png';
// import hero2x from 'public/partners/hero@2x.png';
import hero3x from 'public/partners/hero@3x.png';
import iconCloud from 'public/partners/icon-cloud.svg';
import iconConsultancy from 'public/partners/icon-consultancy.svg';
import iconTechnology from 'public/partners/icon-technology.svg';
import logosAccenture1x from 'public/partners/logos-accenture.png';
// import logosAccenture2x from 'public/partners/logos-accenture@2x.png';
import logosAccenture3x from 'public/partners/logos-accenture@3x.png';
import logosAmazic from 'public/partners/logos-amazic.svg';
import logosAws1x from 'public/partners/logos-aws.png';
// import logosAws2x from 'public/partners/logos-aws@2x.png';
import logosAws3x from 'public/partners/logos-aws@3x.png';
import logosAzure from 'public/partners/logos-azure.svg';
import logosBbd from 'public/partners/logos-bbd.svg';
import logosGitlab1x from 'public/partners/logos-gitlab.png';
// import logosGitlab2x from 'public/partners/logos-gitlab@2x.png';
import logosGitlab3x from 'public/partners/logos-gitlab@3x.png';
import logosGoogleCloud1x from 'public/partners/logos-google-cloud.png';
// import logosGoogleCloud2x from 'public/partners/logos-google-cloud@2x.png';
import logosGoogleCloud3x from 'public/partners/logos-google-cloud@3x.png';
import logosIbm from 'public/partners/logos-ibm.svg';
import logosKubernetes1x from 'public/partners/logos-kubernetes.png';
// import logosKubernetes2x from 'public/partners/logos-kubernetes@2x.png';
import logosKubernetes3x from 'public/partners/logos-kubernetes@3x.png';
import logosRedhat from 'public/partners/logos-redhat.svg';
import logosSuseRancher from 'public/partners/logos-suse-rancher.svg';
import oval from 'public/partners/oval.svg';

const logos: { logo: any; alt: string; href: string; width?: number; height?: number }[] = [
  {
    logo: logosSuseRancher,
    alt: 'SUSE Rancher',
    href: 'https://www.suse.com/products/suse-rancher/',
  },
  {
    logo: logosAccenture3x,
    alt: 'accenture',
    href: 'https://www.accenture.com',
    width: logosAccenture1x.width,
    height: logosAccenture1x.height,
  },
  {
    logo: logosKubernetes3x,
    alt: 'kubernetes',
    href: 'https://kubernetes.io/',
    width: logosKubernetes1x.width,
    height: logosKubernetes1x.height,
  },
  {
    logo: logosGitlab3x,
    alt: 'GitLab',
    href: 'https://about.gitlab.com/',
    width: logosGitlab1x.width,
    height: logosGitlab1x.height,
  },
  {
    logo: logosGoogleCloud3x,
    alt: 'Google Cloud',
    href: 'https://cloud.google.com/',
    width: logosGoogleCloud1x.width,
    height: logosGoogleCloud1x.height,
  },
  { logo: logosRedhat, alt: 'RedHat', href: 'https://www.redhat.com' },
  { logo: logosAzure, alt: 'Microsoft Azure', href: 'https://azure.microsoft.com' },
  {
    logo: logosAws3x,
    alt: 'AWS',
    href: 'https://aws.amazon.com/',
    width: logosAws1x.width,
    height: logosAws1x.height,
  },
  { logo: logosIbm, alt: 'IBM', href: 'https://www.ibm.com/cloud' },
  { logo: logosAmazic, alt: 'Amazic', href: 'https://amazic.com/' },
  { logo: logosBbd, alt: 'bbd software development', href: 'https://bbdsoftware.com/' },
];

const FillerLogoTile = styled(Box)`
  display: flex;
  margin-left: 15px;
  margin-right: 15px;

  ${MQ.md} {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

const LogoTile = styled(FillerLogoTile)`
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px ${COLORS.veryLightBlue};
  background-color: ${COLORS.white};
  margin-top: 5px;
  margin-bottom: 5px;

  ${MQ.md} {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`.withComponent(Anchor);

// const LogoImage = styled(Img)`
//   width: 100%;
//   height: 100%;
//   object-fit: none;
// `;

const Logo: React.FC<
  ImageProps & { src: StaticImageData; alt: string; href: string; width?: number; height?: number }
> = ({ src, alt, href, width, height }) => {
  // to be improved
  return (
    <LogoTile
      href={href}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '360px',
        height: '150px',
        position: 'relative',
      }}
    >
      <Image
        src={src}
        // srcSet={`${logo[0]} 1x, ${logo[1]} 2x, ${logo[2]} 3x`}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={src.src}
      />
    </LogoTile>
  );
};

const Hero = styled(Box)`
  background-color: ${COLORS.cornflower};

  ${MQ.lg} {
    background-image: url(${heroOval.src});
    background-repeat: no-repeat;
    background-position: top 55px right;
  }
`;

const PartnerFeature = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 0;
  padding: 0 40px 15px;
  margin-bottom: 35px;

  ${MQ.md} {
    flex: 0 1 360px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`;

const JoinUsOvalSection = styled(Box)`
  background-color: ${COLORS.cornflower};

  ${MQ.md} {
    background-color: ${COLORS.white};
    background-image: url(${oval.src});
    background-position: top center;
    background-repeat: no-repeat;
  }
`;

const displayTitle = 'Partner Program';
const metaDescription =
  'The Upbound Partner Program enables your customers to take the next step on their cloud native journey with an ' +
  'automated, self-service approach to provisioning infrastructure and applications.';

const Partners: React.FC = () => {
  return (
    <PageProvider displayTitle={displayTitle} metaDescription={metaDescription}>
      <Hero>
        <Box display="flex" maxWidth="1100px" mx="auto" px="30px">
          <Box
            flex={3}
            mr={{ _: '0', lg: '80px' }}
            mt={{ _: '70px', lg: '100px' }}
            textAlign={{ _: 'center', lg: 'left' }}
          >
            <Header pill="Partners" variant="h2" bold={true} color="white" sx={{ mt: '25px' }}>
              Become a Partner and Join The Universal Cloud Movement
            </Header>
            <Header variant="h6" color="white" sx={{ mt: '20px', mb: '40px' }}>
              Enable your customers to take the next step on their cloud native journey with an
              automated, self-service approach to provisioning infrastructure and applications.
            </Header>
            <AnchorButton btnType="whiteOutline" href={routes.contactSalesUrl}>
              Contact Our Partner Team
            </AnchorButton>
          </Box>
          <Hidden lgDown>
            <Box flex={2} mt="65px" position="relative" zIndex={20}>
              <Img
                src={hero3x}
                // srcSet={`${hero1x} 1x, ${hero2x} 2x, ${hero3x} 3x`}
                alt="Partner logos"
                width={460}
              />
            </Box>
          </Hidden>
        </Box>
        <Wave type="white" mt={{ _: '0', lg: '-150px' }} />
      </Hero>
      <Box textAlign="center">
        <Box
          display="flex"
          mt={{ _: '10px', md: '50px' }}
          mb="40px"
          justifyContent="center"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <PartnerFeature>
            <Box mb="35px">
              <Img src={iconCloud} alt="cloud" width={64} />
            </Box>
            <Header variant="h5" bold={true} color="fillBlackBlack" sx={{ mb: '10px' }}>
              Cloud Providers
            </Header>
            <Paragraph color="fillBlackGray">
              We partner with cloud infrastructure vendors to deliver enterprise-grade reference
              architectures and integrations for Crossplane.
            </Paragraph>
          </PartnerFeature>
          <PartnerFeature>
            <Box mb="35px">
              <Img src={iconTechnology} alt="cloud" width={64} />
            </Box>
            <Header variant="h5" bold={true} color="fillBlackBlack" sx={{ mb: '10px' }}>
              Technology Partners
            </Header>
            <Paragraph color="fillBlackGray">
              We partner with leading cloud technology providers to deliver enterprise Crossplane
              solutions ready for deployment.
            </Paragraph>
          </PartnerFeature>
          <PartnerFeature>
            <Box mb="35px">
              <Img src={iconConsultancy} alt="cloud" width={64} />
            </Box>
            <Header variant="h5" bold={true} color="fillBlackBlack" sx={{ mb: '10px' }}>
              Consultancy & SI Partners
            </Header>
            <Paragraph color="fillBlackGray">
              We partner with a network of resellers and Crossplane solution consultants to
              architect and deliver production-ready infrastructure APIs.
            </Paragraph>
          </PartnerFeature>
        </Box>
        <AnchorButton
          btnType="blackOutline"
          href={routes.partnerRegistrationUrl}
          sx={{ mb: { _: '50px', md: '30px' } }}
        >
          Become An Upbound Partner
        </AnchorButton>
        <Wave type="light" />
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
      >
        <Box
          textAlign="center"
          maxWidth="1100px"
          mx="auto"
          mb="50px"
          px="30px"
          pt={{ _: '20px', md: '0' }}
        >
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            Our Partner Community
          </Header>
          <Header variant="h6" color="fillBlackGray">
            Our community includes a trusted ecosystem of companies offering a range of services,
            integrations and customized solutions for Upbound Cloud and Crossplane.
          </Header>
        </Box>
        <Box maxWidth="1280px" mx="auto" px="15px">
          <Box
            display="flex"
            m={{ _: '-5px -15px', md: '-25px' }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {logos.map(({ logo, alt, href, width, height }, i) => (
              <Logo key={i} src={logo} alt={alt} href={href} width={width} height={height} />
            ))}
            <FillerLogoTile width="360px" height="0" />
            <FillerLogoTile width="360px" height="0" />
          </Box>
        </Box>
        <JoinUsOvalSection pt={{ _: 0, md: '490px' }} mt={{ _: '80px', md: '-370px' }}>
          <Box px="30px">
            <Box mb={{ _: 0, md: '-220px' }}>
              <JoinUs
                type="light"
                title="Ready to Join Our Partner Community?"
                subtitle={`Ready to enable your customers to move faster with an automated, self-service approach to
                provisioning infrastructure and applications? Contact our team today to get started.`}
                href={routes.contactSalesUrl}
                button="Contact Our Partner Team"
              />
            </Box>
          </Box>
        </JoinUsOvalSection>
      </Box>
    </PageProvider>
  );
};

export default Partners;
