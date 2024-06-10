import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

import cors, { runMiddleware } from "../../lib/cors";


type RequestBody = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

const handlePostRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, reason, message } = req.body as RequestBody;

  try {
    const client = await clientPromise;
    const db = client.db("tempmail_email");
    const collection = db.collection("contact");

    const result = await collection.insertOne({
      name,
      email,
      reason,
      message,
      createdAt: new Date(),
    });

    res.status(201).json(result);
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleGetRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("tempmail_email");
    const data = await db.collection("contact").find().limit(100).toArray();

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

  await runMiddleware(req, res, cors);


  if (req.method === "POST") {
    await handlePostRequest(req, res);
  } else if (req.method === "GET") {
    await handleGetRequest(req, res);
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
