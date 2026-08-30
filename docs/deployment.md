# 阿里云 ESA Pages 发布说明

这个官网已经改成标准 Next.js 静态导出项目。构建命令是 `pnpm run build`，产物目录是 `out`。

## 当前推荐方案

使用阿里云 ESA Pages 连接代码仓库，项目名为 `juncheng-technology`。仓库根目录已经提供 `esa.jsonc`，让平台读取同一套构建配置：

```json
{
  "name": "juncheng-technology",
  "installCommand": "pnpm install --frozen-lockfile",
  "buildCommand": "pnpm run build",
  "assets": {
    "directory": "./out",
    "notFoundStrategy": "404Page"
  }
}
```

## 阿里云控制台怎么填

如果控制台没有自动读取配置，按下面填写：

- Root Directory：仓库根目录
- Install Command：`pnpm install --frozen-lockfile`
- Build Command：`pnpm run build`
- Output Directory：`out`
- Node.js Version：建议 24，最低 `>=22.13.0`

你发的 `https://esa.console.aliyun.com/edge/pages/juncheng-technology/buildStatus/175590480244956` 是构建状态页，只能用于后台管理和查看构建日志，不是官网访问地址。

别人访问的网站地址有两种：

- ESA Pages 生成的公共访问域名：部署成功后在项目详情里查看，主要用于预览测试，阿里云可能要求带 token 访问
- 自定义域名：在 ESA Pages 里绑定你自己的域名后，把这个域名发给别人，适合正式对外使用

## 第一次连接代码仓库

阿里云 ESA Pages 需要从代码源拉取 `E:\work\web` 里的项目。可以使用你在阿里云控制台里选择的代码源，例如 GitHub 或其他受支持的仓库服务。

如果使用 GitHub，新建空仓库后在 `E:\work\web` 运行：

```bash
git add .
git commit -m "chore: prepare website for aliyun esa pages"
git branch -M main
git remote add origin https://github.com/你的用户名/juncheng-technology-website.git
git push -u origin main
```

如果仓库已经存在，只需要把 `git remote add origin ...` 里的地址换成你的仓库地址。当前仓库已经有远程 `origin` 时，不要重复添加，改用：

```bash
git remote set-url origin https://github.com/你的用户名/juncheng-technology-website.git
git push -u origin main
```

## 日常更新流程

以后修改官网内容时：

1. 修改 `content` 目录里的 JSON。
2. 本地运行检查：

```bash
pnpm test
```

3. 提交并推送：

```bash
git add content
git commit -m "content: update website copy"
git push
```

4. 阿里云 ESA Pages 自动拉取新代码、执行构建，并更新线上站点。

## GitHub Pages 临时预览

仓库已经配置 GitHub Pages 自动部署。推送到 `main` 分支后，GitHub Actions 会构建带仓库子路径的静态站点，并发布到：

```text
https://hanyu1207.github.io/juncheng-technology/
```

这个地址适合先发给别人看页面效果，不需要阿里云预览 token。它不是最终企业官网域名，正式对外仍建议绑定自定义域名。

## 上线后更新站点地址

拿到正式对外使用的自定义域名后，把 `content/site.json` 里的 `url` 改成正式网址。这个值用于网页的 SEO 和分享卡片地址。

## 备用平台配置

仓库里仍保留 `vercel.json` 和 `netlify.toml`，只是备用。当前主流程以阿里云 ESA Pages 为准。
