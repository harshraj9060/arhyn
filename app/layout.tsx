import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import ThemeProvider from "@/components/ThemeProvider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://arhyntechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arhyn Technologies — Transforming Businesses Through Technology",
    template: "%s — Arhyn Technologies",
  },
  description:
    "Arhyn Technologies helps offline and traditional businesses become digital-first through custom websites, AI automation, chatbots, CRM/ERP systems, and business software.",
  keywords: [
    "digital transformation",
    "AI automation",
    "custom software development",
    "website development for small business",
    "AI chatbots",
    "CRM development",
    "ERP systems",
    "Arhyn Technologies",
  ],
  authors: [{ name: "Arhyn Technologies" }],
  openGraph: {
    title: "Arhyn Technologies — Transforming Businesses Through Technology",
    description:
      "We help offline businesses become digital-first with websites, custom software, and AI automation built around real business problems.",
    url: siteUrl,
    siteName: "Arhyn Technologies",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arhyn Technologies — Transforming Businesses Through Technology",
    description:
      "Digital transformation, AI automation, and custom software for businesses still operating offline.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/app-icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arhyn Technologies",
  url: siteUrl,
  slogan: "Transforming Businesses Through Technology",
  description:
    "Digital transformation, AI automation, and custom software company helping traditional businesses build a modern digital presence.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Website Development",
    "Custom Software Development",
    "AI Automation",
    "AI Chatbots",
    "CRM Development",
    "ERP Systems",
    "Business Automation",
    "SEO",
    "Cloud Applications",
  ],
  sameAs: [] as string[],
};
// toast.success("Digital audit request sent!");
// toast.error("Unable to send. Please try again.");
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}
      <Toaster position="top-right" />
      
      </body>
    </html>
  );
}
