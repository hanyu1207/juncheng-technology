import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

test("package scripts target standard Next.js static export", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8"));

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.preview, "serve out");
  assert.equal(packageJson.scripts.test, "next build && node --test tests/*.test.mjs");
  assert.equal(packageJson.packageManager, "pnpm@11.19.0");
  assert.equal(packageJson.dependencies.next, "16.2.6");
  assert.equal(packageJson.devDependencies.serve, "14.2.5");
  assert.equal(packageJson.devDependencies.vinext, undefined);
  assert.equal(packageJson.devDependencies.wrangler, undefined);
  assert.equal(packageJson.devDependencies["@openai/sites-vite-plugin"], undefined);
});

test("static hosting configuration points every platform at out", async () => {
  const esa = JSON.parse(await readFile("esa.jsonc", "utf8"));
  const vercel = JSON.parse(await readFile("vercel.json", "utf8"));
  const netlify = await readFile("netlify.toml", "utf8");
  const workflow = await readFile(".github/workflows/ci.yml", "utf8");

  assert.equal(esa.name, "juncheng-technology");
  assert.equal(esa.installCommand, "pnpm install --frozen-lockfile");
  assert.equal(esa.buildCommand, "pnpm run build");
  assert.equal(esa.assets.directory, "./out");
  assert.equal(esa.assets.notFoundStrategy, "404Page");
  assert.equal(vercel.buildCommand, "pnpm run build");
  assert.equal(vercel.outputDirectory, "out");
  assert.match(netlify, /command = "pnpm run build"/);
  assert.match(netlify, /publish = "out"/);
  assert.match(workflow, /pnpm run lint/);
  assert.match(workflow, /pnpm test/);
});

test("Next static export emits browsable HTML files", async () => {
  assert.equal(await exists("out/index.html"), true);
  assert.equal(await exists("out/products/index.html"), true);
  assert.equal(await exists("out/products/pcie-gen5/index.html"), true);

  const html = await readFile("out/products/pcie-gen5/index.html", "utf8");
  assert.match(html, /8 通道 PCIe Gen5 根组件模块/);
  assert.match(html, /产品特性/);
});
