import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Tachyon – Modern webbutveckling och SaaS-lösningar",
  description:
    "Tachyon utvecklar moderna hemsidor och skalbara SaaS-produkter. Vi hjälper företag från idé till färdig digital lösning.",
  keywords: [
    "Tachyon",
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
  metadataBase: new URL("https://tachyonlabs.se"),
  openGraph: {
    title: "Tachyon – Modern webbutveckling och SaaS-lösningar",
    description:
      "Vi bygger hemsidor och SaaS-produkter som skalar. Tachyon är din digitala partner från MVP till marknadsklar produkt.",
    url: "https://tachyonlabs.se",
    siteName: "Tachyon",
    images: [
      {
        url: "/logo/Tachyon2.png",
        width: 1200,
        height: 630,
        alt: "Tachyon – Modern webbutveckling och SaaS-lösningar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tachyon – Studio för webbutveckling och SaaS",
    description:
      "Tachyon hjälper företag och startups att bygga moderna hemsidor och digitala produkter som växer med din verksamhet.",
    images: ["/logo/Tachyon2.png"],
    creator: "@tachyon_se",
  },
  alternates: {
    canonical: "https://tachyonlabs.se",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary">
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
        <Navbar />
        <div className="pt-16 ">{children}</div>
        <Footer />
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
