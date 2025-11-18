import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hirena Case Study - AI-Driven Jobbsökningsplattform | Dataflow Solutions",
  description:
    "Hirena är en intelligent jobbsökningsplattform som använder AI för att matcha kandidater med relevanta jobb. Läs om hur Dataflow Solutions byggde denna innovativa lösning.",
  keywords: [
    "hirena",
    "AI jobbsökning",
    "jobbmatchning",
    "case study",
    "AI-wingman",
    "karriär",
    "rekrytering",
  ],
  openGraph: {
    title: "Hirena - Din AI-Wingman för Jobbsök",
    description:
      "Smart jobbmatchning och automatiserade ansökningsbrev med AI. Läs vår case study om Hirena.",
    url: "https://dataflowsolutions.se/case-studies/hirena",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HirenaCaseStudy() {
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

          <Badge
            text="Case Study"
            variant="primary"
            size="lg"
            className="mb-6"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Hirena —{" "}
            <span className="gradient-text">Din AI-Wingman för Jobbsök</span>
          </h1>

          <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
            Hirena är en intelligent jobbsökningsplattform som använder AI för
            att matcha kandidater med relevanta jobb. Istället för att scrolla
            genom tusentals irrelevanta annonser, får användare en smart,
            personlig lista med jobb som verkligen passar deras kompetens och
            erfarenhet.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1: What is Hirena */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Vad är Hirena?
          </h2>

          <div className="space-y-6 mb-8">
            <Card variant="elevated" className="p-6">
              <p className="text-text-secondary leading-relaxed">
                Hirena är din AI-wingman för jobbsök. Plattformen läser ditt CV,
                förstår vad du faktiskt kan — inte bara nyckelord — och hittar
                jobb som matchar dig på riktigt. Det är slutet på den gamla
                metoden där du måste sitta och scrolla som en zombie genom tusen
                irrelevanta annonser.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <p className="text-text-secondary leading-relaxed">
                Tjänsten är byggd för jobbsökare som vill hitta rätt jobb utan
                att drunkna i jobbsajternas kaos. Mer relevanta träffar, mindre
                stress, mer flow — det är Hirenas löfte.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Smart CV-analys
              </h3>
              <p className="text-text-secondary">
                Hirena läser och förstår ditt CV på djupet. AI:n analyserar din
                verkliga kompetens, erfarenhet och potential — inte bara
                nyckelord — för att ge dig relevanta jobbmatchningar.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Personliga ansökningsbrev
              </h3>
              <p className="text-text-secondary">
                Generera personliga ansökningsbrev automatiskt baserat på ditt
                tidigare brev och jobbannonsen. Slipp &quot;skriva ett nytt brev
                för varje ansökan&quot;-ångesten och spara värdefull tid.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Säker och privat
              </h3>
              <p className="text-text-secondary">
                Ditt CV och dina dokument sparas säkert och delas aldrig utanför
                tjänsten. Din integritet är prioritet nummer ett.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Gratis beta
              </h3>
              <p className="text-text-secondary">
                Under betafasen är tjänsten helt gratis att använda. Testa alla
                funktioner utan kostnad och var med från början.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 2: Core Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Kärnfunktioner
          </h2>

          <div className="space-y-6">
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Intelligent jobbmatchning
              </h3>
              <p className="text-text-secondary">
                Hirenas AI analyserar både ditt CV och jobbannonser för att
                hitta de bästa matchningarna. Du får en smart lista med jobb som
                faktiskt passar din profil — inte en överväldigande mängd
                irrelevanta alternativ.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Automatiserad brevgenerering
              </h3>
              <p className="text-text-secondary">
                Skapa skräddarsydda ansökningsbrev på sekunder. Hirena använder
                ditt CV i kombination med jobbannonsens beskrivning för att
                automatiskt generera ett personligt ansökningsbrev som är
                anpassat till varje specifik tjänst, vilket sparar dig timmar av
                manuellt arbete.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Clean och snabb användarupplevelse
              </h3>
              <p className="text-text-secondary">
                Plattformen är byggd med modern teknik för att vara snabb,
                responsiv och lättanvänd. Allt är designat för att göra din
                jobbsökning så smidig som möjligt.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Enkel dokumenthantering
              </h3>
              <p className="text-text-secondary">
                Ladda upp ditt CV en gång och låt Hirena göra resten. Dina
                dokument lagras säkert och är alltid tillgängliga när du behöver
                dem.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 3: Target Audience & Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Vem är Hirena för?
          </h2>

          <Card variant="elevated" className="p-8">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Hirena är särskilt utformad för jobbsökare som vill hitta rätt
              karriärmöjligheter utan att drunkna i information. Om du är trött
              på att:
            </p>

            <ul className="space-y-4 text-text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Scrolla genom hundratals irrelevanta jobbannonser</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Skriva om samma ansökningsbrev gång på gång</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>
                  Missa relevanta jobb för att de är begravda bland tusentals
                  andra
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Spendera timmar på att hitta och ansöka till jobb</span>
              </li>
            </ul>

            <p className="text-text-secondary">
              ...då är Hirena lösningen. Plattformen tar bort friktionen från
              jobbsökningsprocessen och låter dig fokusera på det som verkligen
              spelar roll: att hitta ett jobb du vill ha.
            </p>
          </Card>
        </section>

        {/* Section 4: Technology & Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Teknologi och tillvägagångssätt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Modern teknikstack
              </h3>
              <p className="text-text-secondary">
                Hirena är byggd med moderna teknologier som säkerställer en
                snabb, responsiv och pålitlig användarupplevelse. Plattformen är
                optimerad för prestanda och skalbarhet.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                AI-driven matchning
              </h3>
              <p className="text-text-secondary">
                Avancerad AI-teknologi analyserar både dina kvalifikationer och
                jobbkrav för att skapa intelligenta matchningar som går bortom
                enkel nyckelordssökning.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Användarvänlig design
              </h3>
              <p className="text-text-secondary">
                Clean, intuitiv design som gör det enkelt att navigera och
                använda alla funktioner. Ingen onödig komplexitet — bara det du
                behöver.
              </p>
            </Card>

            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Säkerhet först
              </h3>
              <p className="text-text-secondary">
                Robust säkerhetsarkitektur som skyddar dina personuppgifter och
                dokument. Dina data förblir privata och delas aldrig med tredje
                part.
              </p>
            </Card>
          </div>
        </section>

        {/* Section 5: Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Varför Hirena gör skillnad
          </h2>

          <Card variant="elevated" className="p-8">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Jobbsökning behöver inte vara en överväldigande, tidskrävande
              process. Hirena förändrar spelreglerna genom att använda AI för
              att ge dig exakt vad du behöver: relevanta jobb och personliga
              ansökningsbrev — snabbt och enkelt.
            </p>

            <p className="text-text-secondary mb-6">
              Istället för att spendera timmar varje dag på att leta och ansöka,
              kan du fokusera din energi på att förbereda dig för intervjuer och
              bygga din karriär. Hirena tar hand om det tråkiga, du tar hand om
              det viktiga.
            </p>

            <p className="text-text-secondary">
              Med Hirena får du mer än bara en jobbsökningsplattform — du får en
              smart partner som förstår din profil och hjälper dig hitta rätt
              möjligheter. Det är jobbsökning som det borde vara: effektivt,
              relevant och stressfritt.
            </p>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://www.hirena.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ExternalLink className="w-5 h-5" />}
              className="cursor-pointer"
            >
              Besök Hirena
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
