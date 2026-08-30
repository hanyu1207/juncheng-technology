import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const appRoot = new URL("../app/", import.meta.url);
const contentRoot = new URL("../content/", import.meta.url);
const appRootPath = fileURLToPath(appRoot);
const contentRootPath = fileURLToPath(contentRoot);

async function readExportedHtml(pathname = "/") {
  const normalized = pathname.replace(/^\/|\/$/g, "");
  const filePath = normalized ? `out/${normalized}/index.html` : "out/index.html";
  await stat(filePath);
  return readFile(filePath, "utf8");
}

async function listFiles(dir, extensions) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listFiles(absolutePath, extensions);
      }
      return extensions.some((extension) => entry.name.endsWith(extension)) ? [absolutePath] : [];
    }),
  );

  return files.flat();
}

test("exports the Juncheng Technology homepage as static HTML", async () => {
  const [site, home] = await Promise.all([
    readFile(new URL("site.json", contentRoot), "utf8").then(JSON.parse),
    readFile(new URL("home.json", contentRoot), "utf8").then(JSON.parse),
  ]);

  const html = await readExportedHtml();
  assert.match(html, new RegExp(site.brand.name));
  assert.match(html, new RegExp(home.hero.title));
  assert.match(html, new RegExp(home.featuredProducts.title));
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("exports product details from content data as static HTML", async () => {
  const productsPage = await readFile(new URL("products.json", contentRoot), "utf8").then(
    JSON.parse,
  );
  const product = productsPage.products.find((item) => item.detail);

  assert.ok(product);

  const html = await readExportedHtml(`/products/${product.slug}`);
  assert.ok(html.includes(product.name));
  assert.ok(html.includes(product.code));
  assert.ok(html.includes(productsPage.detailPage.featureTitle));
});

test("keeps editable Chinese site copy in content files", async () => {
  const contentFiles = await listFiles(contentRootPath, [".json", ".md"]);
  const appFiles = await listFiles(appRootPath, [".ts", ".tsx"]);

  assert.ok(contentFiles.length >= 8);
  assert.ok(appFiles.length >= 1);

  for (const file of contentFiles.filter((item) => item.endsWith(".json"))) {
    const source = await readFile(file, "utf8");
    assert.doesNotThrow(() => JSON.parse(source));
  }

  for (const file of appFiles) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(source, /\p{Script=Han}/u, `${file} contains Chinese copy`);
  }
});
