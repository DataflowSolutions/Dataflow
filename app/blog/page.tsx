import ModernBlog from "../components/ModernBlog";
import { allPosts } from "../../lib/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg | Dataflow Solutions - Insikter inom Webbutveckling & SaaS",
  description: "Läs våra senaste artiklar om modern webbutveckling, SaaS-utveckling, digital strategi och tekniska insikter.",
  openGraph: {
    title: "Blogg | Dataflow Solutions - Expertinsikter inom Webbutveckling",
    description:
      "Upptäck våra senaste artiklar om modern webbutveckling, SaaS-lösningar och digital strategi.",
    url: "https://dataflowsolutions.se/blog",
    siteName: "Dataflow Solutions",
    type: "website",
    images: [
      {
        url: "https://dataflowsolutions.se/logo/Tachyon2.png",
        width: 1200,
        height: 630,
        alt: "Dataflow Solutions Blogg - Webbutveckling & SaaS-insikter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogg | Dataflow Solutions - Webbutvecklingsinsikter",
    description:
      "Läs expertartiklar om modern webbutveckling, SaaS och digital strategi från Dataflow Solutions.",
    images: ["https://dataflowsolutions.se/logo/Tachyon2.png"],
    creator: "@dataflowsolutions_se",
  },
  alternates: { canonical: "https://dataflowsolutions.se/blog" },
  other: {
    "article:author": "Dataflow Solutions",
    "article:section": "Blog",
  },
};

export default function BlogPage() {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dataflow Solutions Blogg",
    "description": "Expertartiklar om modern webbutveckling, SaaS-utveckling och digital strategi",
    "url": "https://dataflowsolutions.se/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Dataflow Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dataflowsolutions.se/logo/Tachyon2.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://dataflowsolutions.se/blog"
    },
    "inLanguage": "sv-SE",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Dataflow Solutions"
    }
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allPosts.map((p: { slug: string; title: string }, i: number) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://dataflowsolutions.se/blog/${p.slug}`,
      "name": p.title,
    })),
  };
  return (
    <>
      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemList),
        }}
      />
      <div className="min-h-screen pt-20">
        <ModernBlog />
      </div>
    </>
  );
}
