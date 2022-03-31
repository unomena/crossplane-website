import React, { CSSProperties, useState } from 'react';

import { css } from '@emotion/react';
import { Box, Hidden } from '@mui/material';
import { styled } from '@mui/system';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import Image, { ImageProps } from 'next/image';

import PageProvider from 'src/components/PageProvider';
import { Wave } from 'src/components/Wave';
import { Anchor, Link } from 'src/elements/Anchor';
import { AnchorButton, Button, LinkButton } from 'src/elements/Button';
import { Card } from 'src/elements/Div';
import { Header } from 'src/elements/Header';
import { Avatar, Img } from 'src/elements/Img';
import { Paragraph } from 'src/elements/Paragraph';
import { Span } from 'src/elements/Span';
import * as routes from 'src/routes';

import ArrowLeft from 'src/svg/ArrowLeft';
import ArrowRight from 'src/svg/ArrowRight';
import TwitterIcon from 'src/svg/TwitterIcon';
// import bassam from 'public/home/bassam.png';
// import bassam2x from 'public/home/bassam@2x.png';
import bassam3x from 'public/home/bassam@3x.png';
// import daniel from 'public/home/daniel.png';
// import daniel2x from 'public/home/daniel@2x.png';
import daniel3x from 'public/home/daniel@3x.png';
// import enterpriseGrade from 'public/home/enterprise-grade-desktop.png';
// import enterpriseGrade2x from 'public/home/enterprise-grade-desktop@2x.png';
import enterpriseGrade3x from 'public/home/enterprise-grade-desktop@3x.png';
// import hero1x from 'public/home/hero.png';
// import hero2x from 'public/home/hero@2x.png';
import hero3x from 'public/home/hero@3x.png';
// import heroMobile1x from 'public/home/hero-mobile.png';
// import heroMobile2x from 'public/home/hero-mobile@2x.png';
import heroMobile3x from 'public/home/hero-mobile@3x.png';
import janakiram from 'public/home/janakiram.png';
// import jay from 'public/home/jay.png';
// import jay2x from 'public/home/jay@2x.png';
import jay3x from 'public/home/jay@3x.png';
// import kelseyHightower from 'public/home/Kelsey Hightower.png';
// import kelseyHightower2x from 'public/home/Kelsey Hightower@2x.png';
import kelseyHightower3x from 'public/home/Kelsey Hightower@3x.png';
// import customerSlot3Logo from 'public/home/logo-db.png';
// import customerSlot3Logo2x from 'public/home/logo-db@2x.png';
import customerSlot3Logo3x from 'public/home/logo-db@3x.png';
// import customerSlot1Logo from 'public/home/logo-dfds.png';
// import customerSlot1Logo2x from 'public/home/logo-dfds@2x.png';
import customerSlot1Logo3x from 'public/home/logo-dfds@3x.png';
// import customerSlot2Logo from 'public/home/logo-grupo-boticario.png';
// import customerSlot2Logo2x from 'public/home/logo-grupo-boticario@2x.png';
import customerSlot2Logo3x from 'public/home/logo-grupo-boticario@3x.png';
// import customerSlot4Logo from 'public/home/logo-plotly.png';
// import customerSlot4Logo2x from 'public/home/logo-plotly@2x.png';
import customerSlot4Logo3x from 'public/home/logo-plotly@3x.png';
// import customerSlot5Logo from 'public/home/logo-ptc.png';
// import customerSlot5Logo2x from 'public/home/logo-ptc@2x.png';
import customerSlot5Logo3x from 'public/home/logo-ptc@3x.png';
// import marcCambell from 'public/home/Marc Campbell.png';
// import marcCambell2x from 'public/home/Marc Campbell@2x.png';
import marcCambell3x from 'public/home/Marc Campbell@3x.png';
import mauricio from 'public/home/mauricio.png';
// import nic from 'public/home/nic.png';
// import nic2x from 'public/home/nic@2x.png';
import nic3x from 'public/home/nic@3x.png';
// import normanJoyner from 'public/home/Norman Joyner.png';
// import normanJoyner2x from 'public/home/Norman Joyner@2x.png';
import normanJoyner3x from 'public/home/Norman Joyner@3x.png';
import largeRightOval from 'public/home/oval-copy-5.svg';
import largeLeftOval from 'public/home/oval-copy-11.svg';
import largeRightOvalMobile from 'public/home/oval-copy-30.svg';
import largeLeftOvalMobile from 'public/home/oval-copy-31.svg';
import cornflowerOvalLeft from 'public/home/oval-cornflower-left.svg';
import cornflowerOvalRight from 'public/home/oval-cornflower-right.svg';
// import runLikeVendors from 'public/home/run-like-vendors-desktop.png';
// import runLikeVendors2x from 'public/home/run-like-vendors-desktop@2x.png';
import runLikeVendors3x from 'public/home/run-like-vendors-desktop@3x.png';
import supportTeam from 'public/home/support-team-desktop.svg';
import unlockKubernetes from 'public/home/unlock-kubernetes-desktop.svg';

// const BackgroundOval = styled(Img)`
//   position: absolute;
//   z-index: 10;
// `;

const SubHeader = styled(Header)`
  && {
    font-size: 16px;
    line-height: 28px;

    ${MQ.md} {
      font-size: 24px;
      line-height: 40px;
    }
  }
`;

const HeaderButton = styled(AnchorButton)`
  text-align: center;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 20px;

  ${MQ.md} {
    width: unset;
    font-size: 20px;
    line-height: 25px;
    padding: 18px 27px;
  }
`;

const CustomersHeader = styled(Header)`
  & {
    width: 100%;
    margin-bottom: 60px;
    text-align: center;

    font-size: 24px;
    line-height: 28px;

    ${MQ.md} {
      font-size: 32px;
      line-height: 52px;
    }
  }
`;

