import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { COLORS, fontAvenirBold, fontAvenirRomanItalic, gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Hidden } from '@mui/material';

import { Carousel } from 'react-responsive-carousel';

import useOnScreen from 'src-new/utils/useOnScreen';
import handleGetStaticProps from 'src-new/utils/handleGetStaticProps';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import CornerCard from 'src-new/elements/CornerCard';
import Slider from 'src-new/components/Slider';

import sectionBg from 'public/new-images/home-page/header-bg.jpg';
import arrowBullet from 'public/new-images/icons/arrow-bullet.svg';
import circleBullet from 'public/new-images/icons/circle-bullet.svg';
import quoteCircle from 'public/new-images/icons/quote-circle.svg';
import OGImgProducts from 'public/og-images/product-page-og.jpg';
import CMSImage from 'src-new/elements/CMSImage';
import getImageUrl from 'src-new/utils/getImageUrl';
import { CenterFocusStrong } from '@mui/icons-material';

const headerSection: SxProps = {
  pt: { _: 13, md: 40 },
  pb: { _: 60, xs: 80, md: 20 },
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
  position: 'absolute',
  right: '0',
  ml: '30px',
  maxWidth: '500px',
  zIndex: '1',
  [MQ.md]: {
    maxWidth: '40%',
    top: '4%',
    zIndex: '1',
  },
  '@media screen and (min-width: 884px)': {
    maxWidth: '50%',
  },
};

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
  mt: { _: 5, sm: 7.5 },
  mb: { _: 6, sm: 10 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'left' },
  flexDirection: { _: 'column', sm: 'row' },

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

const gridLayout: SxProps = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: 'repeat(1, 1fr)',

  '& > div:hover': {
    backgroundImage: 'linear-gradient(-45deg, transparent 42px, #1B3549 0 100%)',
  },

  [MQ.md]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

const platformCarousel: SxProps = {
  '.carousel.carousel-slider .control-dots': {
    bottom: '-70px',
  },
  '.carousel.carousel-slider .control-dots .dot': {
    background: 'none',
    boxShadow: 'none',
    opacity: '1',
    width: '25px',
    height: '25px',
  },
  '.carousel.carousel-slider .control-dots .dot:before': {
    content: `url(${arrowBullet.src})`,
  },
  '.carousel.carousel-slider .control-dots .dot.selected:before': {
    content: `url(${circleBullet.src})`,
  },
  '.carousel.carousel-slider': {
    overflow: 'unset',
  },
};

const pillStyle: SxProps = {
  background: `linear-gradient(45deg, #6D64F5, #3DE2CB)`,
  borderRadius: '2000px',
  padding: '7px 19px 5px',
  display: 'inline-block',
  mb: 3,

  '& > p': {
    fontFamily: 'Avenir-Black, Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '700',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    color: 'white',
  },
};

const banner: SxProps = {
  textAlign: 'center',
  background: `linear-gradient(286deg, #3DE2CB 0%, #6D64F5 47%)`,
  borderRadius: '20px',
  p: '40px 20px',

  '& .MuiTypography-root': {
    color: 'white',
  },
};

