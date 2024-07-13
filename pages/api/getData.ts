import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    /* gakumasDBに接続 */
    const client = await clientPromise;
    const db = client.db('gakumasDB');

    // supportCardsコレクションからデータを取得
    const data = await db.collection('supportCards').find({}).toArray();

    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Unable to fetch data' });
  }
};
