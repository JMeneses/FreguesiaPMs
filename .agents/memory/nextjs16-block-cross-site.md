---
name: Next.js 16 blockCrossSite behaviour
description: allowedDevOrigins is used by blockCrossSite for /_next/* requests in both dev AND production, so production origins must be listed there.
---

## Rule
`allowedDevOrigins` in next.config must include all origins that will access `/_next/*` resources — including the production deployment domain — not just local dev origins.

**Why:** `block-cross-site.js` in Next.js 16 calls `blockCrossSite()` regardless of NODE_ENV. If the request origin is not in `allowedDevOrigins` (plus `localhost`/`*.localhost`), any `/_next/*` URL (excluding `/_next/image` and `/_next/static/media`) returns **403 Unauthorized**.

**How to apply:** For Replit autoscale deployments, add `*.replit.app` and `*.repl.co` to `allowedDevOrigins` alongside the existing `*.replit.dev` entries. The production URL is `frequesiapms.replit.app`.
