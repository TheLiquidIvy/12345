# PixelPlaque - Digital Agency Portfolio & CMS

## Overview

PixelPlaque is a modern digital agency website featuring a cyberpunk aesthetic ("Code. Design. Disturb the Algorithm"). The application combines a client-facing portfolio/marketing site with a comprehensive content management system (CMS) for managing blog posts and portfolio projects. Built with React, TypeScript, and Vite, it emphasizes bold visual design, smooth animations, and user-friendly content editing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and dev server, configured to run on port 5000
- React Router DOM for client-side routing with protected admin routes

**Design System**
- Shadcn UI component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom cyberpunk theme
- Design philosophy: "Cyberpunk meets professionalism" with magenta/cyan/lime color scheme
- Dark mode by default with light mode support via Zustand theme store

**State Management**
- Zustand for global state (authentication and theme preferences)
- React Hook Form with Zod validation for form handling
- Local state management with React hooks for component-level state

**Rich Text Editing**
- TipTap WYSIWYG editor with extensions for:
  - Text formatting (bold, italic, underline, headings, lists, alignment)
  - Image uploads with cropping capability
  - Link management
  - Code blocks and quotes
- Auto-save functionality (3-second debounce) for draft content

**Image Management**
- React Dropzone for drag-and-drop file uploads
- React Easy Crop for image cropping with 16:9 aspect ratio
- Integration with Firebase Storage for image hosting

### Backend Architecture

**Authentication**
- Firebase Authentication for user login/logout
- Protected routes using custom `ProtectedRoute` component
- Email-based authentication with hardcoded admin email check in auth store
- Auth state persisted in Zustand store

**Data Layer**
- Drizzle ORM schema definitions for:
  - Blog posts (title, content, excerpt, category, status, SEO fields, timestamps)
  - Portfolio projects (title, description, content, category, status, SEO fields)
  - Tags system with many-to-many relationship to blog posts
- SQLite as the intended database (schema defined but no active database connection visible)
- Content status workflow: draft/published states

**API Structure**
- Express server setup in `server/index.ts` (runs on port 3001)
- Contact form endpoint at `/api/contact` with basic validation
- No active database API routes (CRUD operations handled client-side with mock data)

### External Dependencies

**Firebase Services**
- Firebase Authentication for user management
- Firebase Storage for image/media uploads
- Configuration placeholders in `src/lib/firebase.ts` requiring project-specific credentials

**UI Component Libraries**
- Radix UI components (@radix-ui/react-*) for accessible primitives
- TanStack React Table for data table functionality
- Framer Motion for animations and transitions
- Lucide React for icon system

**Third-Party Integrations**
- Google Fonts (Inter and Space Grotesk)
- React Dropzone for file uploads
- React Easy Crop for image manipulation
- Input-OTP for one-time password inputs
- CMDK for command palette functionality

**Development Tools**
- TypeScript with relaxed linting configuration (strict mode disabled)
- ESLint with React plugins
- PostCSS with Tailwind and Autoprefixer
- @devvai/devv-tagger-plugin for Vite component tagging

**Deployment Targets**
- Firebase Hosting (configured in `.idx/integrations.json`)
- Google Cloud Run (deployment ready)
- Google Maps Platform integration available

### Key Architectural Decisions

**Routing Strategy**
- Client-side routing with nested route structure
- Public routes wrapped in `Layout` component for consistent header/footer
- Protected admin routes (`/admin/*`) requiring authentication
- 404 handling with custom NotFoundPage component

**Content Management Approach**
- Dual content types (blog posts and portfolio items) managed through unified CMS interface
- Tab-based interface for switching between content types
- WYSIWYG editing experience prioritizing Microsoft Word-like familiarity
- SEO optimization fields (meta titles, descriptions, OG images) built into content model

**Image Handling**
- Client-side image cropping before upload to optimize storage and UX
- Firebase Storage URLs embedded directly in content HTML
- Organized storage paths (`blog/` and `portfolio/` prefixes with timestamps)

**Authentication Flow**
- Single admin user model with hardcoded email check
- Firebase session management for authentication persistence
- Redirect to dashboard on successful login
- Auth state synchronized with Zustand store

**Styling Architecture**
- CSS custom properties for theme variables (HSL color format)
- Utility-first approach with Tailwind's extend configuration
- Cyberpunk design tokens (glow effects, scan lines, cyber grids)
- Component-specific styles in index.css with detailed design system documentation