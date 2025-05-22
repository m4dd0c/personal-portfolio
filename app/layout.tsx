import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SITE_URL } from "@/constant";
// import OG_IMAGE from "@/public/assets/metadata/opengraph-image.png";
import "./globals.css";
import manifest from "./manifest";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "m4dd0c", template: "%s | m4dd0c" },
  description:
    "A personal portfolio website showcasing my projects and skills.",
  keywords: "m4dd0c, portfolio, developer, projects, skills",
  twitter: {
    card: "summary_large_image",
    title: "m4dd0c Portfolio",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    creator: "@m4dd0c",
  },
  openGraph: {
    title: "m4dd0c Portfolio",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    url: new URL(SITE_URL),
    siteName: "m4dd0c",
    images: "https://m4dd0c.netlify.app/assets/metadata/opengraph-image.png",
  },
  alternates: { canonical: "./" },
  manifest: manifest().start_url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
