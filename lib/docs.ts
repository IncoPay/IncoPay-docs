import fs from "fs";
import path from "path";

const CONTENT = path.join(process.cwd(), "content");

export function getDocPath(slug: string[]): string | null {
  const rel =
    slug.length === 0
      ? "index.mdx"
      : path.join(...slug) + ".mdx";
  const full = path.join(CONTENT, rel);
  if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  return null;
}

export function getAllDocSlugs(): string[][] {
  const out: string[][] = [];

  function walk(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full, [...prefix, ent.name]);
      } else if (ent.name.endsWith(".mdx")) {
        const base = ent.name.slice(0, -4);
        if (base === "index" && prefix.length === 0) {
          out.push([]);
        } else if (base === "index") {
          out.push(prefix);
        } else {
          out.push([...prefix, base]);
        }
      }
    }
  }

  if (fs.existsSync(CONTENT)) walk(CONTENT, []);
  return out;
}

export function readDocSource(slug: string[]): string | null {
  const file = getDocPath(slug);
  if (!file) return null;
  return fs.readFileSync(file, "utf8");
}
