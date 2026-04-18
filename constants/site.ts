export const FALLBACK_SITE_ORIGIN = "https://emailcn.dev" as const;

const getBaseUrl = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:4000";
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return process.env.SITE_URL ?? FALLBACK_SITE_ORIGIN;
};

export const SITE = {
  AUTHOR: {
    NAME: "Aniket Pawar",
    TWITTER: "@alaymanguy",
  },
  DESCRIPTION: {
    LONG: "A shadcn/ui-compatible registry of React Email components and blocks. Beautiful, accessible, and customizable email templates for any brand.",
    SHORT: "Beautiful React Email components, made simple",
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
  OG_IMAGE: `${getBaseUrl()}/og.png`,
  REGISTRY: "emailcn",
  URL: getBaseUrl(),
};

export const META_THEME_COLORS = {
  dark: "#0a0a0a",
  light: "#ffffff",
};
