# 自动发布说明

这个官网已经改成标准 Next.js 静态导出项目。构建命令是 `pnpm run build`，产物目录是 `out`。

## 推荐：Vercel

1. 把 `E:\work\web` 推送到 GitHub 仓库。
2. 在 Vercel 导入这个 GitHub 仓库。
3. Framework Preset 选择 `Next.js`。
4. Build Command 填 `pnpm run build`。
5. Output Directory 填 `out`。
6. 每次推送到 GitHub 主分支后，Vercel 会自动重新部署。

## 首次推送到 GitHub

在 GitHub 新建一个空仓库，例如 `juncheng-technology-website`，不要勾选自动创建 README。然后在 `E:\work\web` 运行：

```bash
git add .
git commit -m "chore: switch website to static auto deploy"
git branch -M main
git remote add origin https://github.com/你的用户名/juncheng-technology-website.git
git push -u origin main
```

如果仓库已经存在，只需要把 `git remote add origin ...` 里的地址换成你的仓库地址。

## Cloudflare Pages

1. 在 Cloudflare Pages 连接同一个 GitHub 仓库。
2. Build Command 填 `pnpm run build`。
3. Build Output Directory 填 `out`。
4. 每次推送到 GitHub 主分支后，Cloudflare Pages 会自动重新部署。

## Netlify

仓库里已经有 `netlify.toml`，导入 GitHub 仓库后 Netlify 会读取：

```toml
[build]
  command = "pnpm run build"
  publish = "out"
```

## 日常更新流程

1. 修改 `content` 目录里的 JSON。
2. 本地运行 `pnpm test`。
3. 提交并推送到 GitHub：

```bash
git add content
git commit -m "content: update website copy"
git push
```

4. 托管平台自动上线。

## 上线后更新站点地址

拿到 Vercel、Cloudflare Pages、Netlify 或自定义域名后，把 `content/site.json` 里的 `url` 改成正式网址。