const CircleButton = styled(Button)`
  display: flex;
  padding: 18px;
  width: 55px;
  height: 55px;
`;

const TwitterCardsContainer = styled(Box)<{ currentIndex: number }>`
  display: flex;
  width: 100%;
  position: relative;
  left: 0;
  padding: 0 15px;
  transition: left 0.2s ease-in-out;
  ${({ currentIndex }) =>
    currentIndex > 0 && `left: calc(-${currentIndex * 100}% + ${currentIndex * 15}px);`}

  ${MQ.md} {
    padding: 0 30px;
    ${({ currentIndex }) => currentIndex > 0 && `left: -${currentIndex * 585}px;`}
  }

  ${MQ.xl} {
    padding: 0;
  }
`;

const activeTwitterCardStyle = css`
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 0.05);
`;

const TwitterCard = styled(Card)<{ thisIndex: number; currentIndex: number }>`
  display: flex;
  flex-direction: column;
  box-shadow: unset;
  color: ${COLORS.fillBlackBlack};
  width: 100%;
  padding: 44px 15px 41px 40px;
  margin-right: 15px;
  flex-shrink: 0;

  &:last-of-type {
    margin-right: 0;
  }

  ${MQ.md} {
    width: 555px;
    height: 400px;
    padding: 44px 40px 50px 40px;
    margin-right: 30px;
  }

  ${({ thisIndex, currentIndex }) => thisIndex === currentIndex && activeTwitterCardStyle}
`;

const TwitterMessage = styled(Paragraph)`
  font-size: 20px;
  line-height: 36px;
`;

const TwitterTitle = styled(Span)`
  font-size: 20px;
  line-height: 24px;
`;

const TwitterSubtitle = styled(Box)`
  display: flex;
  color: ${COLORS.fillBlackGray};
  fill: ${COLORS.fillBlackGray};
`;

const TwitterSubtitleMessage = styled(Span)`
  font-size: 16px;
  line-height: 28px;
  color: ${COLORS.fillBlackGray};

  ${MQ.sm} {
    &:first-of-type::after {
      content: '-';
      margin: 0 4px;
    }
  }
`;

const TwitterCardBubbles = styled(Box)`
  display: flex;
  justify-content: center;

  ${MQ.md} {
    display: none;
  }
`;

const bubbleActiveStyle = css`
  border: 2px solid ${COLORS.fillBlackBlack};
  background-color: ${COLORS.fillBlackBlack};
`;

const Bubble = styled(Box)<{ thisIndex: number; currentIndex: number }>`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 2px solid ${COLORS.fillBlackGrayLight};
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  ${({ thisIndex, currentIndex }) => thisIndex === currentIndex && bubbleActiveStyle}
`;

const CrossplaneSpeakersContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
  flex-direction: column;
  max-width: 1340px;

  ${MQ.lg} {
    margin-bottom: 54px;
    align-items: initial;
    flex-direction: row;
    padding: 0 80px;
  }
`;

const CrossplaneSpeakersOvalImg = styled('img')`
  display: none;
  position: absolute;
  z-index: 20;

  ${MQ.md} {
    display: block;
  }
`;

const CrossplaneSpeakerContainer = styled(Anchor)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  width: 100%;
  text-decoration: none;

  ${MQ.md} {
    flex-direction: row;
  }

  ${MQ.lg} {
    justify-content: unset;
    flex-direction: column;
    width: 159px;
    margin-bottom: 0;
  }

  ${MQ.xl} {
    align-items: center;
  }

  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const CrossplaneSpeakerAvatarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

// const CrossplaneSpeakerAvatar = styled(Avatar)`
//   margin: 0 0 -30px 0;
// `;

const CrossplaneSpeakerKeynoteTag = styled(Button)`
  ${fontAvenirBold}
  padding: 6px 18px;
  font-size: 14px;
  line-height: 20px;
  width: 97px;
  height: 36px;
  margin: -36px auto 0 auto;
  z-index: 1;

  &&&:hover {
    cursor: default;
    border-color: transparent;
    background-color: ${COLORS.aquaMarine};
    color: ${COLORS.white};
    fill: ${COLORS.white};
  }
`;

const CrossplaneSpeakerTextContainer = styled(Box)`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const CrossplaneSpeakerHeader = styled(Header)`
  ${fontAvenirBold}
  font-size: 20px;
  line-height: 25px;
  color: ${COLORS.white};
  text-align: center;
  margin: 17px 0 28px 0;
`;

const CrossplaneSpeakerName = styled(Span)`
  ${fontAvenirBold}
  font-size: 16px;
  line-height: 18px;
  color: ${COLORS.white};
  margin-bottom: 8px;
  text-align: center;
`;

const CrossplaneSpeakerTitle = styled(Span)`
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.white};
  text-align: center;
  margin-left: 0;
`;

const CrossplaneSpeakersButton = styled(AnchorButton)`
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 6px;

  ${MQ.md} {
    width: unset;
    font-size: 20px;
    line-height: 25px;
    padding: 20px 40px;
  }
`;

const CrossplaneSpeakersText = styled(Paragraph)`
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  width: 260px;

  ${MQ.md} {
    width: unset;
    font-size: 20px;
    line-height: 26px;
    margin-right: 13px;
  }
`;

const NewsAndEventHeader = styled(Header)`
  margin: 0 auto 20px auto;
  color: ${COLORS.fillBlackBlack};
  text-align: center;
  font-size: 32px;
  line-height: 37px;

  ${MQ.md} {
    font-size: 40px;
    line-height: 50px;
  }
