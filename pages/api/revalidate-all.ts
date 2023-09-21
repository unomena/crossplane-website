import type { NextApiRequest, NextApiResponse } from 'next';

const paths = ['/', '/community', '/why-control-planes', '/privacy-policy'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await Promise.all(paths.map((path) => res.revalidate(path)));
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating');
  }
}
