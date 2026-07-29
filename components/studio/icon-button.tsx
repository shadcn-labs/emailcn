import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const IconButton = ({
  active = false,
  children,
  className,
  label,
  ...props
}: {
  active?: boolean;
  children: ReactNode;
  className?: string;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    aria-label={label}
    className={cn(
      "inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-35",
      active && "bg-neutral-100 text-neutral-950",
      className
    )}
    title={label}
    type="button"
    {...props}
  >
    {children}
  </button>
);
