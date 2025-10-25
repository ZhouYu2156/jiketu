import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: '🏠 首页', link: '/' },
  {
    text: '📖 写作',
    items: [
      { text: '诗词集', link: '/writing/poem/诗词集' },
      { text: '思想录', link: '/writing/thinking/成材' },
    ],
  },
  { text: '🔎 资源宝典', link: '/source-manual' },
]
