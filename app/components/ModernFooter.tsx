"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { event } from "@/lib/analytics";
import {
  Mail,
  Phone,
  //   MapPin,
  //   ArrowRight,
  //   Linkedin,
  Github,
  Instagram,
  // ExternalLink,
  //   MessageSquare,
} from "lucide-react";
import Image from "next/image";
// import Button from "./ui/Button";

const footerLinks = {
  services: [
    { name: "Webbutveckling", href: "/#services" },
    { name: "SaaS-utveckling", href: "/#services" },
    { name: "Mobilappar", href: "/#services" },
    { name: "UI/UX Design", href: "/#services" },
    { name: "DevOps & Hosting", href: "/#services" },
    { name: "Konsultation", href: "/#contact" },
  ],
  company: [
    { name: "Om oss", href: "/#about" },
    { name: "Vårt team", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Case Studies", href: "/#portfolio" },
    { name: "Blogg", href: "/blog" },
    // { name: "Karriär", href: "/careers" },
  ],
  // resources: [
  //   { name: "Dokumentation", href: "/docs" },
  //   { name: "API Referenser", href: "/api" },
  //   { name: "Support Center", href: "/support" },
  //   { name: "Community", href: "/community" },
  //   { name: "Tutorials", href: "/tutorials" },
  //   { name: "Webinars", href: "/webinars" },
  // ],
  legal: [
    { name: "Integritetspolicy", href: "/privacy" },
    { name: "Användarvillkor", href: "/terms" },
    { name: "Cookie-inställningar", href: "#cookie-settings" },
    // { name: "Cookie Policy", href: "/cookies" },
    // { name: "GDPR", href: "/gdpr" },
    // { name: "Säkerhet", href: "/security" },
    // { name: "Compliance", href: "/compliance" },
  ],
};

const socialLinks = [
  //   {
  //     name: "LinkedIn",
  //     icon: Linkedin,
  //     href: "https://linkedin.com/company/dataflowsolutions",
  //     color: "hover:text-blue-500",
  //   },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/dataflowsolutions",
    color: "hover:text-gray-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/dataflowsolutions_sweden/",
    color: "hover:text-pink-500",
  },
  //   {
  //     icon: MessageSquare,
  //     name: "Discord",
  //     url: "https://discord.gg/dataflowsolutions",
  //     color: "hover:text-indigo-500",
  //   },
];

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  // Navigation handler for footer links
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    // Handle cookie settings
    if (href === "#cookie-settings") {
      // Trigger cookie consent banner to show settings
      localStorage.removeItem("cookie-consent");
      window.location.reload();
      return;
    }

    // If it's the blog link or other pages, navigate directly
    if (href === "/blog" || (href.startsWith("/") && !href.startsWith("/#"))) {
      router.push(href);
      return;
    }

    // If it's a homepage section link (starts with /# )
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2); // Remove the /#

      // If we're not on the homepage, navigate to homepage first
      if (pathname !== "/") {
        router.push(href);
        return;
      }

      // If we're already on homepage, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbar = document.querySelector("header");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const elementPosition = element.offsetTop - navbarHeight - 20;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-background-elevated border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/logo/DataflowLogo.png"
                  alt="Dataflow Solutions Logo"
                  width={40}
                  height={10000}
                />
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                Vi skapar moderna digitala lösningar som driver affärstillväxt.
                Från webbplatser till komplexa SaaS-produkter levererar vi
                excellens i varje projekt.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-text-secondary">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span>info@dataflowsolutions.se</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span>+46 72 877 53 59</span>
                </div>
                {/* <div className="flex items-center text-text-secondary">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>Stockholm, Sverige</span>
                </div> */}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Tjänster
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavigation(link.href, e)}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Företag
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavigation(link.href, e)}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Resurser
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-6">
                Juridiskt
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavigation(link.href, e)}
                      className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              {/* Copyright */}

              <span className="text-text-muted text-sm text-center">
                © {currentYear} Dataflow Solutions. Skapad med ❤️ i Dalarna,
                Sverige.
              </span>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-text-muted text-sm mr-2">Följ oss:</span>
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => {
                      // Track social media click
                      event({
                        action: "social_click",
                        category: "Footer",
                        label: social.name,
                        value: 1,
                      });
                      window.open(social.href, "_blank");
                    }}
                    className={`w-10 h-10 bg-accent rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
