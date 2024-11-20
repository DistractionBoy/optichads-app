/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["pages", "components", "lib", "src"],
  },
};

module.exports = nextConfig;
