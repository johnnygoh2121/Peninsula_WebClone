# Peninsula Precision Stamping — Website (local)

A [Next.js 14](https://nextjs.org/) App Router project that mirrors the public site [my-peninsula.com](https://www.my-peninsula.com/) for Peninsula Precision Stamping (Malaysia) Sdn. Bhd.: pages, navigation, enquiry/career forms, and images/PDFs (remote or downloaded to `public/`).

**Repository:** [github.com/johnnygoh2121/Peninsula_WebClone](https://github.com/johnnygoh2121/Peninsula_WebClone)

```bash
git clone https://github.com/johnnygoh2121/Peninsula_WebClone.git
cd Peninsula_WebClone
```

---

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

### Security and secrets

- **Do not commit** passwords, API keys, tokens, private keys (`.pem`, `.key`), or **local paths** (for example Windows user or drive paths).
- Use **`.env.local`** for machine-only settings; it is **gitignored**. Copy **`.env.example`** to `.env.local` and edit—only the example file belongs in the repo.
- Business contact details and map links on the site are **public** (same as the live company website), not private credentials.

| Command | Purpose |
|--------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run production build |
| `npm run lint` | ESLint |
| `npm run download-assets` | Download images/PDFs from the live site into `public/` |

---

## Tech stack

- **Next.js 14** (App Router), **React 18**, **TypeScript**
- **Tailwind CSS** for layout and breakpoints
- **ESLint** (`eslint-config-next`) — lint during `next build` is optional (see [Configuration notes](#configuration-notes))

---

## Repository layout

```
Peninsula_WebClone/   (this repo)
├── public/                    # Static assets (/images, /pdf) — optional; use download script
├── scripts/
│   └── download-assets.mjs  # Pulls files from my-peninsula.com/content → public/
├── src/
│   ├── app/                   # Routes + layout + globals.css
│   ├── components/          # Header, Footer, PageBanner, CTABanner, EnquiryForm
│   └── lib/
│       └── siteAssets.ts      # Local vs remote asset URLs
├── .env.example               # Safe template (tracked); copy to .env.local (gitignored)
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

Routes include: `/`, `/about`, `/career`, `/contact`, `/facilities`, `/machines-and-department`, `/products`, `/products/acm-sensor`.

---

## Configuration notes

### Footer and client components

`Footer` uses a scroll-to-top button (`onClick`). It is a **client component** (`"use client"` in `src/components/Footer.tsx`) because the App Router does not allow event handlers in server components.

### ESLint and `next build`

If ESLint fails in your environment (e.g. plugin / `es-abstract` resolution issues), `next.config.mjs` sets **`eslint.ignoreDuringBuilds: true`** so `npm run build` still completes; TypeScript checking remains. Run `npm run lint` manually when needed.

### Images and PDFs (`siteAssets`)

The live host serves media under **`https://www.my-peninsula.com/content/`** (e.g. `/content/images/logo.jpg`). The helper **`siteAsset()`** in `src/lib/siteAssets.ts`:

- **Default:** full URLs to that `content` base (with `encodeURI` for paths that contain spaces).
- **`NEXT_PUBLIC_USE_LOCAL_ASSETS=true`:** uses paths as `/images/...` and `/pdf/...` from **`public/`** only.

`next.config.mjs` declares **`images.remotePatterns`** for `www.my-peninsula.com` so `next/image` works with those remote URLs when not using local files.

### Download assets for offline / local-only files

```bash
npm run download-assets
```

Then create or edit **`.env.local`**:

```env
NEXT_PUBLIC_USE_LOCAL_ASSETS=true
```

Restart the dev server. Assets are expected under `public/images/...` and `public/pdf/...` matching the paths in `scripts/download-assets.mjs`.

---

## Static assets: two modes

| Setting | Behavior |
|--------|----------|
| `NEXT_PUBLIC_USE_LOCAL_ASSETS` unset or not `true` | Images/PDFs load from the live **`/content`** URLs (browser / Next image loader). |
| `NEXT_PUBLIC_USE_LOCAL_ASSETS=true` and files in **`public/`** | Same routes as `/images/...`, served locally. |

---

## Production

```bash
npm run build
npm start
```

Use a current **Node.js LTS** (e.g. 20+) to reduce tooling warnings.

---

## Responsive layout

The site uses **Tailwind breakpoints** (`sm`, `md`, `lg`): fluid grids, stacked vs multi-column sections, and scaled typography. The **header** shows a full horizontal nav from **`lg` up** and a **hamburger menu** below that; the thin top phone/email bar is **`md` and up**. The **home** product strip shows one card on small screens and three on larger viewports.

---

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_USE_LOCAL_ASSETS` | `true` = use files under `public/` for images/PDFs. Restart dev server after changes. |

---

## Source site

- [https://www.my-peninsula.com/](https://www.my-peninsula.com/) — Peninsula Precision Stamping (Malaysia) Sdn. Bhd.

---

## Changelog (project history)

1. **Build:** Made `Footer` a client component; optional ESLint skip on production build.
2. **Assets:** Added `siteAsset()`, `next/image` remote patterns, and `scripts/download-assets.mjs` + `npm run download-assets`.
3. **Docs:** This README; editor-only folders such as `.claude` are removed from the tree and listed in `.gitignore` so they are not tracked.
