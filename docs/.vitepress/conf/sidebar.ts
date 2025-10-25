import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/writing/': [
    {
      text: '诗词作品',
      items: [
        {
          text: '诗词集',
          link: '/writing/poem/诗词集',
        },
        {
          text: '文言文集',
          link: '/writing/poem/文言文集',
        },
        {
          text: '世经',
          link: '/writing/poem/世经',
        },
      ],
      collapsed: false,
    },
    {
      text: '思想录',
      collapsed: false,
      items: [
        {
          text: '成材',
          link: '/writing/thinking/成材',
        },
        {
          text: '教育的意义和归宿',
          link: '/writing/thinking/教育的意义和归宿',
        },
      ],
    },
  ],
}
