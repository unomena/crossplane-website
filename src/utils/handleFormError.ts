import { AxiosError } from 'axios';

const handleFormError = (
  errorLabel: string,
  error: any,
  setFieldError: (field: string, message: string | undefined) => void,
  setRecaptchaError?: React.Dispatch<React.SetStateAction<null>>
) => {
  console.log(errorLabel, error);
  if (error instanceof AxiosError && error.response && error.response.data) {
    if (error.response.data.recaptcha_error && setRecaptchaError) {
      setRecaptchaError(error.response.data.recaptcha_error);
    }
    if (error.response.status === 400) {
      Object.keys(error.response.data).forEach((key) => {
        if (error.response && error.response.data[key]) {
          setFieldError(key, error.response.data[key]);
        }
      });
    } else if (error.response?.status !== 403) {
      alert(`Something went wrong, please try again:\n ${JSON.stringify(error?.response?.data)}`);
    }
  }
};

export default handleFormError;
