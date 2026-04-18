import { ImageResponse } from "next/og";

const loadAssets = async (): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> => {
  const [
    { base64Font: normal },
    { base64Font: mono },
    { base64Font: semibold },
  ] = await Promise.all([
    import("./geist-regular-otf.json").then((mod) => mod.default || mod),
    import("./geistmono-regular-otf.json").then((mod) => mod.default || mod),
    import("./geist-semibold-otf.json").then((mod) => mod.default || mod),
  ]);

  return [
    {
      data: Buffer.from(normal, "base64"),
      name: "Geist",
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      data: Buffer.from(mono, "base64"),
      name: "Geist Mono",
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      data: Buffer.from(semibold, "base64"),
      name: "Geist",
      style: "normal" as const,
      weight: 600 as const,
    },
  ];
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const fonts = await loadAssets();

  return new ImageResponse(
    <div
      tw="flex h-full w-full bg-black text-white"
      style={{ fontFamily: "Geist Sans" }}
    >
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] bottom-16" />
      <div tw="flex absolute flex-row bottom-24 right-24 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={48}
          height={48}
        >
          <rect width="256" height="256" rx="32" fill="none" />
          <path
            d="M32 72h192v112H32z"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
          />
          <path
            d="M32 72l96 80 96-80"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
        <div
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
          style={{
            fontSize: title && title.length > 20 ? 64 : 80,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            textWrap: "balance",
          }}
        >
          {title}
        </div>
        <div
          tw="text-[40px] leading-[1.5] flex-grow-1 text-stone-400"
          style={{
            fontWeight: 500,
            textWrap: "balance",
          }}
        >
          {description}
        </div>
      </div>
    </div>,
    {
      fonts,
      height: 628,
      width: 1200,
    }
  );
};
