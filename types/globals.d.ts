// Global type definitions for third-party integrations

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetIdOrAction: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export {};
