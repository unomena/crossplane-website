import axios from 'axios';

const getSessionData = async () => {
  const { data } = await axios.get('https://ipapi.co/json/');
  const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1');

  return {
    ip_address: data.ip,
    hutk,
  };
};

export default getSessionData;
