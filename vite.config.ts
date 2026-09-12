// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Every route here has no loaders/server functions, so the whole site
    // can prerender to plain HTML at build time — TanStack Start's own
    // prerender option (not nitro's) is what actually renders each route.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  nitro: {
    // static: no server, .output/public only — no Node process, no "Setup
    // Node.js App" in cPanel, just upload the prerendered files.
    preset: "static",
  },
});
