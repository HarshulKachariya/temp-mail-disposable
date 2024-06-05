import type { NextApiRequest, NextApiResponse } from "next";

type RequestBody = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, reason, message } = req.body as RequestBody;

    if (!name || !email || !reason || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      res.status(200).json({ name, email, reason, message });
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
