export const FALLBACK_SITE_ORIGIN = "https://emailcn.dev" as const;

const getBaseUrl = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return process.env.SITE_URL ?? FALLBACK_SITE_ORIGIN;
};

const baseUrl = getBaseUrl();

export const SITE = {
  AUTHOR: {
    NAME: "Aniket Pawar",
    TWITTER: "@alaymanguy",
  },
  DESCRIPTION: {
    LONG: "A collection of beautifully designed, accessible, and customizable email components. Built on React Email. Works with shadcn/ui.",
    SHORT: "Beautiful emails, made simple",
  },
  KEYWORDS: [
    "react-email",
    "shadcn",
    "email components",
    "transactional email",
    "email templates",
    "next.js",
    "react",
    "component registry",
    "npx shadcn add",
  ] as const,
  NAME: "emailcn",
  OG_IMAGE: `${baseUrl}/og.png`,
  REGISTRY: "@emailcn",
  URL: baseUrl,
};

export const META_THEME_COLORS = {
  dark: "#0a0a0a",
  light: "#ffffff",
};

export const UTM_PARAMS = {
  utm_source: new URL(baseUrl).hostname,
};
