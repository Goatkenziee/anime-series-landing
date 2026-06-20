import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHRONO STRIKE — A New Era Begins",
  description: "An epic anime series coming soon. Power awakens. Legends rise. The battle for eternity begins.",
  openGraph: {
    title: "CHRONO STRIKE — A New Era Begins",
    description: "An epic anime series coming soon. Power awakens. Legends rise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
