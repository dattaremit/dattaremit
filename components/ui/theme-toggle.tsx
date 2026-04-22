"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const classes =
    "inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-card disabled:opacity-50";

  if (!mounted) {
    return (
      <button className={classes} disabled aria-label="Toggle theme">
        <Sun className="size-[18px]" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className={classes}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="relative size-[18px]">
        <Sun
          className={`absolute inset-0 size-[18px] transition-all duration-300 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 size-[18px] transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
