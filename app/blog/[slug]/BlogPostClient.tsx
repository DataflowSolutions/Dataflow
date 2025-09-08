"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/Badge";
import ShareButton from "../../components/ShareButton";
import { BlogPost } from "../../../lib/blogData";
import { renderMarkdown } from "../../../lib/renderMarkdown";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-muted">
      {/* Navigation Bar Placeholder */}
      <div className="h-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/#blog">
            <Button
              variant="ghost"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              className="hover:bg-muted cursor-pointer"
            >
              Tillbaka till blogg
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Featured Badge */}
          {post.featured && (
            <div className="mb-6">
              <Badge text="Utvald artikel" variant="gradient" size="sm" />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-text-secondary">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} text={tag} variant="secondary" size="sm" />
            ))}
          </div>

          {/* Featured Image */}
          <Card variant="elevated" className="overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              {post.image && post.image !== "/api/placeholder/600/400" ? (
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${post.image})` }}
                  role="img"
                  aria-label={`Bakgrundsbild för artikeln: ${post.title}`}
                >
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl md:text-3xl drop-shadow-2xl">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base mt-2 opacity-90">
                      {post.category} • {post.readTime} • Av {post.author.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    post.category === "Tillgänglighet"
                      ? "bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20"
                      : post.category === "Affärer"
                      ? "bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-indigo-500/20"
                      : "bg-gradient-to-br from-primary/20 to-secondary/20"
                  }`}
                  role="img"
                  aria-label={`Grafisk representation för artikeln: ${post.title}`}
                >
                  <div className="text-center px-6">
                    <h3 className="text-white font-bold text-2xl md:text-3xl drop-shadow-2xl text-center">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base mt-2 opacity-90">
                      {post.category} • {post.readTime} • Av {post.author.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Article Content */}
          <div
            className="[&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>code]:bg-muted [&>code]:px-1 [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg prose prose-lg max-w-none text-text-primary space-y-6"
            dangerouslySetInnerHTML={{
              __html: renderMarkdown(post.content, post.title),
            }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Dela denna artikel
            </h3>
            <ShareButton
              url={`https://dataflowsolutions.se/blog/${post.slug}`}
              title={post.title}
              description={post.excerpt}
            />
          </div>
        </motion.article>

        {/* Related Posts or CTA could go here */}
      </div>
    </div>
  );
}
