import type { Metadata } from "next";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const siteUrl = "https://poteauvalleyrepair.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Poteau Valley Repair | Automotive, Mobile & Small Engine Repair",
    template: "%s | Poteau Valley Repair",
  },

  description:
    "Veteran-owned automotive repair, vehicle diagnostics, mobile repair, roadside assistance, lawn mower repair, and small-engine service serving LeFlore County and surrounding counties.",

  applicationName: "Poteau Valley Repair",

  keywords: [
    "Poteau Valley Repair",
    "automotive repair LeFlore County",
    "mobile mechanic LeFlore County",
    "mobile mechanic Spiro Oklahoma",
    "vehicle diagnostics Spiro Oklahoma",
    "electrical diagnostics",
    "lawn mower repair LeFlore County",
    "small engine repair LeFlore County",
    "roadside assistance LeFlore County",
    "veteran owned repair shop",
  ],

  authors: [
    {
      name: "Poteau Valley Repair",
      url: siteUrl,
    },
  ],

  creator: "Poteau Valley Repair",
  publisher: "Poteau Valley Repair",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Poteau Valley Repair",
    title:
      "Poteau Valley Repair | Honest Repairs and Expert Diagnostics",
    description:
      "Veteran-owned automotive, mobile, lawn mower, and small-engine repair serving LeFlore County and surrounding counties.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Poteau Valley Repair",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Poteau Valley Repair",
    description:
      "Veteran-owned automotive, mobile, lawn mower, and small-engine repair serving LeFlore County and surrounding counties.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Automotive Repair",

  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessJsonLd />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}