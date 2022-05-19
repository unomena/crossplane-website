import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image';

import { COLORS, fontAvenirBold, fontAvenirRomanItalic, gradient_1, MQ } from 'src/theme';
import { Box, SxProps, Typography, Container, Hidden, useMediaQuery } from '@mui/material';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import * as routes from 'src/routes';

import useOnScreen from 'src-new/utils/useOnScreen';

import quotes from 'src-new/constants/quotes';

import PageProvider from 'src-new/components/PageProvider';
import Section from 'src-new/components/Section';
import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';
import CornerCard from 'src-new/elements/CornerCard';
import Slider from 'src-new/components/Slider';

import heroMain from 'public/new-images/products-page/hero-main.svg';
// import heroMainMobile from 'public/new-images/products-page/mobile/hero-main-mobile.svg';
import heroFlyover from 'public/new-images/products-page/hero-flyover.svg';
import platformOne from 'public/new-images/products-page/001-platform.svg';
import platformMobileOne from 'public/new-images/products-page/mobile/001-platform-mobile.svg';
import platformTwo from 'public/new-images/products-page/002-platform.svg';
import platformMobileTwo from 'public/new-images/products-page/mobile/002-platform-mobile.svg';
import platformThree from 'public/new-images/products-page/003-platform.svg';
import platformMobileThree from 'public/new-images/products-page/mobile/003-platform-mobile.svg';
// import platformFour from 'public/new-images/products-page/004-platform.svg';
// import platformFive from 'public/new-images/products-page/005-platform.svg';
import platformSix from 'public/new-images/products-page/006-platform.svg';
import platformMobileSix from 'public/new-images/products-page/mobile/006-platform-mobile.svg';
import platformFlyoverOne from 'public/new-images/products-page/001-platform-flyover.svg';
import platformFlyoverTwo from 'public/new-images/products-page/002-platform-flyover.svg';
import platformFlyoverThree from 'public/new-images/products-page/003-platform-flyover.svg';
// import platformFlyoverFour from 'public/new-images/products-page/004-platform-flyover.svg';
// import platformFlyoverFive from 'public/new-images/products-page/005-platform-flyover.svg';
import platformFlyoverSix from 'public/new-images/products-page/006-platform-flyover.svg';
import sectionBg from 'public/new-images/home-page/header-bg.jpg';
import productDiagram from 'public/new-images/products-page/product-diagram.svg';
import productDiagramMobile from 'public/new-images/products-page/mobile/product-diagram-mobile.svg';
import arrowBullet from 'public/new-images/icons/arrow-bullet.svg';
import circleBullet from 'public/new-images/icons/circle-bullet.svg';
// import arrowCircle from 'public/new-images/icons/arrow-circle.svg';
import quoteCircle from 'public/new-images/icons/quote-circle.svg';
import caseStudyIconOne from 'public/new-images/icons/case-study-icon-one.svg';
import caseStudyIconTwo from 'public/new-images/icons/case-study-icon-two.svg';
import caseStudyIconThree from 'public/new-images/icons/case-study-icon-three.svg';
import ArrowRight from 'src-new/svg/ArrowRight';

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
  mb: 7.5,
  [MQ.md]: {
    display: 'flex',
    alignItems: 'center',
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
  pb: 16.25,
  pt: 7.5,
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

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type FeatureBlockProps = {
  title: string;
  body: string;
  imgBig: string | StaticImport;
  imgSmall: string | StaticImport;
  imgSmallOffset: { top: number; right: number };
  isActive: Boolean;
  finalScrolled: Boolean;
};

const FeatureBlock = ({
  title,
  body,
  imgBig,
  imgSmall,
  imgSmallOffset,
  isActive,
  finalScrolled,
}: FeatureBlockProps) => {
  // const hiddenBarRef = useRef(undefined);
  // const isVisible = useOnScreen(hiddenBarRef);
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   if (isVisible) {
  //     setShow(true);
  //   }
  // }, [isVisible]);

  return (
    <Hidden mdDown>
      <Box>
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
                {isActive || finalScrolled ? (
                  <Image src={circleBullet} layout="fill" objectFit="contain" alt="circle bullet" />
                ) : (
                  <Image src={arrowBullet} layout="fill" objectFit="contain" alt="arrow bullet" />
                )}
              </Box>
              <Box>
                <Typography variant="h4_new" sx={{ mb: 1, fontSize: '22px !important' }}>
                  {title}
                </Typography>
                {(isActive || finalScrolled) && (
                  <Typography variant="body_small">{body}</Typography>
                )}
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
            <Box
              sx={{
                transform: isActive ? '' : `translate(50vw)`,
                opacity: isActive ? 1 : 0,
                transition: 'transform 1.5s, opacity 1.5s',
              }}
            >
              <Image src={imgBig} alt="feature-img-big" />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: imgSmallOffset.top,
                right: imgSmallOffset.right,
                transform: isActive ? '' : `translate(100vw)`,
                opacity: isActive ? 1 : 0,
                transition: 'transform 2s, opacity 2s',
              }}
            >
              <Image src={imgSmall} alt="feature-img-small" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Hidden>
  );
};

