"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Clock, FileText } from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Integritetspolicy
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Din integritet är viktig för oss. Den här policyn förklarar hur vi
            samlar in, använder och skyddar din personliga information.
          </p>
          <div className="flex items-center justify-center text-text-muted text-sm mt-4">
            <Clock className="w-4 h-4 mr-2" />
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              1. Insamling av information
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary mb-4">
                Vi samlar in information som du frivilligt tillhandahåller när
                du:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Kontaktar oss via vårt kontaktformulär</li>
                <li>Deltar i våra webinarier eller events</li>
                <li>Använder våra tjänster</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              2. Hur vi använder din information
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>Vi använder den insamlade informationen för att:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Svara på dina förfrågningar och ge support</li>
                <li>Förbättra våra tjänster och användarupplevelse</li>
                <li>
                  Analysera hemsidans användning och prestanda (via Google
                  Analytics)
                </li>
                <li>Anpassa innehåll och marknadsföring</li>
                <li>Följa juridiska krav och förordningar</li>
              </ul>
              <p>
                Vi använder också cookies och liknande tekniker för att
                analysera webbplatsens användning och förbättra
                användarupplevelsen. Du kan kontrollera cookie-inställningar
                genom vår cookie-banner eller i din webbläsares inställningar.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              3. Dataskydd och säkerhet
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Vi implementerar lämpliga tekniska och organisatoriska
                säkerhetsåtgärder för att skydda din personliga information mot
                obehörig åtkomst, ändring, utlämnande eller förstörelse.
              </p>
              <p>
                All data överförs krypterat via HTTPS och lagras säkert i
                enlighet med branschstandarder.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              4. Dina rättigheter (GDPR)
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>Under GDPR har du rätt att:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Begära tillgång till dina personuppgifter</li>
                <li>Begära rättelse av felaktiga uppgifter</li>
                <li>Begära radering av dina uppgifter</li>
                <li>Begära begränsning av behandling</li>
                <li>Invända mot behandling</li>
                <li>Begära dataportabilitet</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              5. Cookies och spårningsteknologier
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary mb-4">
                Vi använder cookies och liknande teknologier för att förbättra
                din upplevelse på vår webbplats. En cookie är en liten textfil
                som lagras på din enhet när du besöker vår webbplats.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Typer av cookies vi använder:
              </h3>

              <div className="space-y-4">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-2">
                    Nödvändiga cookies
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Dessa cookies är nödvändiga för att webbplatsen ska fungera
                    korrekt. De kan inte stängas av och inkluderar cookies för
                    att komma ihåg dina cookie-inställningar och
                    säkerhetsfunktioner.
                  </p>
                </div>

                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-2">
                    Analytics-cookies (Google Analytics)
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Vi använder Google Analytics för att förstå hur besökare
                    använder vår webbplats. Dessa cookies samlar in anonymiserad
                    information om sidvisningar, sessionslängd och
                    användarinteraktioner. Measurement ID: G-3WCZ8FFMX8
                  </p>
                </div>

                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-2">
                    Marknadsföring-cookies
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Dessa cookies används för att visa relevanta annonser och
                    mäta effektiviteten av våra marknadsföringskampanjer. De
                    aktiveras endast med ditt samtycke.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Hantera dina cookie-inställningar:
              </h3>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>
                  Du kan när som helst ändra dina cookie-inställningar genom att
                  klicka på &quot;Cookie-inställningar&quot; i sidfoten
                </li>
                <li>
                  Du kan också hantera cookies genom din webbläsares
                  inställningar
                </li>
                <li>
                  Observera att vissa funktioner på webbplatsen kan påverkas om
                  du väljer att blockera cookies
                </li>
              </ul>

              <p className="text-text-secondary mt-4">
                Cookies lagras enligt följande tidsperioder:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li>
                  Nödvändiga cookies: Tills du stänger webbläsaren eller upp
                  till 1 år
                </li>
                <li>
                  Analytics-cookies: Upp till 2 år (Google Analytics standard)
                </li>
                <li>Marknadsföring-cookies: Upp till 1 år</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              6. Kontakt
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Om du har frågor om denna integritetspolicy eller hur vi
                hanterar dina personuppgifter, kontakta oss:
              </p>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>info@dataflowsolutions.se</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="cursor-pointer"
          >
            Tillbaka
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
