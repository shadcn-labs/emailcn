import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const InspectorSection = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <section className="border-b border-neutral-200 px-5 py-5">
    <h3 className="mb-4 text-[13px] font-semibold text-neutral-950">{title}</h3>
    {children}
  </section>
);

export const InspectorRow = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => (
  <div className="grid grid-cols-[88px_1fr] items-center gap-2">
    <span className="text-[12px] text-neutral-500">{label}</span>
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
      "flex h-9 min-w-0 items-center rounded-xl bg-neutral-100 px-3 text-[12px] text-neutral-900 transition-colors focus-within:bg-neutral-200/70",
      className
    )}
  >
    {prefix ? (
      <span className="mr-2 text-[11px] text-neutral-400">{prefix}</span>
    ) : null}
    <input className="min-w-0 flex-1 bg-transparent outline-none" {...props} />
  </label>
);
