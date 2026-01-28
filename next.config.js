const { basePath } = require('../../next-react-project3/next.config.mjs');

/**
 * @type {import('next').NextConfig}
 */
const shared = require("../../next-react-project3/next.config.mjs");
const sharedBasePath = shared?.basePath ? String(shared.basePath) : "/reactjs";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? sharedBasePath : "",
  assetPrefix: isProd ? sharedBasePath : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig