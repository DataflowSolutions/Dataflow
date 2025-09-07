import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import { getPostById } from "../../../lib/blogData";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostById(parseInt(resolvedParams.id));

  if (!post) {
    return {
      title: "Artikel hittades inte | Dataflow Solutions",
      description: "Den efterfrågade artikeln kunde inte hittas.",
    };
  }

  return {
    title: `${post.title} | Dataflow Solutions Blogg`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dataflowsolutions.se/blog/${post.id}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://dataflowsolutions.se/blog/${post.id}`,
    },
    other: {
      "article:author": post.author.name,
      "article:published_time": post.publishedAt,
      "article:section": post.category,
      "article:tag": post.tags.join(","),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostById(parseInt(resolvedParams.id));

  if (!post) {
    notFound();
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dataflow Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dataflowsolutions.se/logo/Tachyon2.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dataflowsolutions.se/blog/${post.id}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readTime.split(' ')[0]}M`,
    "url": `https://dataflowsolutions.se/blog/${post.id}`,
    "isAccessibleForFree": true,
    "inLanguage": "sv-SE",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Dataflow Solutions"
    }
  };

  // Generate breadcrumb structured data for SEO
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hem",
        "item": "https://dataflowsolutions.se"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogg",
        "item": "https://dataflowsolutions.se/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://dataflowsolutions.se/blog/${post.id}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
