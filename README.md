# Scoopic Campus Ambassador

Campus ambassador website for Scoopic, built with React, TypeScript, and Vite.

## Production

- Current Pages site: https://scoopic-campus-ambassador-site.pages.dev/
- Mobile preview: https://scoopic-campus-ambassador-site.pages.dev/mobile-preview
- Independent Worker: `scoopic-campus-ambassador-app`

The existing Pages project remains available as a stable fallback while the
Worker deployment is introduced and verified. The older `scoopic-ambassador`
Workers are separate applications and are not modified by this repository.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Worker development and deployment

The Worker serves the Vite build as static assets and reserves `/api/*` for
server-side endpoints.

```bash
pnpm dev:worker
pnpm deploy:worker
```

Health check:

```text
GET /api/health
```

Database bindings such as Cloudflare D1 can be added to `wrangler.jsonc` once
the application data model and API requirements are defined.
