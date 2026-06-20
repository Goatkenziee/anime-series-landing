/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output for Vercel compatibility
  output: "standalone",

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

export default nextConfig;
