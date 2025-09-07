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
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {!showSettings ? (
            // Main banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Vi använder cookies
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Vi använder nödvändiga cookies för att webbplatsen ska
                    fungera. Vi använder också analytics-cookies för att förstå
                    hur du använder vår webbplats så att vi kan förbättra den.
                    Du kan när som helst ändra dina inställningar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  leftIcon={<Settings className="w-4 h-4" />}
                  className="whitespace-nowrap cursor-pointer"
                >
                  Anpassa
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRejectAll}
                  className="whitespace-nowrap cursor-pointer"
                >
                  Avvisa alla
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="whitespace-nowrap cursor-pointer"
                >
                  Acceptera alla
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-text-primary">
                  Cookie-inställningar
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer"
                  aria-label="Stäng inställningar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1">
                      Nödvändiga cookies
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Dessa cookies är nödvändiga för att webbplatsen ska
                      fungera och kan inte stängas av.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm text-text-secondary">
                      Alltid på
                    </span>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1">
                      Analytics-cookies
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Hjälper oss förstå hur besökare använder webbplatsen genom
                      att samla in anonyma data.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        handlePreferenceChange("analytics", e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Marketing cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1">
                      Marknadsföring-cookies
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Används för att visa relevanta annonser och mäta
                      effektiviteten av våra marknadsföringskampanjer.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        handlePreferenceChange("marketing", e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  variant="ghost"
                  size="md"
                  onClick={handleRejectAll}
                  className="flex-1 cursor-pointer"
                >
                  Avvisa alla
                </Button>
                <Button
                  variant="gradient"
                  size="md"
                  onClick={handleSaveSettings}
                  className="flex-1 cursor-pointer"
                >
                  Spara inställningar
                </Button>
              </div>

              <p className="text-xs text-text-secondary mt-4 text-center">
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
