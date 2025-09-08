"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  ArrowRight,
  //   Star,
  Calendar,
  //   Users,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";
import Image from "next/image";
import { useState, useEffect } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Hirena",
    description:
      "Hirena är en svensk AI-baserad jobbplattform som analyserar CV och personliga brev för att matcha kandidater med relevanta jobbannonser. Plattformen använder semantisk sökning med embeddings för smartare och mer träffsäkra resultat.",
    image: "/images/hirena.png",
    category: "SaaS",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Python",
      "AI/ML",
      "Sentence-BERT",
      "Tailwind CSS",
    ],
    liveUrl: "https://hirena.se",
    githubUrl: "",
    year: "2025",
  },
  {
    id: 2,
    title: "Blackstone Steakhouse",
    description:
      "Genom samarbete med en partnerbyrå har vi arbetat med att uppdatera och förbättra Blackstone Steakhouse webbplats. Vi har hanterat menyuppdateringar, buggfixar, optimeringar och löpande underhåll. Dessutom har vi arbetat med deras förbeställningssystem – hantering av stora bokningar, lösning av kritiska fel och förbättrad kundupplevelse.",
    image: "/images/blackstone.png",
    category: "Restaurang",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL"],
    liveUrl: "https://blackstonesteakhouse.se",
    githubUrl: "",
    caseStudyUrl: "/case-studies/blackstone",
    year: "2025",
  },
  {
    id: 3,
    title: "Skedvi Bröd",
    description:
      "Vi har arbetat med att bygga nya sidor, uppdatera menyer och optimera produktsidor för Skedvi Bröds webbplats. Fokus har legat på förbättrad användarupplevelse och löpande optimeringar.",
    image: "/images/skedvibrod.png",
    category: "E-handel",
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    liveUrl: "https://skedvibrod.se",
    githubUrl: "",
    year: "2025",
  },
  {
    id: 4,
    title: "Carl Larsson-gården",
    description:
      "Vi utvecklar just nu en ny modern webbplats för Carl Larsson-gården. Projektet omfattar ny design, förbättrad mobilupplevelse, optimerat bokningsflöde och bättre SEO för att nå fler besökare.",
    image: "/images/carllarsson.png",
    category: "Kultur",
    tech: ["WordPress", "PHP", "JavaScript", "Booking System", "SEO"],
    liveUrl: "https://carllarssongarden.se",
    githubUrl: "",
    year: "2025",
  },
  {
    id: 5,
    title: "Sylwan & Fenger-Krog",
    description:
      "Vi har arbetat med WCAG 2.1 AA-anpassningar och optimering av tillgängligheten för advokatbyrån Sylwan & Fenger-Krog. Arbetet inkluderade förbättrad semantisk struktur, kontrastnivåer och en mer inkluderande användarupplevelse.",
    image: "/images/sylwan.png",
    category: "Juridik",
    tech: ["WordPress", "WCAG 2.1 AA", "PHP", "JavaScript", "CSS"],
    liveUrl: "https://sylwan.se",
    githubUrl: "",
    year: "2025",
  },
  {
    id: 6,
    title: "Din hemsida",
    description:
      "Är din hemsida föråldrad eller behöver den en uppgradering? Vi hjälper dig att skapa en modern, snabb och användarvänlig webbplats som konverterar fler besökare till kunder. Kontakta oss för en kostnadsfri konsultation.",
    image: "/api/placeholder/600/400",
    category: "Allmänt",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    liveUrl: "#contact",
    githubUrl: "",
    year: "2025",
  },
];

