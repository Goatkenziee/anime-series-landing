import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Blaze — Animated Series",
  description:
    "An epic new anime series. Power awakens within. Watch the saga unfold.",
  openGraph: {
    title: "Soul Blaze — Animated Series",
    description: "An epic new anime series. Power awakens within.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
