# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run Biome linter to check code quality
- `npm run format` - Format code with Biome
- `npx tsc --noEmit` - Type-check TypeScript code without emitting files

## Architecture

This is a Next.js 15 application using the App Router with TypeScript and Tailwind CSS v4.

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/lib/` - Utility functions and shared code
- Path alias: `@/*` maps to `./src/*`

### Key Technologies
- **Framework**: Next.js 15 with Turbopack
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting/Formatting**: Biome (replaces ESLint/Prettier)
- **Git Hooks**: Lefthook for pre-commit and pre-push checks
- **UI Libraries**: Radix UI primitives, Framer Motion for animations, Lucide React for icons

### Development Workflow
- Pre-commit hooks automatically run Biome to format and fix staged files
- Pre-push hooks validate code before pushing to remote
- Use the `cn()` utility from `src/lib/utils.ts` for combining Tailwind classes with clsx and tailwind-merge