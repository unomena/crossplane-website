import React from 'react';

import { Checkbox, CheckboxProps, FormControlLabel, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

const checkBox: SxProps = {
  color: COLORS.linkWater,
};

type CCheckBoxProps = {
  label: string;
} & CheckboxProps;

const CCheckBox = ({ label, ...props }: CCheckBoxProps) => {
  return <FormControlLabel control={<Checkbox sx={checkBox} {...props} />} label={label} />;
};

export default CCheckBox;
