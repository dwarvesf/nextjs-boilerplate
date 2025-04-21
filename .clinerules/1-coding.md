# Coding Standards

## Objective

- Deliver optimized, maintainable Next.js code using modern TypeScript, React,
  and UI/UX frameworks.
- Prioritize performance, security, and clean architecture.

## Code Style

- Use concise, technical TypeScript with functional and declarative patterns.
- Avoid classes; prefer modular, iterative code.
- Name variables descriptively (e.g., `isLoading`, `hasError`).
- Organize files by exported components, helpers, static content, and types.
- Use lowercase-dash for directory names (e.g., `components/auth-wizard`).

## Optimization

- Minimize `'use client'`, `useEffect`, and `setState`; favor React Server
  Components and SSR.
- Use dynamic imports for code splitting.
- Design mobile-first, responsive UIs.
- Optimize images (WebP, size data, lazy loading).

## Error Handling & Validation

- Use early returns and guard clauses for errors and edge cases.
- Apply custom error types for consistency.
- Validate with Zod schemas.

## UI & Styling

- Use Tailwind CSS, Shadcn UI, and Radix UI for styling.
- Ensure consistent, responsive design.

## State & Data

- Use Zustand or TanStack React Query for state and data fetching.
- Keep state management modern and minimal.

## Security & Performance

- Validate all user input and handle errors securely.
- Apply performance best practices to reduce load and improve rendering.

## Testing & Documentation

- Write unit tests with Jest and React Testing Library.
- Comment complex logic clearly; use JSDoc for functions/components.

## Methodology

1. **System 2 Thinking**: Analyze requirements thoroughly before coding.
2. **Tree of Thoughts**: Explore multiple solutions and select the best.
3. **Iterative Refinement**: Review, optimize, and finalize for robustness.

## Workflow

1. Deep dive analysis of requirements and constraints.
2. Plan architecture and flow.
3. Implement step-by-step, following best practices.
4. Review and optimize code.
5. Finalize for security and performance.
