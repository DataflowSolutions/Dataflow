"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import Card from "./ui/Card";

const stats = [
  { icon: Users, label: "Nöjda kunder", value: "10+" },
  { icon: Award, label: "Projekt levererade", value: "10+" },
  { icon: TrendingUp, label: "Tillväxt för kunder", value: "300%" },
  { icon: Star, label: "Genomsnittligt betyg", value: "4.5" },
];

const floatingElements = [
  { delay: 0, duration: 3, x: 20, y: 30 },
  { delay: 1, duration: 4, x: -30, y: 20 },
  { delay: 2, duration: 5, x: 40, y: -25 },
];

export default function ModernHero() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background-muted"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
            style={{
              top: `${20 + index * 30}%`,
              left: `${10 + index * 25}%`,
            }}
            animate={{
              x: [0, element.x, 0],
              y: [0, element.y, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Din främsta partner för digital framgång
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-text-primary">Bygg framtidens</span>
              <br />
              <span className="gradient-text">digitala lösningar</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8"
            >
              Vi skapar moderna webbplatser och SaaS-produkter som driver
              affärstillväxt. Från idé till lansering - vi gör din digitala
              vision till verklighet.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                variant="gradient"
                size="xl"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group cursor-pointer"
              >
                Starta ditt projekt
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>

              <Button
                variant="outline"
                size="xl"
                leftIcon={<Play className="w-5 h-5" />}
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer"
              >
                Se våra case studies
              </Button>
            </motion.div>

            {/* Stats */}
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center lg:text-left text-nowrap"
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-6 h-6 text-primary mr-2" />
                    <span className="text-2xl font-bold text-text-primary">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Card */}
            <Card variant="glass" className="relative p-8 hover-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg" />

              {/* Browser Mock-up */}
              <div className="relative bg-background-elevated rounded-lg shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center px-4 py-3 bg-muted border-b border-border">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-error rounded-full" />
                    <div className="w-3 h-3 bg-warning rounded-full" />
                    <div className="w-3 h-3 bg-success rounded-full" />
                  </div>
                  <div className="ml-4 text-xs text-text-secondary">
                    dataflowsolutions.se
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded" />
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                    <div className="h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating Performance Badges */}
              <motion.div
                className="absolute -top-2 -right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                100% Performance
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                Lightning Fast
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-text-secondary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
