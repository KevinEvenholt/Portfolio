import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Evenholt",
  description: "Portfolio website for Kevin Evenholt, a frontend developer.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon-dark.svg",
        href: "/icon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-light.svg",
        href: "/icon-light.svg",
      },
    ],
  },
};

const playfair = Playfair_Display({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
