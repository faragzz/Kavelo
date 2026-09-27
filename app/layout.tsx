import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionObserver from "@/components/ui/MotionObserver";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kavelo-dusky.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Kavelo — Software Built Fast, Built to Last",
    template: "%s | Kavelo",
  },
  description:
    "Founder-led websites, web applications, and mobile apps by Ahmed Farag. Clear scope, direct communication, and practical handoff.",
  keywords: [
    "software development agency",
    "website development",
    "web application development",
    "mobile app development",
    "custom software development",
    "Kavelo",
  ],
  authors: [{ name: "Ahmed Farag" }],
  creator: "Kavelo",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kavelo",
    title: "Kavelo — Software Built Fast, Built to Last",
    description:
      "Founder-led websites, web applications, and mobile apps by Ahmed Farag.",
    images: [
      {
        url: "/logo-cropped.png",
        width: 800,
        height: 600,
        alt: "Kavelo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavelo — Software Built Fast, Built to Last",
    description:
      "Founder-led websites, web applications, and mobile apps by Ahmed Farag.",
    images: ["/logo-cropped.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kavelo",
  image: `${siteUrl}/logo-cropped.png`,
  "@id": siteUrl,
  url: siteUrl,
  email: "kavelo.hq@gmail.com",
  description:
    "Founder-led websites, web applications, and mobile apps by Ahmed Farag.",
  knowsAbout: [
    "Website Development",
    "Web Application Development",
    "Mobile Application Development",
    "Next.js",
    "React Native",
    "TypeScript",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website, Web Application, and Mobile Development",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Websites and Landing Pages",
          description:
            "Responsive business websites and landing pages tailored to brand, audience, and goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Applications",
          description:
            "Custom browser-based products, portals, dashboards, and integrated business tools.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Applications",
          description:
            "Mobile products designed and built for iOS and Android.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5F1] text-[#1A1D24] font-[family-name:var(--font-inter)] antialiased">
        <MotionObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
