import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bllucake",
  description: "از قهوه خود لذت ببرید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl">{children}</body>
    </html>
  );
}
