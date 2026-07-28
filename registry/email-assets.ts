const ASSET_ORIGIN = "https://www.emailcn.run";
const ICONS8_ORIGIN = "https://img.icons8.com";
const UNSPLASH_ORIGIN = "https://images.unsplash.com";

const portraitIds = [
  "photo-1500648767791-00dcc994a43e",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1494790108377-be9c29b29330",
  "photo-1438761681033-6461ffad8d80",
  "photo-1534528741775-53994a69daeb",
  "photo-1506794778202-cad84cf45f1c",
] as const;

const productIds = [
  "photo-1521572163474-6864f9cf17ab",
  "photo-1503341504253-dff4815485f1",
  "photo-1576566588028-4147f3842f27",
  "photo-1562157873-818bc0726f68",
] as const;

const socialIconSlugs = {
  discord: "discord-logo",
  facebook: "facebook-new",
  github: "github",
  instagram: "instagram-new",
  linkedin: "linkedin",
  slack: "slack-new",
  x: "twitterx--v1",
  youtube: "youtube-play",
} as const;

const brandIconSlugs = [
  [/(?:btc|bitcoin)/i, "bitcoin--v1"],
  [/(?:eth|ethereum)/i, "ethereum"],
  [/visa/i, "visa"],
  [/mastercard/i, "mastercard-logo"],
  [/apple-pay/i, "apple-pay"],
  [/google-pay/i, "google-pay"],
  [/klarna/i, "klarna"],
  [/stripe/i, "stripe"],
  [/fedex/i, "fedex"],
  [/north-face/i, "the-north-face"],
] as const;

const hashString = (value: string) => {
  let hash = 7;

  for (const character of value) {
    hash = (hash * 31 + (character.codePointAt(0) ?? 0)) % 2_147_483_647;
  }

  return hash;
};

const getDimensions = (path: string) => {
  if (/teams\/member-\d+-lg/i.test(path)) {
    return [800, 560] as const;
  }
  if (/teams\/member-\d+/i.test(path)) {
    return [600, 600] as const;
  }
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

const getSeed = (path: string) =>
  `emailcn-${path
    .replace(/\.[^.]+$/, "")
    .replaceAll(/[^a-z0-9]+/gi, "-")
    .replaceAll(/^-|-$/g, "")
    .toLowerCase()}`;

const getIndexedAsset = (path: string, assets: readonly string[]) => {
  const explicitIndex = path.match(
    /(?:member|avatar|product-list|shopping-cart)-(\d+)/i
  )?.[1];
  const index = explicitIndex
    ? Number.parseInt(explicitIndex, 10) - 1
    : hashString(path);

  return assets[((index % assets.length) + assets.length) % assets.length];
};

const getUnsplashAsset = (id: string, width: number, height: number) =>
  `${UNSPLASH_ORIGIN}/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

const getIcons8Asset = (
  slug: string,
  {
    color,
    style = "ios-filled",
  }: {
    color?: string;
    style?: "color" | "ios" | "ios-filled";
  } = {}
) =>
  color
    ? `${ICONS8_ORIGIN}/${style}/50/${color}/${slug}.png`
    : `${ICONS8_ORIGIN}/${style}/50/${slug}.png`;

const getStoreBadgeAsset = (path: string) => {
  if (/badge-app-store/i.test(path)) {
    return "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
  }
  if (/badge-google-play/i.test(path)) {
    return "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";
  }
};

const getSocialIconAsset = (path: string) => {
  const isLight = /(?:-light|check-white)/i.test(path);
  const foreground = isLight ? "FFFFFF" : "111827";

  for (const [name, slug] of Object.entries(socialIconSlugs)) {
    if (new RegExp(`(?:^|[-/])${name}(?:[-.]|$)`, "i").test(path)) {
      return getIcons8Asset(slug, { color: foreground });
    }
  }
};

const getUtilityIconAsset = (path: string) => {
  const isLight = /(?:-light|check-white)/i.test(path);
  const foreground = isLight ? "FFFFFF" : "111827";

  if (/star-half/i.test(path)) {
    return getIcons8Asset("star-half-empty", { color: "374151" });
  }
  if (/star-solid/i.test(path)) {
    return getIcons8Asset("star--v1", { color: "374151" });
  }
  if (/edit/i.test(path)) {
    return getIcons8Asset("edit--v1", {
      color: "4F46E5",
      style: "ios",
    });
  }
  if (/arrow-right/i.test(path)) {
    return getIcons8Asset("long-arrow-right--v1", {
      color: "4F46E5",
      style: "ios",
    });
  }
  if (/chevron-right/i.test(path)) {
    return getIcons8Asset("chevron-right", {
      color: "4F46E5",
      style: "ios",
    });
  }
  if (/check/i.test(path)) {
    return getIcons8Asset("checkmark--v1", { color: foreground });
  }
};

const getBrandIconAsset = (path: string) => {
  const match = brandIconSlugs.find(([pattern]) => pattern.test(path));

  return match
    ? getIcons8Asset(match[1], {
        style: "color",
      })
    : undefined;
};

const getWordmarkAsset = (path: string) => {
  const isLight = /light/i.test(path);
  const background = isLight ? "030712" : "FFFFFF";
  const foreground = isLight ? "FFFFFF" : "111827";

  return `https://placehold.co/320x96/${background}/${foreground}.png?text=EMAILCN`;
};

const getIconAsset = (path: string) =>
  getStoreBadgeAsset(path) ??
  getSocialIconAsset(path) ??
  getUtilityIconAsset(path) ??
  getBrandIconAsset(path);

export const emailAsset = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");

  if (
    normalizedPath === "bento-grids/trend.png" ||
    normalizedPath === "bento-grids/trend-sm.png"
  ) {
    return `${ASSET_ORIGIN}/email-assets/${normalizedPath}`;
  }

  const iconAsset = getIconAsset(normalizedPath);
  if (iconAsset) {
    return iconAsset;
  }

  const seed = getSeed(normalizedPath);
  const [width, height] = getDimensions(normalizedPath);

  if (/teams\/hero/i.test(normalizedPath)) {
    return getUnsplashAsset("photo-1521737711867-e3b97375f902", width, height);
  }

  if (/(?:avatar|user|headshot|member|team)/i.test(normalizedPath)) {
    return getUnsplashAsset(
      getIndexedAsset(normalizedPath, portraitIds),
      width,
      height
    );
  }

  if (/products\/shoe/i.test(normalizedPath)) {
    return getUnsplashAsset("photo-1542291026-7eec264c27ff", width, height);
  }

  if (/products\/phone/i.test(normalizedPath)) {
    return getUnsplashAsset("photo-1511707171634-5f897ff02aa9", width, height);
  }

  if (
    /(?:product-detail|product-lists|products\/product|shopping-cart)/i.test(
      normalizedPath
    )
  ) {
    return getUnsplashAsset(
      getIndexedAsset(normalizedPath, productIds),
      width,
      height
    );
  }

  if (/(?:trend|chart)/i.test(normalizedPath)) {
    return `${ASSET_ORIGIN}/email-assets/bento-grids/trend.png`;
  }

  if (/(?:emailcn|maizzle|logo|insignia)/i.test(normalizedPath)) {
    return getWordmarkAsset(normalizedPath);
  }

  return `https://picsum.photos/seed/${encodeURIComponent(
    seed
  )}/${width}/${height}.jpg`;
};
