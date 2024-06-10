/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["temp-mail.org"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://tempmail-email.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
