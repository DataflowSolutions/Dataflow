"use client";

import { useRouter, usePathname } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (id: string) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push("/");
      const interval = setInterval(() => {
        const el = document.querySelector(id);
        if (el) {
          scrollToSection(id);
          clearInterval(interval);
        }
      }, 100);
    }
  };

  return (
    <section className="relative flex justify-center md:px-4 px-2 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center space-y-6 lg:my-64 md:my-40 my-30">
        <div className="space-y-4 text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl xl:text-6xl/none">
            Bygger hemsidor, <span className="text-primary">blixt-snabbt</span>
          </h1>
          <p className="max-w-[600px] text-text-primary/50 md:text-xl">
            Fullservicelösningar för webbutveckling med skräddarsydd design, utveckling och hosting.
          </p>
        </div>

        <div className="flex gap-4 items-center font-medium">
          <button
            onClick={() => handleClick("#tjanster")}
            className="bg-primary text-text-primary hover:bg-primary/80 transition-colors px-8 py-3 text-sm rounded-md cursor-pointer"
          >
            Våra Tjänster
          </button>
          <button
            onClick={() => handleClick("#kontakt")}
            className="bg-background border-accent border-[1px] text-text-primary hover:bg-accent transition-colors px-8 py-3 text-sm rounded-md cursor-pointer"
          >
            Kontakta Oss
          </button>
        </div>
      </div>
    </section>
  );
}
