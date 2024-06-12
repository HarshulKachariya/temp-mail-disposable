import Cors from "cors";

const cors = Cors({
  methods: ["GET", "POST", "OPTIONS"],
  origin: [
    "https://tempmail-email.com",
    "http://localhost:3000",
    "https://temp-mail-disposable.vercel.app",
    "https://tempmail-disposable.netlify.app",
  ],
});

function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
export { runMiddleware };
