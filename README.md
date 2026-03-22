# IncoPay docs

Documentation for **[IncoPay](https://github.com/ayushsingh82/IncoPay)** in two forms:

| Target | What to use | How to preview |
|--------|-------------|----------------|
| **Vercel (recommended)** | Next.js app in this folder + MDX in **`content/`** | `npm install && npm run dev` → [http://localhost:3333](http://localhost:3333) |
| **Mintlify Cloud / CLI** | `docs.json` + MDX at **repo root** (`index.mdx`, `concepts/`, …) | `mint dev` (see `docs.json`) |

## Folder structure

```
incopay-docs/
├── app/                    # Next.js App Router (Vercel site)
│   ├── docs/[[...slug]]/   # Renders MDX from content/
│   └── ...
├── content/                # MDX source for Vercel (keep in sync with root for Mintlify)
├── components/             # Sidebar, ThemeProvider, mdx.tsx + mdx-pre (CodeBlock)
├── lib/                    # Resolve slug → file under content/
├── public/                 # logo/, favicon.svg
├── package.json            # next, next-mdx-remote, @mintlify/components (CodeBlock, callouts, …)
├── docs.json               # Mintlify only (optional)
├── vercel.json             # Vercel hints
└── index.mdx, quickstart.mdx, …  # Mintlify entry paths (mirror of content/ when synced)
```

**Important:** The **Next.js** build only reads **`content/**`**. Root-level `*.mdx` files are for **Mintlify** (`docs.json` navigation). After editing one side, copy to the other if you use both:

```bash
# Example: push content/ → root for Mintlify
cp content/index.mdx content/quickstart.mdx content/pricing.mdx content/development.mdx ./
cp -r content/concepts/* ./concepts/
cp -r content/reference/* ./reference/
```

## Deploy on Vercel

1. New project → import repo.
2. **Root Directory:** `incopay-docs`
3. Build: `npm run build`, Install: `npm install`.
4. Deploy. Site serves at `/` → redirects to `/docs`.

## Mintlify components on Vercel

The Next app uses **`@mintlify/components`** for **code blocks (with copy)**, **Card**, **Columns**, and callouts (**Info**, **Note**). MDX maps these in `components/mdx.tsx`; fenced code goes through `components/mdx-pre.tsx` → `CodeBlock`. Theme follows `data-theme` / `html.dark` (see `ThemeProvider`).

## Mintlify

If you deploy with Mintlify instead, use `docs.json` and `mint dev` from this directory (root MDX mirrors `content/` when synced).

## IncoPay application code

The app lives in **`../my-app/`**. See `../my-app/README.md`.
