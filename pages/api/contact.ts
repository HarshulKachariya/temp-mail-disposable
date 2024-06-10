import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

type RequestBody = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

// const validateEmail = (email: string): boolean => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// const validateRequestBody = (
//   body: RequestBody
// ): { isValid: boolean; error?: string } => {
//   const { name, email, reason, message } = body;

//   if (!name || !email || !reason || !message) {
//     return { isValid: false, error: "All fields are required." };
//   }

//   if (!validateEmail(email)) {
//     return { isValid: false, error: "Invalid email format." };
//   }

//   return { isValid: true };
// };

const handlePostRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, reason, message } = req.body as RequestBody;

  // const validation = validateRequestBody(req.body as RequestBody);
  // if (!validation.isValid) {
  //   return res.status(400).json({ error: validation.error });
  // }

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
  if (req.method === "POST") {
    await handlePostRequest(req, res);
  } else if (req.method === "GET") {
    await handleGetRequest(req, res);
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
