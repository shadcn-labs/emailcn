export const GITHUB = {
  branch: "main",
  repo: "emailcn",
  user: "Aniket-508",
} as const;

const GITHUB_URL = `https://github.com/${GITHUB.user}/${GITHUB.repo}`;

export const LINK = {
  GITHUB: GITHUB_URL,
  LICENSE: `${GITHUB_URL}/blob/${GITHUB.branch}/LICENSE`,
  PORTFOLIO: "https://aniketpawar.com",
  ROADMAP: "https://github.com/users/Aniket-508/projects/1",
  SPONSOR: `https://github.com/sponsors/${GITHUB.user}`,
  TERMCN:
    "https://www.termcn.dev?ref=emailcn&utm_source=emailcn&utm_medium=website&utm_campaign=docs_sidebar",
  X: "https://x.com/alaymanguy",
} as const;
