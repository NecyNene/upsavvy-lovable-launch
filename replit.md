# Upsavvy Solutions Website

## Overview

This is a professional business consulting website for Upsavvy Solutions, a company that provides business systems setup, program structuring, and design support services to small businesses and community organizations. The application is built as a full-stack web application with a React frontend and Express backend, featuring a modern design system, contact form functionality, and comprehensive service showcases.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom design tokens following the brand color scheme (Navy, Teal, Light Gray, Charcoal, Golden Mustard)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **Design System**: Custom CSS variables and utility classes based on brand guidelines with Montserrat/Open Sans typography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas for request/response validation shared between frontend and backend
- **Error Handling**: Centralized error middleware with structured error responses
- **Development**: Hot reload with Vite middleware integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Cloud Database**: Neon Database serverless PostgreSQL for production
- **Development Storage**: In-memory storage implementation for development and testing
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple

### Database Schema Design
- **Users Table**: Basic user authentication with username/password
- **Contact Submissions Table**: Stores form submissions with name, email, message, and timestamp
- **Shared Schemas**: Type-safe schema definitions using Drizzle-Zod integration for consistent validation

### Authentication and Authorization
- **Session-based Authentication**: Traditional session management for secure user state
- **Form Validation**: Client and server-side validation using Zod schemas
- **Security**: CORS configuration and input sanitization

### Component Architecture
- **Atomic Design**: Organized component structure with UI primitives, composed components, and page-level components
- **Section-based Layout**: Modular page sections (Hero, About, Services, Testimonials, CTA) for maintainable content management
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI ensures WCAG compliance and keyboard navigation

### Development Workflow
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Code Quality**: ESLint and Prettier integration (implied from TypeScript setup)
- **Development Server**: Concurrent frontend/backend development with proxy configuration

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React integration for Vite
- **express**: Web application framework for Node.js
- **react**: Frontend framework for building user interfaces
- **typescript**: Type system for JavaScript

### Database and ORM
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: CLI tools for schema management and migrations
- **@neondatabase/serverless**: Neon database serverless driver
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Headless UI component primitives (accordion, dialog, dropdown, etc.)
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs
- **tailwind-merge**: Utility for merging Tailwind classes

### Form and Validation
- **react-hook-form**: Form management library
- **@hookform/resolvers**: Resolvers for validation libraries
- **zod**: TypeScript schema validation
- **drizzle-zod**: Integration between Drizzle and Zod

### State Management and API
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing

### Development Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **nanoid**: URL-safe unique ID generator