/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || '/reactjs';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;