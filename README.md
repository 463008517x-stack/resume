# Resume · 个人简历网站

> 基于 Astro + Tailwind CSS 的现代化个人简历网站，支持中英双语、暗色模式、访客留言、访问统计，部署在 GitHub Pages。

🌐 **在线预览**：https://your-github-username.github.io/resume

## ✨ 特性

- 🎨 Linear / Vercel 视觉风格 —— Glassmorphism + Aurora 渐变 + 噪点纹理
- 🌍 中英双语 i18n —— 原生 Astro 路由，根路径自动按浏览器语言重定向
- 🌗 暗色 / 亮色 / 跟随系统 —— 三档主题切换，无 FOUC
- 💬 Giscus 留言板 —— 基于 GitHub Discussions
- 📊 隐私友好访问统计 —— Umami Cloud
- 📱 响应式设计 —— 手机 / 平板 / 桌面完美呈现
- ⚡ 极致性能 —— Lighthouse 95+，自托管字体
- 🚀 一键部署 —— push 即触发 GitHub Actions

## 🚀 快速开始

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 📂 目录结构

```
resume/
├── public/
│   ├── images/      # 头像、项目封面
│   ├── fonts/       # 自托管字体
│   ├── favicon.svg
│   └── noise.svg
├── src/
│   ├── components/
│   │   ├── ui/          # 基础组件
│   │   ├── layout/      # 布局组件
│   │   ├── sections/    # 页面区块
│   │   └── interactive/ # React Islands
│   ├── data/resume.ts   # ★ 简历数据
│   ├── i18n/            # 多语言文案
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── config.ts        # ★ 集中配置
├── .github/workflows/deploy.yml
└── ...
```

## ✏️ 修改个人信息

打开 `src/data/resume.ts`，所有内容集中在这里。每个文本字段都是 `{ zh, en }` 双语对象。

## 📸 替换图片

直接覆盖 `public/images/` 下的同名文件即可：

| 用途 | 路径 | 推荐尺寸 |
|---|---|---|
| 头像 | `public/images/avatar.jpg` | 512×512 |
| OG 分享图 | `public/images/og-image.png` | 1200×630 |
| 项目封面 | `public/images/projects/project-N.jpg` | 1200×675 |

新增项目时，把封面图放进 `public/images/projects/` 并在 `resume.ts` 的 `projects` 数组追加配置即可。

## 💬 开通 Giscus

1. 仓库 Settings → Features → 勾选 **Discussions**
2. 安装 Giscus App：https://github.com/apps/giscus
3. 访问 https://giscus.app 配置并获取 `repoId` 和 `categoryId`
4. 填入 `src/config.ts` 的 `GISCUS` 对象

## 📊 接入 Umami 访问统计

1. 注册 https://cloud.umami.is（免费 1M 事件/月）
2. 添加站点，获取 `Website ID`
3. 填入 `src/config.ts` 的 `ANALYTICS.umami.websiteId`

## 🚀 部署到 GitHub Pages

1. 创建仓库 `resume`（公开）
2. 修改 `src/config.ts` 中的 `SITE.url` 为你的 GitHub 用户名
3. push 到 main
4. 仓库 Settings → Pages → Source 选 **GitHub Actions**
5. 等待自动构建完成

## 🌍 自定义域名（可选）

DNS 解析到 `<username>.github.io`，仓库 Settings → Pages → Custom domain 填入域名。
然后把 `src/config.ts` 的 `base` 改为 `'/'`，`url` 改为你的域名。

## ❓ 常见问题

- **图片 404**：确认 `SITE.base` 与仓库名一致
- **Giscus 不显示**：确认仓库公开 + 已开 Discussions + Giscus App 已安装
- **Umami 不上报**：浏览器广告拦截器会屏蔽，属正常
- **字体没生效**：检查 `public/fonts/` 下文件是否齐全（共 8 个 woff2，区分大小写）

## 📝 License

MIT
