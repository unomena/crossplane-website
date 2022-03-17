import React from 'react';

import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';
import { CallToActionCarousel } from 'src/components/WhyUpbound/CallToActionCarousel';
import { CheckList } from 'src/components/WhyUpbound/CheckList';
import { RelatedResource } from 'src/components/WhyUpbound/RelatedResource';

import { Link } from 'src/elements/Anchor';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';

import * as routes from 'src/routes';

import ovalLeftBackground from 'public/oval-left.svg';
import ovalRightBackground from 'public/oval-right.svg';
import quoteLeft from 'public/quote-left.svg';
import iconDeclaritive from 'public/why-upbound/icon-declaritive.svg';
import iconGear from 'public/why-upbound/icon-gear.svg';
import iconIntelligence from 'public/why-upbound/icon-intelligence.svg';
import katieGamanji1xImage from 'public/why-upbound/katie-gamanji.png';
import katieGamanji2xImage from 'public/why-upbound/katie-gamanji@2x.png';
import katieGamanji3xImage from 'public/why-upbound/katie-gamanji@3x.png';
import katieGamanjiAvatar1xImage from 'public/why-upbound/katie-gamanji-avatar.png';
import katieGamanjiAvatar2xImage from 'public/why-upbound/katie-gamanji-avatar@2x.png';
import katieGamanjiAvatar3xImage from 'public/why-upbound/katie-gamanji-avatar@3x.png';

const displayTitle = 'Empower Your Platform Teams';
const metaDescription =
  'Platform teams help organizations ship faster and with less errors ever since DevOps was invented. However, these ' +
  'teams have historically been limited by their tools. Upbound builds off of what Kubernetes pioneered and offer ' +
  'solutions to enable your organization to consume infrastructure and run applications on a Universal Cloud Platform.';

