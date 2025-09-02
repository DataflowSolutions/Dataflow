"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  TrendingUp,
  BookOpen,
  Code,
  Zap,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";
import { getFeaturedPost, getRegularPosts, BlogPost } from "../../lib/blogData";
import Link from "next/link";

const categories = [
  {
    name: "Technology",
    count: 15,
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Development",
    count: 23,
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Design",
    count: 12,
    icon: Zap,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Performance",
    count: 8,
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

export default function ModernBlog() {
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

  // Derive featured post and regular posts from the merged array
  const featuredPost = getFeaturedPost();
  const blogPosts = getRegularPosts();

  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-background-muted relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            text="Blogg & Insikter"
            variant="secondary"
            size="lg"
            className="mb-6"
          />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Senaste insikterna från
            <span className="gradient-text"> vårt expertteam</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Håll dig uppdaterad med de senaste trenderna inom webbutveckling,
            tekniska guider och djupgående analyser från våra experter.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card variant="elevated" className="p-4 text-center hover-glow">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    {category.name}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {category.count} artiklar
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <Card variant="elevated" className="overflow-hidden hover-glow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-text-secondary">Featured Article</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge text="Utvald artikel" variant="gradient" size="sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge
                      text={featuredPost.category}
                      variant="primary"
                      size="sm"
                    />
                    <div className="flex items-center text-text-muted text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredPost.publishedAt)}
                    </div>
                    <div className="flex items-center text-text-muted text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="flex items-center px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-text-muted text-xs">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                        className="cursor-pointer"
                      >
                        Läs mer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  className="overflow-hidden h-full hover-glow"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge text={post.category} variant="primary" size="sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-text-muted text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-text-primary mb-3 leading-tight">
                      {post.title}
                    </h4>

                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-2">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-text-primary text-sm">
                            {post.author.name}
                          </div>
                        </div>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card variant="glass" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Vill du läsa fler artiklar?
            </h3>
            <p className="text-text-secondary mb-6">
              Utforska vår kompletta blogg med djupgående guider, tutorials och
              tekniska insikter från vårt expertteam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => window.open("/blog", "_blank")}
                className="cursor-pointer"
              >
                Besök vår blogg
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
