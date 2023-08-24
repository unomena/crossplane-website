import axiosInstance from 'src/utils/axiosInstance';
import handleError from 'src/utils/handleError';

const getNewsBannerData = async () => {
  let newsBannerData = null;

  try {
    const res_news = await axiosInstance.get<NewsBanner[]>('/api/news-banner');
    newsBannerData = res_news.data[0];
  } catch (error) {
    handleError(`get news banner`, error);
  }

  return newsBannerData;
};

export default getNewsBannerData;
