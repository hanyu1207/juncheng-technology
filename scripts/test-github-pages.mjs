import { spawnSync } from "node:child_process";

const build = spawnSync("node", ["scripts/build-github-pages.mjs"], {
  shell: true,
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const test = spawnSync("node", ["--test", "tests/github-pages.test.mjs"], {
  env: {
    ...process.env,
    GITHUB_PAGES_TEST: "1",
  },
  shell: true,
  stdio: "inherit",
});

process.exit(test.status ?? 1);

