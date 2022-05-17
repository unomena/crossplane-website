import React, { useRef, useState } from 'react';

import Image from 'next/image';

import { Box, Popover, SxProps, Typography } from '@mui/material';
import { COLORS } from 'src/theme';

import * as routes from 'src/routes';

import Button from 'src-new/elements/Button';
import Link from 'src-new/elements/Link';

import logoWhite from 'public/logo-white.svg';
// import learnBlogLaptop from 'public/new-images/top-nav/LearnBlogLaptop.png';
// import taylorThorntonProfile from 'public/new-images/top-nav/TaylorThorntonProfile.png';
import laptopArticleImg from 'public/new-images/media-cards/laptop-article-img.png';
import grantGuminaProfile from 'public/new-images/media-cards/grant-gumina-profile.jpeg';
import PartnersIcon from 'src-new/svg/PartnersIcon';
import SignInIcon from 'src-new/svg/SignInIcon';
import ArrowRightRounded from 'src-new/svg/ArrowRightRounded';
import MediaCard from 'src-new/elements/MediaCard';

const root: SxProps = {
  position: 'absolute',
  top: 0,
  width: '100%',
  minHeight: 88,
  bgcolor: 'transparent',
  display: { _: 'none', lg: 'flex' },
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

// const announceContainer: SxProps = {
//   bgcolor: COLORS.cornflower,
//   width: '100%',
//   height: 60,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontFamily: 'Avenir-Black',
//   fontSize: 14,
//   lineHeight: 14,
//   color: '#fff',
// };

const mainContainer: SxProps = {
  bgcolor: 'transparent',
  height: 88,
  display: 'flex',
  alignItems: 'center',
  px: '50px',
  position: 'absolute',
  // top: 60,
  top: 0,
  width: '100%',
  maxWidth: 1440,
};

const centerItems: SxProps = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > span,a': {
    mx: '19px',
  },
};

const rightItems: SxProps = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& > span,a': {
    mr: '18px',
  },
};

const navItem: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '17px',
  lineHeight: '17px',
  color: '#fff',
  opacity: 0.5,
  transition: 'all 0.25s',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    opacity: 1,
  },

  '& > span': {
    mr: 1,
    display: 'flex',
    alignItems: 'center',
  },
};

const popoverContainer: SxProps = {
  mt: 3.5,
  bgcolor: COLORS.elephant,
  border: '1px solid rgba(255,255,255,0.30)',
  borderRadius: '10px',
  color: COLORS.linkWater,
};

const popoverDivider: SxProps = {
  opacity: 0.06,
  borderRight: '1px solid #fff',
};

const popoverFreeDemoContainer: SxProps = {
  width: 268,
  py: 3.5,
  pr: 3.5,
  pl: 2.5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

// const popoverBlogPill: SxProps = {
//   position: 'absolute',
//   top: 24,
//   right: 20,
//   zIndex: 100,
//   width: 55,
//   height: 22,
//   borderRadius: 100,
//   bgcolor: COLORS.cornflower,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontFamily: 'Avenir-Heavy',
//   fontSize: '11px',
//   lineHeight: '20px',
//   letterSpacing: '0',
//   color: '#fff',
// };

// const popoverBlogProfilePic: SxProps = {
//   position: 'absolute',
//   top: -43,
//   right: 20,
//   width: 58,
//   height: 58,
//   border: '1px solid #fff',
//   borderRadius: 100,
//   p: '3px',
// };

// const popoverBlogDarkText: SxProps = {
//   fontFamily: 'Avenir-Medium',
//   fontSize: '13px',
//   lineHeight: '24px',
//   color: COLORS.linkWater,
//   opacity: 0.41,
// };

const popoverContentHeader: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: '13px',
  lineHeight: '13px',
  color: COLORS.cornflower,
  mb: 1.5,
};

const popoverContentBodySmall: SxProps = {
  fontSize: '13px',
  lineHeight: '20px',
};

const popoverContentBodyBig: SxProps = {
  fontSize: '16px',
  lineHeight: '26px',
};

const linkBar: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: '12px',
  pr: '16px',
  pl: '18px',
  borderRadius: '10px',
  backgroundImage: 'linear-gradient(90deg, #0D2436 0%, #1B3549 24%, #1B3549 76%, #0D2436 100%)',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',

  '&:hover': {
    transform: 'scale(1.05)',
  },
};

