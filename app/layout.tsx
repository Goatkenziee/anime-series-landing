import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHADOW REALM — An Epic New Anime Series",
  description:
    "Enter the Shadow Realm — a breathtaking new anime series blending dark fantasy with electrifying combat. Coming soon.",
  keywords: [
    "anime",
    "shadow realm",
    "new series",
    "dark fantasy",
    "dragon ball",
    "one punch man",
    "action",
  ],
  openGraph: {
    title: "SHADOW REALM — An Epic New Anime Series",
    description:
      "Enter the Shadow Realm — a breathtaking new anime series blending dark fantasy with electrifying combat.",
    type: "website",
    locale: "en_US",
    siteName: "Shadow Realm",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHADOW REALM — An Epic New Anime Series",
    description:
      "Enter the Shadow Realm — a breathtaking new anime series blending dark fantasy with electrifying combat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
