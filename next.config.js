/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['videodelivery.net', 'imagedelivery.net'],
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig
