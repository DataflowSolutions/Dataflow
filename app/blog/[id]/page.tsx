"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  BookOpen,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/Badge";
import { getPostById, BlogPost } from "../../../lib/blogData";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      const foundPost = getPostById(parseInt(resolvedParams.id));
      if (foundPost) {
        setPost(foundPost);
      } else {
        notFound();
      }
    };

    resolveParams();
  }, [params]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Show loading state while resolving params
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center animate-pulse">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <p className="text-text-secondary">Laddar artikel...</p>
        </div>
      </div>
    );
  }

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
          <Card variant="elevated" className="overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-64 md:h-80">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-text-secondary">Article Image</p>
                </div>
              </div>
              {post.featured && (
                <div className="absolute top-4 left-4">
                  <Badge text="Utvald artikel" variant="gradient" size="sm" />
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge text={post.category} variant="primary" size="md" />
                <div className="flex items-center text-text-muted text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center text-text-muted text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {post.author.name}
                    </div>
                    <div className="text-text-muted text-sm">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-text-primary leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/\n/g, "<br />")
                      .replace(
                        /\#\#\# (.*?)(<br \/>|$)/g,
                        '<h3 class="text-xl font-bold text-text-primary mt-8 mb-4">$1</h3>'
                      )
                      .replace(
                        /\#\# (.*?)(<br \/>|$)/g,
                        '<h2 class="text-2xl font-bold text-text-primary mt-8 mb-4">$1</h2>'
                      )
                      .replace(
                        /\# (.*?)(<br \/>|$)/g,
                        '<h1 class="text-3xl font-bold text-text-primary mt-8 mb-4">$1</h1>'
                      )
                      .replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="font-semibold text-text-primary">$1</strong>'
                      )
                      .replace(
                        /- (.*?)(<br \/>|$)/g,
                        '<li class="ml-4 mb-2">$1</li>'
                      ),
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Taggar
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="flex items-center px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                    >
                      <Tag className="w-3 h-3 mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.article>

        {/* Navigation to Other Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card variant="glass" className="p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Läs fler artiklar
            </h3>
            <p className="text-text-secondary mb-6">
              Upptäck fler insikter och guider från vårt expertteam.
            </p>
            <Link href="/#blog">
              <Button
                variant="gradient"
                size="lg"
                rightIcon={
                  <ArrowLeft className="w-5 h-5 rotate-180 cursor-pointer" />
                }
              >
                Tillbaka till blogg
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