const Empower: React.FC = () => {
  return (
    <PageProvider displayTitle={displayTitle} metaDescription={metaDescription}>
      <Box pt={{ _: '62px', md: '50px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box maxWidth="930px" mx="auto" px="30px">
          <Header
            pill="Why Upbound?"
            variant="h1"
            bold={true}
            color="white"
            sx={{ mt: '25px', mb: '20px' }}
          >
            Empower Platform Teams
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '40px', opacity: '0.8' }}>
            Platform teams have helped organizations ship faster and with less errors ever since
            DevOps was invented. However, these teams have historically been limited by their tools.
            We build off of what Kubernetes pioneered and offer solutions to enable your
            organization to consume infrastructure and run applications on a Universal Cloud
            Platform.
          </Header>
          <CallToActionCarousel currentPage="empower" />
        </Box>
        <Wave type="white" />
      </Box>
      <Box px="30px">
        <Box
          display="flex"
          maxWidth="1000px"
          mx="auto"
          alignItems="center"
          mb={{ _: '50px', lg: '60px' }}
          flexDirection={{ _: 'column', lg: 'row' }}
        >
          <Box
            flex="5"
            mr={{ _: '0', lg: '70px' }}
            textAlign={{ _: 'center', lg: 'left' }}
            mb="50px"
          >
            <Header variant="h3" bold={true} color="fillBlackBlack">
              Successful Engineering Teams Are Built Around Control Planes
            </Header>
            <Header variant="h6" color="fillBlackGray" sx={{ mt: '20px' }}>
              Control planes are quickly forming at the core of all the leading platform engineering
              teams and deploying a{' '}
              <Link href={routes.whyUpboundUniversalCloudPlatformRoute}>
                Universal Cloud Platform
              </Link>
              . We built Upbound to support the ways modern platform teams operate with a strong
              separation of concerns and the proven Kubernetes declarative model.
            </Header>
          </Box>
          <Box flex="4">
            <Box
              pl={{ _: '30px', lg: '60px' }}
              pr={{ _: '30px', lg: '0' }}
              pb={{ _: '0', lg: '30px' }}
              pt={{ _: '50px', lg: '30px' }}
              borderLeft={{ _: 'none', lg: `solid 1px ${COLORS.veryLightBlue}` }}
              borderTop={{ _: `solid 1px ${COLORS.veryLightBlue}`, lg: 'none' }}
            >
              <CheckList>
                <li>A Strong Seperation of Concern</li>
                <li>Proven Kubernetes Declaritive Model</li>
                <li>Reduced Engineering Effort</li>
                <li>Increased Engineering Productivity</li>
                <li>Supports Modern GitOps Processes</li>
              </CheckList>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box px={{ _: '0', md: '30px' }}>
        <Box
          sx={{
            backgroundColor: COLORS.darkSlateBlue,
            backgroundImage: {
              _: 'none',
              md: `url(${ovalLeftBackground.src}), url(${ovalRightBackground.src})`,
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition:
              'calc(50% - 800px) calc(50% - 400px), calc(50% + 650px) calc(50% + 400px)',
          }}
          pt={{ _: '80px', md: '150px' }}
          borderRadius={{ _: '0', md: '16px' }}
          maxWidth="1140px"
          mx="auto"
          pl={{ _: '30px', md: '130px' }}
          pr={{ _: '30px', md: '130px', lg: 0 }}
          textAlign={{ _: 'center', md: 'left' }}
        >
          <Box display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
            <Box
              display={{ _: 'flex', md: 'block' }}
              flexDirection="column"
              alignItems="center"
              flex="1"
              maxWidth={{ _: 'none', lg: '530px' }}
              mb={{ _: '0', md: '100px' }}
            >
              <Img src={quoteLeft} alt="left quote" width={40} />
              <Header
                variant="h4"
                color="white"
                sx={{ fontSize: '30px', lineHeight: '48px', mt: '40px' }}
              >
                Organizations that have successfully embraced what we now refer to as a “cloud
                native” approach have invested heavily in two core areas: creating a self-service
                application platform and adopting new tools and developer workflows.
              </Header>
              <Hidden lgUp>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection={{ _: 'column', md: 'row' }}
                  textAlign="center"
                  mt="50px"
                  maxWidth="400px"
                  mx="auto"
                >
                  <Box mr={{ _: '0', md: '20px' }}>
                    <img
                      src={katieGamanjiAvatar1xImage.src}
                      srcSet={`${katieGamanjiAvatar1xImage.src} 1x, ${katieGamanjiAvatar2xImage.src} 2x,
                    ${katieGamanjiAvatar3xImage.src} 3x`}
                      alt="Jan Willies Picture"
                    />
                  </Box>
                  <Box textAlign={{ _: 'center', md: 'left' }} mb={{ _: '80px', md: '100px' }}>
                    <Header variant="h6" color="white">
                      Katie Gamanji
                    </Header>
                    <Header variant="h6" color="white" sx={{ opacity: '0.5' }}>
                      Ecosystem Advocate at the Cloud Native Computing Foundation
                    </Header>
                  </Box>
                </Box>
              </Hidden>
              <Hidden lgDown>
                <Header
                  variant="h6"
                  color="white"
                  sx={{ opacity: '0.5', mt: '30px', maxWidth: '400px' }}
                >
                  Katie Gamanji is the Ecosystem Adovcate at the Cloud Native Computing Foundation
                </Header>
              </Hidden>
            </Box>
            <Hidden xlDown>
              <Box flex="1" width="100%">
                <img
                  src={katieGamanji1xImage.src}
                  srcSet={`${katieGamanji1xImage.src} 1x, ${katieGamanji2xImage.src} 2x, ${katieGamanji3xImage.src} 3x`}
                  alt="Katie Gamanji"
                  style={{
                    marginRight: '-80px',
                  }}
                  width="120%"
                />
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Box>
      <Box px="30px">
        <Box mx="auto" maxWidth="1100px" textAlign="center" mt="130px">
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            The New Era of Application & Infrastructure Management
          </Header>
          <Header variant="h6" color="fillBlackGray" sx={{ mb: '30px' }}>
            Kubernetes and Crossplane is ushering in a new era of application and infrastructure
            management and transform how operations and development teams self-service
            infrastructure and applications in dynamic, cloud native environments.
          </Header>
        </Box>
      </Box>
      <Box textAlign="center" mt="70px" mb="100px" px="30px">
        <Box display="flex" maxWidth="1000px" mx="auto" flexDirection={{ _: 'column', lg: 'row' }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex="1"
            mr={{ _: '0', lg: '80px' }}
            mb="70px"
          >
            <Img src={iconGear} alt="Portability" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Kubernetes Ecosystem
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              Upbound enables you to bring the cloud native tooling you are already using for your
              applications to your infrastructure. Our{' '}
              <Link href={routes.whyUpboundUniversalCloudPlatformRoute}>
                Universal Cloud Platform
              </Link>{' '}
              enables you to converge on a single solution for monitoring, metrics, and deployments
              you're already using and loving today.
            </Paragraph>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex="1"
            mr={{ _: '0', lg: '80px' }}
            mb="70px"
          >
            <Img src={iconIntelligence} alt="Consumption" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Automation & Intelligence
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              Guardrails defined and enforced behind an API enables you to run your business with
              less effort while increasing velocity. Developers consuming your Universal Cloud
              Platform APIs automatically respect your best practices without having to become
              infrastructure experts.
            </Paragraph>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" flex="1">
            <Img src={iconDeclaritive} alt="Consumption" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Declaritive API
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              Upbound enables your platform teams to quickly and efficiently put together their own
              opinionated platform, declaratively and without code to offer to application teams as
              a self-service Kubernetes-style declarative API.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <Wave type="light" />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
        px="15px"
        pt="50px"
      >
        <Box px="15px" textAlign="center">
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            Related Resources
          </Header>
          <Header variant="h6" color="fillBlackGray" sx={{ mb: '50px' }}>
            Still need more information? We’ve curated some related resources that may help you
            learn more on the topic.
          </Header>
        </Box>

        <Box maxWidth="960px" mx="auto" mb={{ _: '50px', md: '120px' }}>
          <RelatedResource type="video" href="https://www.youtube.com/watch?v=WGfYlssfIIk">
            The Power of Control Planes and the K8s Resource Model
          </RelatedResource>
          <RelatedResource type="video" href="https://www.youtube.com/watch?v=hEkKHkV0xyc">
            Compose Your Own Cloud APIs with Crossplane
          </RelatedResource>
          <RelatedResource type="video" href="https://www.youtube.com/watch?v=wVpzSeneJI0">
            Improving the Platform Experience at Deutsche Bahn
          </RelatedResource>
          <RelatedResource
            type="document"
            href="https://softwareengineeringdaily.com/2020/02/13/setting-the-stage-for-platform-engineering/"
          >
            Setting the Stage for Platform Engineering
          </RelatedResource>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default Empower;
