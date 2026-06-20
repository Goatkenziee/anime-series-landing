import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Epic Anime Series - OneShot and Dragon Ball Z Inspired",
  description: "Dive into our new anime series with thrilling characters, epic transformations, and exciting episodes that will keep you on the edge of your seat.",
  openGraph: {
    title: "Epic Anime Series",
    description: "Explore our latest anime series inspired by OneShot and Dragon Ball Z.",
    url: "https://anime-series-landing.vercel.app",
    images: ["https://anime-series-landing.vercel.app/og-image.jpg"],
    siteName: "Epic Anime Series",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Anime Series",
    description: "Explore our latest anime series inspired by OneShot and Dragon Ball Z.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ ["--font-sans" as string]: "Inter, system-ui, sans-serif" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}