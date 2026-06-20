import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHRONO STRIKE — A New Era Begins | Official Anime Series",
  description:
    "An epic anime series coming soon. Power awakens. Legends rise. The battle for eternity begins. In a reality where time itself is a weapon, a young warrior discovers the Chrono Strike.",
  keywords: [
    "anime",
    "chrono strike",
    "dragon ball z",
    "one punch man",
    "anime series",
    "action anime",
    "time travel anime",
    "new anime 2025",
  ],
  authors: [{ name: "CHRONO STRIKE" }],
  openGraph: {
    title: "CHRONO STRIKE — A New Era Begins",
    description:
      "An epic anime series coming soon. Power awakens. Legends rise. The battle for eternity begins.",
    type: "website",
    locale: "en_US",
    siteName: "CHRONO STRIKE",
    images: [
      {
        url: "https://youme-rho.vercel.app/api/agent-artifacts/chrono-strike-og.png",
        width: 1200,
        height: 630,
        alt: "CHRONO STRIKE — A New Era Begins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHRONO STRIKE — A New Era Begins",
    description:
      "An epic anime series coming soon. Power awakens. Legends rise. The battle for eternity begins.",
    images: [
      "https://youme-rho.vercel.app/api/agent-artifacts/chrono-strike-og.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-[#0a0a1a] text-white">
        {children}
      </body>
    </html>
  );
}