const linkBarTitle: SxProps = {
  fontFamily: 'Avenir-Heavy',
  fontSize: '15px',
  lineHeight: '15px',
  color: '#fff',
  mb: 1,
};

const linkBarBody: SxProps = {
  fontFamily: 'Avenir-Book',
  fontSize: '12px',
  lineHeight: '16px',
  color: COLORS.linkWater,
};

type LinkBarProps = {
  href: string;
  title: string;
  body: string;
  sx?: SxProps;
};

const LinkBar = ({ href, title, body, sx }: LinkBarProps) => {
  return (
    <Link href={href}>
      <Box sx={{ ...linkBar, ...sx }}>
        <Box>
          <Typography sx={linkBarTitle}>{title}</Typography>
          <Typography sx={linkBarBody}>{body}</Typography>
        </Box>
        <Box sx={{ ml: 3.5, display: 'flex' }}>
          <ArrowRightRounded />
        </Box>
      </Box>
    </Link>
  );
};

type PopoverItemProps = {
  title: string;
  content: React.ReactNode;
  isDark?: boolean;
};

const PopoverItem = ({ title, content, isDark }: PopoverItemProps) => {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef(null);

  const popoverEnter = () => {
    setOpen(true);
  };

  const popoverLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        ref={anchorEl}
        component="span"
        sx={{ ...navItem, opacity: open || !isDark ? 1 : 0.5 }}
        aria-owns={open ? `mouse-over-popover-${title}` : undefined}
        aria-haspopup="true"
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        {title}
      </Typography>
      <Popover
        id={`mouse-over-popover-${title}`}
        sx={{ pointerEvents: 'none', '& .MuiPaper-root': { boxShadow: 'none' } }}
        open={open}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          onMouseEnter: popoverEnter,
          onMouseLeave: popoverLeave,
          sx: {
            pointerEvents: 'auto',
            bgcolor: 'unset',
            borderRadius: 'unset',
          },
        }}
        disableRestoreFocus
      >
        <Box sx={popoverContainer}>{content}</Box>
      </Popover>
    </>
  );
};

const ProductsPopoverContent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 328, py: 3.5, pl: 3.5, pr: 2.5 }}>
        <Typography sx={popoverContentHeader}>Products</Typography>
        <Typography variant="body_normal" sx={{ ...popoverContentBodySmall, mb: 3 }}>
          Future-proof your cloud infrastructure, reduce costs, and increase efficiency by deploying
          production-ready control planes.
        </Typography>
        <LinkBar
          href={routes.productsUCPRoute}
          title="Upbound"
          body="A simple and all-encompassing solution to adopt control plane architecture"
          sx={{ mb: 1.5 }}
        />
        <LinkBar
          href={routes.pricingRoute}
          title="Plans & Pricing"
          body="Choose the tier that’s right for you"
        />
      </Box>
      <Box sx={popoverDivider} />
      <Box sx={popoverFreeDemoContainer}>
        <Typography sx={popoverContentHeader}>Schedule a Free Demo</Typography>
        <Typography variant="body_normal" sx={{ ...popoverContentBodyBig, mb: 'auto' }}>
          Have one of our Upbound specialists show you the power of the Universal Cloud Platform and
          how it can be used to transform how you manage infrastructure.
        </Typography>
        <Button styleType="linkWaterContained" sizeType="small" href={routes.contactSalesUrl}>
          Schedule Demo
        </Button>
      </Box>
    </Box>
  );
};

