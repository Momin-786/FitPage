# FitPulse Fitness Website

## Overview

FitPulse is a modern fitness website built as a single-page application featuring a landing page for a fitness gym/training business. The application showcases fitness programs, trainers, success stories, pricing plans, and includes a contact form for lead generation. It's built with React, TypeScript, and Tailwind CSS on the frontend, with an Express.js backend and PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system featuring brand colors (orange-primary, blue-secondary, lime-accent, charcoal)
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui design system
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Notifications**: Custom toast system using Radix UI Toast primitives 

### Backend Architecture
- **Framework**: Express.js with TypeScript  npx tsx server/index.ts
- **Build System**: ESBuild for production builds, tsx for development
- **API Design**: RESTful API endpoints for contact form submissions and data retrieval
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Vite integration for hot module replacement and seamless full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL configured for production use
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Defined in shared directory for type safety across frontend and backend
- **Development Storage**: In-memory storage implementation for development/testing
- **Migrations**: Drizzle Kit for database schema migrations

### Component Architecture
- **Design System**: Custom theme with CSS variables for consistent styling
- **Component Structure**: Modular section-based components (Hero, Programs, Trainers, Pricing, Contact, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation

### Development Features
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Path Mapping**: Configured aliases for clean imports (@/, @shared/, etc.)
- **Code Quality**: ESLint and TypeScript compiler checks
- **Hot Reload**: Vite development server with error overlays

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Dynamic className composition

### Data and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for forms and API data
- **Drizzle ORM**: Type-safe database ORM
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

### Database and Backend
- **PostgreSQL**: Primary database (Neon Database serverless)
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality
- **wouter**: Lightweight router for React