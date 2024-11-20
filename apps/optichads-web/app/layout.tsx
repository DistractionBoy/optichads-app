import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "OptiChads",
    template: "%s | OptiChads",
  },
  description:
    "OptiChads is the #1 NFT Community on Optimism, and we now have collections on Base and Arbitrum too. Hang out, work out, and discuss all things crypto and protein.",
  keywords: [
    "OptiChads",
    "@OptiChads",
    "Non-Fungible Token",
    "Optimism",
    "Ethereum",
    "Decentralized",
  ],
  authors: [{ name: "Jason Pierce 'distractionboy.eth'" }],
  openGraph: {
    title: "Optichads",
    description:
      "OptiChads is the #1 NFT Community on Optimism, and we now have collections on Base and Arbitrum, and soon, Ink!",
    images: [
      {
        url: "/images/hero-img.png",
        alt: "a strong black and white man facing right with a white outline aroung him and a red background",
      },
    ],
    siteName: "OptiChads",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero-img.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        sizes: "192x192",
        url: "/images/android-chrome192x192.png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        url: "/images/android-chrome512x512.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "OptiChads",
    startupImage: "/images/hero-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
