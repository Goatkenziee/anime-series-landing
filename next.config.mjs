/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress the managedPaths warnings in production build
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

export default nextConfig;
