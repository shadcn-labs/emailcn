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
  <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5">
    <div className="mt-2 rounded-2xl border border-neutral-200 p-3">
      <textarea
        className="h-28 w-full resize-none bg-transparent text-[12px] leading-5 outline-none placeholder:text-neutral-400"
        onChange={(event) => onPromptChange(event.target.value)}
        placeholder="Describe the email you want to compose…"
        value={prompt}
      />
      <button
        className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 text-[12px] font-semibold text-white disabled:opacity-40"
        disabled={!prompt.trim()}
        onClick={onGenerate}
        type="button"
      >
        <Sparkles className="size-3.5" />
        Build composition
      </button>
    </div>
    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
      Try a prompt
    </p>
    <div className="mt-2 space-y-2">
      {STUDIO_GENERATE_PROMPTS.map((suggestion) => (
        <button
          className="flex w-full items-center justify-between rounded-xl bg-neutral-50 px-3 py-3 text-left text-[11px] text-neutral-600 hover:bg-neutral-100"
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
