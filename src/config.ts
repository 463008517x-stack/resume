/**
 * 全站集中配置 —— 修改这里即可影响全站
 */

export const SITE = {
  /** 站点 URL（不带尾斜杠）—— 修改成你的 GitHub 用户名 */
  url: 'https://463008517x-stack.github.io',
  /** 子路径部署：仓库名 = `resume` 时填 '/resume'；如果仓库名是 `<username>.github.io` 则填 '/' */
  base: '/resume',
  /** 默认 OG 图（位于 public/images/） */
  ogImage: '/images/og-image.png',
  /** 网站作者 */
  author: 'Yuesheng Feng',
  /** 默认语言 */
  defaultLocale: 'zh' as const,
  /** 支持的语言 */
  locales: ['zh', 'en'] as const,
};

export type Locale = (typeof SITE.locales)[number];

/**
 * 💬 Giscus 留言板配置（详见 README）
 */
export const GISCUS = {
  repo: '463008517x-stack/resume' as `${string}/${string}`,
  repoId: 'R_kgDO_REPLACE_ME',
  category: 'General',
  categoryId: 'DIC_kwDO_REPLACE_ME',
  mapping: 'pathname' as 'pathname' | 'url' | 'title' | 'og:title',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top' as 'top' | 'bottom',
};

/**
 * 📊 访问统计配置
 */
export const ANALYTICS = {
  provider: 'umami' as 'umami' | 'vercel' | 'none',
  umami: {
    websiteId: 'REPLACE_ME_UMAMI_WEBSITE_ID',
    src: 'https://cloud.umami.is/script.js',
  },
};

/**
 * 🔗 社交链接
 */
export const SOCIAL = {
  github: 'https://github.com/463008517x-stack',
  email: 'mailto:17858400582@163.com',
  linkedin: '',
  twitter: '',
  weibo: '',
  zhihu: '',
};
