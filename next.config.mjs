/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ["storage.googleapis.com"],
  },
};

export default nextConfig;
