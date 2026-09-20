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

export const metadata: Metadata = {
  title: {
    default: "Kavelo — Software Built Fast, Built to Last",
    template: "%s | Kavelo",
  },
  description:
    "Kavelo is a software development agency building websites, web apps, and mobile apps for founders and small businesses. Senior engineers, direct communication, fast delivery.",
  keywords: [
    "software development agency",
    "web development",
    "mobile app development",
    "Next.js agency",
    "React Native developers",
    "custom web apps",
    "software engineering for founders",
    "Kavelo",
  ],
  authors: [{ name: "Kavelo Team" }],
  creator: "Kavelo",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kavelo.dev",
  ),
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
    url: "https://kavelo.dev",
    siteName: "Kavelo",
    title: "Kavelo — Software Built Fast, Built to Last",
    description:
      "Websites, web apps, and mobile apps built by senior engineers — directly, no layers, no dilution.",
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
      "Websites, web apps, and mobile apps built by senior engineers — directly, no layers, no dilution.",
    images: ["/logo-cropped.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kavelo",
  image: "https://kavelo.dev/logo-cropped.png",
  "@id": "https://kavelo.dev",
  url: "https://kavelo.dev",
  email: "kavelo.hq@gmail.com",
  description:
    "Kavelo is a software development agency building websites, web apps, and mobile apps for founders and small businesses.",
  knowsAbout: [
    "Web Development",
    "Custom Software Development",
    "Mobile Application Development",
    "Next.js",
    "React Native",
    "TypeScript",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Websites & Landing Pages",
          description:
            "High-performance websites engineered for conversion, speed, and SEO.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Platforms & Portals",
          description:
            "Scalable web applications, SaaS platforms, and internal tools.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Applications",
          description: "Native-grade iOS and Android mobile applications.",
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
      <body className="min-h-screen flex flex-col bg-[#0D0D12] text-[#F5F4F0] font-[family-name:var(--font-inter)] antialiased">
        <MotionObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
