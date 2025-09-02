"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Vi utforskar ständigt nya teknologier och metoder för att leverera banbrytande lösningar som ger våra kunder konkurrensfördelar.",
  },
  {
    icon: Users,
    title: "Partnerskap",
    description:
      "Vi ser oss som en förlängning av våra kunders team, arbetar nära tillsammans och delar både utmaningar och framgångar.",
  },
  {
    icon: Award,
    title: "Excellens",
    description:
      "Kvalitet är aldrig en slump. Vi strävar efter perfektion i varje detalj och levererar alltid mer än vad som förväntas.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Vi brinner för att skapa digitala upplevelser som inte bara fungerar perfekt, utan som också inspirerar och engagerar användare.",
  },
];

const team = [
  {
    name: "Albin Hasanaj",
    role: "Delägare / Developer",
    bio: "tel: +46 72 877 53 59",
    image: "/api/placeholder/300/300",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    social: {
      linkedin: "https://www.linkedin.com/in/albin-hasanaj/",
      github: "https://github.com/albinhasanaj",
      email: "albin@dataflowsolutions.se",
    },
  },
  {
    name: "Oliver Söderlund Granzer",
    role: "Delägare / Developer",
    bio: "tel: +46 70 042 73 62",
    image: "/api/placeholder/300/300",
    skills: ["React", "Node.js", "TypeScript", "Next.js", "Python"],
    social: {
      linkedin: "https://www.linkedin.com/in/oliver-soderlund-granzer/",
      github: "https://github.com/oliversoder06",
      email: "oliver@dataflowsolutions.se",
    },
  },
  {
    name: "Melvin Sundberg",
    role: "Marknadsförare",
    bio: "tel: +46 79 347 10 09",
    image: "/api/placeholder/300/300",
    skills: ["Marknadsföring", "Content Creation"],
    social: {
      linkedin: "https://www.linkedin.com/in/melvin-sundberg-41876b2ab/",
      email: "melvin@dataflowsolutions.se",
    },
  },
];

const stats = [
  { number: "10+", label: "Nöjda kunder" },
  { number: "10+", label: "Projekt levererade" },
  { number: "5+", label: "År av expertis" },
  { number: "24/7", label: "Support & underhåll" },
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
            excellens med kreativ innovation för att skapa lösningar som driver
            verklig affärstillväxt.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <Card variant="glass" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Vår Mission
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Att demokratisera tillgången till högkvalitativ webbutveckling och
              hjälpa företag av alla storlekar att lyckas digitalt. Vi tror att
              alla förtjänar en digital närvaro som speglar deras ambitioner och
              värderingar.
            </p>
          </Card>

          <Card variant="glass" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Vår Vision
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Att vara Nordens ledande partner för digital transformation, känd
              för vår tekniska innovation, designexcellens och förmåga att
              förvandla komplexa affärsutmaningar till eleganta digitala
              lösningar.
            </p>
          </Card>
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
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
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
                          <Github className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() =>
                          window.open(`mailto:${member.social.email}`, "_blank")
                        }
                        className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                      >
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
