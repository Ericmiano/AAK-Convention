# AAK Annual Convention 2026

Site for the Architectural Association of Kenya's 2026 Annual Convention — "Shifting the Built
Environment from Fragility to Resilience" — 16–19 September 2026, Diani, Kenya.

Built with TanStack Start, React and Tailwind CSS.

## Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

No route on this site has a loader or server function, so the whole site prerenders to plain HTML at build time. Output is `.output/public/` — one `index.html` per route (`/`, `/programme/`, `/register/`, `/diani/`, `/tours/`) plus hashed JS/CSS/image assets. There's no server: **`.output/public/` is the entire deployable site**, servable by any static file host.

`npm run build` runs `scripts/build-static.mjs`, a thin wrapper around `vite build`. Nitro's `static` preset (pinned to `nitro@3.0.260610-beta` — an earlier beta 404s on every route) correctly prerenders all 5 routes but then crashes in an unused trailing step: it doesn't set its own server `entry`, so a server bundle nobody deploys falls back to the client's `index.html` and rolldown rejects it. The wrapper runs the real build, and only treats that specific, verified-harmless failure as success — it checks that all 5 route HTML files actually exist and are non-empty first. Any other failure still fails the build normally. Delete `scripts/build-static.mjs` and switch `nitro.preset` back to `"node-server"` in `vite.config.ts` once a nitro release fixes this (no other config needs to change).

## Testing the build locally

```sh
npm run build
npm start
```

`npm start` runs `npx serve .output/public` — a generic static file server, not part of this app — as a stand-in for what cPanel will do. If it looks right there, it'll look right on the real host.

## Deploying to cPanel

Zip the **contents** of `.output/public/` (not the folder itself) and upload/extract them into `public_html/` (or a subdomain's document root). That's the whole deployment — no "Setup Node.js App", no Passenger, no Node process to keep alive, no `node_modules` on the server.

`public/.htaccess` (copied into `.output/public/` on every build) adds the security headers, gzip, and cache-control that used to come from the Node server — Apache applies them via `mod_headers`/`mod_deflate`/`mod_expires`, all enabled by default on virtually every cPanel host. Requesting a route without a trailing slash (e.g. `/diani`) gets a normal Apache `mod_dir` redirect to `/diani/`, which serves fine — this is default Apache behavior, nothing extra to configure.

To rebuild after making changes, repeat `npm run build` and re-upload `.output/public/`.
