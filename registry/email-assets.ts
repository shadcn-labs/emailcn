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

type Dimensions = readonly [width: number, height: number];

const dimensionRules = [
  [/^bento-grids\/1-bento-(?:1|4)\./i, [336, 272]],
  [/^bento-grids\/1-bento-(?:2|3)\./i, [720, 272]],
  [/^bento-grids\/2-bento-1\./i, [336, 232]],
  [/^bento-grids\/2-bento-(?:2|7)\./i, [720, 352]],
  [/^bento-grids\/2-bento-3\./i, [720, 344]],
  [/^bento-grids\/2-bento-4\./i, [336, 224]],
  [/^bento-grids\/2-bento-(?:5|6)\./i, [336, 408]],
  [/^bento-grids\/3-bento-lg-\d-pad\./i, [304, 576]],
  [/^bento-grids\/3-bento-lg-\d\./i, [336, 576]],
  [/^bento-grids\/3-bento-sm-\d\./i, [336, 336]],
  [/^bento-grids\/4-bento-lg-(?:1|2)\./i, [496, 440]],
  [/^bento-grids\/4-bento-lg-3\./i, [688, 242]],
  [/^bento-grids\/4-bento-lg-4\./i, [656, 242]],
  [/^bento-grids\/4-bento-sm-[1-4]\./i, [456, 363]],
  [/^bento-grids\/4-bento-sm-5\./i, [408, 363]],
  [/^bento-grids\/bento-1\./i, [720, 376]],
  [/^bento-grids\/bento-[2-5]\./i, [528, 376]],
  [/^category-previews\/landscape-/i, [508, 376]],
  [/^category-previews\/portrait-/i, [376, 377]],
  [/^coupons\/(?:bg-image-[1-3]|pattern)\./i, [800, 500]],
  [/^coupons\/bg-image-[4-6]\./i, [1200, 1200]],
  [/^cta\/cta-bg-1\./i, [1200, 772]],
  [/^cta\/cta-bg-2\./i, [1200, 760]],
  [/^cta\/cta-bg-3\./i, [1104, 696]],
  [/^cta\/cta-bg-glow\./i, [1200, 840]],
  [/^cta\/cta-collage-(?:1|4)\./i, [248, 456]],
  [/^cta\/(?:cta-collage-(?:2|3)|cta-outwear-\d)\./i, [280, 456]],
  [/^cta\/cta-split-avatars-\d\./i, [280, 338]],
  [/^cta\/cta-with-image-\d\./i, [944, 606]],
  [/^cta\/strip-cut-\d\./i, [232, 163]],
  [/^cta\/strip-\d\./i, [232, 232]],
  [/^feature\/feature-1\./i, [564, 564]],
  [/^feature\/feature-2-/i, [432, 432]],
  [/^feature\/feature-3-lg-/i, [646, 818]],
  [/^feature\/feature-3-sm-/i, [615, 615]],
  [/^feature\/stripes-bg-(?:1|2)\./i, [1035, 1227]],
  [/^feature\/stripes-bg-3\./i, [449, 1227]],
  [/^feature\/stripes-bg-(?:4|5)\./i, [449, 840]],
  [/^footers\/bg-image-(?:1|2)\./i, [1200, 881]],
  [/^footers\/bg-image-3\./i, [1104, 881]],
  [/^hero\/aligned-overlay-bg-\d\./i, [702, 1200]],
  [/^hero\/block-overlay-bg\./i, [2000, 3000]],
  [/^hero\/block-with-bleed-bg\./i, [2000, 2922]],
  [/^hero\/mosaic-\d\./i, [240, 240]],
  [/^hero\/overlapped-content-bg-(?:1|3)\./i, [1200, 1258]],
  [/^hero\/overlapped-content-bg-2\./i, [1200, 1374]],
  [/^hero\/overlapped-content-bg-4\./i, [1200, 1410]],
  [/^hero\/overlapped-image-\d-bg\./i, [2000, 3000]],
  [/^hero\/overlapped-image-bg\./i, [2000, 2995]],
  [/^hero\/overlapped-image-2\./i, [911, 610]],
  [/^hero\/overlapped-image-3\./i, [911, 606]],
  [/^hero\/overlapped-image\./i, [911, 657]],
  [/^hero\/(?:overlay-gradient-bg|overlayed-split-bg)\./i, [2000, 3000]],
  [/^hero\/overlayed\/hero-overlayed-bg\./i, [1200, 1490]],
  [/^hero\/split-contained-bg\./i, [488, 1104]],
  [/^hero\/split-contained-landscape-/i, [488, 376]],
  [/^hero\/split-contained-portrait-/i, [488, 680]],
  [/^hero\/split-contained-square-/i, [488, 550]],
  [/^hero\/split-full-bleed-bg\./i, [2000, 2666]],
  [/^hero\/split-slanted-bg\./i, [2002, 2534]],
  [/^image-grids\/2-col-landscape/i, [528, 372]],
  [/^image-grids\/2-col-portrait/i, [528, 792]],
  [/^image-grids\/2-col-square/i, [528, 528]],
  [/^image-grids\/3-col-masonry-stack/i, [503, 558]],
  [/^image-grids\/3-col-masonry/i, [720, 792]],
  [/^image-grids\/3-col-portrait/i, [504, 753]],
  [/^image-grids\/3-col-square/i, [504, 504]],
  [/^image-grids\/full-width\./i, [1104, 720]],
  [/^image-grids\/full-width-\d\./i, [1104, 792]],
  [/^product-detail\/stacked-\d\./i, [508, 358]],
  [/^product-detail\/rating-below\./i, [508, 508]],
  [/^product-detail\/single-landscape\./i, [1104, 776]],
  [/^product-detail\/single-portrait\./i, [508, 764]],
  [/^product-detail\/single-portrait-bleed\./i, [532, 764]],
  [/^product-detail\/two-images-\d\./i, [528, 776]],
  [/^product-detail\/three-images-1\./i, [528, 776]],
  [/^product-detail\/three-images-(?:2|3)\./i, [528, 364]],
  [/^product-detail\/four-images-(?:1|4)\./i, [528, 488]],
  [/^product-detail\/four-images-(?:2|3)\./i, [528, 240]],
  [/^stats\/overlay-1\./i, [1572, 2268]],
  [/^stats\/overlay-2\./i, [1572, 2716]],
  [/^stats\/overlay-(?:3|4)\./i, [1572, 3256]],
  [/^stats\/single-stat\./i, [1035, 1032]],
  [/^teams\/hero\./i, [1104, 776]],
  [/^teams\/member-\d+-lg\./i, [528, 376]],
  [/^teams\/member-\d+-md\./i, [328, 328]],
  [/^teams\/member-\d+\./i, [256, 256]],
  [/^timelines\/cards\./i, [1072, 600]],
  [/^testimonials\/quote\./i, [72, 62]],
  [/^testimonials\/user-\d+\./i, [256, 256]],
  [/^feature\/logo-north-face\./i, [278, 128]],
  [/^feature\/logo-stripes-1\./i, [390, 84]],
  [/^feature\/logo-stripes-2\./i, [423, 72]],
  [/^(?:reviews|testimonials)\/logo-accentic(?:-light)?\./i, [423, 72]],
  [/^reviews\/logo-amada\./i, [411, 84]],
  [/^(?:reviews|testimonials)\/logo-monarch\./i, [290, 64]],
  [/^logos\/logo-apple-pay\./i, [180, 72]],
  [/^logos\/logo-google-pay\./i, [177, 72]],
  [/^logos\/logo-klarna\./i, [210, 48]],
  [/^logos\/logo-mastercard\./i, [120, 72]],
  [/^logos\/logo-mock-1\./i, [334, 72]],
  [/^logos\/logo-mock-2\./i, [213, 36]],
  [/^logos\/logo-mock-3\./i, [234, 48]],
  [/^logos\/logo-stripe\./i, [171, 72]],
  [/^logos\/logo-visa\./i, [150, 48]],
  [/^order-summary\/logo-fedex\./i, [156, 48]],
  [/^emailcn-logo(?:-light)?\./i, [331, 48]],
  [/^emailcn-insignia-mono(?:-light)?\./i, [131, 96]],
  [/^maizzle-insignia(?:-light)?-lg\./i, [395, 289]],
  [/^maizzle-insignia(?:-light)?\./i, [176, 129]],
] satisfies readonly (readonly [RegExp, Dimensions])[];

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
] as const;

