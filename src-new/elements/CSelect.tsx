import React from 'react';

import { Box, MenuItem, SxProps, TextField, TextFieldProps } from '@mui/material';
import { COLORS } from 'src/theme';

const textField: SxProps = {
  mt: '10px',
  mb: '6px',

  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    color: COLORS.linkWater,
    caretColor: COLORS.linkWater,
    '&.Mui-disabled': {
      opacity: 0.5,
    },
  },
  '& input': {
    fontWeight: 400,
    WebkitBoxShadow: `0 0 0 30px ${COLORS.elephant} inset !important`,
    WebkitTextFillColor: COLORS.linkWater,
  },
  '& .MuiSvgIcon-root': {
    color: COLORS.linkWater,
    '&.Mui-disabled': {
      color: COLORS.linkWater,
    },
  },
  '& .MuiSelect-root': {
    color: 'inherit',
    fontWeight: 400,
  },
  '& .MuiFormLabel-root': {
    fontWeight: 400,
    color: COLORS.linkWater,
    background: COLORS.elephant,
    marginLeft: -0.5,
    paddingLeft: 1,
    paddingRight: 1,
    '&.Mui-focused': {
      color: COLORS.cornflower,
    },
    '&.Mui-error': {
      color: COLORS.redPrimary,
    },
    '&.Mui-disabled': {
      opacity: 0.5,
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
  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: `${COLORS.linkWater} !important`,
  },
  '& .MuiOutlinedInput-root:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.cornflower,
    },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.cornflower,
      boxShadow: `0 0 4px 2px ${COLORS.cornflower}80`,
    },
  },
};

type CSelectProps = {
  options: { value: string; label: string }[];
} & TextFieldProps;

const CSelect = ({ options, ...props }: CSelectProps) => {
  return (
    <Box display="flex">
      <TextField select variant="outlined" margin="dense" sx={textField} fullWidth {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default CSelect;
