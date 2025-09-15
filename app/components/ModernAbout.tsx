"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heart,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Vi tänker nytt, testar gränser och använder modern teknik för att skapa lösningar som gör skillnad på riktigt.",
  },
  {
    icon: Users,
    title: "Samarbete",
    description:
      "Vi jobbar nära våra kunder, förstår deras behov och bygger långsiktiga relationer som ger resultat.",
  },
  {
    icon: Award,
    title: "Kvalitet",
    description:
      "Vi kompromissar aldrig med detaljerna. Varje lösning ska vara snabb, stabil och genomtänkt från start till mål.",
  },
  {
    icon: Heart,
    title: "Driv",
    description:
      "Vi älskar det vi gör och det märks. Vår passion för utveckling och design driver oss att alltid leverera vårt bästa.",
  },
];

const team = [
  {
    name: "Albin Hasanaj",
    role: "VD / Utvecklare",
    bio: "Specialiserad på avancerad webbutveckling, AI-drivna system och skalbara SaaS-plattformar. Leder den tekniska utvecklingen och ansvarar för strategi och arkitektur.",
    image: "/images/team/albin.png",
    phone: "+46 72 877 53 59",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AI/ML",
      "Python",
      "Docker",
      "C++",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/albin-hasanaj/",
      github: "https://github.com/albinhasanaj",
      email: "albin@dataflowsolutions.se",
    },
  },
  {
    name: "Oliver Söderlund Granzer",
    role: "Delägare / Utvecklare",
    bio: "Fokuserar på frontend utveckling med högkvalitativa lösningar för webben. Driver implementation av komplexa funktioner och integrationer.",
    image: "/images/team/oliver.png",
    phone: "+46 70 042 73 62",
    skills: ["Next.js", "TypeScript", "Node.js", "Python", "REST APIs"],
    social: {
      linkedin: "https://www.linkedin.com/in/oliver-soderlund-granzer/",
      github: "https://github.com/oliversoder06",
      email: "oliver@dataflowsolutions.se",
    },
  },
  {
    name: "Melvin Sundberg",
    role: "CMO / Growth",
    bio: "Ansvarar för marknadsföring, kundrelationer och strategisk tillväxt. Driver outreach, branding och leadgenerering för att expandera företagets räckvidd.",
    image: "/images/team/melvin.png",
    phone: "+46 79 347 10 09",
    skills: [
      "Marknadsföring",
      "Growth Strategy",
      "Content Creation",
      "Lead Generation",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/melvin-sundberg-41876b2ab/",
      email: "melvin@dataflowsolutions.se",
    },
  },
];

export default function ModernAbout() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-background-muted to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            text="Om Dataflow Solutions"
            variant="gradient"
            size="lg"
            className="mb-6"
          />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Vi bygger framtidens
            <span className="gradient-text"> digitala upplevelser</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
            Dataflow Solutions grundades med visionen att göra avancerad
            webbutveckling tillgänglig för alla företag. Vi kombinerar teknisk
            expertis med kreativ innovation för att skapa lösningar som driver
            verklig affärstillväxt.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            Våra värderingar
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  className="p-6 text-center h-full hover-glow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            Möt vårt team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  className="overflow-hidden hover-glow"
                  hover
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-text-primary mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[#9091da] font-medium mb-2">
                      {member.role}
                    </p>
                    {member.phone && (
                      <div className="flex items-center text-text-secondary text-sm mb-3">
                        <Phone className="w-3 h-3 mr-1.5" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <button
                          onClick={() =>
                            window.open(member.social.linkedin, "_blank")
                          }
                          className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin className="w-4 h-4" />
                        </button>
                      )}
                      {member.social.github && (
                        <button
                          onClick={() =>
                            window.open(member.social.github, "_blank")
                          }
                          className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          <span className="sr-only">GitHub</span>
                          <Github className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() =>
                          window.open(`mailto:${member.social.email}`, "_blank")
                        }
                        className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        <span className="sr-only">Email</span>
                        <Mail className="w-4 h-4" />
                      </button>
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
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Card variant="glass" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Redo att samarbeta med oss?
            </h3>
            <p className="text-text-secondary mb-6">
              Vi är alltid intresserade av nya utmaningar och spännande projekt.
              Låt oss diskutera hur vi kan hjälpa dig att uppnå dina digitala
              mål.
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
                Kontakta oss
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/admin-dataflowsolutions-mupp/30min",
                    "_blank"
                  )
                }
                className="cursor-pointer"
              >
                Boka ett möte
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
