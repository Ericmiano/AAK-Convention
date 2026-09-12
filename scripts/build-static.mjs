// `vite build` (nitro preset "static") fully prerenders every route to
// .output/public and then crashes in an unused trailing step: nitro's
// static preset doesn't set its own server `entry`, so the final
// (never-deployed) server bundle falls back to the client's index.html and
// rolldown rejects it ("should not be an html file when building for SSR").
// That's a known upstream gap in this nitro beta, not a real build failure —
// the actual static site is already complete on disk by the time it happens.
// This wrapper runs the real build, and only swallows a non-zero exit when
// it's provably that exact, harmless failure with a complete site behind it.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), ".output", "public");
const expectedRoutes = [
  "index.html",
  "programme/index.html",
  "register/index.html",
  "diani/index.html",
  "tours/index.html",
];
const knownBenignError = "rolldownOptions.input should not be an html file when building for SSR";

rmSync(join(process.cwd(), ".output"), { recursive: true, force: true });

const result = spawnSync("npx", ["vite", "build"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: true,
  encoding: "utf8",
});

process.stdout.write(result.stdout ?? "");
process.stderr.write(result.stderr ?? "");

if (result.status === 0) {
  console.log("\nStatic build succeeded.");
  process.exit(0);
}

const combinedOutput = `${result.stdout ?? ""}${result.stderr ?? ""}`;
const isKnownBenignFailure = combinedOutput.includes(knownBenignError);
const missingRoutes = expectedRoutes.filter((route) => !existsSync(join(outDir, route)));
const emptyRoutes = expectedRoutes.filter((route) => {
  const path = join(outDir, route);
  return existsSync(path) && readFileSync(path, "utf8").trim().length === 0;
});

if (isKnownBenignFailure && missingRoutes.length === 0 && emptyRoutes.length === 0) {
  console.log(
    "\n`vite build` exited non-zero, but only from the known unused trailing server-bundle step " +
      "(see comment at the top of scripts/build-static.mjs). All 5 routes prerendered successfully " +
      "to .output/public — treating this as a successful static build.",
  );
  process.exit(0);
}

console.error(
  "\nBuild failed for a reason other than the known benign trailing error, or the static output is incomplete:",
);
if (missingRoutes.length > 0) console.error(`  Missing: ${missingRoutes.join(", ")}`);
if (emptyRoutes.length > 0) console.error(`  Empty: ${emptyRoutes.join(", ")}`);
if (!isKnownBenignFailure)
  console.error("  The error output did not match the known benign signature.");
process.exit(result.status ?? 1);
