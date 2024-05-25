// eslint-disable-next-line @typescript-eslint/no-var-requires
const withInterceptStdout = require("next-intercept-stdout");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pbs.twimg.com", "firebasestorage.googleapis.com"],
  },

  compiler: {
    emotion: true,
  },
};

module.exports = withInterceptStdout(nextConfig, (text) =>
  text.includes("Duplicate atom key") ? "" : text
);
