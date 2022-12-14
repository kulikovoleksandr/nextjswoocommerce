/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  trailingSlash: false,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["woocommerce.local"],
  },
};
