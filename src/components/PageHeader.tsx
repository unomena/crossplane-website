import React, { useState } from 'react';

import Image from 'next/future/image';
import { COLORS, MQ, fontAvenirRoman, fontAvenirBold } from 'src/theme';

import useNewsBanner from 'src/context/newsBannerContext';

import { AppBar, Drawer, IconButton, Toolbar, Box, SxProps, useMediaQuery } from '@mui/material';

import * as routes from 'src/routes';

import Link from 'src/elements/Link';
import Button from 'src/elements/Button';
import NewsBanner from 'src/components/NewsBanner';

import GitHubIcon from '@mui/icons-material/GitHub';
import SlackIcon from 'src/svg/SlackIcon';
import githubStar from 'public/github-star.svg';
import logo from 'public/crossplane-logo.svg';
import closeIcon from 'public/icons/close-icon.svg';
import hamburgerIcon from 'public/icons/hamburger-white.svg';

const root: SxProps = {
  position: 'relative',
  '& nav': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiToolbar-root': {
    justifyContent: 'space-between',
    minHeight: '80px',
  },
};

const navLinks: SxProps = {
  '& a': {
    fontSize: '20px',
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    opacity: '.85',
    px: 1.5,
    py: 3,

    '&:hover': {
      opacity: '1',
    },

    '@media screen and (min-width: 1170px)': {
      fontSize: '17px',
      mb: 0,
    },
  },
};

const socialLinksStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '20px',
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

const mobileSignUpBtn: SxProps = {
  textAlign: 'center',
  // mt: 5,
  '& .MuiButton-root': {
    ...fontAvenirRoman,
  },
};

const mobileNav: SxProps = {
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '100%',
    p: 3,
    backgroundColor: COLORS.nileBlue,
  },
};

const navItems = [
  {
    href: '/why-control-planes',
    text: 'Why Control Planes?',
    target: '_self',
  },
  {
    href: routes.docsUrl,
    text: 'Documentation',
    target: '_blank',
  },
  {
    href: routes.upboundMarketUrl,
    text: 'Marketplace',
    target: '_blank',
  },
  {
    href: '/community',
    text: 'Community',
    target: '_self',
  },
  {
    href: routes.blogUrl,
    text: 'Blog',
    target: '_blank',
  },
];

const PageHeader = () => {
  const matchesXXL = useMediaQuery(MQ.xxl);
  const { newsBannerData } = useNewsBanner();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsBannerClosed, setNewsBannerClosed] = useState(true);
  const [newsBannerHeight, setNewsBannerHeight] = useState<number>(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Link href={routes.home}>
            <Box>
              <Image src={logo} alt="company logo" style={{ width: '100%', maxWidth: 132 }} />
            </Box>
          </Link>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ p: 0, display: { xxl: 'none' } }}
        >
          <Image src={closeIcon} alt="menu icon" style={{ width: 24, height: 'auto' }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 10,
          ...navLinks,
        }}
      >
        {navItems.map((navItem) => (
          <Link key={navItem.text} href={navItem.href} muiProps={{ target: navItem.target }}>
            {navItem.text}
          </Link>
        ))}
      </Box>
      <Box sx={mobileSignUpBtn}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 3 }}>
          <Link
            href={routes.slackUrl}
            muiProps={{ target: '_blank', sx: { ...socialLinksStyles } }}
          >
            <Box mr={1.5} display="flex">
              <SlackIcon />
            </Box>
            Slack
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 3 }}>
          <Link
            href={routes.githubUrl}
            muiProps={{ target: '_blank', sx: { ...socialLinksStyles } }}
          >
            <Box mr={1.5} display="flex">
              <Image src={githubStar} alt="githubStar" style={{ width: '20px', height: '20px' }} />
            </Box>
            Star project
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, py: 3 }}>
          <Link
            href={routes.githubUrl}
            muiProps={{ target: '_blank', sx: { ...socialLinksStyles } }}
          >
            <Box mr={1.5} display="flex">
              <GitHubIcon fontSize="small" />
            </Box>
            GitHub
          </Link>
        </Box>
        <Button
          styleType="turquoiseContained"
          sizeType="normal"
          href={routes.docsGetStartedUrl}
          target="_blank"
          sx={{
            minWidth: '100%',
            [MQ.sm]: { minWidth: 256 },
            fontWeight: '700 !important',
            fontSize: '17px',
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {newsBannerData && (
        <NewsBanner
          newsBannerClosed={newsBannerClosed}
          setNewsBannerClosed={setNewsBannerClosed}
          setNewsBannerHeight={setNewsBannerHeight}
        />
      )}

      <Box sx={root}>
        <AppBar
          component="nav"
          position="absolute"
          sx={{ top: { md: !newsBannerClosed ? newsBannerHeight : 0 }, transition: 'all 1s' }}
        >
          <Toolbar>
            <Box
              sx={{
                '@media screen and (min-width: 1400px)': {
                  width: '100%',
                  maxWidth: '150px',
                },
              }}
            >
              <Link href={routes.home}>
                <Box>
                  <Image src={logo} alt="company logo" style={{ width: '100%', maxWidth: 132 }} />
                </Box>
              </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="close drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ p: 0, display: { xxl: 'none' } }}
            >
              <Image src={hamburgerIcon} alt="menu icon" style={{ width: 24, height: 'auto' }} />
            </IconButton>
            <Box sx={{ display: { _: 'none', xxl: 'block' }, ...navLinks }}>
              {navItems.map((navItem) => (
                <Link key={navItem.text} href={navItem.href} muiProps={{ target: navItem.target }}>
                  {navItem.text}
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                display: { _: 'none', xxl: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-end',
                '@media screen and (min-width: 1400px)': {
                  width: '100%',
                  maxWidth: '495px',
                },
              }}
            >
              <Link
                href={routes.slackUrl}
                muiProps={{ target: '_blank', sx: { ...socialLinksStyles } }}
              >
                <Box mr={1.5} display="flex">
                  <SlackIcon />
                </Box>
                Slack
              </Link>
              <Link
                href={routes.githubUrl}
                muiProps={{ target: '_blank', sx: { ml: 3, ...socialLinksStyles } }}
              >
                <Box mr={1.5} display="flex">
                  <Image
                    src={githubStar}
                    alt="githubStar"
                    style={{ width: '20px', height: '20px' }}
                  />
                </Box>
                Star project
              </Link>
              <Link
                href={routes.githubUrl}
                muiProps={{ target: '_blank', sx: { ml: 3, ...socialLinksStyles } }}
              >
                <Box mr={1.5} display="flex">
                  <GitHubIcon fontSize="small" />
                </Box>
                GitHub
              </Link>
              <Button
                styleType="turquoiseContained"
                sizeType="small"
                href={routes.docsGetStartedUrl}
                target="_blank"
                sx={{ ml: 3, ...fontAvenirBold }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        {!matchesXXL && (
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={mobileNav}
            >
              {drawer}
            </Drawer>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PageHeader;
