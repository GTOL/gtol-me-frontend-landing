# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

Landing page for gtol.me — a React + TypeScript single-page app built with Vite and styled with Tailwind CSS v4.

## Commands

- `npm run dev` — start dev server with HMR
- `npm run build` — type-check with `tsc -b` then build with Vite
- `npm run lint` — run ESLint across the project
- `npm run preview` — preview the production build locally

## Tech Stack

- React 19 with TypeScript (~5.8)
- Vite 7 with `@vitejs/plugin-react`
- Tailwind CSS 4 via `@tailwindcss/vite` plugin (no `tailwind.config` file — uses CSS-based config in `src/index.css`)
- ESLint 9 flat config with typescript-eslint, react-hooks, and react-refresh plugins
- Google Fonts: Noto Sans SC and Noto Serif SC loaded in `index.html`

## Deployment

- Docker multi-stage build: Node 20 Alpine (build) → Nginx Alpine (serve static from `dist/`)
- GitHub Actions workflow (`.github/workflows/deploy.yml`) — manual trigger (`workflow_dispatch`), builds image, SCPs to server, deploys via `docker compose`
