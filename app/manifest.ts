import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "m4dd0c | Portfolio",
    short_name: "m4ddoc",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    start_url: "/",
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
