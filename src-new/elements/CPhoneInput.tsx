import React, { useEffect, useState } from 'react';

import { TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

import axios from 'axios';

import 'react-phone-number-input/style.css';
import PhoneInput, {
  Country,
  DefaultInputComponentProps,
  Props as PhoneInputProps,
} from 'react-phone-number-input';

import CTextField from './CTextField';

const StyledPhoneInput = styled(PhoneInput)`
  position: relative;

  & > .PhoneInputCountry {
    display: ${({ defaultCountry }) => (!!defaultCountry ? 'flex' : 'none')};
    position: absolute;
    top: 36px;
    left: 14px;
    z-index: 100;
  }

  & input.MuiInputBase-input {
    padding-left: 55px;
  }
`;

const CInput = React.forwardRef((props: TextFieldProps, ref) => {
  const filteredProps = { ...props };
  delete filteredProps.className;

  return <CTextField {...filteredProps} inputRef={ref} />;
});
CInput.displayName = 'CInput';

const CPhoneInput = ({
  value,
  onChange,
  ...props
}: PhoneInputProps<DefaultInputComponentProps>) => {
  const [country, setCountry] = useState<Country>('ZA');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://ipapi.co/json/');
        setCountry(data.country);
      } catch (error) {
        console.log('get country', error);
      }
    })();
  }, []);

  return (
    <StyledPhoneInput
      value={value}
      onChange={onChange}
      international={!!country}
      countryCallingCodeEditable={false}
      defaultCountry={country}
      inputComponent={CInput}
      disabled={!country}
      {...props}
    />
  );
};

export default CPhoneInput;
