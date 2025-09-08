"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { event } from "@/lib/analytics";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  // TrendingUp,
  BookOpen,
  // Code,
  // Zap,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";
import { getFeaturedPost, getRegularPosts, BlogPost } from "../../lib/blogData";
import Link from "next/link";

// const categories = [
//   {
//     name: "Technology",
//     count: 15,
//     icon: Code,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "Development",
//     count: 23,
//     icon: BookOpen,
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "Design",
//     count: 12,
//     icon: Zap,
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     name: "Performance",
//     count: 8,
//     icon: TrendingUp,
//     color: "from-orange-500 to-red-500",
//   },
// ];

interface ModernBlogProps {
  showAllPosts?: boolean;
}

export default function ModernBlog({ showAllPosts = false }: ModernBlogProps) {
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

  // Derive featured post and regular posts from the data
  const featuredPost = getFeaturedPost();
  const blogPosts = getRegularPosts();
  const postsToShow = blogPosts.length ? blogPosts : []; // future-safe

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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Tips och guider från
            <span className="gradient-text"> våra utvecklare</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Här delar vi med oss av erfarenheter och praktiska tips som kan
            hjälpa dig att fatta bättre beslut om teknik och webb.
          </p>
        </motion.div>

        {/* Categories */}
        {/* <motion.div
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
        </motion.div> */}

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
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-full">
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      featuredPost.category === "Tillgänglighet"
                        ? "bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20"
                        : featuredPost.category === "Affärer"
                        ? "bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-indigo-500/20"
                        : "bg-gradient-to-br from-primary/20 to-secondary/20"
                    }`}
                    role="img"
                    aria-label={`Grafisk representation för utvald artikel: ${featuredPost.title}`}
                  >
                    <div className="text-center px-4">
                      <div
                        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-gradient-to-r shadow-lg ${
                          featuredPost.category === "Tillgänglighet"
                            ? "from-blue-500 to-cyan-500"
                            : featuredPost.category === "Affärer"
                            ? "from-purple-500 to-violet-500"
                            : "from-primary to-secondary"
                        }`}
                      >
                        <BookOpen
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl drop-shadow-2xl text-center">
                        {featuredPost.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <Badge text="Utvald artikel" variant="gradient" size="sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-4 sm:mb-6">
                    <div>
                      <Badge
                        text={featuredPost.category}
                        variant="primary"
                        size="sm"
                      />
                    </div>
                    <div className="flex items-center space-x-4 text-text-muted text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(featuredPost.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-text-secondary mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                    {featuredPost.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {featuredPost.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="flex items-center px-3 py-2 bg-muted text-muted-foreground text-sm rounded-md"
                      >
                        <Tag className="w-3 h-3 mr-2" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-base">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-text-muted text-sm">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      aria-label={`Läs mer om ${featuredPost.title}`}
                      href={`/blog/${featuredPost.slug}`}
                      onClick={() => {
                        // Track featured blog click
                        event({
                          action: "blog_click",
                          category: "Blog",
                          label: `Featured: ${featuredPost.title}`,
                          value: 1,
                        });
                      }}
                      className="self-start sm:self-auto"
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        rightIcon={<ArrowRight className="w-5 h-5" />}
                        className="cursor-pointer w-full sm:w-auto min-h-[48px]"
                      >
                        Läs mer
                        <span className="sr-only">
                          Read more about {featuredPost.title}
                        </span>
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
            {postsToShow.map((post: BlogPost, index: number) => (
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
                    <div className={`w-full h-full flex items-center justify-center ${
                      post.category === "Tillgänglighet" ? "bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20" :
                      post.category === "Affärer" ? "bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-indigo-500/20" :
                      "bg-gradient-to-br from-primary/20 to-secondary/20"
                    }`} role="img" aria-label={`Grafisk representation för artikel: ${post.title}`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-lg mx-auto mb-3 flex items-center justify-center bg-gradient-to-r ${
                          post.category === "Tillgänglighet" ? "from-blue-500 to-cyan-500" :
                          post.category === "Affärer" ? "from-purple-500 to-violet-500" :
                          "from-primary to-secondary"
                        } shadow-lg`}>
                          <BookOpen className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <h4 className="text-white font-bold text-lg drop-shadow-lg text-center px-2">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge text={post.category} variant="primary" size="sm" />
                    </div>
                  </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center space-x-4 mb-4 text-text-muted text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-text-secondary text-sm sm:text-base mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-text-primary text-sm">
                              {post.author.name}
                            </div>
                          </div>
                        </div>

                      <Link
                        aria-label={`Läs mer om ${post.title}`}
                        href={`/blog/${post.slug}`}
                        onClick={() => {
                          // Track regular blog click
                          event({
                            action: "blog_click",
                            category: "Blog",
                            label: `Regular: ${post.title}`,
                            value: 1,
                          });
                        }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer"
                        >
                          <span className="sr-only">
                            Read more about {post.title}
                          </span>
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
              Läs mer på vår blogg
            </h3>
            <p className="text-text-secondary mb-6">
              Vi skriver regelbundet om webbutveckling, design och andra saker
              som kan vara användbara för ditt företag.
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
