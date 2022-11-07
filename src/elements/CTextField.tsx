import React from 'react';

import { Box, TextField, TextFieldProps, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

const textField: SxProps = {
  mt: '10px',
  mb: '6px',

  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    color: COLORS.linkWater,
    caretColor: COLORS.linkWater,
  },
  '& input': {
    fontWeight: 400,
    WebkitBoxShadow: `0 0 0 30px ${COLORS.nileBlue} inset !important`,
    WebkitTextFillColor: COLORS.linkWater,
  },
  '& textarea': {
    fontWeight: 400,
  },
  '& .MuiFormLabel-root': {
    fontWeight: 400,
    color: COLORS.linkWater,
    background: COLORS.nileBlue,
    marginLeft: -0.5,
    paddingLeft: 1,
    paddingRight: 1,
    '&.Mui-focused': {
      color: COLORS.turquoise,
    },
    '&.Mui-error': {
      color: COLORS.redPrimary,
    },
  },
  '& .MuiOutlinedInput-root.Mui-error.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.redPrimary,
      boxShadow: `0 0 4px 2px ${COLORS.redPrimary}80`,
    },
  },
  '& .MuiOutlinedInput-root.Mui-error:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.redPrimary,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.linkWater,
  },
  '& .MuiIconButton-root': {
    color: COLORS.linkWater,
  },
  '& .MuiOutlinedInput-root:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.turquoise,
    },
    '& .MuiIconButton-root': {
      color: COLORS.turquoise,
    },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.turquoise,
      boxShadow: `0 0 4px 2px ${COLORS.turquoise}80`,
    },
    '& .MuiIconButton-root': {
      color: COLORS.turquoise,
    },
  },
};

const CTextField = (props: TextFieldProps) => {
  return (
    <Box display="flex" width="100%">
      <TextField variant="outlined" margin="dense" sx={textField} fullWidth {...props} />
    </Box>
  );
};

export default CTextField;
