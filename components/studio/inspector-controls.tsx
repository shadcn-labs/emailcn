import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const InspectorSection = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <section className="border-t border-black/[.06] pb-5 pt-2 first:border-t-0 transition-colors duration-150 hover:bg-black/[.018]">
    <h3 className="flex h-8 items-center px-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
      {title}
    </h3>
    <div className="px-3">{children}</div>
  </section>
);

export const InspectorRow = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => (
  <div className="grid grid-cols-[72px_1fr] items-center gap-2.5">
    <span className="truncate text-[11px] text-neutral-500" title={label}>
      {label}
    </span>
    {children}
  </div>
);

export const ValueBox = ({
  className,
  prefix,
  ...props
}: {
  className?: string;
  prefix?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label
    className={cn(
      "flex h-7 min-w-0 flex-1 items-center rounded-md bg-black/[.04] px-2 text-[11px] text-neutral-900 transition-colors focus-within:bg-black/[.065] focus-within:ring-2 focus-within:ring-sky-500/25",
      className
    )}
  >
    {prefix ? (
      <span className="mr-1.5 font-mono text-[10px] text-neutral-400">
        {prefix}
      </span>
    ) : null}
    <input className="min-w-0 flex-1 bg-transparent outline-none" {...props} />
  </label>
);
