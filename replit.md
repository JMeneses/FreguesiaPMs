# Freguesia2026 - replit.md

## Overview

Freguesia2026 is a Portuguese local government (parish) website for "Freguesia de Porto de Mós." It serves as the official portal for the parish, providing public-facing pages for news, documents, services/initiatives, parish identity, executive/assembly member listings, and statistics. It includes a protected admin panel for managing news articles, documents (with folder hierarchy), and user accounts.

The interface is entirely in Portuguese. The site targets residents, visitors, and emigrants who want to stay connected with the parish.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Framework & Rendering
- **Next.js 16** with the App Router pattern (all routes under `app/`)
- TypeScript throughout
- Uses both Server Components (for data fetching pages) and Client Components (for interactive UI like forms, carousels, dropdowns)
- `force-dynamic` export is used on pages that query the database to prevent build-time static generation failures
- Server Actions (`'use server'` in `app/actions/`) handle form submissions for news, documents, and user CRUD operations
- Standalone output mode (`output: 'standalone'` in next.config.ts)

### Styling
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- Custom CSS variables for theming (primary color: teal `#3d7270`, with dark mode support)
- Geist font family loaded via `next/font/google`
- No component library — custom `Button` component in `components/ui/Button.tsx`

### Database
- **PostgreSQL** accessed via **Prisma ORM** (`@prisma/client` v5)
- Prisma schema at `prisma/schema.prisma` defines models: `User`, `News`, `Document`, `Folder`
- Prisma client singleton in `lib/prisma.ts` (cached in global scope for dev hot-reload)
- Migrations managed via Prisma (`prisma/migrations/`)
- Seed script at `prisma/seed.ts` creates an initial admin user
- On Replit, the DATABASE_URL is auto-set when a PostgreSQL resource is added

### Authentication
- **NextAuth.js v4** with Credentials provider (email + password)
- Passwords hashed with **bcryptjs**
- Auth API route at `app/api/auth/[...nextauth]/route.ts`
- Middleware in `proxy.ts` protects all `/admin/*` routes, redirecting unauthenticated users to `/admin/login`
- Session management via NextAuth's default JWT strategy
- Environment variables: `NEXTAUTH_SECRET`, `NEXTAUTH_URL`

### File Storage
- **Replit Object Storage** (`@replit/object-storage`) for uploaded files (news images, documents/PDFs)
- Wrapper in `lib/object-storage.ts` provides `uploadFile`, `getFile`, `deleteFile`, `exists` methods
- Files served through a dynamic API route at `app/api/uploads/[...path]/route.ts` which reads from object storage and sets appropriate content types
- Server actions support up to 20MB uploads (`serverActions.bodySizeLimit` in next.config.ts)

### Page Structure

**Public pages:**
- `/` — Homepage with hero carousel, recent news, video, initiatives mosaic, president's message, FAQ
- `/noticias` — News listing; `/noticias/[id]` — News detail with image carousel
- `/documentos` — Document browser with folder navigation and search
- `/servicos` — Services/initiatives listing; `/servicos/[slug]` — Service detail
- `/freguesia/identidade` — Parish identity/history
- `/freguesia/executivo` — Executive board members
- `/freguesia/assembleia` — Assembly members
- `/freguesia/estatisticas` — Parish statistics

**Admin pages (protected):**
- `/admin/login` — Login form
- `/admin/dashboard` — Stats overview (news count, documents count, folders count)
- `/admin/noticias` — CRUD for news articles
- `/admin/documentos` — Folder/document management with upload
- `/admin/users` — User account management

### Key Architectural Patterns
- **Server Components by default** — Pages that fetch data use async server components directly querying Prisma
- **Server Actions for mutations** — All create/update/delete operations use Next.js server actions with `revalidatePath` for cache invalidation
- **Static service data** — Services/initiatives are defined as static data in `lib/services-data.tsx` (not database-driven)
- **Admin layout with sidebar** — `app/admin/layout.tsx` is a client component that renders navigation sidebar except on the login page

### Important Configuration Notes
- `allowedDevOrigins: ['*']` in next.config.ts enables Replit's proxy to work
- Images from `unsplash.com` and `images.unsplash.com` are allowed in `next.config.ts` remote patterns
- The build script runs `prisma generate` before `next build`

## External Dependencies

### NPM Packages (Key)
- `next` 16.1.4 — Framework
- `react` / `react-dom` 19.2.3 — UI library
- `@prisma/client` ^5.22.0 — Database ORM
- `prisma` ^5.22.0 — Database CLI/migrations (dev dependency)
- `next-auth` ^4.24.13 — Authentication
- `bcryptjs` ^3.0.3 — Password hashing
- `@replit/object-storage` ^1.0.0 — File storage on Replit
- `embla-carousel-react` / `embla-carousel-autoplay` ^8.6.0 — Image carousels
- `lucide-react` ^0.563.0 — Icons
- `date-fns` ^4.1.0 — Date formatting
- `clsx` / `tailwind-merge` — Utility class management
- `tailwindcss` ^4 / `@tailwindcss/postcss` — Styling

### External Services
- **PostgreSQL** — Primary database (Replit built-in or Neon for production)
- **Replit Object Storage** — File/image uploads (uses default bucket, no config needed)
- **Unsplash** — Placeholder images for hero slides and member photos
- **YouTube** — Embedded video on homepage (iframe embed)
- **E-Redes / Livro de Reclamações** — External links in FAQ section

### Environment Variables Required
| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (auto-set on Replit) |
| `NEXTAUTH_SECRET` | Secret for NextAuth JWT encryption |
| `NEXTAUTH_URL` | Public base URL for authentication callbacks |