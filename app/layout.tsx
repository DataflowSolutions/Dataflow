import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./providers/ThemeProvider";
import ModernNavbar from "./components/ModernNavbar";
import ModernFooter from "./components/ModernFooter";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Dataflow Solutions – Modern webbutveckling och SaaS-lösningar",
  description:
    "Dataflow Solutions utvecklar moderna hemsidor och skalbara SaaS-produkter. Vi hjälper företag från idé till färdig digital lösning.",
  keywords: [
    "Dataflow",
    "Dataflow Solutions",
    "webbutveckling",
    "SaaS utveckling",
    "moderna hemsidor",
    "webbdesign företag",
    "SaaS produkter",
    "frontend utveckling",
    "nextjs utveckling",
    "fullstack utveckling",
    "digital produktutveckling",
    "UX UI design",
    "skräddarsydda hemsidor",
    "teknikbyrå",
    "startup utveckling",
    "hemsida för företag",
  ],
  metadataBase: new URL("https://dataflowsolutions.se"),
  openGraph: {
    title: "Dataflow Solutions – Modern webbutveckling och SaaS-lösningar",
    description:
      "Vi bygger hemsidor och SaaS-produkter som skalar. Dataflow Solutions är din digitala partner från MVP till marknadsklar produkt.",
    url: "https://dataflowsolutions.se",
    siteName: "Dataflow Solutions",
    images: [
      {
        url: "/logo/Tachyon2.png",
        width: 1200,
        height: 630,
        alt: "Dataflow Solutions – Modern webbutveckling och SaaS-lösningar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dataflow Solutions – Studio för webbutveckling och SaaS",
    description:
      "Dataflow Solutions hjälper företag och startups att bygga moderna hemsidor och digitala produkter som växer med din verksamhet.",
    images: ["/logo/Tachyon2.png"],
    creator: "@dataflowsolutions_se",
  },
  alternates: {
    canonical: "https://dataflowsolutions.se",
  },
  other: {
    robots: "index,follow",
    googlebot: "index,follow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for organization
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dataflow Solutions",
    url: "https://dataflowsolutions.se",
    logo: "https://dataflowsolutions.se/logo/DataflowLogo.png",
    description:
      "Dataflow Solutions utvecklar moderna hemsidor och skalbara SaaS-produkter. Vi hjälper företag från idé till färdig digital lösning.",
    foundingDate: "2025",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SE",
    },
    sameAs: ["https://www.linkedin.com/company/dataflow-solutions"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "Swedish",
    },
    knowsAbout: [
      "Web Development",
      "SaaS Development",
      "Next.js",
      "React",
      "TypeScript",
      "UI/UX Design",
      "Digital Strategy",
    ],
  };

  return (
    <html lang="sv">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
      </head>
      <body className="bg-background text-text-primary">
        <ThemeProvider>
          <GoogleAnalytics />
          <Toaster
            position="top-right"
            toastOptions={{
              className: "bg-background text-text-primary",
              style: {
                background: "#1e1e2f",
                color: "#ffffff",
              },
            }}
          />
          <ModernNavbar />
          <main>{children}</main>
          <ModernFooter />
          <CookieConsent />
        </ThemeProvider>
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
