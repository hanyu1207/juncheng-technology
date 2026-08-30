import { spawnSync } from "node:child_process";

const result = spawnSync("next", ["build"], {
  env: {
    ...process.env,
    NEXT_PUBLIC_BASE_PATH: "/juncheng-technology",
    NEXT_PUBLIC_SITE_URL: "https://hanyu1207.github.io/juncheng-technology",
  },
  shell: true,
  stdio: "inherit",
});

process.exit(result.status ?? 1);

