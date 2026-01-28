/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || '/reactjs';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? basePath : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;