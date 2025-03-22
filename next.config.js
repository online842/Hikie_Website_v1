/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hikie.store'],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig; 