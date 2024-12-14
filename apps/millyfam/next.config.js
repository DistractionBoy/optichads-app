/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@optichads-app/shared-ui"],
  experimental: {
    externalDir: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["pages", "components", "lib", "public"],
  },
};

module.exports = nextConfig;
