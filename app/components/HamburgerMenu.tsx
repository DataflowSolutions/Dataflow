"use client";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      scrollToSection(id);
    } else {
      (async () => {
        await router.push("/");
        setTimeout(() => scrollToSection(id), 100);
      })();
    }
  };

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center justify-center">
      <Menu
        onClick={toggleMenu}
        className={`md:hidden text-text-primary cursor-pointer ${
          isOpen && "opacity-0 transition-all"
        }`}
        size={40}
      />
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-screen bg-background/98 backdrop-blur-2xl transition-transform duration-300 ease-in-out z-50`}
      >
        <X
          onClick={toggleMenu}
          className={`md:hidden text-text-primary top-2 right-2 absolute cursor-pointer ${
            !isOpen && "hidden"
          }`}
          size={40}
        />
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <button
            onClick={() => handleNavClick("#tjanster")}
            className="text-text-primary text-lg font-medium cursor-pointer"
          >
            Tjänster
          </button>
          <button
            onClick={() => handleNavClick("#produkter")}
            className="text-text-primary text-lg font-medium cursor-pointer"
          >
            Produkter
          </button>
          <button
            onClick={() => handleNavClick("#om-oss")}
            className="text-text-primary text-lg font-medium cursor-pointer"
          >
            Om oss
          </button>
          <button
            onClick={() => handleNavClick("#kontakt")}
            className="text-text-primary text-lg font-medium cursor-pointer"
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}