const features = [
  {
    title: 'Fully managed control planes',
    body: `Control planes designed to be high performance, scalable, multitenant, and secure for the
    most demanding scenarios.`,
    imgBig: platformOne,
    imgSmall: platformFlyoverOne,
    imgSmallOffset: { top: 82, right: -75 },
  },
  {
    title: 'Best-in-class platform building blocks',
    body: `Upbound Marketplace is a one-stop-shop for all the components you need in your Upbound-powered platform.`,
    imgBig: platformTwo,
    imgSmall: platformFlyoverTwo,
    imgSmallOffset: { top: 65, right: -85 },
  },
  {
    title: 'Self-service console',
    body: `The Upbound Console is dynamically rendered from your
    Upbound control plane and the Crossplane packages installed in it.`,
    imgBig: platformThree,
    imgSmall: platformFlyoverThree,
    imgSmallOffset: { top: 67, right: -105 },
  },
  {
    title: 'Support for multi-tenancy',
    body: `Designed for complex multi-tenant Kubernetes deployments, 
    where isolation of cloud credentials, control plane resources, and users is critical.`,
    imgBig: platformSix,
    imgSmall: platformFlyoverSix,
    imgSmallOffset: { top: 102, right: -105 },
  },
];

const FeaturesSection = () => {
  const featureSectionRef = useRef<HTMLElement>(null);

  const [finalScrolled, _setFinalScrolled] = useState(false);
  const finalScrolledRef = useRef(finalScrolled);
  const setFinalScrolled = (val: boolean) => {
    finalScrolledRef.current = val;
    _setFinalScrolled(val);
  };

  const [canScroll, _setCanScroll] = useState(false);
  const canScrollRef = useRef(canScroll);
  const setCanScroll = (val: boolean) => {
    canScrollRef.current = val;
    _setCanScroll(val);
  };

  const [activeIndex, _setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const setActiveIndex = (val: number) => {
    activeIndexRef.current = val;
    _setActiveIndex(val);
  };

  const handleScroll = () => {
    if (featureSectionRef.current) {
      if (document.body.scrollTop >= featureSectionRef.current.offsetTop) {
        if (!finalScrolledRef.current) {
          document.body.scrollTo(0, featureSectionRef.current.offsetTop);
          disableBodyScroll(featureSectionRef.current);
          setTimeout(() => {
            setCanScroll(true);
          }, 1000);
          // setActiveIndex(0);
        }
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (featureSectionRef.current) {
        enableBodyScroll(featureSectionRef.current);
      }
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let t: NodeJS.Timeout;
  const handleSectionScroll = () => {
    if (canScrollRef.current && document.getElementById('featureSectionID')?.scrollTop !== 0) {
      setActiveIndex(activeIndexRef.current + 1);
      setCanScroll(false);
    }
    if (t) {
      clearTimeout(t);
    }
    t = setTimeout(() => {
      if (document.getElementById('featureSectionID')?.scrollTop !== 0) {
        if (activeIndexRef.current >= features.length - 1) {
          if (featureSectionRef.current) {
            enableBodyScroll(featureSectionRef.current);
          }
          document.body.removeEventListener('scroll', handleScroll);
          setFinalScrolled(true);
        } else {
          setCanScroll(true);
          document.getElementById('featureSectionID')?.scrollTo(0, 0);
        }
      }
    }, 2000);
  };

  return (
    <Box
      ref={featureSectionRef}
      sx={{
        '& > div:not(:last-of-type)': { pb: 2 },
        pt: !finalScrolled ? '' : 10,
        pb: !finalScrolled ? '' : 10,
        position: 'relative',
      }}
    >
      <div
        id="featureSectionID"
        style={{
          overflowY: canScrollRef.current ? 'scroll' : 'hidden',
          overflowX: 'hidden',
          maxHeight: !finalScrolled ? '100vh' : '',
        }}
        onScroll={handleSectionScroll}
      >
        <div style={{ minHeight: !finalScrolled ? '200vh' : 'unset' }}>
          <Box
            sx={{
              position: !finalScrolled ? 'sticky' : 'relative',
              top: !finalScrolled ? '50%' : '',
              transform: !finalScrolled ? 'translateY(-50%)' : '',
            }}
          >
            <Container maxWidth="xl">
              <Box sx={{ mb: 3 }}>
                <Typography variant="h3_new" sx={{ fontSize: '40px', mb: 3 }}>
                  The last platform you’ll ever need to build
                </Typography>
                <Typography variant="body_big">
                  Never re-platform again. No matter what tools and vendors you add to your
                  infrastructure, Upbound can manage them. Enterprise-ready, flexible and easy to
                  use, Upbound transforms the way you manage your infrastructure. It’s the cloud on
                  your terms.
                </Typography>
              </Box>
              <Box sx={{ position: 'relative' }}>
                {features.map((feature, index) => (
                  <FeatureBlock
                    key={feature.title}
                    title={feature.title}
                    body={feature.body}
                    imgBig={feature.imgBig}
                    imgSmall={feature.imgSmall}
                    imgSmallOffset={feature.imgSmallOffset}
                    isActive={activeIndex === index}
                    finalScrolled={finalScrolled}
                  />
                ))}
              </Box>
            </Container>
          </Box>
        </div>
      </div>
    </Box>
  );
};

type QuoteCardProps = {
  quote: {
    full: string;
    person: string;
    role: string;
    logo: string | StaticImport;
    logoSize: {
      width: number;
      height: number;
    };
  };
};

const QuoteCard = ({ quote }: QuoteCardProps) => {
  const { full, person, role, logo, logoSize } = quote;

  return (
    <CornerCard cornerSize="cornerLG" icon={quoteCircle} iconSize="normal">
      <Box display="flex" flexDirection="column">
        <Box flex={1}>
          <Typography variant="body_big">{full}</Typography>
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
            <Image src={logo} alt="company logo" width={logoSize.width} height={logoSize.height} />
          </Box>
          <Box>
            <Typography variant="h6_new">{person}</Typography>
            <Typography variant="body_xs" sx={{ ...fontAvenirRomanItalic, maxWidth: '200px' }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CornerCard>
  );
};

type Props = {};

const Products = ({}: Props) => {
  const productsHeader = useRef(undefined);
  const isVisible = useOnScreen(productsHeader);
  const [show, setShow] = useState(false);
  const matchesMD = useMediaQuery(MQ.md);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);
  return (
    <PageProvider displayTitle="Products">
      <Section sx={{ pt: { _: 13, md: 40 }, pb: { _: 60, xs: 80, md: 20 } }}>
        <Box
          sx={{
            [MQ.md]: {
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            },
          }}
          ref={productsHeader}
        >
          <Box
            sx={{
              [MQ.md]: {
                flex: 1,
                width: '50%',
                minWidth: '50%',
                maxWidth: '50%',
                pr: '28px',
                pl: '0px',
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Box sx={{ [MQ.md]: { maxWidth: '501px' }, textAlign: { _: 'center', md: 'left' } }}>
              <Typography variant="h1_new" sx={{ mb: 3, ...gradient_1 }}>
                Upbound
              </Typography>
              <Typography variant="body_big">
                The easiest way to build, deploy, and manage your internal cloud platforms using
                control planes.
              </Typography>
              <Box sx={headerButtons}>
                <Button
                  styleType="gradientContained"
                  sizeType={matchesMD ? 'normal' : 'large'}
                  sx={{
                    width: { _: 225, md: 156 },
                    mr: { _: 0, xs: 3 },
                    mb: { _: '20px', xs: 0 },
                  }}
                  href={routes.cloudRegisterUrl}
                >
                  Try for free
                </Button>
                <Hidden mdUp>
                  <Button
                    styleType="whiteOutlined"
                    sizeType="large"
                    sx={{
                      width: { _: 225, md: 156 },
                      '& > .MuiButton-iconSizeMedium': { ml: '16px' },
                    }}
                    endIcon={<ArrowRight />}
                    href={routes.contactSalesUrl}
                  >
                    Contact Us
                  </Button>
                </Hidden>
                <Hidden mdDown>
                  <Link href={routes.contactSalesUrl} muiProps={{ color: '#fff' }} hasArrow>
                    Contact Us
                  </Link>
                </Hidden>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              right: '0',
              ml: '30px',
              maxWidth: '500px',
              zIndex: '1',
              [MQ.md]: {
                maxWidth: '50%',
                top: '4%',
                zIndex: '1',
              },
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
      <Section bgcolor angleTop="topRight" sx={{ pb: 0, pt: { _: 16, md: 23.5 }, zIndex: '-2' }}>
        <Box sx={productsSectionHeader}>
          <Typography variant="h2_new" sx={{ mb: 7.5 }}>
            A platform for building internal cloud platforms
          </Typography>
        </Box>
        <Hidden mdDown>
          <Box sx={{ position: 'relative', width: '100%', height: '540px' }}>
            <Image
              src={productDiagram}
              alt="Internal cloud platform"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box sx={{ position: 'relative', width: '100%', height: '270px' }}>
            <Image
              src={productDiagramMobile}
              alt="Internal cloud platform"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Hidden>
      </Section>
      <Hidden mdDown>
        <Section bgcolor hasContainer={false}>
          <FeaturesSection />
        </Section>
      </Hidden>
      <Hidden mdUp>
        <Section bgcolor sx={platformCarousel}>
          <Box sx={{ mb: 7.5 }}>
            <Typography variant="h3_new" sx={{ ...fontAvenirBold, mb: 3 }}>
              The last platform you’ll ever need to build
            </Typography>
            <Typography variant="body_big">
              Never re-platform again. No matter what tools and vendors you add to your
              infrastructure, Upbound can manage them. Enterprise-ready, flexible and easy to use,
              Upbound transforms the way you manage your infrastructure. It’s the cloud on your
              terms.
            </Typography>
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
            <Box>
              <Box>
                <Box
                  sx={{
                    position: 'relative',
                    height: 'auto',
                    width: '100%',
                    mb: 3,
                  }}
                >
                  <Image src={platformMobileOne} alt="feature-img-big" />
                </Box>
                <Box>
                  <Typography
                    variant="h4_new"
                    sx={{ mb: 1, ...fontAvenirBold, fontSize: '22px !important' }}
                  >
                    Fully managed control planes
                  </Typography>

                  <Typography variant="body_small">
                    Control planes designed to be high performance, scalable, multitenant, and
                    secure for the most demanding scenarios.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box
                  sx={{
                    position: 'relative',
                    height: 'auto',
                    width: '100%',
                    mb: 3,
                  }}
                >
                  <Image src={platformMobileTwo} alt="feature-img-big" />
                </Box>
                <Box>
                  <Typography variant="h4_new" sx={{ mb: 1, fontSize: '22px !important' }}>
                    Best-in-class platform building blocks
                  </Typography>

                  <Typography variant="body_small">
                    Upbound Marketplace is a one-stop-shop for all the components you need in your
                    Upbound-powered platform.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box
                  sx={{
                    position: 'relative',
                    height: 'auto',
                    width: '100%',
                    mb: 3,
                  }}
                >
                  <Image src={platformMobileThree} alt="feature-img-big" />
                </Box>
                <Box>
                  <Typography variant="h4_new" sx={{ mb: 1, fontSize: '22px !important' }}>
                    Self-service console
                  </Typography>

                  <Typography variant="body_small">
                    The Upbound Console is dynamically rendered from your Upbound control plane and
                    the Crossplane packages installed in it.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box
                  sx={{
                    position: 'relative',
                    height: 'auto',
                    width: '100%',
                    mb: 3,
                  }}
                >
                  <Image src={platformMobileSix} alt="feature-img-big" />
                </Box>
                <Box>
                  <Typography variant="h4_new" sx={{ mb: 1, fontSize: '22px !important' }}>
                    Support for multi-tenancy
                  </Typography>

                  <Typography variant="body_small">
                    Designed for complex multi-tenant Kubernetes deployments, where isolation of
                    cloud credentials, control plane resources, and users is critical.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Carousel>
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
            Any platform. Any business
          </Typography>
          <Typography variant="body_normal" sx={{ maxWidth: '886px', mx: 'auto' }}>
            Upbound can manage any infrastructure environment — cloud or on-prem. Customers compose
            their own custom API interface into their custom platform running on Upbound
          </Typography>
        </Box>
        <Box sx={{ my: { _: 7.5, md: 10 }, ...gridLayout }}>
          <CornerCard iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h4_new"
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
                <Image src={caseStudyIconOne} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h4_new"
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
                <Image src={caseStudyIconTwo} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
          <CornerCard iconSize="small">
            <Box display="flex" flexDirection="column">
              <Box flex={1}>
                <Typography
                  variant="h4_new"
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
                <Image src={caseStudyIconThree} alt="icon" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          </CornerCard>
        </Box>
        <Box sx={productsSectionHeader}>
          <Typography variant="h4_new" sx={{ mb: 7.5 }}>
            Trusted by the industry’s best
          </Typography>
        </Box>

        <Slider>
          {quotes.map((quote) => (
            <QuoteCard key={quote.title} quote={quote} />
          ))}
        </Slider>
      </Section>
    </PageProvider>
  );
};

export default Products;
