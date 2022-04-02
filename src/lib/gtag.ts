// nextjs example https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
export const GA_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', `${GA_TRACKING_ID}`, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  value: number;
  currency?: string;
  send_to?: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, send_to, value, currency }: GTagEvent) => {
  window.gtag('event', action, {
    send_to: send_to,
    value: value,
    currency: currency,
  });
};
