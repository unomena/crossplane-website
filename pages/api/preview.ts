import type { NextApiRequest, NextApiResponse } from 'next';

import axiosInstance from 'src-new/utils/axiosInstance';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.query.secret !== process.env.PREVIEW_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  if (!req.query.content_type) {
    return res.status(500).send('No content_type provided');
  }

  if (!req.query.token) {
    return res.status(500).send('No token provided');
  }

  const pageRes = await axiosInstance.get(
    `/api/v2/pages/?type=${req.query.content_type}&fields=relative_url`
  );

  if (!pageRes?.data?.items[0]) {
    return res.status(500).send('Wagtail page does not exist');
  }

  const pageData = pageRes.data.items[0];

  // eslint-disable-next-line max-len
  const preview_url = `${process.env.apiHost}/api/v2/page_preview/${pageData.id}/?content_type=${req.query.content_type}&token=${req.query.token}`;

  res.setPreviewData({ preview_url, relative_url: pageData.relative_url }, { maxAge: 60 });

  res.redirect(pageData.relative_url);
}