`;

const NewsAndEventParagraph = styled(Paragraph)`
  color: ${COLORS.fillBlackGray};
  text-align: center;
  margin-bottom: 50px;
  font-size: 16px;
  line-height: 28px;

  ${MQ.md} {
    font-size: 18px;
    line-height: 32px;
  }
`;

const NewsAndEventCard = styled(Card)`
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.02);
  padding: 42px 32px 32px 28px;
  border-radius: 16px;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;

  ${MQ.lg} {
    width: 300px;
    height: 382px;
    margin-right: 26px;
    text-align: left;
  }

  ${MQ.xl} {
    width: 364px;
    height: 318px;
  }

  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const NewsAndEventTypeTag = styled(Button)`
  padding: 6px 15px;
  font-weight: 600;
  background-color: rgba(54, 179, 126, 0.1);
  color: ${COLORS.fillActionSuccess};
  cursor: default;
  margin-bottom: 17px;
`;

const NewsAndEventTitle = styled(Header)`
  ${fontAvenirBold}
  /* width: 297px; */
  color: ${COLORS.fillBlackBlack};
  margin-bottom: 8px;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.2px;
`;

const NewsAndEventDescription = styled(Paragraph)`
  /* width: 296px; */
  font-size: 18px;
  line-height: 32px;
  color: ${COLORS.fillBlackGray};
  margin-bottom: 13px;

  ${MQ.lg} {
    height: 128px;
  }

  ${MQ.xl} {
    height: 96px;
  }
`;

const CrossplaneSpeakerAvatar: typeof Avatar = (props) => {
  return <Avatar sx={{ margin: '0 0 -30px 0' }} {...props} />;
};

const CustomerSlotBox = ({
  href,
  src,
  alt,
}: ImageProps & {
  href: string;
  alt: string;
}) => {
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        mx: '1px',
        flex: 1,
        height: { _: '20px', sm: '30px', md: '40px' },
        position: 'relative',
      }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="contain" placeholder="blur" />
    </Anchor>
  );
};

const BackgroundOval = ({
  position,
  mt,
  mtMobile,
}: {
  position: 'left' | 'right';
  mt?: string;
  mtMobile?: string;
}) => {
  let imageSrc = '';
  let imgStyles: CSSProperties = { position: 'absolute', zIndex: 10 };
  let imageSrcMobile = '';
  let imgStylesMobile: CSSProperties = { position: 'absolute', zIndex: 10 };

  if (position === 'left') {
    imageSrcMobile = largeLeftOvalMobile.src;
    imgStylesMobile = {
      ...imgStyles,
      // left: '-120px',
      left: '0',
      width: '64.4%',
      marginTop: mtMobile,
    };

    imageSrc = largeLeftOval.src;
    imgStyles = {
      ...imgStyles,
      left: '0',
      width: '31.8%',
      height: '919px',
      marginTop: mt,
    };
  }
  if (position === 'right') {
    imageSrcMobile = largeRightOvalMobile.src;
    imgStylesMobile = {
      ...imgStyles,
      // right: '-120px',
      right: '0',
      width: '64.4%',
      marginTop: mtMobile,
    };

    imageSrc = largeRightOval.src;
    imgStyles = {
      ...imgStyles,
      right: '0',
      width: '31.8%',
      height: '919px',
      marginTop: mt,
    };
  }

  return (
    <>
      <Hidden lgUp>
        <img src={imageSrcMobile} alt="background oval" style={imgStylesMobile} />
      </Hidden>
      <Hidden lgDown>
        <img src={imageSrc} alt="background oval" style={imgStyles} />
      </Hidden>
    </>
  );
};

