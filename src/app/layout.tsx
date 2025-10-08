import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avanço - Notes That Level You Up",
  description:
    "Your complete BJJ training companion. AI-enhanced notes, smart flashcards, personalized training plans, and progress tracking. Everything you need to master Brazilian Jiu-Jitsu, faster.",
  keywords:
    "BJJ, Brazilian Jiu-Jitsu, training notes, AI notes, martial arts, grappling, training journal, flashcards, training plan, BJJ stats",
  authors: [{ name: "Avanço" }],
  openGraph: {
    title: "Avanço - Notes That Level You Up",
    description:
      "AI-enhanced notes, smart flashcards, personalized training plans, and progress tracking for BJJ practitioners.",
    url: "https://avanco.app",
    siteName: "Avanço",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avanço - Notes That Level You Up",
    description:
      "Your complete BJJ training companion with AI-enhanced notes, flashcards, and training plans",
    images: ["/og-image.png"],
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
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-5XDM3P5VV9" />
    </html>
  );
}
