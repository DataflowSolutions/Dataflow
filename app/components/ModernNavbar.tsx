"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useRouter, usePathname } from "next/navigation";
import { event } from "@/lib/analytics";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Hem", href: "/#home" },
  { name: "Tjänster", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Om oss", href: "/#about" },
  { name: "Blogg", href: "/blog" },
  { name: "Kontakt", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when the component mounts or pathname changes
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash;
      const sectionId = hash.substring(1);

      // Small delay to ensure page is loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbar = document.querySelector("header");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const elementPosition = element.offsetTop - navbarHeight - 20;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  }, [pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Custom navigation handler for homepage sections
  const handleNavigation = (
    href: string,
    e: React.MouseEvent | React.TouchEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    // Track navigation click
    event({
      action: "navigation_click",
      category: "Navigation",
      label: href,
      value: 1,
    });

    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // If it's the blog link, navigate directly
    if (href === "/blog") {
      router.push("/blog");
      return;
    }

    // If it's a homepage section link (starts with /# )
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2); // Remove the /#

      // If we're not on the homepage, navigate to homepage first
      if (pathname !== "/") {
        // Navigate to homepage and then scroll to section
        router.push(href);
        return;
      }

      // If we're already on homepage, scroll to section with a small delay for mobile
      setTimeout(
        () => {
          const element = document.getElementById(sectionId);
          if (element) {
            // Get the navbar height to offset the scroll position
            const navbar = document.querySelector("header");
            const navbarHeight = navbar ? navbar.offsetHeight : 80;

            const elementPosition = element.offsetTop - navbarHeight - 20;

            // Check if smooth scrolling is supported (iOS Safari issue)
            const isIOSSafari =
              /iPad|iPhone|iPod/.test(navigator.userAgent) &&
              !(window as unknown as { MSStream?: unknown }).MSStream;

            if (isIOSSafari) {
              // For iOS Safari, use a more reliable scrolling method
              window.scrollTo(0, elementPosition);
            } else {
              window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
              });
            }
          }
        },
        isMobileMenuOpen ? 300 : 100
      ); // Longer delay if mobile menu was open
    }
  };

  return (
    <>
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={(e) => handleNavigation("/#home", e)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-bold gradient-text">
                  Dataflow Solutions
                </span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(item.href, e)}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-lg",
                    "text-text-primary hover:text-primary transition-colors duration-200",
                    "hover:bg-accent/50"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 cursor-pointer"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                <span className="sr-only">
                  {theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"}
                </span>
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Button
                  variant="gradient"
                  size="md"
                  onClick={() => {
                    // Track navbar CTA click
                    event({
                      action: "cta_click",
                      category: "Navbar",
                      label: "Get Quote",
                      value: 1,
                    });
                    const mockEvent = {
                      preventDefault: () => {},
                      stopPropagation: () => {},
                    } as React.MouseEvent;
                    handleNavigation("/#contact", mockEvent);
                  }}
                  className="cursor-pointer"
                >
                  Få offert
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMobileMenuToggle}
                className="lg:hidden w-10 h-10 p-0"
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? "Close menu" : "Open menu"}
                </span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background-elevated border-t border-border"
            >
              <div className="px-4 py-6 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavigation(item.href, e)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-text-primary hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200 touch-manipulation"
                  >
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 border-t border-border">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => {
                      // Track mobile navbar CTA click
                      event({
                        action: "cta_click",
                        category: "Mobile Navbar",
                        label: "Get Quote",
                        value: 1,
                      });
                      const mockEvent = {
                        preventDefault: () => {},
                        stopPropagation: () => {},
                      } as React.MouseEvent;
                      handleNavigation("/#contact", mockEvent);
                    }}
                    className="w-full"
                  >
                    Få offert
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
