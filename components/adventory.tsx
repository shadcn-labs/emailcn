"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export interface AdventoryProps {
  type: "banner" | "card";
  className?: string;
}

export const Adventory = ({ type = "banner", className }: AdventoryProps) => {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = `https://adventory.to/ad.${type}.js`;
    script.async = true;
    script.dataset.placement = "68034e9b-90b7-416d-8de0-9655aaf3f85c";

    if (resolvedTheme === "dark") {
      script.dataset.theme = "dark";
    }

    container.append(script);

    return () => {
      container.innerHTML = "";
    };
  }, [resolvedTheme, type]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full", type === "banner" ? "h-10" : "h-44", className)}
    />
  );
};
