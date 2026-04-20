/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    // Static export requires unoptimized images
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
