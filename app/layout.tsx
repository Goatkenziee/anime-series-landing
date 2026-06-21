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
    url: "https://www.soulblazeanime.com",
    siteName: "Soul Blaze",
    images: [
      {
        url: "https://www.soulblazeanime.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Soul Blaze Anime",
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
