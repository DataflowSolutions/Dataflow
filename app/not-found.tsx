"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-muted flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-border rounded-lg shadow-lg p-12">
          {/* 404 Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-white" />
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-2">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Sidan hittades inte
            </h2>
          </div>

          {/* Error Message */}
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha
            flyttats, tagits bort eller så har du skrivit fel URL.
          </p>

          {/* Suggestions */}
          <div className="bg-muted rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-text-primary mb-3 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Förslag:
            </h3>
            <ul className="text-text-secondary space-y-2">
              <li>• Kontrollera att URL:en är korrekt stavad</li>
              <li>• Gå tillbaka till föregående sida</li>
              <li>• Besök vår startsida för att hitta det du letar efter</li>
              <li>• Använd sökfunktionen för att hitta specifikt innehåll</li>
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Till startsidan
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-text-primary hover:bg-muted rounded-lg font-medium transition-colors border border-border cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Gå tillbaka
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold text-text-primary mb-4">
              Populära sidor
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/#services"
                className="px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors"
              >
                Våra tjänster
              </Link>
              <Link
                href="/#about"
                className="px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors"
              >
                Om oss
              </Link>
              <Link
                href="/#blog"
                className="px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors"
              >
                Blogg
              </Link>
              <Link
                href="/#contact"
                className="px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
