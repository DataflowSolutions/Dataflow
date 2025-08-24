"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const router = useRouter();

  const handleNavClick = useCallback(
    (id: string) => {
      if (window.location.pathname === "/") {
        scrollToSection(id);
      } else {
        router.push("/");
        setTimeout(() => scrollToSection(id), 100);
      }
    },
    [router]
  );

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 64;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full bg-muted/30 border-t border-accent/20 text-sm mt-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-text-primary/70">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          © {year} Dataflow Solutions. Alla rättigheter förbehållna.
        </div>
        <div className="text-center md:text-left text-xs text-text-primary/50">
          Enskild firma – org.nr: 060604-3115 (Albin Hasanaj)
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <button
            onClick={() => handleNavClick("#tjanster")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Tjänster
          </button>
          <button
            onClick={() => handleNavClick("#produkter")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Produkter
          </button>
          <button
            onClick={() => handleNavClick("#om-oss")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Om oss
          </button>
          <button
            onClick={() => handleNavClick("#kontakt")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Kontakt
          </button>
        </div>
      </div>
    </footer>
  );
}
