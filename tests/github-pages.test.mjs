import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test(
  "GitHub Pages export prefixes assets and internal links with repository path",
  { skip: process.env.GITHUB_PAGES_TEST !== "1" },
  async () => {
    const html = await readFile("out/index.html", "utf8");

    assert.match(html, /href="\/juncheng-technology\/_next\/static\//);
    assert.match(html, /src="\/juncheng-technology\/hardware-lab\.png"/);
    assert.match(html, /href="\/juncheng-technology\/products\/pcie-gen5"/);
    assert.match(html, /href="\/juncheng-technology\/contact"/);
  },
);
