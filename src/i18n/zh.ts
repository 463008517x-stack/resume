export const zh = {
  nav: {
    about: '关于',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    education: '教育',
    contact: '联系',
    guestbook: '留言板',
  },
  hero: {
    cta_contact: '联系我',
    cta_projects: '查看作品',
    scroll: '向下滚动',
  },
  sections: {
    about: '关于我',
    skills: '技能栈',
    experience: '工作经历',
    projects: '项目作品',
    featured_projects: '精选项目',
    other_projects: '其他项目',
    education: '教育背景',
    contact: '联系方式',
    guestbook: '留言板',
  },
  guestbook: {
    title: '留言板',
    description: '欢迎留下你的足迹 ✍️ 评论由 GitHub Discussions 驱动，需登录 GitHub 账号。',
    loading: '正在加载留言...',
  },
  contact: {
    title: '让我们聊聊',
    cta: '发送邮件',
  },
  footer: {
    built_with: '使用 Astro 与 Tailwind CSS 构建',
    source: '查看源码',
    copyright: '版权所有',
  },
  theme: {
    light: '浅色',
    dark: '深色',
    system: '跟随系统',
    toggle: '切换主题',
  },
  language: {
    toggle: '切换语言',
  },
  common: {
    view_demo: '在线预览',
    view_code: '查看代码',
    learn_more: '了解更多',
    present: '至今',
    open_in_new: '新窗口打开',
  },
} as const;

// 宽化类型：允许英文字符串与中文不同
type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };
export type UIStrings = Widen<typeof zh>;
