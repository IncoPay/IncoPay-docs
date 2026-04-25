"use client";

import { CodeBlock } from "@mintlify/components";
import { isValidElement, useEffect, useState, type ReactElement, type ReactNode } from "react";

function extractText(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement(node) && node.props && typeof node.props === "object" && node.props !== null && "children" in node.props) {
    return extractText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

function findCodeElement(node: ReactNode): ReactElement<{ className?: string; children?: ReactNode }> | null {
  if (node == null) return null;
  if (Array.isArray(node)) {
    for (const n of node) {
      const f = findCodeElement(n);
      if (f) return f;
    }
    return null;
  }
  if (!isValidElement(node)) return null;
  if (node.type === "code") {
    return node as ReactElement<{ className?: string; children?: ReactNode }>;
  }
  const props = node.props as { children?: ReactNode };
  if (props?.children) return findCodeElement(props.children);
  return null;
}

export function MdxPre({ children, ...rest }: { children?: ReactNode; className?: string }) {
  // Mintlify's CodeBlock normalizes inline-style colors differently between
  // SSR and the client (e.g. "#FFFFFF" vs "#ffffff", camelCase vs kebab-case
  // CSS properties). React then logs a hydration mismatch on every code block.
  // Render a plain <pre><code> on the server, swap to CodeBlock after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const codeEl = findCodeElement(children);
  if (!codeEl) {
    return (
      <pre {...rest} className={rest.className}>
        {children}
      </pre>
    );
  }
  const className = codeEl.props.className || "";
  const langMatch = /language-([\w-]+)/.exec(className);
  const language = langMatch ? langMatch[1] : "text";
  const code = extractText(codeEl.props.children).replace(/\n$/, "");

  if (!mounted) {
    return (
      <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
        <code className={className}>{code}</code>
      </pre>
    );
  }
  return (
    <CodeBlock language={language} codeBlockTheme="system">
      {code}
    </CodeBlock>
  );
}
