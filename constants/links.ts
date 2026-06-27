export const GITHUB = {
  branch: "main",
  org: "shadcn-labs",
  repo: "emailcn",
  user: "Aniket-508",
} as const;

const GITHUB_URL = `https://github.com/${GITHUB.org}/${GITHUB.repo}`;

export const LINK = {
  DISCORD: "https://discord.gg/N6G36KhYK4",
  EMAILCN: "https://emailcn.vercel.app",
  GITHUB: GITHUB_URL,
  LICENSE: `${GITHUB_URL}/blob/${GITHUB.branch}/LICENSE`,
  PORTFOLIO: "https://aniketpawar.com",
  SPONSOR: `https://github.com/sponsors/${GITHUB.user}`,
  X: "https://x.com/alaymanguy",
  X_SHADCN_LABS: "https://x.com/shadcnlabs",
} as const;
