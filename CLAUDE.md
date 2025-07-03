# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a business website for ASD Judo Kodokan Lentini, a martial arts gym in Lentini, Sicily. Built with Next.js 15.3.4 using the App Router, TypeScript, and Tailwind CSS v4.1.11.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production (required before deployment)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code quality checks

## Architecture & Key Concepts

### Data-Driven Content Management
The site uses a modular content management system where business data is stored in TypeScript files:

- **`/app/data/gare.ts`** - Competition schedules, results, and tournament data
- **`/app/data/pacchetti.ts`** - Pricing packages and subscription options

These files include comprehensive inline documentation for client modifications. When editing content, always maintain TypeScript interfaces and follow the existing data structure patterns.

### Design System
Custom Tailwind CSS v4 theme with Japanese-inspired martial arts aesthetics:
- **Gradients**: `bg-gradient-red-warm`, `bg-gradient-gold`, `bg-gradient-gray` 
- **Animations**: `animate-float`, `animate-spin-slow`, `hover-lift`, `hover-scale`
- **Patterns**: `pattern-seigaiha` (Japanese wave pattern)
- **Shadows**: `shadow-soft`, `shadow-glow`, `shadow-gold`

### Component Structure
- **Layout Components**: Header with responsive mobile menu, Footer with business info
- **Page Pattern**: Consistent hero sections, standardized spacing (py-20), decorative elements
- **Responsive Design**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints

### SEO & Performance Features
- **Structured Data**: JSON-LD schema in `StructuredData.tsx` for local business SEO
- **Image Optimization**: WebP/AVIF formats, remote patterns configured
- **Security Headers**: CSP, X-Frame-Options, and caching strategies in `next.config.ts`
- **Automatic Sitemap**: Generated from route structure with proper priorities

## Important Patterns

### Content Updates
When modifying business content (competitions, pricing, schedules):
1. Edit the corresponding file in `/app/data/`
2. Follow existing TypeScript interfaces
3. Maintain inline documentation for client reference
4. Test build with `npm run build` to ensure type safety

### Image Management
- **Placeholder System**: Gray blocks (`bg-gray-200`) for missing images
- **No "foto in arrivo" text** - Client specifically requested clean placeholders
- **Future Images**: Should be placed in `/public/images/` with organized subfolders (staff/, palestra/, discipline/, gare/)

### Styling Consistency
- **Remove Glassmorphism**: Client specifically requested no glass effects due to mobile issues
- **Hero Sections**: Standardized across all pages with consistent gradients and decorative elements
- **Japanese Aesthetics**: Maintain traditional martial arts visual theme throughout

### Local Business Focus
- **Contact Integration**: Phone numbers as clickable links, Google Maps ready addresses
- **Local SEO**: Optimized for "judo lentini", "arti marziali lentini" keywords
- **Business Hours**: Structured data for Google My Business integration
- **Social Proof**: 5-star rating display (118 reviews) in structured data

## Client Documentation
The `ISTRUZIONI_CLIENTE.md` file (located in parent directory) contains comprehensive instructions for client content management. Refer to this when making content-related changes to understand the client's workflow and requirements.

## Development Notes
- **TypeScript**: Strict mode enabled, maintain type safety for all data structures
- **Mobile-First**: All components must work on mobile devices
- **Performance**: Build times may be long due to comprehensive TypeScript checking
- **Content Strategy**: Designed for easy client updates without developer intervention