// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
// 引入自定义组件
import AppreciationCode from './components/AppreciationCode.vue'
import BibleCollection from './components/BibleCollection.vue'
import ClassicsCollection from './components/ClassicsCollection.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import PoetryCollection from './components/PoetryCollection.vue'
import Programming from './components/Programming.vue'
import SourceItems from './components/SourceItems.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots

      'aside-ads-after': () => h(AppreciationCode, null, {}),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // 注册全局组件
    app.component('Programming', Programming)
    app.component('MusicPlayer', MusicPlayer)
    app.component('AppreciationCode', AppreciationCode)
    app.component('SourceItems', SourceItems)
    app.component('PoetryCollection', PoetryCollection)
    app.component('ClassicsCollection', ClassicsCollection)
    app.component('BibleCollection', BibleCollection)
  },
} satisfies Theme
