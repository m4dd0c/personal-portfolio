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
  dest: "public",
  skipWaiting: true,
  register: true,
  cacheOnFrontEndNav: true, // ✅ keep this
  aggressiveFrontEndNavCaching: false, // ❌ turn this off
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.microlink\.io\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "microlink-api",
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24, // 1 day
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /^\/.*/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "pages-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
        },
      },
    },
  ],
});

export default withPWA(nextConfig);
