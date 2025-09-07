"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Clock, Scale } from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function TermsPage() {
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
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Användarvillkor
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Dessa villkor reglerar din användning av våra tjänster. Genom att
            använda våra tjänster accepterar du dessa villkor.
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
              1. Accepterande av villkor
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Genom att använda Dataflow Solutions tjänster accepterar du att
                vara bunden av dessa användarvillkor. Om du inte accepterar alla
                villkor ska du inte använda våra tjänster.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              2. Tjänstebeskrivning
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>Dataflow Solutions tillhandahåller:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Webbutvecklingstjänster</li>
                <li>AI-integration</li>
                <li>SaaS-utveckling</li>
                <li>Backend- och API-utveckling</li>
                <li>UI/UX-design</li>
                <li>DevOps och hosting</li>
                <li>Sökmotorsoptimerad webbplats</li>
                <li>Säkerhetslösningar</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              3. Användaransvar
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>Som användare av våra tjänster åtar du dig att:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tillhandahålla korrekt och aktuell information</li>
                <li>Inte använda tjänsterna för olagliga ändamål</li>
                <li>Respektera immaterialrätter</li>
                <li>Inte störa eller försöka störa tjänsternas funktion</li>
                <li>Följa alla tillämpliga lagar och förordningar</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              4. Immaterialrätter
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Allt innehåll, design och kod som utvecklas av Dataflow
                Solutions förblir vår immaterialrättsliga egendom tills full
                betalning har erhållits, varefter rättigheterna överförs till
                kunden enligt avtal.
              </p>
              <p>
                Kunden behåller alla rättigheter till sitt eget innehåll,
                varumärken och affärsidéer.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              5. Betalningsvillkor
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Betalningsvillkor specificeras i varje enskilt projektavtal.
                Generellt gäller:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>50% förskottsbetalning vid projektstart</li>
                <li>Resterande 50% vid slutleverans</li>
                <li>Betalning ska ske inom 30 dagar från fakturadatum</li>
                <li>Förseningsränta tillkommer vid sen betalning</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              6. Ansvarsbegränsning
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Dataflow Solutions ansvar är begränsat till det belopp som
                betalats för den specifika tjänsten. Vi ansvarar inte för
                indirekta skador, förlorad vinst eller andra konsekvenser.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              7. Avbokning och återbetalning
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>Avbokning av projekt kan ske enligt följande:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Före projektstart: Full återbetalning minus administrativa
                  kostnader
                </li>
                <li>Under pågående projekt: Betalning för utfört arbete</li>
                <li>Efter slutleverans: Ingen återbetalning</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              7. Cookies och webbanvändning
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Genom att använda vår webbplats accepterar du vår användning av
                cookies enligt vår cookie-policy och integritetspolicy.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Cookie-samtycke
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Du har rätt att acceptera eller avvisa icke-nödvändiga cookies
                </li>
                <li>
                  Nödvändiga cookies krävs för webbplatsens grundläggande
                  funktionalitet
                </li>
                <li>Analytics-cookies hjälper oss att förbättra webbplatsen</li>
                <li>Du kan ändra dina cookie-inställningar när som helst</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Tredjepartstjänster
              </h3>
              <p>
                Vi använder Google Analytics för att analysera webbplatstrafik.
                Googles användarvillkor och integritetspolicy gäller för denna
                tjänst.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mt-6 mb-3">
                Användningsdata
              </h3>
              <p>
                Vi samlar in anonymiserad data om webbplatsanvändning för att:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Förbättra användarupplevelsen</li>
                <li>Förstå hur besökare interagerar med webbplatsen</li>
                <li>Optimera webbplatsens prestanda</li>
                <li>Utveckla bättre tjänster</li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              8. Ändringar av villkor
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Vi förbehåller oss rätten att uppdatera dessa villkor.
                Väsentliga ändringar kommer att meddelas via e-post eller på vår
                webbplats.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              9. Tillämplig lag
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>
                Dessa villkor regleras av svensk lag. Eventuella tvister ska
                lösas i svensk domstol.
              </p>
            </div>
          </Card>

          <Card variant="elevated" className="p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              10. Kontakt
            </h2>
            <div className="text-text-secondary space-y-4">
              <p>För frågor om dessa villkor, kontakta oss:</p>
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
