import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Space Grotesk via Google Fonts
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a-snextgen.vercel.app"),
  title: {
    default: "AS NEXTGEN Pvt Ltd | Digital Engineering & Technology Solutions",
    template: "%s | AS NEXTGEN Pvt Ltd",
  },
  description:
    "AS NEXTGEN Pvt Ltd engineers high-performance web applications, mobile products, enterprise platforms and next-generation digital solutions.",
  keywords: [
    "AS NEXTGEN",
    "software engineering",
    "web development",
    "mobile apps",
    "enterprise software",
    "ERP",
    "SaaS",
    "digital transformation",
    "Hungary",
    "India",
    "internship",
    "student opportunities",
  ],
  authors: [{ name: "AS NEXTGEN Pvt Ltd" }],
  creator: "AS NEXTGEN Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a-snextgen.vercel.app",
    siteName: "AS NEXTGEN Pvt Ltd",
    title: "AS NEXTGEN Pvt Ltd | Digital Engineering & Technology Solutions",
    description:
      "We engineer high-performance web applications, mobile products, enterprise platforms and next-generation digital solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AS NEXTGEN Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS NEXTGEN Pvt Ltd | Digital Engineering & Technology Solutions",
    description:
      "We engineer high-performance web applications, mobile products, enterprise platforms and next-generation digital solutions.",
    images: ["/og-image.png"],
    creator: "@asnextgen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-void text-foam antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
