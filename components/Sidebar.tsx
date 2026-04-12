"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div className="flex flex-col gap-1 px-4 py-6 lg:py-8">
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
                        "block rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                        active
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm"
                          : "text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-900 hover:translate-x-0.5 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
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
                href="https://github.com/IncoPay"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:translate-x-0.5 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href="https://inco-pay.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:translate-x-0.5 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
              >
                Website ↗
              </a>
            </li>
            <li>
              <a
                href="https://x.com/IncoPayment"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:translate-x-0.5 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
              >
                Twitter ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
