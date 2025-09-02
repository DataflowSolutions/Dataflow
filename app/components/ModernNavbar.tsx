"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useRouter, usePathname } from "next/navigation";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Hem", href: "#home" },
  {
    name: "Tjänster",
    href: "#services",
    submenu: [
      { name: "Webbutveckling", href: "#webdev" },
      { name: "SaaS-utveckling", href: "#saas" },
      { name: "Hosting & Underhåll", href: "#hosting" },
      { name: "Konsultation", href: "#consulting" },
    ],
  },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Om oss", href: "#about" },
  { name: "Blogg", href: "/blog" },
  { name: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Custom navigation handler for homepage sections
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    // If it's the blog link, navigate directly
    if (href === "/blog") {
      router.push("/blog");
      setIsMobileMenuOpen(false);
      return;
    }

    // If it's a section link (starts with #)
    if (href.startsWith("#")) {
      const sectionId = href.substring(1); // Remove the #

      // If we're not on the homepage, navigate to homepage first
      if (pathname !== "/") {
        // Navigate to homepage and then scroll to section
        router.push(`/${href}`);
        setIsMobileMenuOpen(false);
        return;
      }

      // If we're already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setIsMobileMenuOpen(false);
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
              <a
                href="#home"
                onClick={(e) => handleNavigation("#home", e)}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-bold gradient-text">
                  Dataflow Solutions
                </span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigation(item.href, e)}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-lg",
                      "text-text-primary hover:text-primary transition-colors duration-200",
                      "hover:bg-accent/50"
                    )}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-background-elevated border border-border rounded-lg shadow-xl overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleNavigation(subItem.href, e)}
                              className="block px-4 py-3 text-sm text-text-primary hover:bg-accent hover:text-primary transition-colors duration-150"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
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
              >
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
                    // Create a mock event for navigation
                    const mockEvent = {
                      preventDefault: () => {},
                    } as React.MouseEvent;
                    handleNavigation("#contact", mockEvent);
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
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavigation(item.href, e)}
                      className="block px-4 py-3 text-base font-medium text-text-primary hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleNavigation(subItem.href, e)}
                            className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-accent rounded-lg transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => {
                      const mockEvent = {
                        preventDefault: () => {},
                      } as React.MouseEvent;
                      handleNavigation("#contact", mockEvent);
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