const HeaderSection = (props: ProductPage) => {
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
          <Box sx={pillStyle}>
            <Typography variant="body_small">Coming soon!</Typography>
          </Box>
          <Typography variant="h1_new" sx={{ mb: 3, ...gradient_1 }}>
            {props.header_title}
          </Typography>
          <Typography variant="body_big">{props.header_text}</Typography>
          <Box sx={headerButtons}>
            {props.header_buttons.map(({ id, value }) => (
              <Button key={id} sizeType="large" cmsValue={value}>
                {value.text}
              </Button>
            ))}
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
            <CMSImage value={props.header_side_image_1[0].value} priority />
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
            <CMSImage value={props.header_side_image_2[0].value} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

type FeatureBlockProps = {
  feature: ProductPageFeature;
  index: number;
  setActiveIndex: (val: number) => void;
  isActive: Boolean;
};

const FeatureBlock = ({ feature, index, setActiveIndex, isActive }: FeatureBlockProps) => {
  const {
    title,
    text,
    side_svg_big,
    side_svg_small,
    side_svg_small_top_offset,
    side_svg_small_right_offset,
  } = feature;

  return (
    <Hidden mdDown>
      <Box onClick={() => setActiveIndex(index)} sx={{ cursor: 'pointer' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: COLORS.linkWater,
            flexDirection: 'row',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: '55%',
              minWidth: '55%',
              maxWidth: '55%',
              display: 'flex',
              flexDirection: 'column',
              background: isActive
                ? // eslint-disable-next-line max-len
                  'linear-gradient(45deg, rgba(13,36,54,1) 20%, rgba(27,53,73,1) 40%, rgba(27,53,73,1) 60%, rgba(13,36,54,1) 80%)'
                : 'unset',
              py: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '23px',
                  height: '23px',
                  mr: '20px',
                }}
              >
                {isActive ? (
                  <Image src={circleBullet} layout="fill" objectFit="contain" alt="circle bullet" />
                ) : (
                  <Image src={arrowBullet} layout="fill" objectFit="contain" alt="arrow bullet" />
                )}
              </Box>
              <Box>
                <Typography variant="h4_new" sx={{ mb: 1, fontSize: '22px !important' }}>
                  {title}
                </Typography>
                {isActive && <Typography variant="body_small">{text}</Typography>}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            width: '45%',
            minWidth: '45%',
            maxWidth: '45%',
            position: 'absolute',
            right: '0',
            top: '0',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            {side_svg_big && (
              <Box
                sx={{
                  transform: isActive ? '' : `translate(50vw)`,
                  opacity: isActive ? 1 : 0,
                  transition: 'transform .8s, opacity .8s',
                }}
              >
                <CMSImage value={{ svg_image: side_svg_big }} />
              </Box>
            )}
            {side_svg_small && (
              <Box
                sx={{
                  position: 'absolute',
                  top: side_svg_small_top_offset,
                  right: side_svg_small_right_offset,
                  transform: isActive ? '' : `translate(100vw)`,
                  opacity: isActive ? 1 : 0,
                  transition: 'transform 1s, opacity 1s',
                }}
              >
                <CMSImage value={{ svg_image: side_svg_small }} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Hidden>
  );
};

const FeaturesSection = (props: ProductPage) => {
  const [activeIndex, _setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const setActiveIndex = (val: number) => {
    activeIndexRef.current = val;
    _setActiveIndex(val);
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3_new" sx={{ fontSize: '40px', mb: 3 }}>
          {props.section_2_title}
        </Typography>
        <Typography variant="body_big">{props.section_2_text}</Typography>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {props.feature_items.map(({ id, value }, index) => (
          <FeatureBlock
            key={id}
            feature={value}
            index={index}
            setActiveIndex={setActiveIndex}
            isActive={activeIndex === index}
          />
        ))}
      </Box>
    </Box>
  );
};

const FeatureBlockMobile = ({ feature }: { feature: ProductPageFeature }) => {
  const { title, text, side_svg_mobile } = feature;

  return (
    <Box>
      <Box sx={{ position: 'relative', height: 'auto', width: '100%', mb: 3 }}>
        {side_svg_mobile && <CMSImage value={{ svg_image: side_svg_mobile }} />}
      </Box>
      <Box>
        <Typography variant="h4_new" sx={{ mb: 1, ...fontAvenirBold, fontSize: '22px !important' }}>
          {title}
        </Typography>

        <Typography variant="body_small">{text}</Typography>
      </Box>
    </Box>
  );
};

const FeaturesSectionMobile = (props: ProductPage) => {
  return (
    <Box sx={platformCarousel}>
      <Box sx={{ mb: 7.5 }}>
        <Typography variant="h3_new" sx={{ ...fontAvenirBold, mb: 3 }}>
          {props.section_2_title}
        </Typography>
        <Typography variant="body_big">{props.section_2_text}</Typography>
      </Box>
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        emulateTouch={true}
        stopOnHover={false}
        showThumbs={false}
      >
        {props.feature_items.map(({ id, value }) => (
          <FeatureBlockMobile key={id} feature={value} />
        ))}
      </Carousel>
    </Box>
  );
};

type CaseStudyCardProps = {
  title: string;
  text: string;
  icon: ImageType[];
};

const CaseStudyCard = ({ title, text, icon }: CaseStudyCardProps) => {
  const iconUrl = useMemo(() => {
    if (!icon) {
      return null;
    }
    return getImageUrl(icon[0]);
  }, [icon]);

  return (
    <CornerCard iconSize="small">
      <Box display="flex" flexDirection="column">
        <Box flex={1}>
          <Typography variant="h4_new" sx={{ mb: 3, lineHeight: '34px' }}>
            {title}
          </Typography>
          <Typography variant="body_small">{text}</Typography>
        </Box>

        <Box sx={{ position: 'relative', width: '48px', height: '48px', mt: 3 }}>
          {iconUrl && <Image src={iconUrl} alt="icon" layout="fill" objectFit="contain" />}
        </Box>
      </Box>
    </CornerCard>
  );
};

const QuoteCard = ({ quote }: { quote: Testimonial }) => {
  const { full_text, author, author_job_title, logo } = quote;

  return (
    <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
      <Box display="flex" flexDirection="column">
        <Box flex={1}>
          <Typography variant="body_big">{full_text}</Typography>
        </Box>
        <Box
          sx={{
            mt: 3,
            [MQ.md]: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex', mr: 3, mb: { _: 3, md: 0 } }}>
            <CMSImage value={{ svg_image: logo[0] }} />
          </Box>
          <Box>
            <Typography variant="h6_new">{author}</Typography>
            <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic, maxWidth: '200px' }}>
              {author_job_title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CornerCard>
  );
};

const displayTitle = 'Products - The universal cloud platform';
const metaImg = OGImgProducts.src;

type Props = {
  isPreview?: boolean;
} & ProductPage;

const Products = (props: Props) => {
  const section_1_image = useMemo(() => {
    if (!props.section_1_image) {
      return null;
    }
    return getImageUrl(props.section_1_image[0]);
  }, [props.section_1_image]);

  const section_1_image_mobile = useMemo(() => {
    if (!props.section_1_image_mobile) {
      return null;
    }
    return getImageUrl(props.section_1_image_mobile[0]);
  }, [props.section_1_image_mobile]);

  return (
    <PageProvider
      displayTitle={displayTitle}
      metaImg={metaImg}
      cms_head_props={props.cms_head_props}
      isPreview={props.isPreview}
      ctaTitle="Be the first to know"
      ctaParagraph={
        "Get on the list so you'll be the first to know about our \n universal cloud platform."
      }
      ctaBtnText="Get on the List"
      ctaBtnLink="/upbound-preview"
    >
      <Section sx={headerSection}>
        <HeaderSection {...props} />
      </Section>

      <Section bgcolor angleTop="topRight" sx={{ pb: 0, pt: { _: 16, md: 23.5 }, zIndex: '-2' }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            {props.section_1_title}
          </Typography>
        </Box>
        <Hidden mdDown>
          <Box sx={{ position: 'relative', width: '100%', height: '540px' }}>
            {section_1_image && (
              <Image
                src={section_1_image}
                alt="Internal cloud platform"
                layout="fill"
                objectFit="contain"
              />
            )}
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box sx={{ position: 'relative', width: '100%', height: '270px' }}>
            {section_1_image_mobile && (
              <Image
                src={section_1_image_mobile}
                alt="Internal cloud platform"
                layout="fill"
                objectFit="contain"
              />
            )}
          </Box>
        </Hidden>
      </Section>

      <Section
        bgcolor
        sx={{
          pt: { _: 6, md: 0, xl: 10 },
        }}
      >
        <Box sx={banner}>
          <Typography variant="h3_new" sx={{ mb: 1.5 }}>
            Our universal cloud platform is coming soon!
          </Typography>
          <Typography variant="body_normal" sx={{ mb: 3 }}>
            Sign up to be the first to know.
          </Typography>
          <Button styleType="whiteContained" href="/upbound-preview">
            Get on the List
          </Button>
        </Box>
      </Section>

      <Hidden xlDown>
        {/* <Section bgcolor sx={{ pb: { _: 30, md: 33.125 }, pt: { _: 10, md: 23.5 } }}> */}
        <Section bgcolor sx={{ pb: { _: 30, md: 33.125 }, pt: { _: 0, sm: 15 } }}>
          <FeaturesSection {...props} />
        </Section>
      </Hidden>
      <Hidden xlUp>
        <Section bgcolor sx={{ pb: 16.25, pt: 7.5 }}>
          <FeaturesSectionMobile {...props} />
        </Section>
      </Hidden>

      <Section
        sx={{
          pb: { _: 30, md: 33.125 },
          pt: { _: 10, md: 23.5 },
          overflow: 'hidden',
          ...caseStudiesSection,
        }}
      >
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 3.75 }}>
            {props.section_3_title}
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
            {props.section_3_text}
          </Typography>
        </Box>
        <Box sx={{ my: { _: 7.5, md: 10 }, ...gridLayout }}>
          <CaseStudyCard
            title={props.section_3_card_1_title}
            text={props.section_3_card_1_text}
            icon={props.section_3_card_1_icon}
          />
          <CaseStudyCard
            title={props.section_3_card_2_title}
            text={props.section_3_card_2_text}
            icon={props.section_3_card_2_icon}
          />
          <CaseStudyCard
            title={props.section_3_card_3_title}
            text={props.section_3_card_3_text}
            icon={props.section_3_card_3_icon}
          />
        </Box>

        {props.testimonials && (
          <>
            <Box sx={productsSectionHeader}>
              <Typography variant="h4_new" sx={{ mb: 7.5 }}>
                {props.section_4_title}
              </Typography>
            </Box>

            <Slider>
              {props.testimonials.map((quote) => (
                <QuoteCard key={quote.id} quote={quote} />
              ))}
            </Slider>
          </>
        )}
      </Section>
    </PageProvider>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async (context) => {
  const returnValue = await handleGetStaticProps(
    context,
    '/products/universal-cloud-platform',
    true
  );

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
