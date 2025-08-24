"use client";

import { useRouter } from "next/navigation";
import { Sparkles, FileText, Search, Brain, ArrowLeft } from "lucide-react";

export default function HirenaPage() {
  const router = useRouter();

  return (
    <main className="relative w-full bg-background text-text-primary pb-32">
      <button
        onClick={() => router.push("/")}
        className="cursor-pointer fixed top-20 left-4 z-50 flex items-center gap-2 bg-muted/80 backdrop-blur px-3 py-2 rounded-md text-sm shadow-md border border-accent/30 hover:bg-muted"
      >
        <ArrowLeft size={24} />
        Tillbaka
      </button>

      <section className="w-full max-w-[900px] mx-auto px-4 sm:px-6 pt-20 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Hirena
          </h1>
          <p className="text-base sm:text-lg text-text-primary/70 max-w-prose leading-relaxed">
            En AI-driven jobbsökningsplattform som använder semantisk analys för
            att hitta rätt jobb – anpassat efter dig och inte bara dina
            nyckelord.
          </p>
        </div>

        {/* Funktioner */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-center">
            Vad gör Hirena unikt?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              icon={<Sparkles size={28} />}
              title="AI-matchning"
              description="Hirena analyserar ditt CV och personliga brev med AI för att hitta relevanta jobb baserat på innehåll, inte bara nyckelord."
            />
            <Feature
              icon={<FileText size={28} />}
              title="Förstår dina dokument"
              description="Ladda upp ditt CV eller personliga brev – Hirena tolkar innehållet semantiskt och anpassar matchningen efter det."
            />
            <Feature
              icon={<Search size={28} />}
              title="Semantisk sökning"
              description="Vi använder Sentence-BERT och vektorsökning för att matcha dig med jobb som *verkligen* passar dig."
            />
            <Feature
              icon={<Brain size={28} />}
              title="Smart rankning"
              description="Resultaten viktas med algoritmer som RRF och score fusion för att alltid visa det mest relevanta först."
            />
          </div>
        </div>

        {/* Teknisk beskrivning */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center">
            Teknik bakom Hirena
          </h2>
          <p className="text-base text-text-primary/70 text-center max-w-prose mx-auto">
            Hirena är byggt för hastighet och skalbarhet, med fokus på tydlig
            datamodellering och effektiv AI-integration.
          </p>
          <ul className="list-disc list-inside text-text-primary/80 text-sm sm:text-base max-w-prose mx-auto space-y-1 mt-2">
            <li>PostgreSQL + pgvector för vektorsökning</li>
            <li>Sentence-BERT (svenska) för embedding</li>
            <li>RRF och viktad fusion för topprankning</li>
            <li>Next.js frontend, Express backend, Dockerized pipeline</li>
            <li>Stöd för CV & brev i PDF/Word-format</li>
          </ul>
        </div>

        {/* Målgrupp */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center">
            Vem är Hirena för?
          </h2>
          <p className="text-base text-text-primary/70 text-center max-w-prose mx-auto leading-relaxed">
            Hirena riktar sig till unga, nyutexaminerade och arbetssökande som
            vill ha en bättre chans att hitta rätt jobb – utan att drunkna i
            irrelevanta platsannonser.
          </p>
        </div>
      </section>
    </main>
  );
}

// Feature-card komponent
function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-accent/20 bg-muted/30 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
      <div className="text-primary">{icon}</div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-sm text-text-primary/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
