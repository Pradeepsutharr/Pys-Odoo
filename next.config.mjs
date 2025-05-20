/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  concurrentFeatures: true,
  images: {
    domains: ["storage.googleapis.com"],
  },
};

export default nextConfig;
