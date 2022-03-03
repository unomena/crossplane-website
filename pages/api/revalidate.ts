// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | string
  | {
      message?: string;
      revalidated?: boolean;
      status?: string;
    };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!req.query.path) {
    return res.status(500).send('No path provided');
  }

  try {
    await res.unstable_revalidate(`${req.query.path}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err);
    return res.status(500).send('Error revalidating');
  }
}
