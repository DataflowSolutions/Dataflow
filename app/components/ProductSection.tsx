import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

export default function ProductsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center flex-col md:px-4 px-2">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <Badge text="Våra produkter" />
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Innovativa lösningar byggda med modern teknik
          </h2>
          <p className="text-center max-w-[700px] text-text-primary/50 md:text-xl/relaxed">
            Vi bygger produkter som löser verkliga problem och levererar
            exceptionella användarupplevelser.
          </p>
        </div>

        {/* Hirena Product Card */}
        <div className="mt-16 w-full max-w-5xl">
          <HirenaProduct />
        </div>
      </div>
    </section>
  );
}

function HirenaProduct() {
  return (
    <div className="rounded-2xl border border-accent/30 bg-muted/30 backdrop-blur p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between hover:shadow-lg transition-shadow">
      {/* Image or Screenshot */}
      <div className="w-full md:w-1/2">
        <Image
          src="/products/hirena-preview.png"
          alt="Hirena Preview"
          width={600}
          height={400}
          className="rounded-xl border border-muted"
        />
      </div>

      {/* Description */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <h3 className="text-2xl font-semibold text-primary">Hirena</h3>
        <p className="text-text-primary/70">
          En AI-baserad plattform för smart jobbsökning. Hirena analyserar ditt CV och personliga brev och matchar dig med de mest relevanta jobben – snabbare och smartare än någon annan plattform.
        </p>
        <Link
          href="https://hirena.se"
          target="_blank"
          className="w-fit bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm rounded-md transition-colors"
        >
          Besök Hirena
        </Link>
      </div>
    </div>
  );
}