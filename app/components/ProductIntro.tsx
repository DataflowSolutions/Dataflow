import { Sparkles, FileText, Search, Brain } from "lucide-react";
import Link from "next/link";

const ProductIntro = () => {
  return (
    <div className="mt-12 w-full max-w-5xl flex flex-col gap-8 items-center text-center">
      {/* Hirena Card */}
      <Link
        href="/hirena"
        className="w-full rounded-2xl border border-accent/30 bg-muted/30 backdrop-blur p-6 md:p-10 flex flex-col gap-6 hover:shadow-md hover:border-accent/60 transition-all"
      >
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-semibold text-primary">Hirena</h3>
          <p className="text-text-primary/70 max-w-xl">
            En AI-baserad plattform som hjälper unga att hitta jobb smartare. Genom att läsa ditt CV och personliga brev hittar Hirena rätt jobb för just dig – snabbt, relevant och semantiskt.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-text-primary/80 text-sm">
          <div className="flex flex-col items-center gap-2">
            <Sparkles size={24} />
            <span>AI-drivna matchningar</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FileText size={24} />
            <span>Analys av CV & brev</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Search size={24} />
            <span>Semantisk jobbsökning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Brain size={24} />
            <span>Smart filtrering</span>
          </div>
        </div>
      </Link>

          
        {/* Call to Action */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <Link
            href="/hirena"
            className="bg-primary text-text-primary hover:bg-primary/80 transition-colors px-10 py-3 text-base font-medium rounded-lg shadow-md"
          >
            Läs mer om Hirena
          </Link>

          <Link
            href="https://hirena.se"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:underline"
          >
            eller besök Hirena.se →
          </Link>
        </div>

    </div>
    );
}
export default ProductIntro;
