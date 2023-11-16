const withPWA = require("next-pwa")({
  pwa: {
    dest: "public",
    register: true,
    skipWaitings: true,
    disabled: process.env.NODE_ENV === "development",
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = [nextConfig, withPWA];
