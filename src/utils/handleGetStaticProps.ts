import { link } from 'fs';
import { GetStaticPropsContext } from 'next';

import axiosInstance from 'src/utils/axiosInstance';
import handleError from 'src/utils/handleError';

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

const handleGetStaticProps = async (context: GetStaticPropsContext, path: string) => {
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
    const res = await axiosInstance.get(api);
    const cms_head_props: { [key: string]: any } = {};
    cms_head_items.forEach((item) => {
      if (res?.data.meta[item]) {
        cms_head_props[item] = res?.data.meta[item] || null;
      } else {
        cms_head_props[item] = res?.data[item] || null;
      }
    });

    let newsBannerData = null;

    try {
      // const res_news = await axiosInstance.get<NewsBanner[]>('/api/news-items');
      const res_news = {
        data: [
          {
            // eslint-disable-next-line max-len
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis id dui condimentum sagittis.',
            button: [
              {
                id: 1,
                value: {
                  text: 'Learn More',
                  link: [
                    {
                      id: '1',
                      type: 'external_url',
                      value: '/',
                    },
                  ],
                  style_type: 'whiteOutlined',
                },
              },
            ],
          },
        ],
      };
      newsBannerData = res_news.data[0];
    } catch (error) {
      handleError(`get news banner`, error);
    }

    const props = {
      ...res?.data,
      cms_head_props,
      isPreview,
      newsBannerData: newsBannerData || null,
    };

    return props;
  } catch (error) {
    console.log(`getStaticProps ${path}`, error);
    return false;
  }
};

export default handleGetStaticProps;
