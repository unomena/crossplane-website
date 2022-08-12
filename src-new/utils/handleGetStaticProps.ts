import { GetStaticPropsContext } from 'next';

import axiosInstance from 'src-new/utils/axiosInstance';

const cms_head_items = [
  'title',
  'seo_title',
  'search_description',
  'seo_keywords',
  'og_twitter_title',
  'og_twitter_url',
  'og_twitter_description',
  'og_twitter_image',
  'twitter_card',
  'twitter_site',
  'twitter_creator',
];

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
  let quoteless_testimonials = null;

  if (hasTestimonials) {
    try {
      const res = await axiosInstance.get<Testimonial[]>('/api/testimonials');
      if (res?.data && res.data.length !== 0) {
        testimonials = res.data.filter((q) => q.can_display);
        quoteless_testimonials = res.data.filter((q) => !q.can_display);
      }
    } catch (error) {
      console.log(`get testimonials`, error);
    }
  }

  try {
    const res = await axiosInstance.get(api);
    const cms_head_props = {};
    cms_head_items.forEach((item) => {
      if (res?.data.meta[item]) {
        cms_head_props[item] = res?.data.meta[item] || null;
      } else {
        cms_head_props[item] = res?.data[item] || null;
      }
    });

    let props = {
      ...res?.data,
      cms_head_props,
      isPreview,
    };

    if (testimonials) {
      props = {
        ...props,
        testimonials,
        quoteless_testimonials,
      };
    }

    return props;
  } catch (error) {
    console.log(`getStaticProps ${path}`, error);
    return false;
  }
};

export default handleGetStaticProps;
