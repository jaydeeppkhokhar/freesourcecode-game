/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true, // Enables the app directory structure
    serverActions: true, // Fixes issues with server-side rendering and actions
  },
  reactStrictMode: true, // Ensures better checks during development
};

export default nextConfig;
