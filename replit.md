# Pace On Coaching Website

## Overview

This is a marketing website for "Pace On" — a performance coaching business for endurance athletes (triathlon, cycling, running). The site is a single-page application with smooth scroll navigation between sections: Welcome, Our Approach, Who We Are, What We Offer, How We Work, and Let's Talk (contact). It's built as a full-stack TypeScript application with a React frontend and Express backend, though the backend is minimal — the site is primarily a static content/branding site with no complex server logic currently.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router) — currently only has `/` (Home) and a 404 page
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin) with CSS variables for theming
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives — extensive component library already installed
- **Animations**: Framer Motion for scroll animations, fade-ins, and page transitions
- **State Management**: TanStack React Query for server state (minimal use currently)
- **Fonts**: League Spartan (headings/logo) and Century Gothic (body) loaded via Google Fonts
- **Color Palette**: Burnt Orange (#c85103), Olive Green (#6a714b), Black (#000000), Off-White (#f7f4f4) — defined as CSS custom properties in `client/src/index.css`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx`
- **API Pattern**: All API routes should be prefixed with `/api`
- **Storage**: Currently uses in-memory storage (`MemStorage` class in `server/storage.ts`). The storage interface (`IStorage`) is designed to be swapped to a database-backed implementation
- **Dev Server**: Vite dev server runs as middleware in development (configured in `server/vite.ts`), with HMR support
- **Production**: Client is built with Vite, server is bundled with esbuild into `dist/index.cjs`

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently only has a `users` table with `id`, `username`, `password`
- **Validation**: Drizzle-Zod for generating Zod schemas from database tables
- **Migrations**: Drizzle Kit with `db:push` command, migrations output to `./migrations`
- **Connection**: Requires `DATABASE_URL` environment variable

### Build System
- **Dev**: `npm run dev` starts the Express server with Vite middleware for HMR
- **Build**: `npm run build` runs `script/build.ts` which builds the client with Vite and the server with esbuild
- **Production**: `npm start` runs the bundled `dist/index.cjs`

### Project Structure
```
client/           # Frontend React application
  src/
    components/ui/  # shadcn/ui component library
    pages/          # Page components (home.tsx, not-found.tsx)
    hooks/          # Custom React hooks
    lib/            # Utilities (queryClient, cn helper)
  public/           # Static assets
  index.html        # HTML entry point
server/           # Backend Express application
  index.ts          # Server entry point
  routes.ts         # API route registration
  storage.ts        # Data storage interface and in-memory implementation
  static.ts         # Static file serving for production
  vite.ts           # Vite dev server middleware
shared/           # Shared code between client and server
  schema.ts         # Drizzle database schema and Zod types
attached_assets/  # Reference content and images for the site
script/           # Build scripts
```

### Key Design Decisions
1. **Single-page scrolling site**: The home page contains all sections (Welcome, Approach, Who, Offer, Work, Talk) with smooth scroll navigation rather than separate routes — appropriate for a marketing/branding site
2. **In-memory storage with interface pattern**: Storage uses an interface (`IStorage`) so it can be easily swapped from `MemStorage` to a PostgreSQL-backed implementation using Drizzle
3. **Shared schema**: Database types are in `shared/schema.ts` so both client and server can use the same type definitions
4. **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

## External Dependencies

- **PostgreSQL**: Database (requires `DATABASE_URL` environment variable). Currently the app runs with in-memory storage but is configured for Postgres via Drizzle
- **Google Fonts**: League Spartan and Century Gothic fonts loaded externally
- **TrainingPeaks**: Referenced in content as the platform where training plans are delivered (not a code integration)
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — development tooling for the Replit environment
- **No external APIs currently integrated**: The site is content-focused with no payment processing, email services, or third-party API calls in the codebase