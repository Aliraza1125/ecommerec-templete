/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PROD_URL: process.env.NODE_ENV === 'production' 
      ? 'https://ecommerce-store-red-five.vercel.app/api'
      : 'http://localhost:3000/api',
    storageURL: process.env.NODE_ENV === 'production'
      ? 'https://ecommerce-store-red-five.vercel.app'
      : 'http://localhost:3000',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce-store-red-five.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      }
    ],
  },

  // Remove the module configuration as it's not needed in Next.js
  // Next.js handles these loaders internally
  
  // Optional: Add other Next.js specific configurations
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;