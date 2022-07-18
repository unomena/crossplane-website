import { AxiosError } from 'axios';

const handleFormError = (
  errorLabel: string,
  error: AxiosError,
  setFieldError: (field: string, message: string | undefined) => void
) => {
  console.log(errorLabel, error);
  if (error instanceof AxiosError && error.response) {
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
