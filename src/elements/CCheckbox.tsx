import React from 'react';

import { Checkbox, CheckboxProps, FormControlLabel, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

const checkBox: SxProps = {
  color: COLORS.linkWater,
};

type CCheckboxProps = {
  label: string;
} & CheckboxProps;

const CCheckbox = ({ label, ...props }: CCheckboxProps) => {
  return <FormControlLabel control={<Checkbox sx={checkBox} {...props} />} label={label} />;
};

export default CCheckbox;
