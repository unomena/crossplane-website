import React from 'react';

import Lottie from 'lottie-react';
import GitHubButton from 'react-github-btn';

import { GetStaticProps } from 'next';

import Image from 'next/future/image';

import { Box, SxProps, Typography } from '@mui/material';
import { COLORS, fontAvenirBold, MQ } from 'src/theme';

import handleGetStaticProps from 'src/utils/handleGetStaticProps';

import * as routes from 'src/routes';

import PageProvider from 'src/components/PageProvider';
import Section from 'src/components/Section';
import CrossplaneLogosSection from 'src/components/CrossplaneLogosSection';
import Button from 'src/elements/Button';
import Link from 'src/elements/Link';
import CMSImage from 'src/elements/CMSImage';

import GitHubIcon from '@mui/icons-material/GitHub';
import SlackIcon from 'src/svg/SlackIcon';
import iceCreamIcon from 'public/icecream-icon.svg';
import createdBy from 'public/created-by-upbound.svg';
import upboundMarketplace from 'public/upbound-marketplace.svg';
import gradientGraphic from 'public/background-graphics/gradient-graphic.png';
import gradientGraphicSM from 'public/background-graphics/gradient-graphic-sm.png';
import truckAnim from 'public/animations/truck.json';
import controlPlanes from 'public/animations/control_planes.json';
import codingAnim from 'public/animations/coding.json';

const headerSection: SxProps = {
  pt: { _: 13, md: 23.5 },
  pb: 4,
  textAlign: 'center',
};

const headerButtons: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', sm: 'row' },

  '& > button, a': {
    mx: { _: 0, sm: '10px' },
    minWidth: '100%',

    [MQ.sm]: {
      minWidth: 256,
    },

    ':not(:last-of-type)': {
      mb: { _: 5, sm: 0 },
    },
  },
};

const socialLinksStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: '700',
  textAlign: 'center',
  color: '#fff',
  opacity: '.85',

  '&:hover': {
    opacity: '1',
  },

  '@media screen and (min-width: 1170px)': {
    fontSize: '17px',
    mb: 0,
  },
};

const gridLayout: SxProps = {
  display: 'grid',
  gap: 4,
  gridTemplateColumns: 'repeat(1, 1fr)',

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

const cardStyles: SxProps = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '1px 0px 16px 2px rgba(215,215,215,0.5)',
  p: 4,

  flex: '1 0 0%',
  display: 'flex',
  flexDirection: 'column',

  '& > a': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0%',
  },
};

const providerIcon: SxProps = {
  backgroundColor: '#DCE7F2',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '90px',
  maxWidth: '90px',
  borderRadius: '20px',
  overflow: 'hidden',
  p: 2,
};

const HeaderSection = (props: HomePageHeader) => {
  return (
    <>
      <Box sx={{ position: 'relative', mb: 5 }}>
        <Box>
          <Typography variant="h1" color="#fff">
            {props.title}{' '}
            <Box
              component="span"
              sx={{
                '> img': {
                  width: '16.6px',
                  height: '35px',
                  '@media screen and (min-width: 768px)': {
                    width: '35.58px',
                    height: '75px',
                  },
                },
              }}
            >
              <Image src={iceCreamIcon} alt="icon" />
            </Box>
          </Typography>
        </Box>
      </Box>
      <Typography variant="body_normal" color="#fff" sx={{ maxWidth: 950, mx: 'auto' }}>
        {props.subtitle}
      </Typography>
      <Box sx={{ mt: 6, mb: { _: 6, sm: 10 } }}>
        <Box sx={headerButtons}>
          {props.buttons.map(({ id, value }) => (
            <Button key={id} sizeType="normal" cmsValue={value}>
              {value.text}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3,
          }}
        >
          <Link
            href={routes.githubUrl}
            muiProps={{ target: '_blank', sx: { ...socialLinksStyles } }}
          >
            <Box mr={1.5} display="flex">
              <GitHubIcon fontSize="small" />
            </Box>
            GitHub
          </Link>
          <Link
            href={routes.slackUrl}
            muiProps={{ target: '_blank', sx: { ml: 3, ...socialLinksStyles } }}
          >
            <Box mr={1.5} display="flex">
              <SlackIcon />
            </Box>
            Slack
          </Link>
        </Box>
        <Box sx={{ mt: 3 }}>
          <GitHubButton
            href="https://github.com/crossplane/crossplane"
            data-color-scheme="no-preference: light; light: light; dark: light;"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star crossplane/crossplane on GitHub"
          >
            Star project
          </GitHubButton>
        </Box>
      </Box>
    </>
  );
};

const FeatureBlock = ({ feature, index }: { feature: HomePageFeature; index: number }) => {
  const reversed = index % 2 !== 0;
  // const colorOptions = [COLORS.froly, COLORS.brightSun, COLORS.turquoise];
  const animOptions = [truckAnim, controlPlanes, codingAnim];

  const { title, text, link_text, link } = feature;

  return (
    <Box
      sx={{
        width: '100%',

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
        <Typography variant="h2" sx={{ maxWidth: 450, mb: 2.5 }}>
          {title}
        </Typography>
        <Typography variant="body_normal" sx={{ maxWidth: 496 }}>
          {text}
        </Typography>
        <Link
          href={link[0].value}
          muiProps={{
            target: link[0].type === 'external_url' ? '_blank' : undefined,
            color: COLORS.turquoise,
            // color: colorOptions[index % 3],
            sx: { mt: 5 },
          }}
          hasArrow
        >
          {link_text}
        </Link>
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
        <Box>
          <Lottie animationData={animOptions[index % 3]} loop={true} />
          {/* {header_image && header_image[0] && <CMSImage value={header_image[0].value} priority />} */}
        </Box>
      </Box>
    </Box>
  );
};

const FeaturesSection = (props: HomePage) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div:not(:last-of-type)': { mb: { _: 10, lg: 23.5 } },
      }}
    >
      {props.features_sections.map(({ id, value }, index) => (
        <FeatureBlock key={id} feature={value} index={index} />
      ))}
    </Box>
  );
};

