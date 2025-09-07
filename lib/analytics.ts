// Google Analytics configuration
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

// Google Analytics tracking functions
type GtagWindow = {
  gtag?: (
    command: string,
    targetId: string,
    config?: Record<string, unknown>
  ) => void;
};

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as unknown as GtagWindow).gtag) {
    (window as unknown as GtagWindow).gtag!("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && (window as unknown as GtagWindow).gtag) {
    (window as unknown as GtagWindow).gtag!("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Initialize Google Analytics with consent mode
export const initGA = () => {
  if (typeof window !== "undefined") {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      
      // Initialize consent mode
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'wait_for_update': 500,
      });
      
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);
  }
};
