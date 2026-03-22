import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/mdx";
import { getAllDocSlugs, readDocSource } from "@/lib/docs";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({
    slug: slug.length ? slug : undefined,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugParts = slug ?? [];
  const source = readDocSource(slugParts);
  if (!source) return { title: "Not found" };
  const titleMatch = source.match(/^---\s*\n(?:.*\n)*?title:\s*["']?([^"'\n]+)["']?\s*\n/m);
  const descMatch = source.match(/^---\s*\n(?:.*\n)*?description:\s*["']?([^"'\n]+)["']?\s*\n/m);
  const title = titleMatch?.[1]?.trim() ?? "IncoPay Docs";
  const description = descMatch?.[1]?.trim();
  return { title: `${title} · IncoPay`, description };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const slugParts = slug ?? [];
  const source = readDocSource(slugParts);
  if (!source) notFound();

  const { content, frontmatter } = await compileMDX<{ title?: string; description?: string }>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  const title = frontmatter.title as string | undefined;

  return (
    <article className="docs-article">
      {title ? <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h1> : null}
      {content}
    </article>
  );
}