const Home: React.FC = () => {
  const [twitterCarouselIndex, setTwitterCarouselIndex] = useState(0);

  const handleClickCard = (index: number) => () => setTwitterCarouselIndex(index);
  const handleClickPrevious = () => {
    if (twitterCarouselIndex <= 0) {
      return;
    }

    setTwitterCarouselIndex(twitterCarouselIndex - 1);
  };
  const handleClickNext = () => {
    if (twitterCarouselIndex >= 4) {
      return;
    }

    setTwitterCarouselIndex(twitterCarouselIndex + 1);
  };

  return (
    <PageProvider>
      <Box pt={{ _: '37px', md: '80px' }} bgcolor={COLORS.cornflower} textAlign="center">
        <Box mx="auto" maxWidth="1156px" px="30px">
          <Header variant="h1" bold={true} color="white" sx={{ mb: { _: '10px', lg: '25px' } }}>
            Rise Above The Clouds
          </Header>
          <SubHeader variant="h3" color="white" sx={{ mb: { _: '28px', lg: '33px' } }}>
            Manage infrastructure, eliminate configuration drift, and empower developers with
            self-service using the Upbound Universal Cloud Platform.
          </SubHeader>
          <HeaderButton
            href={routes.cloudRegisterUrl}
            btnType="aquaMarineFill"
            bold={true}
            hasShadow={true}
            sx={{
              mr: { _: '0', md: '10px' },
              mb: { _: '10px', md: '0' },
              minWidth: '220px',
            }}
          >
            Try for Free
          </HeaderButton>
          <HeaderButton
            href={routes.contactSalesUrl}
            btnType="whiteOutline"
            bold={true}
            sx={{
              minWidth: '220px',
              '&:hover': {
                color: COLORS.cornflower,
              },
            }}
          >
            Request Demo
          </HeaderButton>
          <Hidden mdUp>
            <Img
              src={heroMobile3x}
              priority
              // srcSet={`${heroMobile1x} 1x, ${heroMobile2x} 2x, ${heroMobile3x} 3x`}
              alt="cli and console screenshot"
              width="100%"
              sx={{
                m: { _: '60px 0 -150px 0', md: '60px 0 -20% 0' },
                position: 'relative',
                zIndex: 11,
              }}
            />
          </Hidden>
          <Hidden mdDown>
            <Img
              src={hero3x}
              priority
              // srcSet={`${hero1x} 1x, ${hero2x} 2x, ${hero3x} 3x`}
              alt="cli and console screenshot"
              width="100%"
              sx={{
                mb: '-90px',
                mt: '60px',
              }}
            />
          </Hidden>
        </Box>
        <Wave type="white" />
      </Box>
      <Box
        display="flex"
        flexShrink={0}
        zIndex={20}
        position="relative"
        px={{ _: '30px', sm: '60px', md: '60px', lg: '30px' }}
        maxWidth={{ _: 'unset', lg: '1250px' }}
        m={{ _: '25px auto 0 auto', sm: '0 auto' }}
        flexDirection={{ _: 'row', sm: 'row' }}
        justifyContent="center"
        flexWrap="wrap"
      >
        <CustomersHeader variant="h2" color="fillBlackBlack" bold={true}>
          Trusted by Industry Leaders and Best-in-class Brands
        </CustomersHeader>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          height={{ _: '20px', sm: '30px', md: '46px' }}
        >
          <CustomerSlotBox
            href={routes.customerSlot1Url}
            src={customerSlot1Logo3x}
            alt={'Dfds Logo'}
          />
          <CustomerSlotBox
            href={routes.customerSlot2Url}
            src={customerSlot2Logo3x}
            alt={'Grupo Boticario Logo'}
          />
          <CustomerSlotBox
            href={routes.customerSlot3Url}
            src={customerSlot3Logo3x}
            alt={'Db Logo'}
          />
          <CustomerSlotBox
            href={routes.customerSlot4Url}
            src={customerSlot4Logo3x}
            alt={'Plotly Logo'}
          />
          <CustomerSlotBox
            href={routes.customerSlot5Url}
            src={customerSlot5Logo3x}
            alt={'Ptc Logo'}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        maxWidth={{ _: 'unset', lg: '1250px' }}
        mx="auto"
        mt="150px"
        flexDirection={{ _: 'column', lg: 'unset' }}
        px={{ _: '0', md: '60px', lg: '0' }}
      >
        <Box
          display="flex"
          px={{ _: '30px', md: '0' }}
          width={{ _: '100%', lg: '345px', xl: '480px' }}
          m={{ _: '0 0 70px 0', lg: '0 auto', xl: '74px auto 0 50px' }}
          flexDirection="column"
          alignItems={{ _: 'center', lg: 'start' }}
          flexShrink={0}
          zIndex={20}
          position="relative"
        >
          <Header
            variant="h2"
            bold={true}
            color="fillBlackBlack"
            sx={{
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Run Your Business Like the Cloud Vendors Run Theirs
          </Header>
          <Paragraph
            color="slate"
            sx={{
              mt: '30px',
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Operate your infrastructure environments like an internal cloud platform. Using the
            strong separation of concerns enabled by Upbound's{' '}
            <Link href={routes.productsUxpRoute}>Enterprise Crossplane</Link> distribution, platform
            teams can abstract away the complexities of infrastructure while providing a simple
            interface to application teams.
          </Paragraph>
          <LinkButton
            href={routes.productsUbcRoute}
            btnType="blackOutline"
            sx={{
              mt: '30px',
              width: '137px',
            }}
          >
            Learn More
          </LinkButton>
        </Box>
        <Box display="flex" flexShrink={1} flexDirection="column" justifyContent="center">
          <BackgroundOval position="right" mt="-6%" mtMobile="0" />
          <Img
            src={runLikeVendors3x}
            // srcSet={`${runLikeVendors} 1x, ${runLikeVendors2x} 2x, ${runLikeVendors3x} 3x`}
            alt="Run like vendors image"
            sx={{
              width: { _: '100%', lg: '518px' },
              height: { _: 'initial', lg: '465px' },
              position: 'relative',
              zIndex: 20,
              ml: { _: 'unset', lg: '22px' },
            }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        maxWidth={{ _: 'unset', lg: '1250px' }}
        mx="auto"
        mt={{ _: '160px', xl: '180px' }}
        flexDirection={{ _: 'column-reverse', lg: 'unset' }}
        px={{ _: '0', md: '60px', lg: '0' }}
      >
        <Box display="flex" flexShrink={1} flexDirection="column" justifyContent="center">
          <BackgroundOval position="left" mt="-6.5%" mtMobile="14%" />
          <Img
            src={unlockKubernetes}
            alt="Unlock kubernetes"
            sx={{
              width: { _: '100%', lg: '495px' },
              position: 'relative',
              zIndex: 20,
              mt: { _: 'unset', xl: '95px' },
            }}
          />
        </Box>
        <Box
          display="flex"
          px={{ _: '30px', md: '0' }}
          width={{ _: '100%', lg: '345px', xl: '531px' }}
          m={{ _: '0 0 70px 0', lg: '0 auto', xl: '74px 50px 0 10%' }}
          flexDirection="column"
          alignItems={{ _: 'center', lg: 'start' }}
          flexShrink={0}
          zIndex={20}
          position="relative"
        >
          <Header
            variant="h2"
            bold={true}
            color="fillBlackBlack"
            sx={{
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Unlock the Full Power of Kubernetes
          </Header>
          <Paragraph
            color="slate"
            sx={{
              mt: '30px',
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Upbound empowers platform teams with a Kubernetes-based approach for infrastructure
            management, allowing them to eliminate configuration drift and deliver more reliable
            applications.
          </Paragraph>
          <LinkButton
            href={routes.productsUxpRoute}
            btnType="blackOutline"
            sx={{
              mt: '30px',
              width: '137px',
            }}
          >
            Learn More
          </LinkButton>
        </Box>
      </Box>
      <Box
        display="flex"
        maxWidth={{ _: 'unset', lg: '1250px' }}
        mx="auto"
        mt={{ _: '160px', xl: '180px' }}
        flexDirection={{ _: 'column', lg: 'unset' }}
        px={{ _: '0', md: '60px', lg: '0' }}
      >
        <Box
          display="flex"
          px={{ _: '30px', md: '0' }}
          width={{ _: '100%', lg: '345px', xl: '480px' }}
          m={{ _: '0 0 70px 0', lg: '0 auto', xl: '74px auto 0 50px' }}
          flexDirection="column"
          alignItems={{ _: 'center', lg: 'start' }}
          flexShrink={0}
          zIndex={20}
          position="relative"
        >
          <Header
            variant="h2"
            bold={true}
            color="fillBlackBlack"
            sx={{
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Enterprise Grade Products With an Open Source DNA
          </Header>
          <Paragraph
            color="slate"
            sx={{
              mt: '30px',
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Break free of vendor lock-in and misaligned incentives. Our{' '}
            <Link href={routes.productsUbcRoute}>Universal Cloud Platform</Link> is based on the
            well established patterns and efforts of the Crossplane community and the control plane
            architecture pioneered by Kubernetes before it.
          </Paragraph>
          <LinkButton
            href={routes.productsUbcRoute}
            btnType="blackOutline"
            sx={{
              mt: '30px',
              width: '137px',
            }}
          >
            Learn More
          </LinkButton>
        </Box>
        <Box display="flex" flexShrink={1} flexDirection="column" justifyContent="center">
          <BackgroundOval position="right" mt="-9.5%" mtMobile="15%" />
          <Img
            src={enterpriseGrade3x}
            // srcSet={`${enterpriseGrade} 1x, ${enterpriseGrade2x} 2x, ${enterpriseGrade3x} 3x`}
            alt="Enterprise open source software"
            sx={{
              width: { _: '100%', lg: '525px' },
              height: { _: 'initial', lg: '397px' },
              position: 'relative',
              zIndex: 20,
              ml: { _: 'unset', lg: '22px' },
            }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        maxWidth={{ _: 'unset', lg: '1250px' }}
        mx="auto"
        mt={{ _: '160px', xl: '180px' }}
        flexDirection={{ _: 'column-reverse', lg: 'unset' }}
        px={{ _: '0', md: '60px', lg: '0' }}
      >
        <Box display="flex" flexShrink={1} flexDirection="column" justifyContent="center">
          <BackgroundOval position="left" mt="12%" mtMobile="52%" />
          <Img
            src={supportTeam}
            alt="24/7 customer support"
            sx={{
              width: { _: '100%', lg: '514px' },
              height: { _: 'initial', lg: '519px' },
              position: 'relative',
              zIndex: 20,
              mt: { _: 'unset', xl: '95px' },
            }}
          />
        </Box>
        <Box
          display="flex"
          px={{ _: '30px', md: '0' }}
          width={{ _: '100%', lg: '345px', xl: '531px' }}
          m={{ _: '0 0 70px 0', lg: '0 auto', xl: '74px 50px 0 10%' }}
          flexDirection="column"
          alignItems={{ _: 'center', lg: 'start' }}
          flexShrink={0}
          zIndex={20}
          position="relative"
        >
          <Header
            variant="h2"
            bold={true}
            color="fillBlackBlack"
            sx={{
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            24/7 Customer Support for Your Team
          </Header>
          <Paragraph
            color="slate"
            sx={{
              mt: '30px',
              textAlign: { _: 'center', lg: 'left' },
            }}
          >
            Designed to accelerate time to value. Access to Upbound expertise, API development,
            solution guidance and guaranteed enterprise SLAs for Crossplane.
          </Paragraph>
          <LinkButton
            href={routes.pricingRoute}
            btnType="blackOutline"
            sx={{
              mt: '30px',
              width: '137px',
            }}
          >
            Learn More
          </LinkButton>
        </Box>
      </Box>
      <Box
        maxWidth="1143px"
        mx="auto"
        mt="180px"
        position="relative"
        mb={{ _: '121px', md: '147px' }}
        zIndex={20}
      >
        <Box
          display="flex"
          mb="45px"
          px={{ _: '30px', xl: '0' }}
          flexWrap={{ _: 'wrap', md: 'nowrap' }}
          justifyContent="center"
        >
          <Header
            variant="h3"
            bold={true}
            color="fillBlackBlack"
            sx={{
              width: { _: '100%', md: 'auto' },
              mr: { _: '0', md: 'auto' },
              mb: { _: '30px', md: '0' },
              textAlign: { _: 'center', md: 'left' },
              fontSize: '32px',
              lineHeight: '37px',

              [MQ.md]: {
                fontSize: '40px',
                lineHeight: '52px',
                position: 'relative',
                left: '10px',
              },
            }}
          >
            What Engineers Are Saying
          </Header>
          <CircleButton
            btnType="blackOutline"
            disabled={twitterCarouselIndex <= 0}
            onClick={handleClickPrevious}
            sx={{
              mr: '15px',
            }}
          >
            <ArrowLeft />
          </CircleButton>
          <CircleButton
            btnType="blackOutline"
            disabled={twitterCarouselIndex >= 4}
            onClick={handleClickNext}
            sx={{
              mr: { _: '0', xl: '70px' },
            }}
          >
            <ArrowRight />
          </CircleButton>
        </Box>
        <TwitterCardsContainer currentIndex={twitterCarouselIndex} mb={{ _: '30px', md: '0' }}>
          <TwitterCard
            onClick={handleClickCard(0)}
            thisIndex={0}
            currentIndex={twitterCarouselIndex}
          >
            <Avatar
              size="54px"
              src={kelseyHightower3x}
              // srcSet={`${kelseyHightower} 1x, ${kelseyHightower2x} 2x, ${kelseyHightower3x} 3x`}
            />
            <TwitterMessage
              sx={{
                mt: '32px',
                mb: '23px',
                maxWidth: 475,
              }}
            >
              The @crossplane_io team got GKE Autopilot integrated on the day it came out. That's
              pretty dope!{' '}
              <Anchor href="https://shorturl.at/ehtEH" target="_blank" rel="noopener noreferrer">
                shorturl.at/ehtEH
              </Anchor>
            </TwitterMessage>
            <TwitterTitle sx={{ mt: 'auto' }} bold={true}>
              Kelsey Hightower
            </TwitterTitle>
            <TwitterSubtitle sx={{ mt: '10px' }}>
              <TwitterIcon />
              <Box display="flex" flexDirection={{ _: 'column', sm: 'row' }} ml="10px">
                <TwitterSubtitleMessage>@Kelseyhightower</TwitterSubtitleMessage>
                <TwitterSubtitleMessage>Feb 26, 2021</TwitterSubtitleMessage>
              </Box>
            </TwitterSubtitle>
          </TwitterCard>
          <TwitterCard
            onClick={handleClickCard(1)}
            thisIndex={1}
            currentIndex={twitterCarouselIndex}
          >
            <Avatar
              size="54px"
              src={marcCambell3x}
              // srcSet={`${marcCambell} 1x, ${marcCambell2x} 2x, ${marcCambell3x} 3x`}
            />
            <TwitterMessage
              sx={{
                mt: '32px',
                mb: '23px',
                maxWidth: 475,
              }}
            >
              Excited to share this episode… Compositions are such a great idea, and more evidence
              that the real value of K8s is the control plane, not the container orchestration bits.{' '}
              <Anchor href="https://shorturl.at/qyERT" target="_blank" rel="noopener noreferrer">
                shorturl.at/qyERT
              </Anchor>
            </TwitterMessage>
            <TwitterTitle sx={{ mt: 'auto' }} bold={true}>
              Marc Campbell
            </TwitterTitle>
            <TwitterSubtitle sx={{ mt: '10px' }}>
              <TwitterIcon />
              <Box display="flex" flexDirection={{ _: 'column', sm: 'row' }} ml="10px">
                <TwitterSubtitleMessage>@mccode</TwitterSubtitleMessage>
                <TwitterSubtitleMessage>Feb 24, 2021</TwitterSubtitleMessage>
              </Box>
            </TwitterSubtitle>
          </TwitterCard>
          <TwitterCard
            onClick={handleClickCard(2)}
            thisIndex={2}
            currentIndex={twitterCarouselIndex}
          >
            <Avatar
              size="54px"
              src={normanJoyner3x}
              // srcSet={`${normanJoyner} 1x, ${normanJoyner2x} 2x, ${normanJoyner3x} 3x`}
            />
            <TwitterMessage sx={{ mt: '32px', mb: '23px', maxWidth: 475 }}>
              ... Very few companies in the cloud native space are doing truly exciting and
              impactful work. What @upbound_io is doing with @crossplane_io can't be understated;
              it's so vitally important to the industry.
            </TwitterMessage>
            <TwitterTitle sx={{ mt: 'auto' }} bold={true}>
              Norman Joyner
            </TwitterTitle>
            <TwitterSubtitle sx={{ mt: '10px' }}>
              <TwitterIcon />
              <Box display="flex" flexDirection={{ _: 'column', sm: 'row' }} ml="10px">
                <TwitterSubtitleMessage>@normanjoyner</TwitterSubtitleMessage>
                <TwitterSubtitleMessage>Feb 24, 2021</TwitterSubtitleMessage>
              </Box>
            </TwitterSubtitle>
          </TwitterCard>
          <TwitterCard
            onClick={handleClickCard(3)}
            thisIndex={3}
            currentIndex={twitterCarouselIndex}
          >
            <Avatar size="54px" src={janakiram} />
            <TwitterMessage sx={{ mt: '32px', mb: '23px', maxWidth: 475 }}>
              How Crossplane Transforms Kubernetes Into A Universal Control Plane via @forbes{' '}
              <Anchor href="https://shorturl.at/hpALP" target="_blank" rel="noopener noreferrer">
                shorturl.at/hpALP
              </Anchor>
            </TwitterMessage>
            <TwitterTitle sx={{ mt: 'auto' }} bold={true}>
              Janakiram MSV
            </TwitterTitle>
            <TwitterSubtitle sx={{ mt: '10px' }}>
              <TwitterIcon />
              <Box display="flex" flexDirection={{ _: 'column', sm: 'row' }} ml="10px">
                <TwitterSubtitleMessage>@janakiramm</TwitterSubtitleMessage>
                <TwitterSubtitleMessage>Sep 14, 2021</TwitterSubtitleMessage>
              </Box>
            </TwitterSubtitle>
          </TwitterCard>
          <TwitterCard
            onClick={handleClickCard(4)}
            thisIndex={4}
            currentIndex={twitterCarouselIndex}
          >
            <Avatar size="54px" src={mauricio} />
            <TwitterMessage sx={{ mt: '32px', mb: '23px', maxWidth: 475 }}>
              You folks @crossplane_io made my day... there are some really interesting integrations
              coming{' '}
              <Anchor href="https://shorturl.at/yBFVX" target="_blank" rel="noopener noreferrer">
                shorturl.at/yBFVX
              </Anchor>
            </TwitterMessage>
            <TwitterTitle sx={{ mt: 'auto' }} bold={true}>
              Mauricio Salatino
            </TwitterTitle>
            <TwitterSubtitle sx={{ mt: '10px' }}>
              <TwitterIcon />
              <Box display="flex" flexDirection={{ _: 'column', sm: 'row' }} ml="10px">
                <TwitterSubtitleMessage>@salaboy</TwitterSubtitleMessage>
                <TwitterSubtitleMessage>Oct 15, 2021</TwitterSubtitleMessage>
              </Box>
            </TwitterSubtitle>
          </TwitterCard>
        </TwitterCardsContainer>
        <TwitterCardBubbles>
          <Bubble onClick={handleClickCard(0)} thisIndex={0} currentIndex={twitterCarouselIndex} />
          <Bubble onClick={handleClickCard(1)} thisIndex={1} currentIndex={twitterCarouselIndex} />
          <Bubble onClick={handleClickCard(2)} thisIndex={2} currentIndex={twitterCarouselIndex} />
          <Bubble onClick={handleClickCard(3)} thisIndex={3} currentIndex={twitterCarouselIndex} />
          <Bubble onClick={handleClickCard(4)} thisIndex={4} currentIndex={twitterCarouselIndex} />
        </TwitterCardBubbles>
      </Box>
      <Wave type="cornflower" />
      <Box bgcolor={COLORS.cornflower}>
        <Box position="relative">
          <CrossplaneSpeakersOvalImg
            src={cornflowerOvalLeft.src}
            alt="oval"
            sx={{ left: 0, top: '-177px' }}
          />
          <CrossplaneSpeakersOvalImg
            src={cornflowerOvalRight.src}
            alt="oval"
            sx={{
              right: 0,
              bottom: '-137px',
            }}
          />
          <Box
            display="flex"
            position="relative"
            zIndex={30}
            flexDirection="column"
            alignItems="center"
            color="white"
            mb={{ _: '15px', lg: '56px' }}
            px={{ _: '30px', lg: '0' }}
          >
            <Header
              color="white"
              bold={true}
              variant="h2"
              sx={{
                m: '20px auto 30px auto',
                textAlign: 'center',
                fontSize: '36px',
                lineHeight: '48px',

                [MQ.sm]: {
                  fontSize: '40px',
                  lineHeight: '50px',
                },
              }}
            >
              Virtual Crossplane Community Day EU 2021
            </Header>
            <Paragraph
              sx={{
                mb: { _: '49px', md: '86px' },
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '30px',

                [MQ.sm]: {
                  fontSize: '18px',
                  lineHeight: '32px',
                },
              }}
            >
              We share common trends and strategies for improving your rental income and making sure
              you stay in high demand.
            </Paragraph>
            <CrossplaneSpeakersContainer>
              <CrossplaneSpeakerContainer
                href="https://www.youtube.com/watch?v=BsAE5oUQR6A&list=PLj6h78yzYM2OFWBatWHbWgyoLNmCyAqJ0&index=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CrossplaneSpeakerAvatarContainer>
                  <CrossplaneSpeakerAvatar
                    size="208px"
                    src={bassam3x}
                    // srcSet={`${bassam} 1x, ${bassam2x} 2x, ${bassam3x} 3x`}
                  />
                  <CrossplaneSpeakerKeynoteTag btnType="aquaMarineFill" hasShadow={false}>
                    Keynote
                  </CrossplaneSpeakerKeynoteTag>
                </CrossplaneSpeakerAvatarContainer>
                <CrossplaneSpeakerTextContainer>
                  <CrossplaneSpeakerHeader variant="h5" sx={{ maxWidth: '272px' }}>
                    Crossplane at the Crossroads
                  </CrossplaneSpeakerHeader>
                  <CrossplaneSpeakerName sx={{ mt: { _: 'auto' } }}>
                    Bassam Tabbara
                  </CrossplaneSpeakerName>
                  <CrossplaneSpeakerTitle sx={{ width: { xl: '272px' } }}>
                    CEO & Founder of Upbound
                  </CrossplaneSpeakerTitle>
                </CrossplaneSpeakerTextContainer>
              </CrossplaneSpeakerContainer>
              <CrossplaneSpeakerContainer
                href="https://www.youtube.com/watch?v=AvIFoVQt4p8&list=PLj6h78yzYM2OFWBatWHbWgyoLNmCyAqJ0&index=3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CrossplaneSpeakerAvatarContainer>
                  <CrossplaneSpeakerAvatar
                    size="208px"
                    src={jay3x}
                    // srcSet={`${jay} 1x, ${jay2x} 2x, ${jay3x} 3x`}
                  />
                  <CrossplaneSpeakerKeynoteTag btnType="aquaMarineFill" hasShadow={false}>
                    Keynote
                  </CrossplaneSpeakerKeynoteTag>
                </CrossplaneSpeakerAvatarContainer>
                <CrossplaneSpeakerTextContainer>
                  <CrossplaneSpeakerHeader variant="h5" sx={{ maxWidth: '312px' }}>
                    Operational Nirvana: The Future Belongs to the Robots
                  </CrossplaneSpeakerHeader>
                  <CrossplaneSpeakerName sx={{ mt: { _: 'auto' } }}>
                    Jay Pipes
                  </CrossplaneSpeakerName>
                  <CrossplaneSpeakerTitle sx={{ width: { xl: '312px' } }}>
                    Principal Open Source Engineer, AWS
                  </CrossplaneSpeakerTitle>
                </CrossplaneSpeakerTextContainer>
              </CrossplaneSpeakerContainer>
              <CrossplaneSpeakerContainer
                href="https://www.youtube.com/watch?v=wRgQxfrFJYU&list=PLj6h78yzYM2OFWBatWHbWgyoLNmCyAqJ0&index=5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CrossplaneSpeakerAvatarContainer>
                  <CrossplaneSpeakerAvatar
                    size="208px"
                    src={nic3x}
                    // srcSet={`${nic} 1x, ${nic2x} 2x, ${nic3x} 3x`}
                  />
                </CrossplaneSpeakerAvatarContainer>
                <CrossplaneSpeakerTextContainer>
                  <CrossplaneSpeakerHeader variant="h5" sx={{ maxWidth: '302px' }}>
                    Outgrowing Terraform Breakout Session
                  </CrossplaneSpeakerHeader>
                  <CrossplaneSpeakerName sx={{ mt: { _: 'auto' } }}>Nic Cope</CrossplaneSpeakerName>
                  <CrossplaneSpeakerTitle sx={{ width: { xl: '302px' } }}>
                    Principal Software Architect, Upbound
                  </CrossplaneSpeakerTitle>
                </CrossplaneSpeakerTextContainer>
              </CrossplaneSpeakerContainer>
              <CrossplaneSpeakerContainer
                href="https://www.youtube.com/watch?v=ictc3lucceI&list=PLj6h78yzYM2OFWBatWHbWgyoLNmCyAqJ0&index=16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CrossplaneSpeakerAvatarContainer>
                  <CrossplaneSpeakerAvatar
                    size="208px"
                    src={daniel3x}
                    // srcSet={`${daniel} 1x, ${daniel2x} 2x, ${daniel3x} 3x`}
                  />
                </CrossplaneSpeakerAvatarContainer>
                <CrossplaneSpeakerTextContainer>
                  <CrossplaneSpeakerHeader variant="h5" sx={{ maxWidth: '288px' }}>
                    Emerging Trends in Cloud Engineering Panel
                  </CrossplaneSpeakerHeader>
                  <CrossplaneSpeakerName sx={{ mt: { _: 'auto' } }}>
                    Daniel Bryant
                  </CrossplaneSpeakerName>
                  <CrossplaneSpeakerTitle sx={{ width: { xl: '288px' }, minWidth: '170px' }}>
                    Director of Dev Relations, Ambassador Labs
                  </CrossplaneSpeakerTitle>
                </CrossplaneSpeakerTextContainer>
              </CrossplaneSpeakerContainer>
            </CrossplaneSpeakersContainer>
            <CrossplaneSpeakersButton
              href="https://www.youtube.com/playlist?list=PLj6h78yzYM2OFWBatWHbWgyoLNmCyAqJ0"
              target="_blank"
              rel="noopener noreferrer"
              btnType="aquaMarineFill"
              hasShadow={true}
              sx={{ mb: '30px' }}
            >
              Watch All Sessions On Demand
            </CrossplaneSpeakersButton>
            <CrossplaneSpeakersText>
              Miss the event? Read the{' '}
              <Anchor
                href="https://blog.upbound.io/crossplane-community-day-europe-2021-recap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community Day Recap Blog Post
              </Anchor>
            </CrossplaneSpeakersText>
          </Box>
        </Box>
        <Wave type="light" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${COLORS.paleGrey}, ${COLORS.white})`,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          px={{ _: '30px', md: '0' }}
          width={{ _: '320px', sm: '100%' }}
          m={{ _: '50px auto 0 auto', lg: '44px auto 0 auto' }}
        >
          <NewsAndEventHeader bold={true} variant="h2">
            The Latest News & Events
          </NewsAndEventHeader>
          <NewsAndEventParagraph>
            Get caught up on the latest Upbound news and events.
          </NewsAndEventParagraph>
        </Box>
        <Box display="flex" flexDirection={{ _: 'column', lg: 'row' }} px={{ _: '30px', lg: '0' }}>
          <NewsAndEventCard>
            <NewsAndEventTypeTag>Blog</NewsAndEventTypeTag>
            <NewsAndEventTitle variant="h4">100% Service Coverage</NewsAndEventTitle>
            <NewsAndEventDescription>
              Crossplane now has 100% coverage for major cloud services with the new providers:
              provider-jet-aws…
            </NewsAndEventDescription>
            <AnchorButton
              href="https://blog.upbound.io/cloud-service-coverage/"
              target="_blank"
              rel="noopener noreferrer"
              btnType="blackOutline"
            >
              Read More
            </AnchorButton>
          </NewsAndEventCard>
          <NewsAndEventCard>
            <NewsAndEventTypeTag>Blog</NewsAndEventTypeTag>
            <NewsAndEventTitle variant="h4">$60M in New Funding</NewsAndEventTitle>
            <NewsAndEventDescription>
              Upbound raises $60M in funding to advance its Universal Cloud Platform. The company’s
              Series B funding…
            </NewsAndEventDescription>
            <AnchorButton
              href="https://blog.upbound.io/upbound-raises-60m-in-funding-to-advance-its-universal-cloud-platform/"
              target="_blank"
              rel="noopener noreferrer"
              btnType="blackOutline"
            >
              Read More
            </AnchorButton>
          </NewsAndEventCard>
          <NewsAndEventCard>
            <NewsAndEventTypeTag>Announcement</NewsAndEventTypeTag>
            <NewsAndEventTitle variant="h4">UXP Release Announcement</NewsAndEventTitle>
            <NewsAndEventDescription>
              Industry’s First Enterprise-Grade Distribution of the Popular CNCF Project Crossplane
              Arrives, Bringi…
            </NewsAndEventDescription>
            <AnchorButton
              href="https://www.businesswire.com/news/home/20210518005942/en/Industry%E2%80%99s-First-Enter%5B%E2%80%A6%5Dversal-Control-Plane-Approach-to-Platform-Teams-Everywhere"
              target="_blank"
              rel="noopener noreferrer"
              btnType="blackOutline"
            >
              Read More
            </AnchorButton>
          </NewsAndEventCard>
        </Box>
      </Box>
    </PageProvider>
  );
};

export default Home;
