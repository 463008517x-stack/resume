# 字体目录

请下载以下 woff2 字体文件放入此目录：

## Geist & Geist Mono（Vercel 开源字体）
- `Geist-Regular.woff2`
- `Geist-Medium.woff2`
- `Geist-SemiBold.woff2`
- `Geist-Bold.woff2`
- `GeistMono-Regular.woff2`

下载地址：https://vercel.com/font 或 https://github.com/vercel/geist-font

## Noto Sans SC（Google 思源黑体）
- `NotoSansSC-Regular.woff2`
- `NotoSansSC-Medium.woff2`
- `NotoSansSC-Bold.woff2`

最快下载方式：访问 https://gwfh.mranftl.com/fonts/noto-sans-sc?subsets=chinese-simplified
选择 woff2 格式并下载。

## 临时跳过字体

如果暂时不想下载字体，可以注释 `src/styles/global.css` 顶部的所有 `@font-face` 块，
网站会自动 fallback 到系统字体（Geist → Inter → 系统 sans-serif；中文 → PingFang SC / 微软雅黑）。
