import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('myFirstDatabase');

    const data = await db.collection('test').find({}).toArray();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Unable to connect to database' });
  }
};
