"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const NAV: { group: string; links: { title: string; href: string }[] }[] = [
  {
    group: "Getting started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "Deployment", href: "/docs/pricing" },
    ],
  },
  {
    group: "Concepts",
    links: [
      { title: "Problem", href: "/docs/concepts/problem" },
      { title: "Solution", href: "/docs/concepts/solution" },
      { title: "Architecture", href: "/docs/concepts/architecture" },
      { title: "Tech stack", href: "/docs/concepts/tech-stack" },
    ],
  },
  {
    group: "Reference",
    links: [{ title: "Facilitator API", href: "/docs/reference/facilitator-api" }],
  },
  {
    group: "More",
    links: [{ title: "Development", href: "/docs/development" }],
  },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo/dark.svg" : "/logo/light.svg";

  return (
    <div className="flex flex-col gap-1 px-4 py-6 lg:py-8">
      <Link href="/docs" className="mb-6 flex items-center gap-2 px-2 hover:opacity-90" onClick={onNavigate}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="IncoPay" className="h-8 w-auto max-w-[200px]" />
      </Link>
      <nav className="flex flex-col gap-6" aria-label="Documentation">
        {NAV.map((section) => (
          <div key={section.group}>
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              {section.group}
            </h2>
            <ul className="flex flex-col gap-0.5">
              {section.links.map((l) => {
                const active = pathname === l.href || (l.href === "/docs" && pathname === "/docs");
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onNavigate}
                      className={[
                        "block rounded-lg px-2 py-1.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
                          : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100",
                      ].join(" ")}
                    >
                      {l.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">Links</h2>
          <ul className="flex flex-col gap-0.5">
            <li>
              <a
                href="https://github.com/ayushsingh82/IncoPay"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-2 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:bg-zinc-800/80"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
