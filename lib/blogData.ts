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
  title: "WCAG 2.1 AA blir lag 2025 — Är din webbplats redo?",
  excerpt:
    "Från juni 2025 måste alla nya webbplatser uppfylla WCAG 2.1 AA enligt EU:s tillgänglighetsdirektiv. Lär dig vad det innebär, vilka krav som ställs och hur Dataflow Solutions kan hjälpa dig att göra din webbplats redo i tid.",
  content: `# WCAG 2.1 AA blir lag 2025 — Är din webbplats redo?

Från och med **28 juni 2025** träder **EU:s tillgänglighetsdirektiv (European Accessibility Act)** i kraft. Det innebär att **alla nya webbplatser** och digitala tjänster som riktar sig mot konsumenter **måste uppfylla kraven i WCAG 2.1 AA**.  

På **Dataflow Solutions** hjälper vi företag att redan nu **bygga, uppgradera och optimera** webbplatser som möter kraven — både för att undvika juridiska problem och för att skapa bättre digitala upplevelser för alla användare.



## Vad innebär WCAG 2.1 AA?

**Web Content Accessibility Guidelines (WCAG)** är en internationell standard framtagen av W3C för att göra webbplatser **tillgängliga för alla**, inklusive personer med funktionsvariationer.  

Nivån **WCAG 2.1 AA** ställer bland annat krav på:

- **Färgkontraster** för bättre läsbarhet  
- **Tangentbordsnavigering** utan mus  
- **Stöd för skärmläsare** och alternativa inmatningsmetoder  
- **Responsiv design** som fungerar på alla enheter  
- **Tydliga formulär, etiketter och felmeddelanden**  
- **Strukturerad kod** som följer semantiska HTML- och ARIA-standarder  



## Vilka berörs av lagen?

Från och med **28 juni 2025** gäller lagen för:

- **Alla nya webbplatser** som lanseras efter detta datum  
- **Alla befintliga webbplatser** som genomgår **större ombyggnationer eller redesign**  
- Digitala tjänster, e-handel och bokningssystem som är öppna för allmänheten  

Har din webbplats lanserats **före** 2025 och du **inte** planerar en större redesign?  
Då gäller övergångsregler — men alla **nya projekt** måste följa kraven direkt.



## Så här hjälper vi dig att bli WCAG-redo

På **Dataflow Solutions** bygger vi tillgänglighet **från start** — det är en del av vår process, inte något som läggs på i slutet.  

### Våra metoder för WCAG 2.1 AA:

- **Automatiserade tester** med verktyg som **axe-core** och **Lighthouse**  
- **Manuella tester** med skärmläsare som **NVDA** och **VoiceOver**  
- **Designbeslut med användaren i fokus** — kontrast, läsbarhet och navigering  
- **Semantisk HTML och ARIA** för bättre tillgänglighet  
- **Regelbunden granskning** före och efter lansering  



## Varför tillgänglighet lönar sig

Att uppfylla WCAG 2.1 AA handlar inte bara om **att följa lagen**. Det handlar om att:

- **Nå fler användare** — över 20% av Sveriges befolkning har någon form av funktionsvariation  
- **Stärka varumärket** genom att visa socialt ansvar  
- **Förbättra SEO** — Google prioriterar tillgängliga webbplatser  
- **Minska risken för juridiska problem** och klagomål  

Tillgängliga webbplatser ger dessutom **bättre användarupplevelse för alla** — inte bara för personer med funktionsvariationer.



## Börja redan idag — undvik stressen 2025

**28 juni 2025** kommer snabbt, men vi kan hjälpa dig att ligga före.  
Oavsett om du behöver en **tillgänglighetsanalys**, vill **uppgradera din nuvarande webbplats** eller bygga något helt nytt, är vi din partner hela vägen.

**Vill du vara redo för 2025?**  
Kontakta oss idag, så skapar vi en **tillgänglig, modern och framtidssäker webbplats** — tillsammans.

Publicerad: 3 september 2025  
Av: Dataflow Solutions Team  
`,
  author: {
    name: "Dataflow Solutions Team",
    avatar: "/api/placeholder/40/40",
    role: "Grundare",
  },
  publishedAt: "2025-09-03",
  readTime: "7 min läsning",
  category: "Tillgänglighet",
  tags: ["WCAG 2.1", "Tillgänglighet", "SEO", "Webblag", "UX"],
  image: "/images/blog/wcag-2025.jpg",
  featured: true,
}

  
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
