"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";
import Button from "./ui/Button";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_PREFERENCES_KEY = "cookie-preferences";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        const prefs = JSON.parse(savedPreferences);
        setPreferences(prefs);
        // Update consent immediately for existing preferences
        updateGtagConsent(prefs);
      }
    }
  }, []);

  // Enable/disable Google Analytics based on consent
  useEffect(() => {
    updateGtagConsent(preferences);
  }, [preferences]);

  const updateGtagConsent = (prefs: CookiePreferences) => {
    type GtagWindow = {
      gtag?: (
        command: string,
        action: string,
        parameters: Record<string, string>
      ) => void;
    };

    if (
      typeof window !== "undefined" &&
      (window as unknown as GtagWindow).gtag
    ) {
      (window as unknown as GtagWindow).gtag!("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
      });
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(newPreferences);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(newPreferences);
  };

  const handleSaveSettings = () => {
    saveConsent(preferences);
    setShowSettings(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);

    // Trigger page reload to apply analytics consent changes
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handlePreferenceChange = (
    key: keyof CookiePreferences,
    value: boolean
  ) => {
    if (key === "necessary") return; // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background-elevated border-t border-border shadow-2xl"
      >
        <div className="max-w-7xl mx-auto p-3 sm:p-4 lg:p-6">
          {!showSettings ? (
            // Main banner
            <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center">
              <div className="flex items-start gap-2 sm:gap-3 flex-1">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-1 sm:mb-2">
                    Vi använder cookies
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Vi använder nödvändiga cookies för att webbplatsen ska
                    fungera. Vi använder också analytics-cookies för att förstå
                    hur du använder vår webbplats så att vi kan förbättra den.
                    Du kan när som helst ändra dina inställningar.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-2 flex-row mx-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  leftIcon={<Settings className="w-3 h-3 sm:w-4 sm:h-4" />}
                  className="whitespace-nowrap cursor-pointer text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                >
                  Anpassa
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRejectAll}
                  className="whitespace-nowrap cursor-pointer text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                >
                  Avvisa alla
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="whitespace-nowrap cursor-pointer text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                >
                  Acceptera alla
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                  Cookie-inställningar
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1.5 sm:p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer"
                  aria-label="Stäng inställningar"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Necessary cookies */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1 text-sm sm:text-base">
                      Nödvändiga cookies
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      Dessa cookies är nödvändiga för att webbplatsen ska
                      fungera och kan inte stängas av.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                    <span className="text-xs sm:text-sm text-text-secondary">
                      Alltid på
                    </span>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1 text-sm sm:text-base">
                      Analytics-cookies
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      Hjälper oss förstå hur besökare använder webbplatsen genom
                      att samla in anonyma data.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer self-start">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        handlePreferenceChange("analytics", e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 sm:w-11 sm:h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Marketing cookies */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1 text-sm sm:text-base">
                      Marknadsföring-cookies
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      Används för att visa relevanta annonser och mäta
                      effektiviteten av våra marknadsföringskampanjer.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer self-start">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        handlePreferenceChange("marketing", e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 sm:w-11 sm:h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 mt-6 sm:mt-8">
                <Button
                  variant="gradient"
                  size="md"
                  onClick={handleSaveSettings}
                  className="w-full cursor-pointer text-sm sm:text-base"
                >
                  Spara inställningar
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  onClick={handleRejectAll}
                  className="w-full cursor-pointer text-sm sm:text-base"
                >
                  Avvisa alla
                </Button>
              </div>

              <p className="text-xs text-text-secondary mt-3 sm:mt-4 text-center leading-relaxed">
                Du kan ändra dessa inställningar när som helst genom att klicka
                på &quot;Cookie-inställningar&quot; i sidfoten.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
