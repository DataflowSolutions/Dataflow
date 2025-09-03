"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  ArrowRight,
  //   Star,
  Calendar,
  //   Users,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Hirena",
    description:
      "OBS: Detta är under konstruktion och kan innehålla en del buggar. Hirena är en svensk AI-baserad jobbplattform som analyserar CV och personliga brev, matchar kandidater med relevanta jobbannonser och hjälper användare att skapa anpassade ansökningar på ett enkelt och effektivt sätt.",
    image: "/api/placeholder/600/400",
    category: "SaaS",
    tech: [
      "Next.js",
      "PostgreSQL",
      "AI/ML",
      "Tailwind CSS",
      "TypeScript",
      "Embeddings",
    ],
    liveUrl: "https://hirena.se",
    githubUrl: "",
    // results: {
    //   conversion: "+340%",
    //   performance: "100/100",
    //   users: "500+ MAU",
    // },
    year: "2025",
  },
];

// const testimonials = [
//   {
//     name: "Erik Andersson",
//     role: "VD, TechCorp AB",
//     content:
//       "Dataflow Solutions översteg alla våra förväntningar. De levererade inte bara en fantastisk produkt, utan också värdefulla insikter som förändrade vår affärsmodell.",
//     rating: 5,
//     image: "/api/placeholder/64/64",
//   },
//   {
//     name: "Maria Lindström",
//     role: "CTO, HealthTech Solutions",
//     content:
//       "Professionella, pålitliga och tekniskt skickliga. Vårt vårdhanteringssystem har varit felfritt sedan lansering och våra användare älskar det.",
//     rating: 5,
//     image: "/api/placeholder/64/64",
//   },
// ];

export default function ModernPortfolio() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
            Våra senaste
            <span className="gradient-text"> framgångshistorier</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Se hur vi har hjälpt våra kunder att uppnå extraordinära resultat
            genom innovation, teknisk excellens och strategisk tänkande.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
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
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {/* <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-text-secondary">Project Screenshot</p>
                    </div> */}
                    <Image
                      src="/images/hirena.png"
                      alt={item.title}
                      width={600}
                      height={400}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<ExternalLink className="w-4 h-4" />}
                      onClick={() => window.open(item.liveUrl, "_blank")}
                      className="cursor-pointer"
                    >
                      Live Demo
                    </Button>
                    {item.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<Github className="w-4 h-4 cursor-pointer" />}
                        onClick={() => window.open(item.githubUrl, "_blank")}
                      >
                        Code
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
