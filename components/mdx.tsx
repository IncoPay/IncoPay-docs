import {
  Card as MintCard,
  Columns as MintColumns,
  Info as MintInfo,
  Note as MintNote,
} from "@mintlify/components";
import type { ComponentProps, ReactNode } from "react";
import { MdxPre } from "./mdx-pre";

type MintCardProps = ComponentProps<typeof MintCard>;

function DocCard(props: MintCardProps) {
  let href = props.href;
  if (href && href.startsWith("/") && !href.startsWith("/docs") && !href.startsWith("http")) {
    href = `/docs${href}`;
  }
  return <MintCard {...props} href={href} className={`dark:hover:!border-white/10 ${props.className || ""}`} />;
}

function CardGroup({ cols = 2, children }: { cols?: number; children?: ReactNode }) {
  const grid =
    cols === 3 ? "grid-cols-1 sm:grid-cols-3" : cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1";
  return <div className={`grid gap-4 my-6 ${grid}`}>{children}</div>;
}

export const mdxComponents = {
  pre: MdxPre,
  Card: DocCard,
  CardGroup,
  Columns: MintColumns,
  Info: MintInfo,
  Note: MintNote,
};
