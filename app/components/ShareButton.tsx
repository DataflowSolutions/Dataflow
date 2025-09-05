"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  Check,
  ExternalLink,
} from "lucide-react";
import Button from "./ui/Button";

interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export default function ShareButton({
  url,
  title,
  description = "",
  className = "",
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text: description,
    url,
  };

  // Native share function for mobile devices
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Error sharing:", error);
        // Fallback to copy URL
        copyToClipboard();
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  // Copy URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  // Social media share URLs
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(
      shareUrl,
      "share-dialog",
      "width=600,height=500,resizable=yes,scrollbars=yes"
    );
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Share Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleNativeShare}
        className="cursor-pointer relative"
      >
        <span className="sr-only">Dela</span>
        <Share2 className="w-4 h-4" />
      </Button>

      {/* Share Options Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-64 bg-background-elevated border border-border rounded-lg shadow-xl overflow-hidden z-50"
            >
              <div className="p-3">
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Dela denna artikel
                </h4>

                <div className="space-y-2">
                  {/* Copy Link */}
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center px-3 py-2 text-left text-sm text-text-primary hover:bg-accent rounded-lg transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 mr-3 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 mr-3" />
                    )}
                    <span className="flex-1">
                      {copied ? "Kopierad!" : "Kopiera länk"}
                    </span>
                  </button>

                  {/* Facebook */}
                  <button
                    onClick={() => openShareWindow(shareUrls.facebook)}
                    className="w-full flex items-center px-3 py-2 text-left text-sm text-text-primary hover:bg-accent rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                    <span className="flex-1">Dela på Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  {/* Twitter */}
                  <button
                    onClick={() => openShareWindow(shareUrls.twitter)}
                    className="w-full flex items-center px-3 py-2 text-left text-sm text-text-primary hover:bg-accent rounded-lg transition-colors"
                  >
                    <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                    <span className="flex-1">Dela på Twitter</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={() => openShareWindow(shareUrls.linkedin)}
                    className="w-full flex items-center px-3 py-2 text-left text-sm text-text-primary hover:bg-accent rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                    <span className="flex-1">Dela på LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
