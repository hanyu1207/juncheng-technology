# 官网内容修改说明

以后你主要改这个 `content` 文件夹，不需要碰 `app` 里的页面代码。

## 文件对应关系

- `site.json`：公司名、导航、页脚、联系方式、全站标题和描述
- `home.json`：首页首屏、业务板块、热门产品、底部行动按钮
- `products.json`：产品分类、产品型号、产品介绍、详情页参数和套装
- `solutions.json`：解决方案场景、推荐硬件组合、方案说明
- `support.json`：技术资源、资料入口、FAQ 类内容
- `about.json`：公司介绍、能力数据、团队/生产/质量/服务说明
- `contact.json`：联系电话、邮箱、地址、询价表单字段

## 修改规则

1. 只改双引号里面的文字最安全。
2. 新增产品时，复制 `products.json` 里的一个产品对象，然后修改 `slug`、`code`、`name` 等字段。
3. `slug` 只能用英文小写、数字和连字符，比如 `pcie-gen5`。
4. 如果某个产品需要详情页，必须填写 `detail`、`features`、`kit`、`architecture`、`applications`；填完整后会自动生成 `/products/你的-slug` 详情页。
5. 修改图片时，把图片放到 `public` 文件夹，再在内容文件里写 `/图片文件名.png`。
6. 改完内容后，需要重新构建和发布，线上网站才会更新。
