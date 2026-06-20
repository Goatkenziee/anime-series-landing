/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress webpack managed paths warnings
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.snapshot = {
        ...config.snapshot,
        managedPaths: [],
      };
    }
    return config;
  },
};

module.exports = nextConfig;
