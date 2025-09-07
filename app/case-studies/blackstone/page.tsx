
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/Badge";

export default function BlackstoneCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till Portfolio
          </Link>

          <Badge text="Case Study" variant="primary" size="lg" className="mb-6" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Blackstone Steakhouse —{" "}
            <span className="gradient-text">Digital Platform Management</span>
          </h1>

          <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
            Genom samarbete med en partnerbyrå har vi bidragit till att hantera och förbättra Blackstone Steakhouse digitala plattform. Vi har arbetat med att säkerställa en stabil och effektiv online-närvaro för denna välkända restaurang.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1: What We Did */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Vad vi gjorde</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Uppdatering av menyer och säsongserbjudanden
              </h3>
              <p className="text-text-secondary">
                Vi har regelbundet uppdaterat restaurangens meny och säsongsmässiga erbjudanden för att säkerställa att informationen alltid är aktuell och korrekt för besökare.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Felsökning och kritiska reparationer
              </h3>
              <p className="text-text-secondary">
                Vi har identifierat och åtgärdat buggar samt kritiska problem som kunde påverka användarupplevelsen och funktionaliteten på webbplatsen.
              </p>
            </Card>

            <Card variant="elevated" className="p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Hantering och underhåll av webbplatsen
              </h3>
              <p className="text-text-secondary">
                Vi har ansvarat för löpande hantering och underhåll av webbplatsen, inklusive prestandaoptimering och säkerhetsuppdateringar för att säkerställa en stabil drift.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 2: Förbeställningssystem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Förbeställningssystem
          </h2>

          <div className="space-y-6">
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Hantering av stora gruppbeställningar
              </h3>
              <p className="text-text-secondary">
                Vi har förbättrat systemet för hantering av stora gruppbeställningar, vilket gör det enklare för kunder att boka bord och göra förbeställningar för större sällskap.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Lösning av kritiska flödesfel
              </h3>
              <p className="text-text-secondary">
                Vi har löst kritiska fel i bokningsflödet som tidigare kunde hindra kunder från att slutföra sina beställningar.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Förbättrad användarupplevelse
              </h3>
              <p className="text-text-secondary">
                Genom att optimera användargränssnittet har vi gjort bokningsprocessen smidigare och mer intuitiv, vilket leder till bättre kundnöjdhet.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Löpande hantering och stabilitetsövervakning
              </h3>
              <p className="text-text-secondary">
                Vi genomför regelbunden övervakning av systemets stabilitet och prestanda för att säkerställa att allt fungerar optimalt dygnet runt.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 3: Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Påverkan och resultat</h2>

          <Card variant="elevated" className="p-8">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Vårt arbete har bidragit till att förbättra webbplatsens tillförlitlighet, hastighet och kundflöde. Genom att åtgärda tekniska problem och optimera användarupplevelsen har vi hjälpt till att skapa en mer professionell och effektiv digital närvaro för Blackstone Steakhouse.
            </p>

            <p className="text-text-secondary">
              Dessa förbättringar har lett till en stabilare plattform som bättre möter kundernas behov och förväntningar, vilket i sin tur stärker restaurangens varumärke och kundlojalitet.
            </p>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link href="https://blackstonesteakhouse.se" target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ExternalLink className="w-5 h-5" />}
              className="cursor-pointer"
            >
              Besök Blackstone Steakhouse
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
