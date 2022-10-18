import React, { useState } from 'react';

import Image from 'next/image';
import { COLORS, MQ } from 'src/theme';

import { AppBar, Drawer, IconButton, Toolbar, Box, SxProps } from '@mui/material';

import * as routes from 'src/routes';

import Link from 'src/elements/Link';
import Button from 'src/elements/Button';

import logo from 'public/crossplane-logo.svg';
import githubLogo from 'public/icons/github.svg';
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
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    opacity: '.7',
    letterSpacing: '1.1px',
    px: 2,
    mb: 3,

    '&:hover': {
      opacity: '1',
    },

    [MQ.md]: {
      fontSize: '17px',
      mb: 0,
    },
  },
};

const mobileSignUpBtn: SxProps = {
  textAlign: 'center',
  mt: 5,
  '& .MuiButton-root': {
    fontSize: '16px',
    minHeight: '60px',
    px: '30px',
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

const maxWidth: SxProps = {
  '@media screen and (min-width: 1336px)': {
    width: '100%',
    maxWidth: '351px',
  },
};

const navItems = [
  {
    href: '/what-control-planes',
    text: 'What Control Planes?',
  },
  {
    href: routes.docsUrl,
    text: 'Documentation',
  },
  {
    href: routes.slackUrl,
    text: 'Community',
  },
  {
    href: routes.blogUrl,
    text: 'Blog',
  },
];

const PageHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href={routes.home} muiProps={{ sx: { display: 'flex' } }}>
          <Image src={logo} alt="company logo" width={117} height={31} />
        </Link>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ p: 0, display: { xl: 'none' } }}
        >
          <Image src={closeIcon} alt="menu icon" width={24} />
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
          <Link key={navItem.text} href={navItem.href}>
            {navItem.text}
          </Link>
        ))}
      </Box>
      <Box sx={mobileSignUpBtn}>
        <Link
          href={routes.githubUrl}
          muiProps={{
            sx: { display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 },
          }}
        >
          <Box mr={1.5}>
            <Image src={githubLogo} alt="github logo" width={16} height={16} />
          </Box>
          Get Started
        </Link>
        <Button styleType="whiteContained" sizeType="small" href={routes.slackUrl} target="_blank">
          Join Our Slack Channel
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={root}>
      <AppBar component="nav" position="absolute">
        <Toolbar>
          <Link href={routes.home} muiProps={{ sx: { display: 'flex', ...maxWidth } }}>
            <Image src={logo} alt="company logo" width={117} height={31} />
          </Link>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ p: 0, display: { xl: 'none' } }}
          >
            <Image src={hamburgerIcon} alt="menu icon" width={24} />
          </IconButton>
          <Box sx={{ display: { _: 'none', xl: 'block' }, ...navLinks }}>
            {navItems.map((navItem) => (
              <Link key={navItem.text} href={navItem.href}>
                {navItem.text}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: { _: 'none', xl: 'flex' },
              alignItems: 'center',
              ...maxWidth,
            }}
          >
            <Link href={routes.githubUrl} muiProps={{ sx: { display: 'flex' } }}>
              <Box mr={1.5} display="flex">
                <Image src={githubLogo} alt="github logo" width={16} height={16} />
              </Box>
              Get Started
            </Link>
            <Button
              styleType="whiteContained"
              sizeType="small"
              href={routes.slackUrl}
              target="_blank"
              sx={{ ml: 4 }}
            >
              Join Our Slack Channel
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { _: 'block', xl: 'none' },
            ...mobileNav,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default PageHeader;
