const withImages = require('next-images');

const nextConfig = {
  output: 'export', // This enables static export
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    // You can customize the webpack config here
    return config;
  },
  // ... other configurations
};

module.exports = withImages(nextConfig);