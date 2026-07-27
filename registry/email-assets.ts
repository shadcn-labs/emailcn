const ASSET_ORIGIN = "https://www.emailcn.run";

const palettes = [
  ["4F46E5", "FFFFFF"],
  ["0F766E", "FFFFFF"],
  ["C2410C", "FFFFFF"],
  ["7E22CE", "FFFFFF"],
  ["0369A1", "FFFFFF"],
  ["BE123C", "FFFFFF"],
] as const;

const hashString = (value: string) => {
  let hash = 7;

  for (const character of value) {
    hash = (hash * 31 + (character.codePointAt(0) ?? 0)) % 2_147_483_647;
  }

  return hash;
};

const getDimensions = (path: string) => {
  if (/(?:avatar|user|headshot)/i.test(path)) {
    return [160, 160] as const;
  }
  if (/(?:logo|insignia)/i.test(path)) {
    return [320, 96] as const;
  }
  if (/(?:badge-app|badge-google)/i.test(path)) {
    return [260, 80] as const;
  }
  if (/(?:icon|btc|eth)/i.test(path)) {
    return [64, 64] as const;
  }
  if (/(?:portrait|member|team)/i.test(path)) {
    return [600, 800] as const;
  }
  if (/(?:square|product|shopping-cart)/i.test(path)) {
    return [700, 700] as const;
  }
  if (/(?:hero|footer|background|bg-|overlay|full-width)/i.test(path)) {
    return [1200, 700] as const;
  }
  if (/(?:strip|landscape|bento|category-preview)/i.test(path)) {
    return [800, 520] as const;
  }

  return [800, 600] as const;
};

const getLabel = (path: string) => {
  const fileName = path.split("/").at(-1) ?? "emailcn";

  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^(?:logo|badge|icon)-/, "")
    .replaceAll("-", " ")
    .replaceAll(/\b\w/g, (character) => character.toUpperCase());
};

const getSeed = (path: string) =>
  `emailcn-${path
    .replace(/\.[^.]+$/, "")
    .replaceAll(/[^a-z0-9]+/gi, "-")
    .replaceAll(/^-|-$/g, "")
    .toLowerCase()}`;

export const emailAsset = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");

  if (
    normalizedPath === "bento-grids/trend.png" ||
    normalizedPath === "bento-grids/trend-sm.png"
  ) {
    return `${ASSET_ORIGIN}/email-assets/${normalizedPath}`;
  }

  const seed = getSeed(normalizedPath);
  const hash = hashString(seed);
  const [background, foreground] =
    palettes[hash % palettes.length] ?? palettes[0];
  const [width, height] = getDimensions(normalizedPath);

  if (/(?:avatar|user|headshot|member|team)/i.test(normalizedPath)) {
    return `https://api.dicebear.com/9.x/lorelei/png?seed=${encodeURIComponent(
      seed
    )}&size=${Math.max(width, height)}&backgroundColor=${background.toLowerCase()}`;
  }

  if (/(?:trend|chart)/i.test(normalizedPath)) {
    return `${ASSET_ORIGIN}/email-assets/bento-grids/trend.png`;
  }

  if (
    /(?:icon|btc|eth|logo|insignia|badge-app|badge-google)/i.test(
      normalizedPath
    )
  ) {
    return `https://placehold.co/${width}x${height}/${background}/${foreground}.png?text=${encodeURIComponent(
      getLabel(normalizedPath)
    )}`;
  }

  return `https://picsum.photos/seed/${encodeURIComponent(
    seed
  )}/${width}/${height}.jpg`;
};
