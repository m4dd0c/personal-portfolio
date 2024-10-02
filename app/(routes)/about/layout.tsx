import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | m4dd0x",
  description: "About page for m4dd0x's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

