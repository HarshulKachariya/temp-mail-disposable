import type { NextApiRequest, NextApiResponse } from "next";
import mongooseConnection from "@/lib/mongodb";
import Contact from "@/utils/dataTypes";

type RequestBody = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

const handlePostRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, reason, message } = req.body as RequestBody;

  try {
    await mongooseConnection;

    const result = await Contact.create({ name, email, reason, message });
    res.status(201).json(result);
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleGetRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await mongooseConnection;

    const data = await Contact.find().limit(100).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error handling GET request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await handlePostRequest(req, res);
  } else if (req.method === "GET") {
    await handleGetRequest(req, res);
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
