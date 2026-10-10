import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Tailwind exposes these as --font-display / --font-sans / --font-mono.
const display = Bricolage_Grotesque({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const sans = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
});

const description =
  "I'm Lesedi Molemi, a back-end engineer in Pretoria. I build software for Capitec's Business Banking app, and write about what I build on the side.";

export const metadata: Metadata = {
  title: "Lesedi Molemi",
  description,
  openGraph: {
    title: "Lesedi Molemi",
    description,
    siteName: "Lesedi Molemi",
    images: [
      {
        url: "https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lesedi Molemi",
    description,
    images: ["https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-bg font-sans text-text">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
