/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["temp-mail.org"],
  },
  async headers() {
    return [
      {
        source: "/:path*", // Apply these headers to all routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: (req) => {
              const origin = req.headers.origin;
              const whitelist = [
                "https://tempmail-email.com",
                "http://localhost:3000",
                "https://temp-mail-disposable.vercel.app",
                "https://tempmail-disposable.netlify.app",
              ];
              if (whitelist.includes(origin)) {
                return origin;
              }
              return ""; // Return an empty string or a default value if not in the whitelist
            },
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,OPTIONS,POST,PUT,DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
