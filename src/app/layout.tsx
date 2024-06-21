import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/containers/layout/Layout";
import { mockSettings } from "@/utils/mocks";

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
    <html lang="en" style={{ height: '100%' }}>
      <body dir="rtl" style={{ height: '100%' }}>
        <Layout appSettings={mockSettings}
          currentUser={{
            image: null
          }}
          orderCount={4}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
