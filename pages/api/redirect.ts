import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { targetUrl } = req.query;

  if (!targetUrl) {
    return res.status(400).json({ error: "Missing targetUrl" });
  }

  // Decode the target URL and perform validation if necessary
  const decodedUrl = decodeURIComponent(targetUrl as string);

  // Ensure targetUrl is safe (add your URL validation logic here if needed)
  if (!decodedUrl.startsWith("https://") && !decodedUrl.startsWith("http://")) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  // Redirect to the target URL
  res.redirect(307, decodedUrl);
}
