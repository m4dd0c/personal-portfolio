import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof of Work | m4dd0c",
  description: "Proof of Work page for m4dd0c's Portfolio Website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}