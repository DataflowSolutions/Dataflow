"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Cloud,
  Database,
  Rocket,
  Shield,
  Palette,
  BarChart3,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Code2,
    title: "Webbutveckling",
    description:
      "Snabba och mobilvänliga webbplatser som fungerar perfekt på alla enheter. Vi använder modern teknik för bästa resultat.",
    features: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Progressive Web Apps",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "AI-integration",
    description:
      "Smarta lösningar som sparar tid och förbättrar kundupplevelsen. Vi integrerar AI på ett sätt som faktiskt hjälper ditt företag.",
    features: [
      "ChatGPT/OpenAI",
      "Machine Learning",
      "AI Chatbots",
      "Automation",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "SaaS-utveckling",
    description:
      "Webbaserade system som växer med ditt företag. Från enkla verktyg till avancerade plattformar för många användare.",
    features: ["Multi-tenant", "API-first", "Microservices", "Auto-scaling"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Backend & API",
    description:
      "Stabila system som håller din webbplats igång. Vi bygger säkra kopplingar mellan olika tjänster och databaser.",
    features: [
      "Node.js/Python",
      "PostgreSQL/MongoDB",
      "GraphQL/REST",
      "Real-time",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design som känns naturlig att använda. Vi skapar gränssnitt som dina kunder förstår och gillar att använda.",
    features: ["Figma/Sketch", "Design Systems", "Prototyping", "User Testing"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "DevOps & Hosting",
    description:
      "Vi tar hand om servrar och uppdateringar så din webbplats alltid fungerar snabbt och säkert.",
    features: ["CI/CD", "Docker/Kubernetes", "AWS/Vercel", "Monitoring"],
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    description:
      "Hjälp att synas bättre på Google och förstå hur besökarna använder din webbplats.",
    features: ["Google Analytics", "SEO Audit", "Performance", "A/B Testing"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Säkerhet & Underhåll",
    description:
      "Vi håller din webbplats säker och uppdaterad. Support när du behöver det och regelbundna säkerhetskontroller.",
    features: ["Security Audit", "SSL/TLS", "GDPR Compliance", "24/7 Support"],
    color: "from-red-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ModernServices() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showAllServices, setShowAllServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="services"
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
            text="Våra tjänster"
            variant="primary"
            size="lg"
            className="mb-6"
          />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Allt du behöver för att
            <span className="gradient-text"> lyckas online</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Vi hjälper dig från idé till färdig webbplats. Oavsett om du behöver
            en enkel hemsida eller ett komplext system, så har vi kunskap och
            erfarenhet för att få det gjort.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {(isMobile && !showAllServices ? services.slice(0, 3) : services).map(
            (service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card
                  variant="elevated"
                  className="group h-full relative overflow-hidden hover-glow"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center text-xs text-text-muted"
                        >
                          <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div> */}
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Show More Button - Only on Mobile */}
        {isMobile && !showAllServices && services.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-4 mb-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllServices(true)}
              className="cursor-pointer"
            >
              Visa fler tjänster ({services.length - 3})
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card variant="glass" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Redo att starta ditt projekt?
            </h3>
            <p className="text-text-secondary mb-6">
              Låt oss diskutera hur vi kan hjälpa dig att realisera din digitala
              vision. Vi erbjuder kostnadsfri konsultation för alla nya projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer"
              >
                Få kostnadsfri konsultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer"
              >
                Se våra case studies
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