const LearnPopoverContent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 328, py: 3.5, pl: 3.5, pr: 2.5 }}>
        <Typography sx={popoverContentHeader}>More on Upbound</Typography>
        <Typography variant="body_normal" sx={{ ...popoverContentBodySmall, mb: 3 }}>
          From tutorials to in-depth knowledge from industry experts, discover comprehensive insight
          into cloud infrastructure management from Upbound.
        </Typography>
        <LinkBar
          href={routes.cloudDocsUrl}
          title="Docs"
          body="Learn how to use Upbound"
          sx={{ mb: 1.5 }}
        />
        <LinkBar
          href={routes.upboundBlogUrl}
          title="Upbound Blog"
          body="Discover cutting-edge thought leadership & news"
          sx={{ mb: 1.5 }}
        />
        <LinkBar
          href={routes.crossplaneSlackUrl}
          title="Crossplane Slack"
          body="Join a passionate community to get the support you need"
        />
      </Box>
      <Box sx={popoverDivider} />
      {/* <Link
        href={`${routes.upboundBlogUrl}moving-crossplane-package-authoring-from-plain-yaml-to-ide-aided-development/`}
        muiProps={{ color: COLORS.linkWater }}
      > */}
      <Box sx={{ width: 268, pb: '12px' }}>
        <MediaCard
          noBg
          rounded={false}
          img={laptopArticleImg}
          imgHeight={200}
          profileImg={grantGuminaProfile}
          person="Grant Gumina"
          type="Blog"
          title="Announcing the Upbound VSCode Plugin"
          body="Today we’re excited to share the alpha version of Upbound’s VSCode plugin for Crossplane."
          bodyVariant="body_xs"
          date="15 Feb, 2022"
          pillText="New!"
          href={`${routes.upboundBlogUrl}crossplane-vscode-plugin-announcement/`}
        />
        {/* <Box sx={{ position: 'relative', height: 206 }}>
          <Box sx={popoverBlogPill}>
            <Typography variant="inherit">New!</Typography>
          </Box>
          <Image src={learnBlogLaptop} alt="learnBlogLaptop" />
        </Box>
        <Box sx={{ position: 'relative', pt: 2, px: '22px' }}>
          <Box sx={popoverBlogProfilePic}>
            <Image src={taylorThorntonProfile} alt="taylorThorntonProfile" />
          </Box>
          <Typography sx={popoverBlogDarkText}>Taylor Thornton | Blog</Typography>
          <Typography sx={{ ...popoverContentBodyBig, my: '2px' }}>
            Moving Crossplane package authoring from plain YAML to IDE aided development
          </Typography>
          <Typography sx={{ ...popoverBlogDarkText, fontFamily: 'Avenir-Oblique' }}>
            23 Feb, 2022
          </Typography>
        </Box> */}
      </Box>
      {/* </Link> */}
    </Box>
  );
};

type LinkItemProps = {
  href: string;
  title: string;
  icon?: React.ReactNode;
  isDark?: boolean;
};

const LinkItem = ({ href, title, icon, isDark }: LinkItemProps) => {
  return (
    <Link href={href} muiProps={{ underline: 'none' }}>
      <Typography component="span" sx={{ ...navItem, opacity: isDark ? 0.5 : 1 }}>
        {icon && <Box component="span">{icon}</Box>}
        {title}
      </Typography>
    </Link>
  );
};

type Props = {
  isDark?: boolean;
};

const PageHeader = ({ isDark }: Props) => {
  return (
    <Box sx={{ ...root, bgcolor: isDark ? 'transparent' : COLORS.cornflower }}>
      {/* <Box sx={announceContainer}>
        <Typography variant="inherit">
          🎉 Announcing the NEW Upbound Marketplace — giving customers access to best-in-class
          components{' '}
          <Link
            href={routes.upboundMarketplaceUrl}
            muiProps={{ color: 'inherit', underline: 'always' }}
          >
            Learn More
          </Link>
        </Typography>
      </Box> */}
      <Box sx={mainContainer}>
        <Box sx={{ flex: 1 }}>
          <Link href={routes.homeRoute}>
            <Image src={logoWhite} alt="upbound logo" width={117} height={31} />
          </Link>
        </Box>
        <Box sx={centerItems}>
          <PopoverItem title="Products" content={<ProductsPopoverContent />} isDark={isDark} />
          <LinkItem href={routes.upboundMarketplaceUrl} title="Marketplace" isDark={isDark} />
          <PopoverItem title="Learn" content={<LearnPopoverContent />} isDark={isDark} />
          <LinkItem href={routes.aboutRoute} title="About" isDark={isDark} />
        </Box>
        <Box sx={rightItems}>
          <LinkItem
            href={routes.partnersRoute}
            title="Partners"
            icon={<PartnersIcon />}
            isDark={isDark}
          />
          <LinkItem
            href={routes.cloudLoginUrl}
            title="Sign In"
            icon={<SignInIcon />}
            isDark={isDark}
          />
          <Button styleType="linkWaterContained" sizeType="small" href={routes.cloudRegisterUrl}>
            Try For Free
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
