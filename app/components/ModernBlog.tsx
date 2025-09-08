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
import { getFeaturedPost } from "../../lib/blogData";
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

  // Derive featured post from the merged array
  const featuredPost = getFeaturedPost();

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
            Senaste insikterna från
            <span className="gradient-text"> vårt expertteam</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Håll dig uppdaterad med de senaste trenderna inom webbutveckling,
            tekniska guider och djupgående analyser från våra experter.
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
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-3 sm:mb-4">
                    <Badge
                      text={featuredPost.category}
                      variant="primary"
                      size="sm"
                    />
                    <div className="flex items-center space-x-3 sm:space-x-4 text-text-muted text-xs sm:text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {formatDate(featuredPost.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {featuredPost.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {featuredPost.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="flex items-center px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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

                    <Link
                      aria-label={`Läs mer om ${featuredPost.title}`}
                      href={`/blog/${featuredPost.id}`}
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
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                        className="cursor-pointer w-full sm:w-auto"
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
