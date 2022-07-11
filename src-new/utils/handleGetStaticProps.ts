import { GetStaticPropsContext } from 'next';

import axiosInstance from 'src-new/utils/axiosInstance';

interface CustomPreviewData {
  previewData: {
    preview_url: string;
    relative_url: string;
  };
}

const handleGetStaticProps = async (
  context: GetStaticPropsContext,
  path: string,
  hasTestimonials?: boolean
) => {
  let api = `/api/v2/pages/find/?html_path=${path}`;
  let isPreview = false;

  if (context?.preview && context?.previewData) {
    const { previewData } = context as CustomPreviewData;
    if (previewData.relative_url === path) {
      api = previewData.preview_url;
      isPreview = true;
    }
  }

  let testimonials = null;

  if (hasTestimonials) {
    try {
      const res = await axiosInstance.get('/api/testimonials');
      if (res?.data && res.data.length !== 0) {
        testimonials = res.data.map((item: Testimonial) => ({
          ...item,
          bg_image: JSON.parse(item.bg_image),
          logo: JSON.parse(item.logo),
        }));
      }
    } catch (error) {
      console.log(`get testimonials`, error);
    }
  }

  try {
    const res = await axiosInstance.get(api);

    let props = {
      ...res?.data,
      isPreview,
    };

    if (testimonials) {
      props = {
        ...props,
        testimonials,
      };
    }

    return props;
  } catch (error) {
    console.log(`getStaticProps ${path}`, error);
    return false;
  }
};

export default handleGetStaticProps;
