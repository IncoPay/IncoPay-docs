# IncoPay docs (Mintlify)

Documentation for **[IncoPay](https://github.com/ayushsingh82/IncoPay)** — private X402 payments on Solana with [Inco Network](https://inco.org), Inco Lightning, and Kora.

The **application** lives in **`my-app/`** in the same monorepo. This folder only contains Mintlify MDX and `docs.json`.

## Local preview

```bash
npm i -g mint
cd incopay-docs
mint dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Connect this directory to [Mintlify](https://mintlify.com) or your CI from the repo root that contains `incopay-docs/docs.json`.

## Content map

| Page | Topic |
|------|--------|
| `index.mdx` | Introduction & overview |
| `quickstart.mdx` | Run `my-app` + facilitator + Kora |
| `pricing.mdx` | Deployment modes (local / Vercel UI / server) |
| `concepts/*` | Problem, solution, architecture, tech stack |
| `reference/facilitator-api.mdx` | HTTP API |

For full env vars, program IDs, and troubleshooting, see **`my-app/README.md`**.
