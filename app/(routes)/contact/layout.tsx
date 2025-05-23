import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | m4dd0c",
  description: "Contact page for m4dd0c's Portfolio",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-black text-white">{children}</div>;
}
