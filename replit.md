# Project Documentation

## Overview

This is a romantic birthday surprise website built as a full-stack application featuring a React frontend with Express.js backend. The application is designed to create an interactive, personalized birthday experience with love notes, photo memories, games, and special messages. It uses modern web technologies including TypeScript, Tailwind CSS, shadcn/ui components, and Drizzle ORM for database management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with React and TypeScript, using Vite as the build tool and development server. The UI framework leverages shadcn/ui components built on top of Radix UI primitives, providing a comprehensive set of accessible and customizable components. Tailwind CSS handles styling with a custom design system featuring romantic color schemes and typography including Dancing Script and Pacifico fonts.

The application follows a component-based architecture with dedicated sections for different features:
- Landing section with animated gift box and confetti effects
- Interactive love notes with flip card animations
- Photo slideshow for memories
- Balloon-popping game with hidden messages
- Surprise section with fireworks and star animations

State management is handled through React hooks and TanStack Query for server state management. The routing system uses Wouter for client-side navigation.

### Backend Architecture
The server is built with Express.js and TypeScript, providing a RESTful API structure. The application uses a modular approach with separate files for route registration, storage abstraction, and Vite integration for development.

Key backend components:
- Express server with JSON middleware and request logging
- Storage abstraction layer supporting both in-memory and database implementations
- Development-specific Vite middleware integration
- Error handling middleware with proper HTTP status codes

### Data Storage Solutions
The application implements a flexible storage architecture using Drizzle ORM with PostgreSQL as the target database. The schema is defined in a shared module accessible to both client and server code.

Database features:
- User management with username/password authentication
- UUID primary keys with PostgreSQL's gen_random_uuid()
- Drizzle-Zod integration for type-safe schema validation
- Migration support through drizzle-kit

A fallback in-memory storage implementation provides development flexibility and testing capabilities without requiring database setup.

### Development and Build System
The project uses a monorepo structure with shared TypeScript configurations and module resolution. Vite handles frontend bundling and development server functionality, while esbuild manages backend compilation for production.

The build system includes:
- Hot module replacement for development
- TypeScript compilation with strict mode
- Path aliases for clean imports (@/, @shared/, @assets/)
- PostCSS with Tailwind CSS processing
- Production optimization with code splitting

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive primitive component library providing accessibility-first building blocks
- **shadcn/ui**: Pre-built component system with customizable design tokens
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **class-variance-authority**: Type-safe variant API for component styling
- **Embla Carousel**: Touch-friendly carousel component for photo galleries

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect support
- **@neondatabase/serverless**: Serverless PostgreSQL driver for cloud deployment
- **drizzle-zod**: Schema validation integration with Zod
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Validation resolver integration

### Development Tools
- **Vite**: Fast build tool with HMR and modern JavaScript features
- **TypeScript**: Static type checking and enhanced developer experience
- **tsx**: TypeScript execution for Node.js development
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Utilities and Helpers
- **date-fns**: Modern date utility library
- **clsx**: Conditional className utility
- **nanoid**: URL-safe unique ID generator
- **Lucide React**: Icon library with tree-shaking support