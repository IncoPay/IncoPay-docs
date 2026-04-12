import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@mintlify/components/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "IncoPay Docs",
  description: "Private X402 payments on Solana with Inco Lightning and Kora",
  icons: { icon: "/logo/logo.png" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('incopay-docs-theme');var mode=(t==='light'||t==='dark')?t:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',mode);if(mode==='dark')document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
