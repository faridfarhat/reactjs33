/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '/reactjs33'; // or '/reactjs' if that's your repo name

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;