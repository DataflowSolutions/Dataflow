"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { event } from "@/lib/analytics";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Track form submission
    event({
      action: "form_submitted",
      category: "Contact",
      label: "Contact Form Submitted",
      value: 1,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-muted flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <Card variant="elevated" className="p-8 md:p-12 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Tack för ditt meddelande!
          </h1>

          <p className="text-lg text-text-secondary mb-8">
            Vi har tagit emot ditt meddelande och kommer att återkomma inom 24
            timmar. Vi ser fram emot att prata med dig om ditt projekt!
          </p>

          {/* Next Steps */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Vad händer nu?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  Du får en bekräftelse via e-post inom några minuter
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  Vi kontaktar dig inom 24 timmar för att diskutera ditt projekt
                </span>
              </li>
              <li className="flex items-start">
                <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  Vi bokar in ett möte för att gå igenom dina behov i detalj
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => router.push("/")}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="cursor-pointer"
            >
              Tillbaka till startsidan
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
              leftIcon={<Calendar className="w-5 h-5" />}
              className="cursor-pointer"
            >
              Boka möte direkt
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-text-muted mb-2">
              Behöver du hjälp direkt?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a
                href="mailto:info@dataflowsolutions.se"
                className="text-primary hover:underline"
              >
                info@dataflowsolutions.se
              </a>
              <span className="hidden sm:inline text-text-muted">•</span>
              <a
                href="tel:+46728775359"
                className="text-primary hover:underline"
              >
                +46 72 877 53 59
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
