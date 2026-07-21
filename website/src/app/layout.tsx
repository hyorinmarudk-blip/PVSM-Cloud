import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Poteau Valley Repair",
    template: "%s | Poteau Valley Repair",
  },
  description:
    "Veteran-owned automotive, mobile, lawn mower, and small-engine repair serving LeFlore County and surrounding counties.",
  keywords: [
    "Poteau Valley Repair",
    "automotive repair",
    "mobile mechanic",
    "small engine repair",
    "lawn mower repair",
    "LeFlore County",
    "Spiro Oklahoma",
    "vehicle diagnostics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
