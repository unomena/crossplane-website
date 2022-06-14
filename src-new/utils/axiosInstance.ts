import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.apiHost,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
});

export default axiosInstance;
