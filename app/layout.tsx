import type { Metadata } from "next";
import {
  Inter,
  IBM_Plex_Mono,
  Nunito,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Layout/Header";
import manifest from "./manifest";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "m4dd0c", template: "%s | m4dd0c" },
  description:
    "Full-stack developer specializing in Next.js, TypeScript, and Node.js. Explore my projects, open-source contributions, and technical writings.",
  keywords:
    "m4dd0c, m4dd0x, portfolio, developer, projects, skills, Manish Suthar, full-stack developer, Next.js developer, TypeScript, React, Node.js, portfolio, web developer, open source, freelancer",
  authors: [{ name: "Manish Suthar", url: SITE_URL }],
  creator: "m4dd0c",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "m4dd0c Portfolio",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, and Node.js. Explore my projects, open-source contributions, and technical writings.",
    site: "@m4dd0c_",
    creator: "@m4dd0c_",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "m4dd0c Portfolio",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, and Node.js. Explore my projects, open-source contributions, and technical writings.",
    url: new URL(SITE_URL),
    siteName: "m4dd0c",
    images: [
      {
        url: "https://m4dd0c.me/metadata/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "m4dd0c Portfolio",
      },
    ],
  },
  alternates: { canonical: "./" },
  manifest: manifest().start_url,
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon/apple-icon.png", type: "image/png" }],
    shortcut: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER!} />
      <body
        className={`${inter.variable} ${mono.variable} ${nunito.variable} ${serif.variable} antialiased bg-white dark:bg-gray-950 [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER!}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex min-h-screen items-center justify-center h-full pt-14 bg-white dark:bg-gray-950 w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
