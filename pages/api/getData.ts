import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("start1");
  try {
    console.log("start2");
    const client = await clientPromise;
    console.log("start3");
    const db = client.db("gakumasDB");
    console.log("start4");
    const data = await db.collection("supportCards").find({}).toArray();
    console.log("start5");
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Unable to fetch data" });
  }
};

export default getData;
