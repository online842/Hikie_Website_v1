/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    poweredByHeader: false,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    }
  };
  
  module.exports = nextConfig; 