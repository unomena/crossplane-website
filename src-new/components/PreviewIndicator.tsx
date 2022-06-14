import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { Box, CircularProgress, Fab, SxProps, Tooltip, Typography } from '@mui/material';

import axios from 'axios';

const root: SxProps = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  zIndex: 1000000,
};

const text: SxProps = {
  fontSize: 16,
  fontWeight: 600,
  textTransform: 'none',
};

const button: SxProps = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const spinner: SxProps = {
  position: 'absolute',
  display: 'flex',
};

const PreviewIndicator = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleClearPreview = async () => {
    try {
      setLoading(true);
      await axios.get('/api/clear-preview-mode-cookies');
      router.reload();
    } catch (error) {
      setLoading(false);
      console.log('clear preview', error);
    }
  };

  return (
    <Box sx={root}>
      <Tooltip title="Click to clear preview" arrow>
        <Fab
          size="large"
          color="primary"
          variant="extended"
          sx={button}
          disabled={loading}
          onClick={handleClearPreview}
        >
          <Typography sx={text}>Preview Mode</Typography>
          {loading && (
            <Box sx={spinner}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default PreviewIndicator;
