import React, { useRef, useState } from 'react';

import Image from 'next/image';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Hidden,
  IconButton,
  Popover,
  SxProps,
  Typography,
} from '@mui/material';
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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const root: SxProps = {
  position: 'absolute',
  top: 0,
  width: '100%',
  minHeight: 88,
  bgcolor: 'transparent',
  display: 'flex',
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
  px: { _: '20px', lg: '50px' },
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
    mx: { lg: '10px', xl: '19px' },
  },
};

const rightItems: SxProps = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& > span,a': {
    ml: { lg: '10px', xl: '18px' },
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
  fontSize: '13px !important',
  lineHeight: '20px !important',
};

const popoverContentBodyBig: SxProps = {
  fontSize: '16px !important',
  lineHeight: '26px !important',
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

const menuContainer: SxProps = {
  flex: 1,
  width: '100%',
  height: '100%',
  bgcolor: COLORS.elephant,
  display: 'flex',
  flexDirection: 'column',
};

const accordionRoot: SxProps = {
  bgcolor: 'transparent',
  boxShadow: 'none',
  color: COLORS.linkWater,

  '&:before': {
    display: 'none',
  },

  '& .MuiAccordionSummary-expandIconWrapper': {
    color: COLORS.linkWater,
  },
};

const accordionLinkItem: SxProps = {
  px: 2,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  color: COLORS.linkWater,
};

const accordionLinkChild: SxProps = {
  ml: 2,
  '&:not(:last-of-type)': {
    mb: 3,
  },
};

const accordionLinkChildText: SxProps = {
  fontFamily: 'Avenir-Medium',
  fontSize: 14,
};

const menuButtonsContainer: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  px: 2,
  py: 4,
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
          Future-proof cloud infrastructure, reduce costs, & increase efficiency
        </Typography>
        <LinkBar
          href={routes.productsUCPRoute}
          title="Upbound Product Page"
          body="The single control center for your infrastructure"
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
          From tutorials to knowledge from industry experts, discover comprehensive insights
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
          body="Discover cutting-edge thought leadership"
          sx={{ mb: 1.5 }}
        />
        <LinkBar
          href={routes.crossplaneSlackUrl}
          title="Crossplane Slack"
          body="Join a passionate community for the support you need"
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

const mobileLinks = [
  {
    title: 'Products',
    children: [
      {
        title: 'Upbound Product Page',
        href: routes.productsUCPRoute,
      },
      {
        title: 'Plans & Pricing',
        href: routes.pricingRoute,
      },
    ],
  },

  {
    title: 'Learn',
    children: [
      {
        title: 'Docs',
        href: routes.cloudDocsUrl,
      },
      {
        title: 'Upbound Blog',
        href: routes.upboundBlogUrl,
      },
      {
        title: 'Crossplane Slack',
        href: routes.crossplaneSlackUrl,
      },
    ],
  },
  {
    title: 'Marketplace',
    href: routes.upboundMarketplaceUrl,
  },
  {
    title: 'About',
    href: routes.aboutRoute,
  },
  {
    title: 'Partners',
    href: routes.partnersRoute,
  },
];

type PageHeaderMobileProps = {
  isDark?: boolean;
  setOverflowVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageHeaderMobile = ({ isDark, setOverflowVisible }: PageHeaderMobileProps) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleOpen = () => {
    setOverflowVisible(false);
    setExpanded(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOverflowVisible(true);
    setOpen(false);
  };

  const handleChange = (val: string) => {
    if (val === expanded) {
      setExpanded(null);
    } else {
      setExpanded(val);
    }
  };

  return (
    <Box
      sx={{
        ...root,
        bgcolor: open ? COLORS.firefly : isDark ? 'transparent' : COLORS.cornflower,
        height: open ? '100%' : 'unset',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          ...mainContainer,
          position: open ? 'relative' : 'absolute',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Link href={routes.homeRoute}>
            <Image src={logoWhite} alt="upbound logo" width={117} height={31} />
          </Link>
        </Box>
        <Box sx={{ color: '#fff' }}>
          <IconButton color="inherit" onClick={open ? handleClose : handleOpen}>
            {open ? <CloseIcon color="inherit" /> : <MenuIcon color="inherit" />}
          </IconButton>
        </Box>
      </Box>
      {open && (
        <Box sx={menuContainer}>
          {mobileLinks.map((item) => (
            <Box key={item.title}>
              {item.children ? (
                <Accordion
                  expanded={expanded === item.title}
                  onChange={() => handleChange(item.title)}
                  disableGutters
                  square
                  sx={accordionRoot}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon color="inherit" />}>
                    <Typography sx={{ fontFamily: 'Avenir-Medium' }}>{item.title}</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    {item.children.map((child) => (
                      <Box key={child.title} sx={accordionLinkChild}>
                        <Link href={child.href}>
                          <Typography sx={accordionLinkChildText}>{child.title}</Typography>
                        </Link>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Box sx={accordionLinkItem}>
                  <Link href={item.href}>
                    <Typography sx={{ fontFamily: 'Avenir-Medium' }}>{item.title}</Typography>
                  </Link>
                </Box>
              )}
            </Box>
          ))}
          <Box sx={menuButtonsContainer}>
            <Button styleType="linkWaterContained" sizeType="small" href={routes.cloudRegisterUrl}>
              Try For Free
            </Button>
            <Button
              styleType="whiteOutlined"
              sizeType="small"
              href={routes.cloudLoginUrl}
              sx={{ mt: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

type Props = {
  isDark?: boolean;
  setOverflowVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageHeader = ({ isDark, setOverflowVisible }: Props) => {
  return (
    <>
      <Hidden lgDown>
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
            <Box sx={{ flex: { lg: 0.75, xl: 1 } }}>
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
              <Button
                styleType="linkWaterContained"
                sizeType="small"
                href={routes.cloudRegisterUrl}
              >
                Try For Free
              </Button>
            </Box>
          </Box>
        </Box>
      </Hidden>
      <Hidden lgUp>
        <PageHeaderMobile isDark={isDark} setOverflowVisible={setOverflowVisible} />
      </Hidden>
    </>
  );
};

export default PageHeader;
