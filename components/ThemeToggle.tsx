"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-20 rounded-full border border-line bg-ink-soft" />
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="group relative flex h-10 w-20 items-center rounded-full border border-line bg-ink-soft p-1 transition-all duration-500 hover:border-amber/50"
    >
      {/* Track Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber/10 via-transparent to-wire/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Thumb */}
      <div
        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber shadow-lg transition-all duration-500 ${
          dark ? "translate-x-10 rotate-180" : "translate-x-0 rotate-0"
        }`}
      >
        {dark ? (
          <Moon size={15} className="text-ink" />
        ) : (
          <Sun size={15} className="text-ink" />
        )}
      </div>

      {/* Sun */}
      <Sun
        size={14}
        className={`absolute left-3 transition-all duration-500 ${
          dark
            ? "opacity-30 scale-75"
            : "opacity-100 scale-100 text-amber"
        }`}
      />

      {/* Moon */}
      <Moon
        size={14}
        className={`absolute right-3 transition-all duration-500 ${
          dark
            ? "opacity-100 scale-100 text-paper"
            : "opacity-30 scale-75"
        }`}
      />
    </button>
  );
}