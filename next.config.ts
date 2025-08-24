/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' }, // used in pages/components
    ],
  },
};

module.exports = nextConfig;
