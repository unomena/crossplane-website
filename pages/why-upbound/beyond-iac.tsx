import React, { useEffect, useState } from 'react';

import { styled } from '@mui/system';
import { COLORS } from 'src/theme';
import { Box, Hidden } from '@mui/material';

import VideoModal from 'src/elements/VideoModal';

import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';
import { CallToActionCarousel } from 'src/components/WhyUpbound/CallToActionCarousel';
import { RelatedResource } from 'src/components/WhyUpbound/RelatedResource';

import { Anchor } from 'src/elements/Anchor';
import { AnchorButton } from 'src/elements/Button';
import { Header } from 'src/elements/Header';
import { Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';

import * as routes from 'src/routes';

import { useExpandable } from 'src/utils/hooks';

import ovalLeftBackground from 'public/oval-left.svg';
import quoteLeft from 'public/quote-left.svg';
import accordionActiveImage from 'public/why-upbound/accordion-active.svg';
import accordionInactiveImage from 'public/why-upbound/accordion-inactive.svg';
import brianGrant1xImage from 'public/why-upbound/brian-grant.png';
import brianGrant2xImage from 'public/why-upbound/brian-grant@2x.png';
import brianGrant3xImage from 'public/why-upbound/brian-grant@3x.png';
import brianGrantAvatar1xImage from 'public/why-upbound/brian-grant-avatar.png';
import brianGrantAvatar2xImage from 'public/why-upbound/brian-grant-avatar@2x.png';
import brianGrantAvatar3xImage from 'public/why-upbound/brian-grant-avatar@3x.png';
import chevronDownImage from 'public/why-upbound/chevron-down.svg';
import chevronUpImage from 'public/why-upbound/chevron-up.svg';
import iconAutomation from 'public/why-upbound/icon-automation.svg';
import iconNotTemplate from 'public/why-upbound/icon-not-template.svg';
import iconPolicy from 'public/why-upbound/icon-policy.svg';
import PlayCircle from 'src/svg/PlayCircle';

const AccordionContainer = styled(Box)<{ active: boolean }>`
  cursor: pointer;
  padding: 20px;
  background-color: ${({ active }) => (active ? 'rgba(179, 186, 197, 0.1)' : COLORS.white)};
  border-radius: 8px;

  h6 {
    display: flex;
    align-items: center;
  }

  img {
    position: relative;
    top: -2px;
    vertical-align: middle;
    margin-right: 10px;
    display: ${({ active }) => (active ? 'none' : 'inline')};
  }

  img:first-of-type {
    display: ${({ active }) => (active ? 'inline' : 'none')};
  }

  & > p {
    overflow: hidden;
    opacity: ${({ active }) => (active ? '1' : '0')};
    margin-top: ${({ active }) => (active ? '15px' : '0')};
    transition: height 0.2s, opacity 0.2s;
  }
`;

const Accordion: React.FC<{ title: string; active: boolean; onClick: () => void }> = ({
  children,
  title,
  active,
  onClick,
}) => {
  const { setExpanded, contentRef, contentHeight } = useExpandable();

  useEffect(() => {
    setExpanded(active);
  }, [active]);

  return (
    <AccordionContainer active={active} onClick={onClick}>
      <Header variant="h6" bold={true} color="fillBlackBlack">
        <Box flex="0 0 17px">
          <img src={accordionActiveImage.src} alt="active pip" />
          <img src={accordionInactiveImage.src} alt="inactive pip" />
        </Box>
        <Box flex="1">{title}</Box>
        <Box flex="0 0 14px">
          <img src={chevronUpImage.src} alt="active pip" />
          <img src={chevronDownImage.src} alt="inactive pip" />
        </Box>
      </Header>
      <Paragraph color="fillBlackGray" ref={contentRef} sx={{ height: contentHeight }}>
        {children}
      </Paragraph>
    </AccordionContainer>
  );
};

const displayTitle = 'Evolve Beyond Infrastructure as Code';
const metaDescription =
  'The Cloud Native movement has been defined in recent years with the rise of Kubernetes and its broad adoption as ' +
  'a container orchestration platform. Kubernetes’ true superpower is that it can become the control plane for any ' +
  'kind of resource, not just containers.';

const BeyondIaC: React.FC = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [currentPersona, setCurrentPersona] = useState(0);

  return (
    <PageProvider
      displayTitle={displayTitle}
      metaDescription={metaDescription}
      isOverflowVisible={isVideoVisible === false}
    >
      <Box pt={{ _: '62px', md: '50px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box maxWidth="930px" mx="auto" px="30px">
          <Header
            pill="Why Upbound?"
            variant="h1"
            bold={true}
            color="white"
            sx={{ mt: '25px', mb: '20px' }}
          >
            Go Beyond Infrastructure as Code with Control Planes
          </Header>
          <Header variant="h6" color="white" sx={{ mb: '40px', opacity: '0.8' }}>
            The Cloud Native movement has largely been defined in recent years with the rise of
            Kubernetes and its broad adoption as a container orchestration platform. Kubernetes’
            true “superpower” is that it can become the control plane for any kind of resource, not
            just containers.
          </Header>
          <CallToActionCarousel currentPage="beyond" />
        </Box>
        <Wave type="white" />
      </Box>
      <Box px="30px">
        <Box mx="auto" maxWidth="1100px" textAlign="center" mt="20px">
          <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '20px' }}>
            What is a Control Plane?
          </Header>
          <Header variant="h6" color="fillBlackGray" sx={{ mb: '30px' }}>
            Peeking behind the scenes of the three major cloud providers will reveal that each one
            runs their business using a key piece of technology they call a control plane. We are
            democratizing this technology with our open source, Kubernetes inspired,{' '}
            <Anchor href={routes.crossplaneUrl}>Crossplane</Anchor> project. Upbound enables you to
            run your business like the cloud providers run theirs.
          </Header>
          <AnchorButton
            btnType="blackOutline"
            onClick={() => setVideoVisible(true)}
            mobile={true}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: { _: 'center', md: 'flex-start' },
            }}
          >
            <Span bold={true} sx={{ mr: '4px' }}>
              The Power of Control Planes
            </Span>
            <PlayCircle />
          </AnchorButton>
        </Box>
      </Box>
      <Box textAlign="center" mt="70px" mb="100px" px="30px">
        <Box display="flex" maxWidth="1000px" mx="auto" flexDirection={{ _: 'column', lg: 'row' }}>
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mr={{ _: '0', lg: '80px' }}
            mb="70px"
          >
            <Img src={iconNotTemplate} alt="Portability" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              API’s & Not Templates
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              Kubernetes resources are managed around API’s and not templates. The API runs
              continuously in an automation loop to reconcile changes and adjust for drift.
            </Paragraph>
          </Box>
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mr={{ _: '0', lg: '80px' }}
            mb="70px"
          >
            <Img src={iconPolicy} alt="Consumption" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Better Policy Adherence
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              A control plane model ensures that operation and development teams adhere to an
              organization’s security, compliance or governance policies defined in the APIs
              provided by the control plane.
            </Paragraph>
          </Box>
          <Box flex="1" display="flex" flexDirection="column" alignItems="center">
            <Img src={iconAutomation} alt="Consumption" width={64} sx={{ mb: '30px' }} />
            <Header variant="h5" bold={true} color="fillBlackBlack">
              Easily Capture Automation
            </Header>
            <Paragraph color="slate" sx={{ mt: '15px' }}>
              A universal control plane like the one Crossplane enables, enables teams to have a
              single location where they can easily capture automation.
            </Paragraph>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.darkSlateBlue,
          backgroundImage: `url(${ovalLeftBackground.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'calc(50% - 750px) -60%',
        }}
      >
        <Box
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          maxWidth="1100px"
          mx="auto"
          alignItems="center"
          pt="100px"
          px="30px"
        >
          <Box
            display={{ _: 'flex', md: 'block' }}
            flexDirection="column"
            alignItems="center"
            maxWidth={{ _: 'none', lg: '530px' }}
            mt="40px"
            mb={{ _: '0', md: '100px' }}
            textAlign={{ _: 'center', md: 'left' }}
          >
            <Img src={quoteLeft} alt="left quote" width={40} sx={{ mb: '40px' }} />
            <Header variant="h4" color="white" sx={{ fontSize: '30px', lineHeight: '48px' }}>
              We didn't set out to build a control plane just as a piece of infrastructure, we set
              out to build a container platform and the control plane was kind of an important
              design consideration, but it was not a primary focus.
            </Header>
            <Hidden lgUp>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection={{ _: 'column', md: 'row' }}
                textAlign="center"
                mt="50px"
              >
                <Box mr={{ _: '0', md: '20px' }}>
                  <img
                    src={brianGrantAvatar1xImage.src}
                    srcSet={`${brianGrantAvatar1xImage.src} 1x, ${brianGrantAvatar2xImage.src} 2x,
                    ${brianGrantAvatar3xImage.src} 3x`}
                    alt="Jan Willies Picture"
                  />
                </Box>
                <Box textAlign={{ _: 'center', md: 'left' }} mb={{ _: '0px', md: '100px' }}>
                  <Header variant="h6" color="white">
                    Brian Grant
                  </Header>
                  <Header variant="h6" color="white" sx={{ opacity: '0.5' }}>
                    Distinguished Engineer at Google
                  </Header>
                </Box>
              </Box>
            </Hidden>
            <Hidden lgDown>
              <Header variant="h6" color="white" sx={{ opacity: '0.5', mt: '30px' }}>
                Brian Grant is a Distinguished Engineer at Google
              </Header>
            </Hidden>
          </Box>
          <Box display={{ _: 'none', lg: 'block' }}>
            <img
              src={brianGrant1xImage.src}
              srcSet={`${brianGrant1xImage.src} 1x, ${brianGrant2xImage.src} 2x, ${brianGrant3xImage.src} 3x`}
              alt="Brian Grant Photo"
              width="100%"
            />
          </Box>
        </Box>
        <Wave type="white" />
      </Box>
      <Box mt="80px" mb={{ _: '20px', md: '100px' }} px="15px">
        <Box
          display="flex"
          maxWidth="1100px"
          mx="auto"
          flexDirection={{ _: 'column', lg: 'row' }}
          alignItems="center"
        >
          <Box
            flex="5"
            mr={{ _: '0', md: '70px' }}
            px="15px"
            textAlign={{ _: 'center', md: 'left' }}
            mb="50px"
          >
            <Header variant="h3" bold={true} color="fillBlackBlack" sx={{ mb: '30px' }}>
              Modern Infrastructure Utilizes Strong Separation of Concerns
            </Header>
            <Header variant="h6" color="fillBlackGray">
              The separation of concerns is at the core of Crossplane’s approach to infrastructure
              and application management. This empowers team members to deliver value by focusing on
              what they know best.
            </Header>
          </Box>
          <Box flex="4" pr={{ _: '0', lg: '20px' }}>
            <Accordion
              title="Administrators"
              active={currentPersona === 0}
              onClick={() => setCurrentPersona(0)}
            >
              Administrators have detailed control of their infrastructure and can define
              environment specifics and policies with the help of Crossplanes strong separation of
              concerns. Empowering Admins to focus on what they do best.
            </Accordion>
            <Accordion
              title="Operators"
              active={currentPersona === 1}
              onClick={() => setCurrentPersona(1)}
            >
              SREs and DevOps engineers compose cloud APIs using Crossplane’s Composition feature.
              Policies, permissions, and quotas for resources are encapsulated behind an API and
              continuously reconciled by the control plane.
            </Accordion>
            <Accordion
              title="Developers"
              active={currentPersona === 2}
              onClick={() => setCurrentPersona(2)}
            >
              App teams can self-service infrastructure safely by consuming APIs built by platform
              teams and provided by Crossplane. This workflow was designed with GitOps best
              practices in mind and is easily integrated into existing pipelines.
            </Accordion>
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
          <RelatedResource
            type="video"
            href="https://www.youtube.com/watch?v=WGfYlssfIIk&list=PL510POnNVaaZx1QDIn_-77igM1COuHaHV&index=3"
          >
            The Power of Control Planes and the Kubernetes Resource Model
          </RelatedResource>
          <RelatedResource type="video" href="https://www.youtube.com/watch?v=LyN50Ul2KOM">
            Cloud Native Live - Crossplane: GitOps-based Infrastructure as Code through Kubernetes
            API
          </RelatedResource>
          <RelatedResource type="video" href="https://www.youtube.com/watch?v=UMAReen7dVk">
            The Rise of Kubernetes as a Universal Control Plane, Janakiram MSV
          </RelatedResource>
          <RelatedResource
            type="document"
            href="https://thenewstack.io/kubernetes-is-not-just-about-containers-its-about-the-api/"
          >
            Kubernetes is not Just About Containers, It’s About the API
          </RelatedResource>
          <RelatedResource
            type="document"
            href="https://blog.cedriccharly.com/post/20200426-kubernetes-the-universal-control-plane/"
          >
            Kubernetes, the Universal Control Plane
          </RelatedResource>
        </Box>
      </Box>
      <VideoModal open={isVideoVisible} setOpen={setVideoVisible} videoId="WGfYlssfIIk" />
    </PageProvider>
  );
};

export default BeyondIaC;
