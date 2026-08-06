# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 corporate portal using the App Router, React 19, TypeScript, and Tailwind CSS. Route entry points live in `app/`, with top-level pages such as `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, and `app/contact/page.tsx`. Shared UI and page sections live in `components/`; reusable primitives are under `components/ui/`. Utility functions and static data live in `lib/`, including `lib/utils.ts` and `lib/brochure-data.ts`. Static images and brochure assets belong in `public/`. Build output in `out/` and dependencies in `node_modules/` should not be edited manually.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build and catch type/build errors.
- `npm run start`: serve the production build locally after building.
- `npm run lint`: run the Next.js ESLint checks configured for the project.

Use `npm install` when dependencies change, and commit the resulting `package-lock.json` updates.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Keep filenames kebab-case for components and routes, such as `service-card.tsx` or `newsletter-section.tsx`; export React components in PascalCase. Use the `@/` path alias for imports from the repository root. Follow the existing style: two-space indentation, double quotes, semicolons, and Tailwind utility classes in JSX. Compose class names with `cn()` from `lib/utils.ts` when merging conditional or variant classes.

## Testing Guidelines

No dedicated test runner is currently configured. For now, verify changes with `npm run lint` and `npm run build`. When adding tests, prefer co-located files named `*.test.ts` or `*.test.tsx`, and add an `npm test` script so future contributors have one obvious command. Cover route behavior, shared UI variants, and data-driven rendering when those areas change.

## Commit & Pull Request Guidelines

Recent history uses short, plain commit messages such as `Initial commit` and `New changes`; keep commits concise and outcome-focused, for example `Update services page content`. Pull requests should include a brief summary, verification commands run, linked issue or task references when available, and screenshots for visible UI changes. Note any follow-up work or known limitations clearly.

## Security & Configuration Tips

Do not commit secrets, local environment files, or generated dependency folders. Keep public-facing assets in `public/`, and verify image licensing before adding new files. Prefer configuration changes in `next.config.ts`, `tailwind.config.ts`, or `tsconfig.json` over ad hoc runtime workarounds.
