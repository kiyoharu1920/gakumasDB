import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});
const tailwindsAll =
  "bg-gradient-to-r from-purple-500 via-green-500 to-yellow-200 min-h-screen";

export const metadata: Metadata = {
  title: "学マス比較",
  description: "学マス比較",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${inter.className} ${tailwindsAll}`}>{children}</body>
    </html>
  );
}
