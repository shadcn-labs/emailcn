"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { forwardRef, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { IconButton } from "@/components/studio/icon-button";
import { cn } from "@/lib/utils";

export const PanelSurface = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    className={cn(
      "isolate border border-black/[.08] bg-white/75 text-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,.07)] backdrop-blur-2xl backdrop-saturate-150",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));

PanelSurface.displayName = "PanelSurface";

interface PanelProps {
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  defaultCollapsed?: boolean;
  title: string;
}

export const Panel = ({
  actions,
  children,
  className,
  contentClassName,
  defaultCollapsed = false,
  title,
}: PanelProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <PanelSurface
      className={cn(
        "pointer-events-auto flex max-h-[calc(100dvh-1.25rem)] w-[300px] flex-col overflow-hidden rounded-lg p-0 data-[collapsed=true]:h-9",
        className
      )}
      data-collapsed={collapsed}
    >
      <div className="flex h-9 shrink-0 items-center justify-between gap-3 pl-3 pr-1">
        <p className="m-0 min-w-0 truncate text-[13px] font-medium text-neutral-950">
          {title}
        </p>
        <div className="inline-flex shrink-0 items-center gap-1">
          {collapsed ? null : actions}
          <IconButton
            className="size-7 rounded-md"
            label={collapsed ? `Expand ${title}` : `Collapse ${title}`}
            onClick={() => setCollapsed((value) => !value)}
          >
            {collapsed ? (
              <ChevronDown className="size-3.5" />
            ) : (
              <ChevronUp className="size-3.5" />
            )}
          </IconButton>
        </div>
      </div>
      {collapsed ? null : (
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col border-t border-black/[.06]",
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </PanelSurface>
  );
};
