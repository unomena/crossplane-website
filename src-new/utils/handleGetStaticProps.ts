import { GetStaticPropsContext } from 'next';

import axiosInstance from 'src-new/utils/axiosInstance';

interface CustomPreviewData {
  previewData: {
    preview_url: string;
  };
}

const handleGetStaticProps = async (context: GetStaticPropsContext, path: string) => {
  let api = `/api/v2/pages/find/?html_path=${path}`;

  if (context?.preview && context?.previewData) {
    const { previewData } = context as CustomPreviewData;
    api = previewData.preview_url;
  }

  let res = null;

  try {
    res = await axiosInstance.get(api);

    const props = {
      ...res?.data,
      isPreview: context.preview || false,
    };

    return props;
  } catch (error) {
    console.log(`getStaticProps ${path}`, error);
    return false;
  }
};

export default handleGetStaticProps;