export default function ModernPortfolio() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showAllProjects, setShowAllProjects] = useState(false);
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
      id="portfolio"
      ref={ref}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
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
            text="Portfolio & Case Studies"
            variant="secondary"
            size="lg"
            className="mb-6"
          />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Portfolio
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Vi har haft nöjet att bidra till utvecklingen av digitala lösningar
            för flera välkända varumärken, både direkt och via samarbeten. Här
            är ett urval av projekt vi varit delaktiga i.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {(isMobile && !showAllProjects
            ? portfolioItems.slice(0, 3)
            : portfolioItems
          ).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card
                variant="elevated"
                className="group overflow-hidden h-full hover-glow"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      item.title === "Hirena"
                        ? "bg-gradient-to-br from-primary/20 to-secondary/20"
                        : item.title === "Blackstone Steakhouse"
                        ? "bg-gradient-to-br from-black/30 via-red-900/30 to-red-600/30"
                        : item.title === "Skedvi Bröd"
                        ? "bg-gradient-to-br from-orange-400/30 via-yellow-400/30 to-orange-500/30"
                        : item.title === "Carl Larsson-gården"
                        ? "bg-gradient-to-br from-red-500/30 via-white/20 to-red-600/30"
                        : item.title === "Sylwan & Fenger-Krog"
                        ? "bg-gradient-to-br from-white/30 via-green-100/30 to-green-400/30"
                        : item.title === "Din hemsida"
                        ? "bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-indigo-500/30"
                        : "bg-gradient-to-br from-primary/20 to-secondary/20"
                    }`}
                  >
                    {item.title === "Hirena" ? (
                      <Image
                        src="/images/hirena.png"
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center flex items-center justify-center h-full">
                        <h3 className="text-white font-bold text-2xl md:text-3xl drop-shadow-2xl text-center px-4">
                          {item.title}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-300 flex items-center justify-center space-x-4">
                    {item.title === "Hirena" ? (
                      <span className="text-red-400 font-semibold text-sm bg-black/70 px-3 py-2 rounded-md">
                        Currently not available
                      </span>
                    ) : item.title === "Carl Larsson-gården" ? (
                      <span className="text-blue-400 font-semibold text-sm bg-black/70 px-3 py-2 rounded-md">
                        Website currently being built
                      </span>
                    ) : item.title === "Din hemsida" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<ArrowRight className="w-4 h-4" />}
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="cursor-pointer"
                      >
                        Kontakta oss
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<ExternalLink className="w-4 h-4" />}
                        onClick={() => window.open(item.liveUrl, "_blank")}
                        className="cursor-pointer"
                      >
                        Besök Webbplats
                      </Button>
                    )}
                    {item.caseStudyUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<ArrowRight className="w-4 h-4" />}
                        onClick={() => window.open(item.caseStudyUrl, "_blank")}
                        className="cursor-pointer"
                      >
                        Läs Case Study
                      </Button>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge text={item.category} variant="primary" size="sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-text-muted">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.year}
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col gap-3 md:hidden">
                    {item.title === "Hirena" ? (
                      <div className="text-red-400 font-semibold text-sm text-center py-3">
                        Currently not available
                      </div>
                    ) : item.title === "Carl Larsson-gården" ? (
                      <div className="text-blue-400 font-semibold text-sm text-center py-3">
                        Website currently being built
                      </div>
                    ) : item.title === "Din hemsida" ? (
                      <Button
                        variant="outline"
                        size="lg"
                        leftIcon={<ArrowRight className="w-4 h-4" />}
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="cursor-pointer w-full py-3 min-h-[48px]"
                      >
                        Kontakta oss
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="lg"
                        leftIcon={<ExternalLink className="w-4 h-4" />}
                        onClick={() => window.open(item.liveUrl, "_blank")}
                        className="cursor-pointer w-full py-3 min-h-[48px]"
                      >
                        Besök Webbplats
                      </Button>
                    )}
                    {item.caseStudyUrl && (
                      <Button
                        variant="ghost"
                        size="lg"
                        leftIcon={<ArrowRight className="w-4 h-4" />}
                        onClick={() => window.open(item.caseStudyUrl, "_blank")}
                        className="cursor-pointer w-full py-3 min-h-[48px]"
                      >
                        Läs Case Study
                      </Button>
                    )}
                  </div>

                  {/* Results */}
                  {/* <div className="border-t border-border pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-success">
                          {item.results.conversion}
                        </div>
                        <div className="text-xs text-text-muted">
                          Conversion
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">
                          {item.results.performance}
                        </div>
                        <div className="text-xs text-text-muted">
                          Performance
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-secondary">
                          {item.results.users}
                        </div>
                        <div className="text-xs text-text-muted">Users</div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More Button - Only on Mobile */}
        {isMobile && !showAllProjects && portfolioItems.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-4 mb-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllProjects(true)}
              className="cursor-pointer"
            >
              Visa fler projekt ({portfolioItems.length - 3})
            </Button>
          </motion.div>
        )}

        {/* Testimonials */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            Vad våra kunder säger
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card variant="glass" className="p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-warning fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-text-secondary italic mb-4">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div>
                        <div className="font-semibold text-text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-text-muted text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card variant="gradient" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Redo att skapa nästa framgångshistoria?
            </h3>
            <p className="text-text-secondary mb-6">
              Låt oss hjälpa dig att bygga något extraordinärt. Vi har den
              tekniska expertis och kreativa vision som krävs.
            </p>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer"
            >
              Starta ditt projekt idag
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
