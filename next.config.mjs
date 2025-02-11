import { stringify } from 'postcss';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {remotePatterns : [{hostname:"res.cloudinary.com"},{hostname:"**.cloudinary.com"}]}
};

export default nextConfig;
