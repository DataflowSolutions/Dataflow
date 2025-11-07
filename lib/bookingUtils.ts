/**
 * Utility functions for handling meeting bookings and redirects
 */

import { event } from "./analytics";

/**
 * Opens Calendly booking with proper tracking and redirect handling
 */
export function openCalendlyBooking() {
  // Track the click
  event({
    action: "calendly_open",
    category: "Meeting",
    label: "Calendly Booking",
    value: 1,
  });

  // Open Calendly - användaren kommer automatiskt till /mote-bokat efter bokning
  // Detta konfigureras i Calendly genom att sätta "Confirmation Page" till:
  // https://dataflowsolutions.se/mote-bokat
  window.open(
    "https://calendly.com/admin-dataflowsolutions-mupp/30min",
    "_blank"
  );
}

/**
 * Alternative: Get Calendly base URL
 * Configure redirect in Calendly settings instead of URL parameter
 */
export function getCalendlyUrl(): string {
  // Note: Calendly doesn't support redirect parameter in URL
  // You need to configure this in Calendly settings instead
  // Go to: Event Type Settings > Confirmation Page > Redirect to an external site
  // Set redirect URL to: https://dataflowsolutions.se/mote-bokat
  return "https://calendly.com/admin-dataflowsolutions-mupp/30min";
}
