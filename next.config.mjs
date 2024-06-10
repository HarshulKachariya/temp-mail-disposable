/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["temp-mail.org"],
  },
  async rewrites() {
    return [
      {
        source: "/api/contact",
        destination: "https://tempmail-email.com/api/contact",
      },
    ];
  },
};

export default nextConfig;
