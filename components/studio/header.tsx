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

import { PanelSurface } from "@/components/studio/panel";
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
  name: string;
  onCopyInstallCommands: () => void;
  onCopyManifest: () => void;
  onExport: () => void;
  onFrameworkChange: (framework: StudioFramework) => void;
  onNameChange: (name: string) => void;
  onOpenInspector: () => void;
  onOpenLibrary: () => void;
  onOpenPreview: () => void;
  onReset: () => void;
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
  <header className="pointer-events-none absolute left-1/2 top-2.5 z-[80] -translate-x-1/2">
    <PanelSurface className="pointer-events-auto flex h-9 items-center gap-1 rounded-lg p-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex h-7 items-center gap-1.5 rounded-md px-2 text-[12px] font-medium text-neutral-800 transition-colors hover:bg-black/[.05]"
            type="button"
          >
            <Menu className="size-3.5" />
            <span className="hidden sm:inline">EmailCN</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60 rounded-lg p-1">
          <DropdownMenuItem asChild className="rounded-md">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to EmailCN
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-neutral-400">
            Email name
          </DropdownMenuLabel>
          <div className="px-1.5 pb-2">
            <input
              className="h-8 w-full rounded-md bg-black/[.04] px-2.5 text-[12px] outline-none focus:ring-2 focus:ring-sky-500/30"
              onChange={(event) => onNameChange(event.target.value)}
              value={name}
            />
          </div>
          <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-neutral-400">
            Framework
          </DropdownMenuLabel>
          {STUDIO_FRAMEWORKS.map((option) => (
            <DropdownMenuItem
              className="rounded-md"
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
          <DropdownMenuItem className="rounded-md" onClick={onOpenLibrary}>
            <PanelLeft className="size-4" />
            Open component library
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-md" onClick={onOpenInspector}>
            <PanelRight className="size-4" />
            Open inspector
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-md" onClick={onReset}>
            <RotateCcw className="size-4" />
            Reset composition
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <span className="h-5 w-px bg-black/[.06]" />
      <input
        aria-label="Email name"
        className="h-7 w-24 rounded-md bg-transparent px-2 text-[12px] font-medium outline-none transition-colors hover:bg-black/[.03] focus:bg-black/[.04] sm:w-32"
        onChange={(event) => onNameChange(event.target.value)}
        value={name}
      />
      <div className="hidden items-center gap-1.5 px-1.5 lg:flex">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        <span className="whitespace-nowrap text-[10px] text-neutral-500">
          {STUDIO_FRAMEWORKS.find(({ id }) => id === framework)?.label}
        </span>
      </div>
      <span className="h-5 w-px bg-black/[.06]" />
      <button
        aria-label="Preview email"
        className="inline-flex size-7 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-black/[.05] hover:text-neutral-950"
        onClick={onOpenPreview}
        title="Preview email"
        type="button"
      >
        <Monitor className="size-3.5" />
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex h-7 items-center gap-1 rounded-md bg-neutral-950 px-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-85"
            type="button"
          >
            Export
            <ChevronDown className="size-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 rounded-lg p-1">
          <DropdownMenuItem className="rounded-md" onClick={onExport}>
            <Download className="size-4" />
            Export studio file
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-md" onClick={onCopyManifest}>
            <Copy className="size-4" />
            Copy manifest
          </DropdownMenuItem>
          <DropdownMenuItem
            className="rounded-md"
            onClick={onCopyInstallCommands}
          >
            <Code2 className="size-4" />
            Copy install commands
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </PanelSurface>
  </header>
);
