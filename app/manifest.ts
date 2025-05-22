import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "m4dd0c portfolio",
    short_name: "m4dd0c",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    start_url: "/",
    theme_color: "#ffffff",
    background_color: "#000000",
    display: "standalone",
    icons: [
      // Webapp specifc icons
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      // Android site shortcut icons
      {
        src: "/favicon/android/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      // Android specific icons
      {
        src: "/favicon/android/Icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/favicon/android/Icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/favicon/android/Icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/favicon/android/Icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon/android/Icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/favicon/android/Icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android/Icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      // Apple specific icons
      {
        src: "/favicon/apple/Icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/favicon/apple/Icon-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
      // General icons
      {
        src: "/favicon/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
