"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const router = useRouter();

  const handleScroll = (id: string) => {
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

  const handleNavClick = (id: string) => {
    if (window.location.pathname === "/") {
      handleScroll(id);
    } else {
      router.push("/");
      // Vänta på att sidan renderas innan scroll
      setTimeout(() => handleScroll(id), 100);
    }
  };

  return (
    <div className="w-full bg-background/75 fixed border-b backdrop-blur z-50 border-accent/50 flex justify-center">
      <div className="w-full max-w-[1440px] h-16 flex items-center justify-between md:px-4 px-2">
        {/* LEFT: LOGO */}
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="flex items-center hover:opacity-75 transition-opacity"
          >
            <span className="font-black text-2xl">Dataflow Solutions</span>
          </Link>
        </div>

        {/* CENTER: NAVIGATION */}
        <div className="hidden md:flex gap-6 items-center">
          <button
            onClick={() => handleNavClick("#tjanster")}
            className="text-sm font-medium hover:text-primary transition-colors text-text-primary cursor-pointer"
          >
            Tjänster
          </button>
          <button
            onClick={() => handleNavClick("#produkter")}
            className="text-sm font-medium hover:text-primary transition-colors text-text-primary cursor-pointer"
          >
            Produkter
          </button>
          <button
            onClick={() => handleNavClick("#om-oss")}
            className="text-sm font-medium hover:text-primary transition-colors text-text-primary cursor-pointer"
          >
            Om Oss
          </button>
          <button
            onClick={() => handleNavClick("#kontakt")}
            className="text-sm font-medium hover:text-primary transition-colors text-text-primary cursor-pointer"
          >
            Kontakt
          </button>
        </div>

        {/* RIGHT: HAMBURGER */}
        <div className="flex md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
