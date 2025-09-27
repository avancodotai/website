import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avanco - Transform Your BJJ Training Notes Into Actionable Insights",
  description: "AI-powered note enhancement that turns raw training observations into structured, searchable knowledge for Brazilian Jiu-Jitsu practitioners.",
  keywords: "BJJ, Brazilian Jiu-Jitsu, training notes, AI notes, martial arts, grappling, training journal",
  authors: [{ name: "Avanco" }],
  openGraph: {
    title: "Avanco - Transform Your BJJ Training Notes Into Actionable Insights",
    description: "AI-powered note enhancement that turns raw training observations into structured, searchable knowledge.",
    url: "https://avanco.app",
    siteName: "Avanco",
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
    title: "Avanco - Transform Your BJJ Training Notes",
    description: "AI-powered note enhancement for Brazilian Jiu-Jitsu practitioners",
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
    </html>
  );
}
