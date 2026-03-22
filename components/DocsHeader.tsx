"use client";

import { useTheme } from "./ThemeProvider";

type Props = {
  onMenuClick: () => void;
  menuOpen: boolean;
};

export function DocsHeader({ onMenuClick, menuOpen }: Props) {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 h-14 shrink-0 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="flex h-full items-center justify-between gap-3 px-4 lg:px-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 lg:hidden"
            onClick={onMenuClick}
            aria-expanded={menuOpen}
            aria-label="Toggle sidebar"
          >
            <span className="block h-0.5 w-[18px] rounded-full bg-current" />
            <span className="block h-0.5 w-[18px] rounded-full bg-current" />
            <span className="block h-0.5 w-[18px] rounded-full bg-current" />
          </button>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">IncoPay documentation</span>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/ayushsingh82/IncoPay"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