const hashString = (value: string) => {
  let hash = 7;

  for (const character of value) {
    hash = (hash * 31 + (character.codePointAt(0) ?? 0)) % 2_147_483_647;
  }

  return hash;
};

const getDimensions = (path: string) => {
  const matchedRule = dimensionRules.find(([pattern]) => pattern.test(path));
  if (matchedRule) {
    return matchedRule[1];
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

const getLabel = (path: string) => {
  if (/insignia/i.test(path)) {
    return "EC";
  }
  if (/(?:emailcn|maizzle)/i.test(path)) {
    return "emailcn";
  }

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
    const color = /(?:brand|indigo)/i.test(path) ? "4F46E5" : "FFFFFF";

    return getIcons8Asset("long-arrow-right--v1", {
      color,
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

const getWordmarkAsset = (path: string, [width, height]: Dimensions) => {
  const isLight = /light/i.test(path);
  const background = isLight ? "030712" : "FFFFFF";
  const foreground = isLight ? "FFFFFF" : "111827";

  return `https://placehold.co/${width}x${height}/${background}/${foreground}.png?text=${encodeURIComponent(
    getLabel(path)
  )}`;
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
    /(?:category-previews|product-detail|product-lists|products\/product|shopping-cart)/i.test(
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
    return getWordmarkAsset(normalizedPath, [width, height]);
  }

  return `https://picsum.photos/seed/${encodeURIComponent(
    seed
  )}/${width}/${height}.jpg`;
};
