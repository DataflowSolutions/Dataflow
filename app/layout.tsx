import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
