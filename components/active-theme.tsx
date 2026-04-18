"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_THEME = "default";

interface ThemeContextType {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ActiveThemeProvider = ({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: string;
}) => {
  const [activeTheme, setActiveTheme] = useState<string>(
    () => initialTheme || DEFAULT_THEME
  );

  useEffect(() => {
    for (const className of [...document.body.classList].filter((cn) =>
      cn.startsWith("theme-")
    )) {
      document.body.classList.remove(className);
    }
    document.body.classList.add(`theme-${activeTheme}`);
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled");
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeConfig = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider"
    );
  }
  return context;
};
