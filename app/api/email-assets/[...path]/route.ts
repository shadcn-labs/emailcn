const ONE_YEAR = 31_536_000;

const localEmailAssets = new Set([
  "bento-grids/trend-sm.png",
  "bento-grids/trend.png",
]);

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

const getIconLabel = (path: string) => {
  if (/check/i.test(path)) {
    return "✓";
  }
  if (/(?:arrow|chevron)/i.test(path)) {
    return "→";
  }
  if (/star/i.test(path)) {
    return "★";
  }
  if (/edit/i.test(path)) {
    return "✎";
  }
  if (/instagram/i.test(path)) {
    return "IG";
  }
  if (/linkedin/i.test(path)) {
    return "in";
  }
  if (/facebook/i.test(path)) {
    return "f";
  }
  if (/youtube/i.test(path)) {
    return "YT";
  }
  if (/github/i.test(path)) {
    return "GH";
  }
  if (/discord/i.test(path)) {
    return "DC";
  }
  if (/(?:icon-x|social\/.*x)/i.test(path)) {
    return "X";
  }
  if (/visa/i.test(path)) {
    return "VISA";
  }
  if (/mastercard/i.test(path)) {
    return "MC";
  }
  return "•";
};

const getTileLabel = (path: string) => {
  const fileName = path.split("/").at(-1) ?? "emailcn";
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^(?:logo|badge)-/, "")
    .replaceAll("-", " ")
    .replaceAll(/\b\w/g, (character) => character.toUpperCase());
};

const getAvatarLabel = (path: string) => {
  const tokens = getTileLabel(path).split(" ").filter(Boolean);
  const lastToken = tokens.at(-1) ?? "1";
  if (/^\d+$/.test(lastToken)) {
    return `U${lastToken}`;
  }
  return tokens
    .map((token) => token[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const getGeneratedAssetUrl = (path: string) => {
  const seed = `emailcn-${path
    .replace(/\.[^.]+$/, "")
    .replaceAll(/[^a-z0-9]+/gi, "-")
    .replaceAll(/^-|-$/g, "")
    .toLowerCase()}`;
  const hash = hashString(seed);
  const [background, foreground] =
    palettes[hash % palettes.length] ?? palettes[0];
  const [width, height] = getDimensions(path);

  if (/(?:trend|chart)/i.test(path)) {
    const url = new URL(
      `https://fallback.pics/api/v1/chart/line/${width}x${height}.png`
    );
    url.searchParams.set("seed", seed);
    return url;
  }

  if (/(?:pattern|glow|quote)/i.test(path)) {
    const url = new URL(
      `https://fallback.pics/api/v1/ai/${width}x${height}.jpg`
    );
    url.searchParams.set("context", "email design");
    url.searchParams.set("mood", "minimal");
    url.searchParams.set("seed", seed);
    return url;
  }

  if (/(?:avatar|user|headshot)/i.test(path)) {
    const url = new URL(`https://fallback.pics/api/v1/avatar/${width}.png`);
    url.searchParams.set("text", getAvatarLabel(path));
    url.searchParams.set("bgColor", background);
    url.searchParams.set("textColor", foreground);
    url.searchParams.set("seed", seed);
    return url;
  }

  if (/(?:icon|btc|eth)/i.test(path)) {
    const url = new URL(`https://fallback.pics/api/v1/${width}x${height}.png`);
    url.searchParams.set("text", getIconLabel(path));
    url.searchParams.set("bgColor", background);
    url.searchParams.set("textColor", foreground);
    url.searchParams.set("seed", seed);
    return url;
  }

  if (/(?:logo|insignia|badge-app|badge-google)/i.test(path)) {
    const url = new URL(`https://fallback.pics/api/v1/${width}x${height}.png`);
    url.searchParams.set("text", getTileLabel(path));
    url.searchParams.set("bgColor", "FFFFFF");
    url.searchParams.set("textColor", background);
    url.searchParams.set("seed", seed);
    return url;
  }

  return new URL(`https://picsum.photos/seed/${seed}/${width}/${height}.jpg`);
};

interface EmailAssetRouteContext {
  params: Promise<{ path: string[] }>;
}

export const GET = async (
  request: Request,
  context: EmailAssetRouteContext
) => {
  const { path } = await context.params;
  const assetPath = path.join("/");
  if (!assetPath || assetPath.includes("..")) {
    return new Response("Invalid asset path", { status: 400 });
  }

  if (localEmailAssets.has(assetPath)) {
    return Response.redirect(
      new URL(`/email-assets/${assetPath}`, request.url),
      307
    );
  }

  const generatedAsset = await fetch(getGeneratedAssetUrl(assetPath), {
    redirect: "follow",
  });
  if (!generatedAsset.ok || !generatedAsset.body) {
    return new Response("Unable to generate asset", { status: 502 });
  }

  return new Response(generatedAsset.body, {
    headers: {
      "Cache-Control": `public, max-age=${ONE_YEAR}, s-maxage=${ONE_YEAR}, immutable`,
      "Content-Type":
        generatedAsset.headers.get("Content-Type") ?? "image/jpeg",
    },
  });
};
