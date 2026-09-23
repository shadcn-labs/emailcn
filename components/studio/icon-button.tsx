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
      "inline-flex size-8 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors duration-150 hover:bg-black/[.05] hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 disabled:pointer-events-none disabled:opacity-30",
      active && "bg-sky-500/10 text-sky-600",
      className
    )}
    title={label}
    type="button"
    {...props}
  >
    {children}
  </button>
);
