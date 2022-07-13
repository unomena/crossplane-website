import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!req.query.path) {
    return res.status(500).send('No path provided');
  }

  try {
    await res.revalidate(`${req.query.path}`);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating');
  }
}
