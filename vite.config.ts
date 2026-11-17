// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// A variable (not an inline literal) because the wrapper's types omit
// `entry`, though it passes it straight through to nitro.
const nitro = {
  // static: no server, .output/public only — no Node process, no "Setup
  // Node.js App" in cPanel, just upload the prerendered files. Nitro's
  // prerenderer crawls from / and renders every route to HTML.
  preset: "static",
  // The static preset ships no server entry, so nitro's (unused) final
  // server build falls back to index.html and crashes. Point it at nitro's
  // own generic entry; the resulting .output/server is never deployed.
  entry: "./node_modules/nitro/dist/presets/standard/runtime/server.mjs",
};

export default defineConfig({ nitro });
