import PWA from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.microlink.io",
      },
    ],
  },
};

const withPWA = PWA({
  // disable: process.env.NODE_ENV === "development",
  aggressiveFrontEndNavCaching: true,
  disable: false,
  dest: "public",
  skipWaiting: true,
  cacheOnFrontEndNav: true,
});

export default withPWA(nextConfig);
