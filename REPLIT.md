# Freguesia Web - Replit Project

## Overview
A Next.js 16 web application for "Freguesia de Porto de Mós" - a Portuguese local government (parish) website. Features news, documents, services, and an admin panel with authentication.

## Recent Changes
- 2026-02-09: Initial Replit setup - configured database, environment, and deployment

## Project Architecture
- **Framework**: Next.js 16 with App Router (TypeScript)
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL via Prisma ORM
- **Authentication**: NextAuth.js v4
- **Storage**: Replit Object Storage for file uploads
- **UI**: Lucide React icons, Embla Carousel

## Key Files
- `next.config.ts` - Next.js configuration (allows all dev origins for Replit proxy)
- `prisma/schema.prisma` - Database schema (User, News, Document, Folder models)
- `lib/prisma.ts` - Prisma client singleton
- `app/api/auth/[...nextauth]/route.ts` - NextAuth API route
- `app/api/uploads/[...path]/route.ts` - File upload API

## Running
- **Dev**: `npx next dev -H 0.0.0.0 -p 5000`
- **Build**: `npm run build` (runs `prisma generate && next build`)
- **Production**: `npx next start -H 0.0.0.0`

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (auto-set by Replit)
- `NEXTAUTH_URL` - Public URL for authentication
- `NEXTAUTH_SECRET` - Secret key for NextAuth session encryption

## Database
Uses Replit's built-in PostgreSQL. Prisma migrations are in `prisma/migrations/`.
To apply: `npx prisma migrate deploy`

## User Preferences
- Portuguese language interface
