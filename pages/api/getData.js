import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('gakumasDB');

    // testコレクションからデータを取得
    const data = await db.collection('supportCards').find({}).toArray();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
};
