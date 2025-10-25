import { DefaultTheme } from 'vitepress'

export const search:
  | { provider: 'local'; options?: DefaultTheme.LocalSearchOptions | undefined }
  | { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions } = {
  /**
   * 本地搜索配置
   */
  provider: 'local',
  options: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        displayDetails: '显示详情列表',
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
        },
      },
    },
  },
}
