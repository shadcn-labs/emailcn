import {
  ArrowLeft,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Download,
  Menu,
  Monitor,
  PanelLeft,
  PanelRight,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STUDIO_FRAMEWORKS } from "@/constants/studio";
import type { StudioFramework } from "@/types/studio";

interface HeaderProps {
  framework: StudioFramework;
  onCopyInstallCommands: () => void;
  onCopyManifest: () => void;
  onExport: () => void;
  onFrameworkChange: (framework: StudioFramework) => void;
  onNameChange: (name: string) => void;
  onOpenInspector: () => void;
  onOpenLibrary: () => void;
  onOpenPreview: () => void;
  onReset: () => void;
  name: string;
}

export const Header = ({
  framework,
  name,
  onCopyInstallCommands,
  onCopyManifest,
  onExport,
  onFrameworkChange,
  onNameChange,
  onOpenInspector,
  onOpenLibrary,
  onOpenPreview,
  onReset,
}: HeaderProps) => (
  <header className="relative z-40 flex h-16 shrink-0 items-center border-b border-neutral-200 bg-white px-5">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex h-10 items-center gap-2 rounded-xl bg-neutral-100 px-4 text-[13px] font-semibold transition-colors hover:bg-neutral-200/70"
          type="button"
        >
          <Menu className="size-4" />
          Menu
          <ChevronDown className="size-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60 rounded-xl p-1.5">
        <DropdownMenuItem asChild className="rounded-lg">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to EmailCN
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-neutral-400">
          Email name
        </DropdownMenuLabel>
        <div className="px-2 pb-2">
          <input
            className="h-9 w-full rounded-lg bg-neutral-100 px-3 text-[12px] outline-none focus:ring-2 focus:ring-neutral-300"
            onChange={(event) => onNameChange(event.target.value)}
            value={name}
          />
        </div>
        <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-neutral-400">
          Framework
        </DropdownMenuLabel>
        {STUDIO_FRAMEWORKS.map((option) => (
          <DropdownMenuItem
            className="rounded-lg"
            key={option.id}
            onClick={() => onFrameworkChange(option.id)}
          >
            {framework === option.id ? (
              <Check className="size-4" />
            ) : (
              <span className="size-4" />
            )}
            {option.label}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="rounded-lg" onClick={onOpenLibrary}>
          <PanelLeft className="size-4" />
          Open component library
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg" onClick={onOpenInspector}>
          <PanelRight className="size-4" />
          Open inspector
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg" onClick={onReset}>
          <RotateCcw className="size-4" />
          Reset composition
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
      <span className="size-1.5 rounded-full bg-emerald-500" />
      <span className="text-[11px] text-neutral-400">
        Saved locally ·{" "}
        {STUDIO_FRAMEWORKS.find(({ id }) => id === framework)?.label}
      </span>
    </div>

    <div className="ml-auto flex items-center gap-2">
      <button
        className="hidden h-9 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-neutral-500 hover:bg-neutral-100 sm:flex"
        onClick={onOpenPreview}
        type="button"
      >
        <Monitor className="size-4" />
        Preview
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex h-10 items-center gap-2 rounded-xl bg-neutral-950 px-4 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
            type="button"
          >
            Export
            <ChevronDown className="size-3.5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 rounded-xl p-1.5">
          <DropdownMenuItem className="rounded-lg" onClick={onExport}>
            <Download className="size-4" />
            Export studio file
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg" onClick={onCopyManifest}>
            <Copy className="size-4" />
            Copy manifest
          </DropdownMenuItem>
          <DropdownMenuItem
            className="rounded-lg"
            onClick={onCopyInstallCommands}
          >
            <Code2 className="size-4" />
            Copy install commands
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);
