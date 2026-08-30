# 钧程科技官网

工程已迁移到 `E:\work\web`。后续日常改官网内容，优先修改 `content` 文件夹里的 JSON 文件，不需要碰 `app` 里的页面代码。

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

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

启动后访问命令行里显示的本地地址，通常是 `http://localhost:3000`。

## 构建检查

```bash
npm run build
```

构建通过后，说明 JSON 格式和页面生成没有明显问题。

## 远程发布

线上站点仍然是：

```text
https://juncheng-technology.richard-z-wang.chatgpt.site/
```

修改内容文件后，需要重新构建并发布，线上网站才会更新。发布相关配置保存在 `.openai/hosting.json`。

## 代码目录

- `app/`：页面渲染代码，平时不用改
- `public/`：图片、图标等静态资源
- `.openai/hosting.json`：Sites 项目绑定配置
