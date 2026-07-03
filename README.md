# Halfhand Website

The landing page and documentation site for [Halfhand](https://halfhand.org), built with Next.js 15, React 19, and Tailwind CSS.

## Overview

Halfhand is a local-first developer tool for recording, replaying, and debugging AI agent execution. This repository contains the source code for the public-facing landing page (`halfhand.org`).

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19 RC
- **Styling:** Tailwind CSS + `clsx` + `tailwind-merge`
- **Icons:** Lucide React
- **Fonts:** Geist (Sans & Mono)
- **Deployment:** GitHub Pages via GitHub Actions (Static Export)

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/halfhandorg/halfhand.org.git
cd halfhand.org
npm install --legacy-peer-deps
```
*(Note: `--legacy-peer-deps` is required due to React 19 RC peer dependency resolution in the current Next.js ecosystem).*

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. Changes will hot-reload automatically.

## Deployment

This site is automatically deployed to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`). 

Pushing to the `main` branch will trigger a production build using `next build` (with `output: "export"` configured in `next.config.ts`), and the resulting static files will be published to the `github-pages` environment.

## License

MIT