const UpboundItem = ({ upboundItem }: { upboundItem: UpboundItem }) => {
  const { image, title, text, footer_text } = upboundItem;

  return (
    <Box sx={cardStyles}>
      <Box>
        <Box sx={providerIcon}>
          {image && image[0] && <CMSImage value={image[0].value} objectFit="cover" />}
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 auto', mt: 3 }}>
        <Typography
          variant="body_normal"
          sx={{
            mb: 2,
            ...fontAvenirBold,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body_small" sx={{ mb: 2 }}>
          {text}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body_small" sx={{ color: COLORS.blueBayoux }}>
          {footer_text}
        </Typography>
      </Box>
    </Box>
  );
};

const UpboundItems = ({ section_3_card_items }: { section_3_card_items: UpboundItems }) => {
  return (
    <Box sx={{ mt: 8, ...gridLayout }}>
      {section_3_card_items.map((item) => (
        <UpboundItem key={item.id} upboundItem={item} />
      ))}
    </Box>
  );
};

type Props = {
  isPreview?: boolean;
} & HomePage;

const Home = (props: Props) => {
  return (
    <PageProvider
      cms_head_props={props.cms_head_props}
      isPreview={props.isPreview}
      ctaTitle={props.cta_section_title}
      ctaParagraph={props.cta_section_text}
      ctaBtnText={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.text
      }
      ctaBtnLink={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.link
          ? props.cta_section_buttons[0].value.link[0].value
          : undefined
      }
      ctaBtnStyleType={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.style_type
      }
      ctaBtnTarget={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.link &&
        props.cta_section_buttons[0].value.link[0].type === 'external_url'
          ? '_blank'
          : '_self'
      }
      ctaBtnTwoText={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.text
      }
      ctaBtnTwoLink={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.link
          ? props.cta_section_buttons[0].value.link[0].value
          : undefined
      }
      ctaBtnTwoTarget={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.link &&
        props.cta_section_buttons[0].value.link[0].type === 'external_url'
          ? '_blank'
          : '_self'
      }
      ctaBtnTwoStyleType={
        props.cta_section_buttons &&
        props.cta_section_buttons[0] &&
        props.cta_section_buttons[0].value?.style_type
      }
    >
      <Section sx={headerSection}>
        <HeaderSection {...props.header[0].value} />
      </Section>

      <Section
        angleTop="topRight"
        sx={{
          pt: { _: 16, md: 23.5 },
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ maxWidth: 950, mx: 'auto', pb: { _: 13, md: 16 }, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            {props.section_1_title}
          </Typography>
          <Typography variant="body_normal">{props.section_1_sub_title}</Typography>
          <Box sx={{ maxWidth: 269, mx: 'auto', my: 3 }}>
            <Image
              src={createdBy}
              alt="createdBy"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          {props.section_1_button[0] && (
            <Button
              cmsValue={props.section_1_button[0].value}
              styleType={props.section_1_button[0].value?.style_type}
            >
              {props.section_1_button[0].value.text}
            </Button>
          )}
        </Box>

        <CrossplaneLogosSection {...props} />

        <Box sx={{ py: { _: 10, md: 16 } }}>
          <Image
            src={gradientGraphic}
            alt="gradient graphic"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            pb: { _: 16, md: 23.5 },
            position: 'relative',
          }}
        >
          <FeaturesSection {...props} />
        </Box>
        <Typography variant="h2" textAlign="center">
          {props.section_3_title}
        </Typography>
        <Box sx={{ maxWidth: 950, mx: 'auto', textAlign: 'center' }}>
          <Box sx={{ maxWidth: 306.89, mx: 'auto', my: 4 }}>
            <Image
              src={upboundMarketplace}
              alt="upboundMarketplace"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Typography variant="body_normal">{props.section_3_text}</Typography>
        </Box>
        <Box>
          <UpboundItems section_3_card_items={props.section_3_card_items} />
          <Box textAlign="center">
            {props.section_3_button[0] && (
              <Button sx={{ mt: 6 }} cmsValue={props.section_3_button[0].value}>
                {props.section_3_button[0].value.text}
              </Button>
            )}
          </Box>
        </Box>
        <Box sx={{ maxWidth: 476, mx: 'auto', pt: 16 }}>
          <Image
            src={gradientGraphicSM}
            alt="gradient graphic"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Section>
    </PageProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(context, '/');

  if (returnValue) {
    return {
      props: returnValue,
    };
  } else {
    return {
      notFound: true,
    };
  }
};
