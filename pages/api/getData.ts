import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const getData = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("your-database-name");
    const data = await db.collection("your-collection-name").find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error connecting to the database: ", error);

    // 型アサーションを使用してエラーメッセージを取得
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: String(error) });
    }
  }
};

export default getData;
