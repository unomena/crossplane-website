import { GetStaticPropsContext } from 'next';

import axiosInstance from 'src-new/utils/axiosInstance';

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

  let res = null;

  try {
    res = await axiosInstance.get(api);

    const props = {
      ...res?.data,
      isPreview,
    };

    return props;
  } catch (error) {
    console.log(`getStaticProps ${path}`, error);
    return false;
  }
};

export default handleGetStaticProps;
