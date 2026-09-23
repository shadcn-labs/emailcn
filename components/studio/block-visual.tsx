import type { CanvasBlock } from "@/types/studio";

export const BlockVisual = ({ block }: { block: CanvasBlock }) => {
  const { slug } = block;
  const isHeader = block.family === "Headers";
  const isHero = block.family === "Hero";
  const isFooter = block.family === "Footers";
  const isCta = block.family === "Call to action";
  const isContent = block.family === "Content";
  const isCommerce = block.category === "Ecommerce";
  const isImages =
    block.family === "Images" ||
    block.family === "Bento grids" ||
    block.family === "Features";
  const isStats = block.family === "Stats" || block.family === "Pricing";
  const isElement = block.category === "Elements";

  if (isHeader) {
    return (
      <div className="flex h-full min-h-[112px] items-center justify-between px-12">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-black tracking-tight text-white">
            CN
          </span>
          <span className="text-sm font-semibold tracking-tight">EmailCN</span>
        </div>
        {slug.includes("menu") ? (
          <div className="flex gap-5 text-[10px] font-medium text-neutral-500">
            <span>Stories</span>
            <span>Product</span>
            <span>About</span>
          </div>
        ) : (
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[9px] font-medium">
            View online
          </span>
        )}
      </div>
    );
  }

  if (isHero) {
    return (
      <div className="grid h-full min-h-[360px] grid-cols-[1.05fr_.95fr] overflow-hidden bg-[#eee9dc]">
        <div className="flex flex-col justify-center px-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            The field notes · 08
          </span>
          <h2 className="mt-5 max-w-[260px] text-[40px] font-semibold leading-[0.98] tracking-[-0.055em] text-neutral-950">
            Make room for remarkable.
          </h2>
          <p className="mt-5 max-w-[245px] text-[12px] leading-5 text-neutral-600">
            A practical guide to clearer ideas, better work, and the details
            people remember.
          </p>
          <span className="mt-7 w-fit rounded-full bg-neutral-950 px-5 py-2.5 text-[10px] font-semibold text-white">
            Read the issue
          </span>
        </div>
        <div className="relative overflow-hidden bg-[#c6d5c8]">
          <span className="absolute -right-14 top-9 size-56 rounded-full bg-[#f5b04a]" />
          <span className="absolute -bottom-20 -left-14 size-72 rounded-full bg-[#516d61]" />
          <span className="absolute bottom-16 right-7 h-44 w-24 rotate-12 rounded-t-full bg-[#1c2924]" />
          <span className="absolute bottom-14 right-20 h-36 w-14 -rotate-12 rounded-t-full bg-[#30473d]" />
          <span className="absolute right-10 top-8 text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-900/55">
            Edition 2026
          </span>
        </div>
      </div>
    );
  }

  if (isContent) {
    return (
      <div className="grid h-full min-h-[260px] grid-cols-[.78fr_1.22fr] gap-12 px-12 py-12">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
            In this issue
          </span>
          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
            The quiet advantage of editing.
          </h3>
        </div>
        <div className="space-y-4 text-[12px] leading-5 text-neutral-600">
          <p>
            Great work rarely arrives fully formed. It gets clearer each time
            you remove what does not serve the idea.
          </p>
          <p>
            This week, we collected four ways to make that process lighter,
            faster, and more deliberate.
          </p>
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold text-neutral-950">
            Continue reading <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    );
  }

  if (isCta) {
    return (
      <div className="min-h-[250px] p-6">
        <div className="flex min-h-[202px] items-center justify-between rounded-[2px] bg-neutral-950 px-12 text-white">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
              One useful email, every Friday
            </span>
            <h3 className="mt-3 max-w-[300px] text-3xl font-medium leading-tight tracking-[-0.04em]">
              Bring better ideas into the next room.
            </h3>
          </div>
          <span className="rounded-full bg-white px-5 py-2.5 text-[10px] font-semibold text-neutral-950">
            Join the list
          </span>
        </div>
      </div>
    );
  }

  if (isFooter) {
    return (
      <div className="flex min-h-[190px] flex-col justify-between bg-[#f5f5f3] px-12 py-10">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-semibold">EmailCN</span>
            <p className="mt-2 max-w-[220px] text-[10px] leading-4 text-neutral-500">
              Beautiful, production-ready emails built with the tools your team
              already uses.
            </p>
          </div>
          <div className="flex gap-6 text-[10px] font-medium text-neutral-500">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Website</span>
          </div>
        </div>
        <div className="flex justify-between border-t border-neutral-200 pt-4 text-[9px] text-neutral-400">
          <span>© 2026 EmailCN</span>
          <span>Unsubscribe · Preferences</span>
        </div>
      </div>
    );
  }

  if (isCommerce) {
    return (
      <div className="min-h-[320px] px-12 py-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              New collection
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Designed for every day.
            </h3>
          </div>
          <span className="text-[10px] font-semibold">Shop all →</span>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3">
          {["#e9ddd0", "#c9d4c6", "#d7d1e1"].map((color, index) => (
            <div key={color}>
              <div
                className="flex h-32 items-center justify-center rounded-sm"
                style={{ backgroundColor: color }}
              >
                <span className="size-16 rounded-full border-[14px] border-white/45" />
              </div>
              <p className="mt-2 text-[10px] font-medium">Form {index + 1}</p>
              <p className="mt-0.5 text-[9px] text-neutral-400">$48.00</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isImages) {
    return (
      <div className="grid min-h-[320px] grid-cols-2 gap-2 p-6">
        <div className="relative overflow-hidden bg-[#b9c9bf]">
          <span className="absolute -bottom-10 left-8 size-44 rounded-full bg-[#335247]" />
          <span className="absolute right-5 top-5 text-[9px] font-semibold uppercase tracking-widest text-white/65">
            Studio
          </span>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative overflow-hidden bg-[#e5b466]">
            <span className="absolute -right-7 -top-12 size-36 rounded-full bg-[#f4e1b9]" />
          </div>
          <div className="relative overflow-hidden bg-[#d9d3c9]">
            <span className="absolute bottom-0 left-12 h-20 w-14 rounded-t-full bg-[#6d5c4c]" />
          </div>
        </div>
      </div>
    );
  }

  if (isStats) {
    return (
      <div className="min-h-[260px] px-12 py-11">
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          At a glance
        </span>
        <div className="mt-7 grid grid-cols-3 divide-x divide-neutral-200">
          {[
            ["42%", "More opens"],
            ["3.4×", "More clicks"],
            ["18h", "Time saved"],
          ].map(([value, label]) => (
            <div className="px-7 first:pl-0 last:pr-0" key={label}>
              <p className="text-3xl font-semibold tracking-tight">{value}</p>
              <p className="mt-2 text-[10px] text-neutral-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isElement) {
    return (
      <div className="flex min-h-[150px] items-center justify-center px-12">
        {block.family === "Spacing" ? (
          <span className="w-full border-t border-dashed border-neutral-300" />
        ) : (
          <span className="rounded-full bg-neutral-950 px-6 py-3 text-[11px] font-semibold text-white">
            {block.title}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-[250px] px-12 py-10">
      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
        {block.family}
      </span>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        {block.title}
      </h3>
      <p className="mt-4 max-w-[410px] text-[12px] leading-5 text-neutral-500">
        A polished, responsive section ready to customize for your next email.
      </p>
    </div>
  );
};
