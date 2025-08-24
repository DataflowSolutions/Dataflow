import { Code, Database, Layers, Rocket, Server, Shield } from "lucide-react";
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import Badge from "./components/Badge";
import ContactForm from "./components/ContactForm";
import ProductIntro from "./components/ProductIntro";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section
        id="prestanda"
        className="w-full py-16 md:py-24 lg:py-32 bg-background"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center px-4 md:px-6 text-center">
          <Badge text="Prestanda" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mt-4">
            Sidan du befinner dig på får dessa resultat
          </h2>
          <p className="text-text-primary/60 text-base md:text-lg max-w-xl mt-2">
            100 poäng i alla kategorier – hastighet, tillgänglighet, bästa praxis och SEO.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80 text-sm">
            {[
              { label: "Performance", value: 100 },
              { label: "Accessibility", value: 100 },
              { label: "Best Practices", value: 100 },
              { label: "SEO", value: 100 },
            ].map((score) => (
              <div key={score.label} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-green-500 text-green-400 font-bold text-lg shadow-[0_0_10px_1px_rgba(34,197,94,0.2)]">
                  {score.value}
                </div>
                <span className="text-white/50">{score.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tjanster"
        className="w-full py-12 md:py-24 lg:py-32 bg-accent/50"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-center flex-col md:px-6 px-4">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <Badge text="Våra tjänster" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Fullservice-lösningar för webbutveckling
            </h2>
            <p className="text-sm md:text-[16px] text-center max-w-[700px] text-text-primary/50 md:text-xl/relaxed">
              Vi sköter allt från design till driftsättning, så att du kan
              fokusera på din verksamhet.
            </p>
          </div>

          <div className="grid max-w-5xl items-center gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <ServiceCard
              icon={<Layers size={24} />}
              title="Anpassad design"
              description="Skräddarsydd design som återspeglar din varumärkesidentitet och ger enastående användarupplevelser."
            />
            <ServiceCard
              icon={<Code size={24} />}
              title="Webbutveckling"
              description="Ren, skalbar kod med hjälp av modern teknik som Next.js, TailwindCSS och mycket mer."
            />
            <ServiceCard
              icon={<Server size={24} />}
              title="Hosting & underhåll"
              description="Tillförlitlig hosting med regelbundna uppdateringar, säkerhetspatchar och prestandaoptimeringar."
            />
            <ServiceCard
              icon={<Database size={24} />}
              title="Databaslösningar"
              description="Robust databasarkitektur med PostgreSQL för skalbar och tillförlitlig datahantering."
            />
            <ServiceCard
              icon={<Rocket size={24} />}
              title="Optimering av prestanda"
              description="Blixtsnabba webbplatser optimerade för hastighet, SEO och konverteringsgrad."
            />
            <ServiceCard
              icon={<Shield size={24} />}
              title="Säkerhet & efterlevnad"
              description="Inbyggda säkerhetsåtgärder och efterlevnad av branschstandarder för att skydda dina data."
            />
          </div>
        </div>
      </section>
      <section
        id="produkter"
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
      >
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

          {/* DISPLAY NO PROJECTS YET */}
          <div className="flex flex-col items-center justify-center text-center mt-10">
            {/* <p className="text-text-primary/30">Inga projekt ännu.</p> */}
            <ProductIntro />
          </div>
          {/* DISPLAY NO PROJECTS YET */}
        </div>
      </section>
      <section
        id="om-oss"
        className="w-full py-12 md:py-24 lg:py-32 bg-accent/50"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-center flex-col md:px-4 px-2">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <Badge text="Om Oss" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Möt visionen bakom Tachyon
            </h2>
            <p className="text-center max-w-[700px] text-text-primary/50 md:text-xl/relaxed">
              Tachyon föddes ur viljan att bygga något snabbare, skarpare och
              mer tekniskt avancerat än traditionella byråer. Vi kombinerar
              modern webbutveckling med AI, SaaS och hög prestanda – alltid med
              precision, integritet och respekt för de vi bygger för.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10">
          {/* <p className="text-text-primary/30">Teamintroduktion kommer snart.</p> */}
        </div>
      </section>
      <section
        id="kontakt"
        className="w-full py-12 md:py-24 lg:py-32 bg-background flex flex-col items-center justify-center"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-center flex-col md:px-4 px-2">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <Badge text="Kontakta oss" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ta kontakt med vårt team
            </h2>
            <p className="text-center max-w-[700px] text-text-primary/50 md:text-xl/relaxed">
              Har du ett projekt i åtanke? Vi vill gärna höra från dig.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
