import { GetStaticPropsContext } from 'next';

import axiosInstance from 'src/utils/axiosInstance';

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
  'slug',
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
  tempData?: any
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

  try {
    // const res = await axiosInstance.get(api);
    const res = { data: tempData };
    const cms_head_props = {};
    cms_head_items.forEach((item) => {
      if (res?.data.meta[item]) {
        cms_head_props[item] = res?.data.meta[item] || null;
      } else {
        cms_head_props[item] = res?.data[item] || null;
      }
    });

    const props = {
      ...res?.data,
      cms_head_props,
      isPreview,
    };

    return props;
  } catch (error) {
    console.log(`getStaticProps ${path}`, error);
    return false;
  }
};

export default handleGetStaticProps;
