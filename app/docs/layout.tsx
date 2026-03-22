"use client";

import { useState, type ReactNode } from "react";
import { DocsHeader } from "@/components/DocsHeader";
import { Sidebar } from "@/components/Sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader onMenuClick={() => setSidebarOpen((o) => !o)} menuOpen={sidebarOpen} />
      <div className="flex min-h-0 flex-1">
        {sidebarOpen ? (
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-black/50 max-lg:block lg:hidden"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          />
        ) : null}
        <aside
          className={[
            "w-[280px] shrink-0 border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
            "max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:top-14 max-lg:z-50 max-lg:-translate-x-full max-lg:overflow-y-auto max-lg:transition-transform",
            sidebarOpen ? "max-lg:translate-x-0" : "",
            "lg:sticky lg:top-14 lg:max-h-[calc(100vh-3.5rem)] lg:translate-x-0 lg:overflow-y-auto",
          ].join(" ")}
        >
          <Sidebar onNavigate={() => setSidebarOpen(false)} />
        </aside>
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:pl-10 lg:pr-12">{children}</main>
      </div>
    </div>
  );
}
