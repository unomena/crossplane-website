import React, { useEffect, useRef } from 'react';

import Image from 'next/future/image';

import { Box, Typography, SxProps } from '@mui/material';
import { COLORS, MQ } from 'src/theme';

import useNewsBanner from 'src/context/newsBannerContext';

// import Link from 'src/elements/Link';
import Button from 'src/elements/Button';

import closeIcon from 'public/icons/close-icon.svg';

const root: SxProps = {
  position: 'fixed',
  width: '100%',
  bottom: { _: '0', md: 'unset' },
  zIndex: 1200,
  py: 2,
  pr: { _: '40px', md: '100px' },
  pl: { _: '40px', md: '50px' },
  bgcolor: COLORS.turquoise,
  color: COLORS.white,
  minHeight: '74px',
  display: { _: null, md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
};

type NewsBannerProps = {
  setNewsBannerHeight: React.Dispatch<React.SetStateAction<number>>;
  newsBannerClosed?: boolean;
  setNewsBannerClosed: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewsBanner = ({
  setNewsBannerHeight,
  newsBannerClosed,
  setNewsBannerClosed,
}: NewsBannerProps) => {
  const newsBannerRef = useRef<HTMLDivElement | null>(null);
  const { newsBannerData } = useNewsBanner();
  const { text, button } = newsBannerData;

  const handleClick = () => {
    // When the close button is clicked, set the flag in local storage to hide the NewsBanner.
    localStorage.setItem('newsBannerClosed', 'true');
    setNewsBannerClosed(true);
  };

  useEffect(() => {
    // Check the local storage flag when the component mounts.
    const isNewsBannerClosed = localStorage.getItem('newsBannerClosed');
    if (isNewsBannerClosed === 'true') {
      setNewsBannerClosed(true);
    } else {
      setTimeout(() => {
        setNewsBannerClosed(false);
      }, 350);
    }
  }, []);

  // Get newsbanner height as it responds to update top styling amount of PageHeader
  useEffect(() => {
    const updateNewsBannerHeight = () => {
      if (newsBannerRef.current) {
        const height = newsBannerRef.current.clientHeight;
        setNewsBannerHeight(height);
      }
    };

    updateNewsBannerHeight();

    window.addEventListener('resize', updateNewsBannerHeight);

    return () => {
      window.removeEventListener('resize', updateNewsBannerHeight);
    };
  }, []);

  return (
    <Box
      ref={newsBannerRef}
      sx={{
        transform: !newsBannerClosed ? 'translateY(0)' : 'translateY(100%)',
        transitionDuration: '1s',
        [MQ.md]: {
          transform: !newsBannerClosed ? 'translateY(0)' : 'translateY(-100%)',
        },
        ...root,
      }}
    >
      <Box sx={{ textAlign: { _: 'center', md: 'left' } }}>
        <Typography variant="body2" sx={{ fontSize: '18px', lineHeight: '26px' }}>
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          minWidth: 175,
          textAlign: { _: 'center', md: 'left' },
          ml: { _: 0, md: 3 },
          mt: { _: 3, md: 0 },
        }}
      >
        {button &&
          button.map(({ id, value }) => (
            <Button key={id} sizeType="normal" cmsValue={value}>
              {value.text}
            </Button>
          ))}
      </Box>
      <Box
        onClick={handleClick}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { _: '40px', md: '74px' },
          height: { _: '50px', md: '100%' },
          right: 0,
          top: 0,
          borderLeft: { md: '2px solid rgba(225, 225, 225, 0.6)' },
          color: COLORS.white,
          cursor: 'pointer',
        }}
      >
        <Image src={closeIcon} alt="menu icon" style={{ width: 24, height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default NewsBanner;
