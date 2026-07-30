import { ChevronRight, Sparkles } from "lucide-react";

import { STUDIO_GENERATE_PROMPTS } from "@/constants/studio";

interface GeneratePanelProps {
  onGenerate: () => void;
  onPromptChange: (prompt: string) => void;
  prompt: string;
}

export const GeneratePanel = ({
  onGenerate,
  onPromptChange,
  prompt,
}: GeneratePanelProps) => (
  <div className="min-h-0 flex-1 overflow-y-auto border-t border-black/[.06] p-2.5">
    <div className="rounded-lg border border-black/[.08] bg-white/55 p-2">
      <textarea
        className="h-24 w-full resize-none bg-transparent px-1 text-[12px] leading-5 outline-none placeholder:text-neutral-400"
        onChange={(event) => onPromptChange(event.target.value)}
        placeholder="Describe the email you want to compose…"
        value={prompt}
      />
      <button
        className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-md bg-neutral-950 text-[11px] font-medium text-white transition-opacity hover:opacity-85 disabled:opacity-40"
        disabled={!prompt.trim()}
        onClick={onGenerate}
        type="button"
      >
        <Sparkles className="size-3.5" />
        Build composition
      </button>
    </div>
    <p className="mt-5 px-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
      Try a prompt
    </p>
    <div className="mt-1.5 space-y-1">
      {STUDIO_GENERATE_PROMPTS.map((suggestion) => (
        <button
          className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[11px] text-neutral-600 transition-colors hover:bg-black/[.04]"
          key={suggestion}
          onClick={() => onPromptChange(suggestion)}
          type="button"
        >
          {suggestion}
          <ChevronRight className="size-3.5" />
        </button>
      ))}
    </div>
  </div>
);
