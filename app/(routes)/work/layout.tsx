import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | m4dd0c",
  description: "Project or Work Showcase page for m4dd0c's Portfolio Website",
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
