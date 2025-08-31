/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable webpack caching in development to prevent caching issues
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig
