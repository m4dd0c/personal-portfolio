import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | m4dd0c",
  description: "Blog page for m4dd0c's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}