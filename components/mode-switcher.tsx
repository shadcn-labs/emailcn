"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useHotkeys } from "react-hotkeys-hook";

import { useFeedback } from "@/hooks/use-feedback";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  { icon: MonitorIcon, value: "system" },
  { icon: SunIcon, value: "light" },
  { icon: MoonIcon, value: "dark" },
] as const;

const ModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useMounted();
  const feedbackOn = useFeedback({ sound: "toggleOn" });
  const feedbackOff = useFeedback({ sound: "toggleOff" });

  useHotkeys("d", () => {
    const next = theme === "dark" ? "light" : "dark";
    if (next === "dark") {
      feedbackOff();
    } else {
      feedbackOn();
    }
    setTheme(next);
  });

  if (!isMounted) {
    return <div className="flex h-8 w-24" />;
  }

  const activeIndex = Math.max(
    0,
    THEME_OPTIONS.findIndex((option) => option.value === theme)
  );

  return (
    <div
      className="relative inline-flex items-center rounded-full bg-background inset-ring-1 inset-ring-border"
      role="radiogroup"
      aria-label="Theme"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-8 rounded-full border transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {THEME_OPTIONS.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            data-active={isActive}
            className={cn(
              "relative z-10 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground [&_svg]:size-4"
            )}
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${option.value} theme`}
            onClick={() => {
              if (option.value === "dark") {
                feedbackOff();
              } else {
                feedbackOn();
              }
              setTheme(option.value);
            }}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export { ModeSwitcher };
