# Arhyn Technologies — Official Website

"Transforming Businesses Through Technology"

A production-ready marketing site for Arhyn Technologies, a digital
transformation / AI automation / custom software studio. Built with the
Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, and shipped
as a fully static export so it can be hosted anywhere — including GitHub
Pages — with zero servers.

## Design system

The full brand rationale (logo concept, palette, type pairing, usage rules)
lives in [`BRAND.md`](./BRAND.md). Short version:

- **Palette** — near-black "ink" background, warm **amber** primary accent
  (`#E8A33D`), muted **wire** teal-green secondary accent (`#6FA8A0`), used
  sparingly.
- **Type** — Space Grotesk for headlines, Instrument Serif italic for a
  single emphasis word per section, Inter for body copy, IBM Plex Mono for
  labels/eyebrows — a deliberate pairing of "traditional business" (serif)
  and "digital systems" (mono) around a technical grotesk bridge.
- **Logo** — an original hand-built "AH" monogram: the two diagonal strokes
  double as the legs of an A and the verticals of an H, the crossbar doubles
  as a circuit trace with a signal node at its center, and a small tick above
  the apex turns the peak into a growth arrow. See `components/Logo.tsx`.

## Getting started

Requirements: Node.js 18.18+ (Node 20 recommended), npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Production build (static export)

This project is configured with `output: "export"` in `next.config.mjs`, so
`next build` produces a fully static site in `/out` — no Node server needed
at runtime.

```bash
npm run build
```

The static site will be in `./out`. You can preview it locally with any
static file server, e.g.:

```bash
npx serve out
```

## Deploying to GitHub Pages

A ready-to-use workflow is included at
`.github/workflows/deploy.yml`. It builds the static export and publishes it
to GitHub Pages automatically on every push to `main`.

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and select **GitHub Actions**.
3. If you're deploying to `https://<username>.github.io/<repo-name>/`
   (a project page, not a `<username>.github.io` root repo), open
   `.github/workflows/deploy.yml` and set:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: "/<repo-name>"
   ```
4. Push to `main` — the workflow builds and deploys automatically.
5. Update `metadataBase` / canonical URLs in `app/layout.tsx` and the URL in
   `public/sitemap.xml` / `public/robots.txt` to match your real domain.

### Manual deploy (any static host)

The `/out` folder is a plain static site — drag it into Netlify, Vercel,
Cloudflare Pages, S3, or any static host.

## Before going live — replace placeholders

A few values in the content are intentionally placeholders and should be
swapped for the real ones:

- `components/Contact.tsx` — email address, WhatsApp number, Calendly link.
- `components/Footer.tsx` and `components/Projects.tsx` — the GitHub profile
  URL ("Browse More Projects" / social icon) currently points to
  `https://github.com/`.
- `app/layout.tsx` — `siteUrl` (currently `https://arhyntechnologies.com`),
  and the social links array in the JSON-LD block.
- `public/robots.txt` / `public/sitemap.xml` — swap in the real domain.
- `public/og-image.svg` — regenerate as a PNG/JPG if you want broader social
  crawler compatibility (SVG `og:image` support varies by platform).

## Folder structure

```
arhyn/
├── app/
│   ├── layout.tsx        Root layout: fonts, metadata, JSON-LD schema
│   ├── page.tsx           Assembles all sections in order
│   └── globals.css        Design tokens, base styles, utility classes
├── components/
│   ├── Nav.tsx            Sticky nav + mobile menu
│   ├── Hero.tsx            Hero: headline, animated circuit background
│   ├── TrustedTech.tsx     Auto-scrolling tech stack marquee
│   ├── About.tsx           Mission / vision
│   ├── Services.tsx        15 services as problem/solution/impact cards
│   ├── WhyChoose.tsx       "Why Arhyn" feature grid
│   ├── Industries.tsx      12 industries, problem → solution per card
│   ├── Journey.tsx         8-step transformation timeline
│   ├── Projects.tsx        Featured project case studies
│   ├── Team.tsx            Team profiles
│   ├── FAQ.tsx             Accordion FAQ
│   ├── Contact.tsx         Contact form + channels
│   ├── Footer.tsx
│   ├── Logo.tsx            Inline AH monogram (React/SVG)
│   └── Reveal.tsx          Shared scroll-reveal motion wrapper
├── lib/
│   └── data.ts             All section content (services, industries, etc.)
├── public/
│   ├── favicon.svg / app-icon.svg
│   ├── logo-dark.svg / logo-light.svg
│   ├── og-image.svg
│   ├── robots.txt / sitemap.xml
│   └── .nojekyll           Required for GitHub Pages to serve /_next assets
├── .github/workflows/deploy.yml   GitHub Pages CI/CD
├── BRAND.md                Logo & brand usage guide
├── tailwind.config.ts       Design tokens (colors, fonts, keyframes)
└── next.config.mjs          Static export config
```

## Notes on quality

- **Accessibility** — semantic headings, visible focus states, `aria-label`s
  on icon-only controls, `prefers-reduced-motion` respected globally.
- **Performance** — static export, no client-side data fetching, `next/font`
  self-hosts and subsets Google Fonts at build time (no runtime font
  requests), images use `unoptimized` mode required for static export.
- **SEO** — per-page metadata, Open Graph + Twitter Card tags, canonical URL,
  `Organization` JSON-LD, `robots.txt`, `sitemap.xml`.
- No pricing, testimonials, fake client logos, fake statistics, fake
  reviews, or fake awards are included anywhere on the site, per the brief.
