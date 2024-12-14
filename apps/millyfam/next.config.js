/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["pages", "components", "lib", "public"],
  },
};

module.exports = nextConfig;
