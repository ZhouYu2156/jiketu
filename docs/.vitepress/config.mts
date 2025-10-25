import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { nav, search, sidebar, socialLinks } from './conf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站语言
  lang: 'zh-CN',
  // 网站标签页的主站标题
  titleTemplate: ':title 💖 极客兔',
  // 默认标题
  title: '极客兔',
  // 网站描述
  description: '用心创作优质内容',
  // 网站 head 配置: 做 SEO 优化
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  ],
  /** 国际化配置 */
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
  },
  // 忽略无效链接
  ignoreDeadLinks: true,
  // 网站主题配置
  themeConfig: {
    // 浅色模式标题
    lightModeSwitchTitle: '浅色模式',
    // 深色模式标题
    darkModeSwitchTitle: '深色模式',
    // 网站logo跳转的链接
    logoLink: '/',
    // 网站logo图片
    logo: {
      light: '/rabbit.svg',
      dark: '/rabbit-dark.svg',
    },
    // 手机端才会显示
    returnToTopLabel: '返回顶部',
    // 最近更新时间
    lastUpdated: {
      text: '最近更新时间',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    /* 编辑链接 */
    editLink: {
      pattern: 'https://github.com/ZhouYu2156/docs',
      text: '在 Github 上编辑此页',
    },
    // 文章大纲
    outline: {
      level: 'deep',
      label: '文 章 导 航',
    },
    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 找不到页面
    notFound: {
      title: '找不到页面',
      linkText: '返回首页',
      quote: '如果你不改变方向, 保持寻找, 你可能会到达你想要去的地方！',
    },
    // 搜索配置
    search,
    nav,
    sidebar,

    socialLinks,
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
