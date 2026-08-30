# 钧程科技官网

这是钧程科技官网源码，当前工程位置是 `E:\work\web`。

网站已经整理为标准 Next.js 静态导出项目，适合部署到阿里云 ESA Pages。后续日常改官网内容，优先修改 `content` 文件夹里的 JSON 文件，不需要碰 `app` 里的页面代码。

## 内容入口

- `content/site.json`：公司名、导航、页脚、联系方式、全站标题和描述
- `content/home.json`：首页首屏、业务板块、热门产品、底部行动按钮
- `content/products.json`：产品分类、产品型号、产品介绍、详情页参数和套装；新增完整产品详情后会自动生成对应详情页
- `content/solutions.json`：解决方案场景、推荐硬件组合、方案说明
- `content/support.json`：技术资源、资料入口、FAQ 类内容
- `content/about.json`：公司介绍、能力数据、团队、生产、质量、服务说明
- `content/contact.json`：联系电话、邮箱、地址、询价表单字段

更详细的修改规则见 `content/README.md`。

## 本地预览

需要 Node.js `>=22.13.0`，建议使用 Node.js 24。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

启动后访问命令行里显示的本地地址，通常是 `http://localhost:3000`。

## 构建检查

```bash
pnpm run lint
pnpm test
```

`pnpm test` 会先执行 `next build`，并检查静态导出的 HTML 页面是否生成到 `out` 目录。

## 阿里云 ESA Pages 发布

仓库根目录已经包含 `esa.jsonc`，阿里云 ESA Pages 可以按这个配置构建：

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

如果阿里云控制台需要手动填写，使用这些值：

- 安装命令：`pnpm install --frozen-lockfile`
- 构建命令：`pnpm run build`
- 输出目录：`out`
- 根目录：仓库根目录
- Node.js：建议 24，最低 `>=22.13.0`

你发的 `https://esa.console.aliyun.com/.../buildStatus/...` 是阿里云后台构建状态页，不是别人访问官网的网址。部署成功后，ESA Pages 会生成公共访问域名，但这个域名更适合预览测试，阿里云可能要求带 token 访问。要让其他人长期直接打开，建议在 ESA Pages 里绑定自己的正式域名，然后把这个自定义域名发给别人。

## 日常更新流程

1. 修改 `content` 目录里的 JSON 文件。
2. 本地运行 `pnpm test`。
3. 提交并推送到连接 ESA Pages 的代码仓库：

```bash
git add content
git commit -m "content: update website copy"
git push
```

推送后，阿里云 ESA Pages 会自动重新构建并更新线上站点。绑定自定义域名后，别人打开的就是这个正式域名。

## GitHub Pages 临时公开预览

这个仓库也配置了 GitHub Pages 自动发布。推送到 GitHub 的 `main` 分支后，可以临时把这个地址发给别人看：

```text
https://hanyu1207.github.io/juncheng-technology/
```

GitHub Pages 适合临时预览，不需要 token，也不需要别人装开发环境。后续正式官网仍建议使用自定义域名。

## 代码目录

- `app/`：页面渲染代码，平时不用改
- `content/`：官网文案和产品数据，日常主要修改这里
- `public/`：图片、图标等静态资源
- `out/`：构建产物，由 `pnpm run build` 自动生成，不需要手动编辑
- `esa.jsonc`：阿里云 ESA Pages 构建配置
