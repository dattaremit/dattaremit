# DattaRemit Landing Page

Public marketing site for [dattaremit.com](https://dattaremit.com). Next.js 16 (App Router) + React 19 + Tailwind CSS 4.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS 4 + `tw-animate-css`; light/dark theme via `next-themes`
- **Font:** Poppins (300/400/500/600/700) via `next/font/google`
- **UI primitives:** Radix UI (`radix-ui`, `@radix-ui/react-accordion`, `@radix-ui/react-label`, `@radix-ui/react-slot`)
- **Forms:** React Hook Form + Yup (`@hookform/resolvers`)
- **State:** Zustand
- **Content extras:** `react-markdown` + `remark-gfm` for rich text, `react-spinners`, `lucide-react` icons
- **AI chat widget:** OpenAI (`openai`) wired via `components/chat-widget.tsx`
- **Live FX:** `yahoo-finance2` for USD→INR rates
- **HTTP:** Axios

## SEO / Metadata

`app/layout.tsx` ships with:
- Full OpenGraph + Twitter card metadata
- JSON-LD structured data (`Organization`, `WebSite`, `FinancialService`) for rich results
- Canonical URL set to `https://dattaremit.com`

## Path Alias

`@/*` maps to the project root (`tsconfig.json`).
