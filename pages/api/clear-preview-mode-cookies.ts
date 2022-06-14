import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();

  return res.json({ cleared: true });
}
