# Product Requirements Document (PRD)

## NexVex Boilate

**A production-ready Next.js 16 + Convex boilerplate for rapid SaaS development.**

---

## Overview

NexVex Boilate is a fullstack boilerplate that eliminates the repetitive setup phase of every new SaaS project. It provides a complete foundation with authentication, landing page, dashboard UI, and best-practice architecture — so developers can focus on building their unique features instead of wiring up the basics.

**Target Audience:** Indie hackers, startup founders, and agencies who need to ship fast.

**Value Proposition:** Go from `git clone` to customer-facing app in hours, not weeks.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.1.7 (Turbopack) |
| Language | TypeScript | 5.9.3 |
| React | React | 19.2.4 |
| Styling | Tailwind CSS | 4.2.1 |
| UI Primitives | shadcn/ui + Radix UI | latest |
| Animation | tw-animate-css | 1.4.0 |
| Icons | Lucide React | 1.11.0 |
| Backend (planned) | Convex | TBD |
| Auth (planned) | Convex Auth | TBD |

---

## Features

### Implemented

#### 1. Landing Page (`/`)
- Sticky header with scroll-aware backdrop blur
- Hero section with animated entrance
- "Trusted by" logo cloud
- CTAs linked to auth page
- Fully responsive (mobile nav included)

#### 2. Authentication (`/auth`)
- **Two-column layout** — particle animation left, form right
- **Canvas particle field** — orca silhouette (brand mascot) with physics
  - Spring/damping particle movement
  - Mouse repulsion interaction
  - Typing impulse reactions (particles ripple when typing)
  - Theme-adaptive coloring
- **Email OTP flow**
  1. Enter email
  2. Receive 6-digit code
  3. Verify OTP
- **OAuth buttons** — Google & Apple (visual, pending backend)

#### 3. Dashboard (`/dashboard`)
- Collapsible sidebar navigation
  - Icon-only mode on collapse
  - Tooltip labels
  - Active state highlighting
  - Platform links: Dashboard, Projects, Team, Analytics, Messages
  - Secondary: Settings, Help
  - Footer: GitHub link
- Stats cards grid (responsive)
- Recent sales list
- Reusable layout components (`AppShell`, `AppContentHeader`)

### Planned

#### 4. Convex Integration
- Real-time database with automatic sync
- Type-safe queries and mutations
- File storage for user uploads

#### 5. Convex Auth
- Email/password authentication
- OAuth (Google, Apple, GitHub)
- Magic links
- Session management
- Role-based access control (RBAC)

#### 6. Auth Guard
- Middleware protection for app routes
- Automatic redirect to `/auth` for unauthenticated users
- Return URL preservation

#### 7. Additional Pages
- `/projects` — Project management
- `/team` — Team members and permissions
- `/analytics` — Charts and metrics
- `/messages` — In-app messaging
- `/settings` — User preferences

#### 8. Theme System
- Dark/light mode toggle
- System preference detection
- CSS variable-based theming

---

## Design System

### Colors

| Token | Light | Dark |
|-------|-------|------|
| `--primary` | `oklch(0.496 0.265 301.924)` | `oklch(0.438 0.218 303.724)` |
| `--background` | White | `oklch(0.145 0.008 326)` |
| `--foreground` | Near-black | White |
| `--muted` | Light gray | Dark gray |
| `--border` | Light border | Subtle border |

### Typography

- **Font:** System sans-serif (Geist if available)
- **Scale:** Uses `Text` component with variants:
  - `h1`: 4xl/5xl/6xl responsive
  - `h2`: 3xl/4xl/5xl responsive
  - `h3`: 2xl/3xl responsive
  - `lead`: Large body text
  - `p`: Default body
  - `small`, `xs`, `muted`: Secondary text

### Spacing

- Base unit: 4px (Tailwind default)
- Page padding: `p-6` (24px)
- Content gap: `gap-6` (24px)
- Component gap: `gap-4` (16px)

---

## Component Architecture

### Philosophy
- **Server Components first** — Only add `"use client"` for interactivity
- **Composition over configuration** — Small, composable components
- **No prop drilling** — Use context or URL state
- **Type safety** — Zero `any` types, strict TypeScript

### Directory Conventions

```
src/
├── app/              # Next.js App Router
│   ├── (app)/        # App group (authenticated)
│   ├── (auth)/       # Auth group
│   └── page.tsx      # Landing page
├── components/
│   ├── ui/           # shadcn primitives (no business logic)
│   ├── layout/       # Layout components (header, sidebar, nav)
│   └── views/        # Page-specific sections
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
└── types/            # Global TypeScript types
```

---

## API Design (Planned)

### Convex Schema

```typescript
// users table
users: {
  _id: Id<"users">
  email: string
  name?: string
  avatar?: string
  role: "admin" | "member"
  createdAt: number
}

// sessions table (for auth)
sessions: {
  _id: Id<"sessions">
  userId: Id<"users">
  token: string
  expiresAt: number
}
```

### Queries
- `users.me` — Current user
- `users.list` — All users (admin only)
- `projects.list` — User's projects
- `analytics.overview` — Dashboard stats

### Mutations
- `auth.signUp` — Create account
- `auth.signIn` — Authenticate
- `auth.signOut` — End session
- `auth.verifyOtp` — Verify OTP code
- `projects.create` — New project
- `projects.update` — Edit project

---

## Performance Requirements

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Bundle size:** < 200KB initial JS
- **Static generation:** All public pages prerendered

---

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- ARIA labels on icon buttons
- Focus management in modals/sheets
- Color contrast ratio > 4.5:1
- Reduced motion support (`prefers-reduced-motion`)

---

## Security Requirements

- No secrets exposed to client
- HTTPS only
- CSP headers
- Input validation (Zod)
- XSS prevention (React's built-in escaping)
- CSRF protection (Convex handles this)
- Secure session cookies (httpOnly, secure, sameSite)

---

## Deployment

### Target Platforms
- **Primary:** Vercel (Next.js optimized)
- **Alternative:** Self-hosted with Docker

### Environment Variables
```bash
# Required
CONVEX_DEPLOY_KEY=
NEXT_PUBLIC_CONVEX_URL=

# Auth (OAuth providers)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=

# Optional
EFFERD_REGISTRY_TOKEN=  # For private UI blocks
```

---

## Milestones

### v0.1.0 (Current)
- [x] Landing page
- [x] Auth UI (email + OTP)
- [x] Dashboard shell
- [x] Sidebar navigation
- [x] Design system foundation

### v0.2.0 (Next)
- [ ] Convex integration
- [ ] Working auth flow
- [ ] Auth guard middleware
- [ ] User profile page

### v0.3.0
- [ ] Projects CRUD
- [ ] Team management
- [ ] Analytics charts
- [ ] Settings page

### v1.0.0
- [ ] Production hardened
- [ ] Documentation complete
- [ ] Starter templates
- [ ] Deploy to Vercel button

---

## Open Questions

1. Should we support multi-tenancy (organizations/teams) out of the box?
2. Do we need a billing/subscription system (Stripe integration)?
3. Should the landing page be a separate Next.js app or same codebase?
4. Do we want an API reference page auto-generated from Convex functions?

---

**Last Updated:** 2026-04-28  
**Status:** v0.1.0 — Foundation complete, backend integration pending
