"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, ArrowRight, Clock, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { event } from "@/lib/analytics";

export default function MeetingBookedPage() {
  const router = useRouter();

  useEffect(() => {
    // Track meeting booking
    event({
      action: "meeting_booked",
      category: "Meeting",
      label: "Meeting Booked",
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
            className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Mötet är bokat! 🎉
          </h1>

          <p className="text-lg text-text-secondary mb-8">
            Tack för att du valde att boka ett möte med Dataflow Solutions. Vi
            ser fram emot att prata med dig om ditt projekt!
          </p>

          {/* Next Steps */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Vad händer nu?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  Du får en kalenderbokningsbekräftelse via e-post med alla
                  detaljer
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  Vi skickar en påminnelse 24 timmar innan mötet
                </span>
              </li>
              <li className="flex items-start">
                <Video className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  Mötet hålls digitalt via Google Meet eller Zoom (länk kommer i
                  bekräftelsen)
                </span>
              </li>
            </ul>
          </div>

          {/* Tips */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              💡 Tips inför mötet
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Tänk igenom vad ditt projekt ska lösa för problem</li>
              <li>• Ha gärna exempel på design/funktioner du gillar</li>
              <li>• Förbered frågor om budget och tidslinje</li>
              <li>• Ha tillgång till en dator för att kunna dela skärm</li>
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
              onClick={() => router.push("/blog")}
              className="cursor-pointer"
            >
              Läs vår blogg
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-text-muted mb-2">
              Behöver du ändra eller avboka mötet?
            </p>
            <p className="text-sm text-text-secondary">
              Använd länken i bekräftelsemailet eller kontakta oss på{" "}
              <a
                href="mailto:info@dataflowsolutions.se"
                className="text-primary hover:underline"
              >
                info@dataflowsolutions.se
              </a>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
