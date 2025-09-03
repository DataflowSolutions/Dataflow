export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const allPosts: BlogPost[] = [
  {
    id: 1,
    title: "En Ny Era Börjar: Lanseringen av Dataflow Solutions",
    excerpt:
      "Lär dig hur Dataflow Solutions sätter ut för att omdefiniera digital närvaro för företag, och erbjuder moderna webblösningar skräddarsydda för tillväxt och innovation.",
    content: `# En Ny Era Börjar: Lanseringen av Dataflow Solutions

Med lanseringen av Dataflow Solutions börjar ett nytt kapitel inom webbutveckling. Byggd på en vision att förena designprecision med teknisk excellens, strävar vi efter att ge företag skalbar, användarvänlig och framtidssäker webbplatser. Detta är inte bara ännu en byrå—det är början på en rörelse mot smartare, mer effektfulla digitala lösningar.

## Vår Vision

På Dataflow Solutions tror vi att varje företag förtjänar en digital närvaro som inte bara ser exceptionell ut utan också ger verkliga resultat. Vår approach kombinerar banbrytande teknik med genomtänkt design för att skapa webbplatser som engagerar användare och konverterar besökare till kunder.

## Vad Som Skiljer Oss Åt

### Modern Teknisk Stack
Vi använder de senaste webbteknologierna inklusive:
- **Next.js 15** för överlägsen prestanda och SEO
- **React 19** för dynamiska användargränssnitt
- **TailwindCSS** för responsiv, modern design
- **TypeScript** för pålitlig, underhållbar kod

### Användarcentrerad Design
Varje projekt börjar med att förstå dina användare. Vi skapar upplevelser som är:
- Intuitiva och tillgängliga
- Optimerade för alla enheter
- Snabba och responsiva
- Konverteringsfokuserade

### Framtidssäkra Lösningar
Våra webbplatser är byggda för att skala med ditt företag:
- Modern arkitektur som växer med dig
- Enkel innehållshantering
- Prestandaoptimering
- SEO bästa praxis

## Resan Framåt

När vi påbörjar denna resa är vi engagerade i att tänja gränserna för vad som är möjligt inom webbutveckling. Vi bygger inte bara webbplatser; vi skapar digitala upplevelser som berättar din historia, engagerar din målgrupp och driver ditt företag framåt.

Oavsett om du är en startup som vill göra ditt avtryck eller ett etablerat företag redo att höja din digitala närvaro, är Dataflow Solutions här för att förvandla din vision till verklighet.

**Redo att starta din digitala transformation?** Kontakta oss idag och låt oss bygga något extraordinärt tillsammans.`,
    author: {
      name: "Dataflow Solutions Team",
      avatar: "/api/placeholder/40/40",
      role: "Grundare",
    },
    publishedAt: "2025-09-02",
    readTime: "7 min läsning",
    category: "Affärer",
    tags: ["Webbutveckling", "Startups", "Innovation"],
    image: "/api/placeholder/800/400",
    featured: false,
  },
  {
    id: 2,
    title: "Tillgänglighet i Fokus: Så Förbereder Vi Oss för WCAG 2.1 AA",
    excerpt:
      "Webbtillgänglighet är inte längre valfritt – det är lag. Upptäck hur Dataflow Solutions bygger moderna, inkluderande webbplatser i linje med WCAG 2.1 AA och framtidens digitala krav.",
    content: `# Tillgänglighet i Fokus: Så Förbereder Vi Oss för WCAG 2.1 AA

Från och med 2025 blir **WCAG 2.1 nivå AA** ett lagkrav för fler företag än någonsin tidigare i Sverige och EU. På Dataflow Solutions ser vi detta inte som en begränsning – utan som en möjlighet att skapa webbupplevelser som **fungerar för alla**.

## Vad är WCAG 2.1 AA?

Web Content Accessibility Guidelines (WCAG) är en global standard för att göra webbplatser tillgängliga för människor med olika typer av funktionsvariationer. Nivå 2.1 AA innebär bland annat:

- Färgkontrast som underlättar läsbarhet
- Navigering utan mus (tangentbordsnavigering)
- Stöd för skärmläsare
- Responsiv design för olika enheter och inmatningsmetoder
- Tydliga formulär, etiketter och felmeddelanden

## Vårt Åtagande

På Dataflow Solutions ligger tillgänglighet **inbyggt i vår utvecklingsprocess** – inte som ett tillägg i slutet. Vi arbetar aktivt för att se till att våra kunders webbplatser redan nu lever upp till kommande krav.

### Så Här Säkerställer Vi WCAG-efterlevnad:

- Automatiserade tillgänglighetstester med verktyg som **axe-core** och **Lighthouse**
- Manuella tester med skärmläsare som **VoiceOver** och **NVDA**
- Designbeslut med kontrast, läsbarhet och användbarhet i centrum
- Kodstruktur som följer semantiska principer och ARIA-standarder
- Regelbundna granskningar inför och efter lansering

## Mer Än Bara Regler – Det Handlar om Människor

Vi tror att **bra design är inkluderande design**. Genom att bygga med tillgänglighet från start når vi fler användare, stärker varumärkets trovärdighet och undviker juridiska risker.

Tillgänglighet förbättrar dessutom den **övergripande användarupplevelsen** för alla – inte bara för personer med funktionsvariationer.

## Redo för Framtidens Webblag?

Lagen må träda i kraft 2025, men vi agerar **nu**. Vår filosofi är enkel: bygga webbplatser som inte bara ser bra ut – utan fungerar för **alla användare, i alla situationer**.

Oavsett om du behöver en tillgänglighetsanalys, vill uppgradera din nuvarande webbplats eller starta något nytt från grunden, så är vi din partner hela vägen.

**Vill du vara förberedd inför 2025?** Hör av dig till oss så skapar vi en tillgänglig digital framtid – tillsammans.`,
    author: {
      name: "Dataflow Solutions Team",
      avatar: "/api/placeholder/40/40",
      role: "Grundare",
    },
    publishedAt: "2025-09-03",
    readTime: "6 min läsning",
    category: "Tillgänglighet",
    tags: ["WCAG 2.1", "Tillgänglighet", "UX", "Webblag"],
    image: "/api/placeholder/800/400",
    featured: true,
  },
];

export const getPostById = (id: number): BlogPost | undefined => {
  return allPosts.find((post) => post.id === id);
};

export const getFeaturedPost = (): BlogPost | undefined => {
  return allPosts.find((post) => post.featured);
};

export const getRegularPosts = (): BlogPost[] => {
  return allPosts.filter((post) => !post.featured);
};
