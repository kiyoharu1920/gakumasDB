import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const hello = function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Next.js!" });
};

export default hello;
