---
text: 资源手册
layout: doc
---

<script setup lang="ts">
import { ref } from 'vue'

// 前端
const frontend = ref({
    text: '前端',
    items: [
      {
        text: 'Vue',
        link: 'https://cn.vuejs.org/',
        icon: 'https://cn.vuejs.org/logo.svg'
      },
      {
        text: 'Vitepress',
        link: 'https://vitejs.cn/vitepress/',
        icon: 'https://vitejs.cn/vitepress/vitepress-logo-mini.svg'
      },
      {
        text: 'Tailwind CSS',
        link: 'https://tailwindcss.com/',
        icon: 'https://tailwindcss.com/favicons/favicon.ico'
      },
      {
    
    text: 'Pinia',
    link: 'https://pinia.vuejs.org/zh/',
    icon: 'https://pinia.vuejs.org/logo.svg',
  },
  {
    
    text: 'Pinia Persisted',
    link: 'https://prazdevs.github.io/pinia-plugin-persistedstate/zh/',
    icon: 'https://prazdevs.github.io/pinia-plugin-persistedstate/favicon.ico',
  },
  {
    
    text: 'PrimeVue',
    link: 'https://primevue.org/',
    icon: 'https://primevue.org/favicon.ico',
  },
  {
    
    text: 'Naive UI',
    link: 'https://www.naiveui.com/',
    icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
  },
  {
    
    text: 'Nuxt',
    link: 'https://www.nuxtjs.cn/',
    icon: 'https://www.nuxtjs.cn/favicon.ico',
  },
  {
    
    text: 'Vite',
    link: 'https://cn.vitejs.dev/',
    icon: 'https://cn.vitejs.dev/logo.svg',
  },
  {
    
    text: 'Vue Router',
    link: 'https://router.vuejs.org/zh/',
    icon: 'https://router.vuejs.org/logo.svg',
  },
  {
    
    text: 'VueUse',
    link: 'https://vueuse.org/',
    icon: 'https://vueuse.org/favicon.svg',
  },
  {
    
    text: 'Element Plus',
    link: 'https://element-plus.org/zh-CN/',
    icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
  },
        {
        text: 'React',
        link: 'https://react.dev/',
        icon: 'https://react.dev/favicon-32x32.png'
      },
  {
    
    text: 'React中文网',
    link: 'https://react.docschina.org/',
    icon: 'https://react.docschina.org/favicon.ico',
  },
  {
    
    text: 'Next UI',
    link: 'https://nextui.org/',
    icon: 'https://nextui.org/favicon.ico',
  },
  {
    
    text: 'Ant Design',
    link: 'https://4x.ant.design/',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    
    text: 'Material UI',
    link: 'https://mui.com/material-ui/',
    icon: 'https://mui.com/static/favicon.ico',
  },
  {
    
    text: 'Chakra UI',
    link: 'https://v2.chakra-ui.com/',
    icon: 'https://v2.chakra-ui.com/favicon.png',
  },
  {
    
    text: 'Nextjs',
    link: 'https://www.nextjs.cn/',
    icon: 'https://www.nextjs.cn/static/favicon/favicon-32x32.png',
  },
      {
    text: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: 'https://www.typescriptlang.org/favicon-32x32.png',
  },
  {
    
    text: '网道',
    link: 'https://wangdoc.com/',
    icon: 'https://wangdoc.com/assets/icons/favicon-32x32.png',
  },
  {
    
    text: 'ES6',
    link: 'https://es6.ruanyifeng.com/',
    icon: 'https://es6.ruanyifeng.com/favicon.ico',
  },
  {
    
    text: '快速文档查找',
    link: 'https://cheatsheets.zip/',
    icon: 'https://cheatsheets.zip/images/favicon.png',
  },
  {
    
    text: '菜鸟教程',
    link: 'https://www.runoob.com/',
    icon: '',
  },
  {
    
    text: 'w3schools',
    link: 'https://www.w3schools.com/',
    icon: 'https://www.w3schools.com/favicon.ico',
  },
  {
    
    text: 'w3school',
    link: 'https://www.w3school.com.cn/',
    icon: 'https://www.w3school.com.cn/ui2019/logo-32-red.png',
  },
  {
    
    text: '现代JS教程',
    link: 'https://zh.javascript.info/',
    icon: 'https://zh.javascript.info/img/favicon/favicon.png',
  },
    {
    text: '开发者文档',
    link: 'https://devdocs.io/',
    icon: 'https://devdocs.io/favicon.ico',
  },
  {
    
    text: 'MDN',
    link: 'https://developer.mozilla.org/',
    icon: 'https://developer.mozilla.org/favicon-192x192.png',
  },
  {
    
    text: '快速参考',
    link: 'https://cheatsheets.zip/',
    icon: 'https://cheatsheets.zip/images/favicon.png?v=1',
  },
  {
    
    text: 'Axios',
    link: 'https://www.axios-http.cn/',
    icon: 'https://www.axios-http.cn/img/favicon.ico',
  },
  {
    
    text: 'Babel',
    link: 'https://www.babeljs.cn/',
    icon: 'https://www.babeljs.cn/img/favicon.png',
  },
  {
    
    text: 'highlightjs',
    link: 'https://highlightjs.org/',
    icon: 'https://highlightjs.org/icon.png',
  },
  {
    
    text: 'Dayjs',
    link: 'https://dayjs.fenxianglu.cn/',
    icon: 'https://dayjs.fenxianglu.cn/assets/favicon.png',
  },
  {
    
    text: 'jQuery',
    link: 'https://www.jquery123.com/',
    icon: 'https://www.jquery123.com/assets/images/favicon.ico',
  },
  {
    
    text: 'WebRTC',
    link: 'https://webrtc.org/?hl=zh-cn',
    icon: 'https://webrtc.org/_pwa/webrtc/icons/icon-144x144.png',
  },
  {
    
    text: 'clipboardjs',
    link: 'https://clipboardjs.com/',
    icon: 'https://clipboardjs.com/favicon.ico',
  },
  {
    
    text: '贝塞尔可视化',
    link: 'https://cubic-bezier.com/',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAVtJREFUOE9jZFi5s4GBkameAQvIVpFlmHrnMTYpTDFGhp8M//51MDKs2v0fl44GbSWGhqv3iDMQpIqR4SdeA5kZGRn+/sdpH1aLcBrIxczM8O3vX4Ku+x/qwsC4eg9cHU4DcXlXkI2VoUNXhSFNSRpsiMmeUwxn338ibKCdqCDDodfvwQrj5CUZFpppM7z5+Zuh8+YDhp6bD8HiXpIiDNuev0HxBd4wBKkEeWnmvacMGWevY3jfWJAPxXWQeMESy85iQgx7X70DG4YcPsgmrrDQZYg4cRnDEqwGVmsqMrToKDNIbT7M8PzHT4IRg6wAq4EmgnwMc021GPR3nSDJMJxexudVQjZguHCZuQ7Dix+/GIou3iKkl7iETYnrsHr5mJMpg9W+02S5DsPAq+6WDNo7j5NtGIaBlHoXw8DbnlYMqtuPUc+FFJkE1UwwL5NqCSO+KoBUwxj+/2sEAKfckNu9qD2CAAAAAElFTkSuQmCC',
  },
  {
    
    text: 'Echartjs',
    link: 'https://echarts.apache.org/zh/index.html',
    icon: 'https://echarts.apache.org/zh/images/favicon.png',
  },
  {
    
    text: 'Threejs',
    link: 'https://threejs.org/',
    icon: 'https://threejs.org/files/favicon.ico',
  },

  {
    
    text: '抽奖大转盘组件',
    link: 'https://100px.net/',
    icon: 'https://100px.net/logo.png',
  },
  {
    
    text: 'loading动画库',
    link: 'https://loading.io/',
    icon: '',
  },
  {
    
    text: 'SVGjs',
    link: 'https://svgjs.dev/docs/3.0/',
    icon: 'https://svgjs.dev/docs/3.0/assets/images/logo-svg-js-01d-128.png',
  },
  {
    
    text: 'UnoCSS',
    link: 'https://unocss.com/',
    icon: '',
  },
  {
    
    text: 'UIverse',
    link: 'https://uiverse.io/',
    icon: 'https://uiverse.io/android-chrome-192x192.png',
  },
  {
    
    text: 'UnoCSS',
    link: 'https://unocss.dev/',
    icon: 'https://unocss.dev/logo.svg',
  },
  {
    
    text: 'UnoCSS中文网',
    link: 'https://unocss.jiangruyi.com/',
    icon: 'https://unocss.jiangruyi.com/logo.svg',
  },
  {
    
    text: 'LayUI',
    link: 'http://layui.apixx.net/index.html',
    icon: 'https://img.vcdisgd.com/p/202107/d2f3c041ef96a6d9.jpg',
  },
  {
    
    text: 'Sass',
    link: 'https://sass-lang.com/',
    icon: 'https://sass-lang.com/favicon.ico',
  },
  {
    
    text: 'Less',
    link: 'https://less.bootcss.com/',
    icon: 'https://less.bootcss.com/public/ico/favicon.ico',
  },
  {
    
    text: 'Bootstrap5',
    link: 'https://v5.bootcss.com/',
    icon: 'https://v5.bootcss.com/docs/5.3/assets/img/favicons/android-chrome-192x192.png',
  },
  {
    
    text: '纯CSS动画库',
    link: 'https://animxyz.com/docs',
    icon: 'https://animxyz.com/assets/static/animxyz-logo.ac8d93a.39f3bde368e480505b70778acaa2ac74.png',
  },
  {
    
    text: '阿里图标库',
    link: 'https://www.iconfont.cn/',
    icon: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
  },
  {
    
    text: 'Iconify',
    link: 'https://icones.js.org/',
    icon: 'https://icones.js.org/android-chrome-192x192.png',
  },
  {
    
    text: 'UIVerse',
    link: 'https://uiverse.io/',
    icon: 'https://uiverse.io/favicon-32x32.png',
  },
  {
    
    text: 'Rust',
    link: 'https://www.rust-lang.org/',
    icon: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
  },
  {
    
    text: 'Rust中文网',
    link: 'https://rust.p2hp.com/',
    icon: 'https://rust.p2hp.com/static/images/rust-logo-blk.svg',
  },
  {
    
    text: 'Webpack中文网',
    link: 'https://www.webpackjs.com/',
    icon: 'https://www.webpackjs.com/icon_192x192.png',
  },
  {
    
    text: 'Canvas API',
    link: 'https://www.canvasapi.cn/',
    icon: 'https://www.canvasapi.cn/favicon.ico',
  },
  {
    
    text: 'Threejs',
    link: 'https://threejs.org/',
    icon: 'https://threejs.org/favicon.ico',
  },
  {
    
    text: '着色器',
    link: 'https://thebookofshaders.com/?lan=ch',
    icon: 'https://thebookofshaders.com/favicon.gif',
  },
  {
    
    text: 'Blender',
    link: 'https://blender.org/',
    icon: '',
  },
  {
    
    text: 'D3',
    link: 'https://d3js.org/',
    icon: 'https://d3js.org/logo.png',
  },
  {
    
    text: 'GSAP',
    link: 'https://www.gsap.com/',
    icon: 'https://www.gsap.com/favicon-32x32.png',
  },
  {
    
    text: 'Sketchfab',
    link: 'https://sketchfab.com/',
    icon: 'https://static.sketchfab.com/static/builds/web/dist/static/assets/images/favicon/e59d7f2ff579bbf9d20771b3d4d8c6a7-v2.png',
  },
    {
    
    text: 'Chrome 扩展程序',
    link: 'https://developer.chrome.google.cn/docs/extensions/get-started?hl=zh-cn',
    icon: 'https://www.gstatic.cn/devrel-devsite/prod/v63a7e59e7b93b62eb99aa3751cce206090432f0c0d09ff73f0d3636dcec4ab60/chrome/images/favicon.png',
  },
  {
    
    text: '扩展开发中文教程',
    link: 'https://chrome.cenchy.com/index.html',
    icon: 'https://chrome.cenchy.com/open/opense.ico',
  },
  {
    
    text: 'Shiki',
    link: 'https://shiki.style/',
    icon: 'https://shiki.style/logo.svg',
  },
]})

// 后端
const backend = ref({
  text: '后端',
  items: [
    {
    
    text: 'Nodejs',
    link: 'https://nodejs.org/zh-cn',
    icon: 'https://nodejs.org/static/images/favicons/favicon.png',
  },
  {
    
    text: 'Express',
    link: 'https://www.expressjs.com.cn/',
    icon: 'https://www.expressjs.com.cn/images/favicon.png',
  },
  {
    
    text: 'Socket.IO',
    link: 'https://socket.io/',
    icon: 'https://socket.io/images/favicon.png',
  },
  {
    
    text: '中文文档大全',
    link: 'https://nodejs.cn/',
    icon: 'https://img.nodejs.cn/favicon.png',
  },
    {
    text: 'Python',
    link: 'https://www.python.org/',
    icon: 'https://www.python.org/static/favicon.ico',
  },
    {
    text: 'Nginx',
    link: 'https://nginx.org/',
    icon: 'https://nginx.org/favicon.ico',
  },
]})

// 黑科技
const blackTechnology = ref({
    text: '黑科技',
    items: [
      {
        text: '万能视频下载',
        link: 'https://snapany.com/zh',
        icon: ''
      },
      {
        text: '科学上网',
        link: 'https://www.askahh.com/',
        icon: 'https://pic.imgdb.cn/item/67175c6ed29ded1a8c1c0775.jpg'
      },
      {
        text: 'XShell',
        link: 'https://www.xshell.com/zh/xshell/',
        icon: 'https://www.xshell.com/wp-content/uploads/2018/12/favicon.ico'
      },
      {
        text: 'WindTerm',
        link: 'https://kingtoolbox.github.io/',
        icon: 'https://kingtoolbox.github.io/images/favicon-32x32-next.png'
      },
]})

// 程序员在线学习网站
const programmerOnline = ref({
  text: '程序员在线学习网站',
  items: [
    {
    
    text: 'B站',
    link: 'https://www.bilibili.com/',
    icon: 'https://tukuimg.bdstatic.com/cms/2dfea3b61b924ab4fd61bbd3119839ac.jpeg',
  },
  {
    
    text: '面试鸭',
    link: 'https://www.mianshiya.com/',
    icon: '	https://www.mianshiya.com/_next/image?url=%2Flogo.png&w=32&q=75',
  },
  {
    
    text: 'LeetCode',
    link: 'https://leetcode.cn/',
    icon: 'https://leetcode.cn/favicon.ico',
  },
  {
    
    text: '掘金',
    link: 'https://juejin.cn/',
    icon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg',
  },
  {
    
    text: 'Github',
    link: 'https://github.com/',
    icon: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png',
  },
  ]
})

// 在线工具
const onlineTools = ref({
  text: '在线工具',
  items: [
    {
      text: 'md2card',
      link: 'https://md2card.com/zh',
      icon: 'https://md2card.com/favicon.ico'
    },
    {
      text: 'md2幻灯片',
      link: 'https://cn.sli.dev/',
      icon: ''
    },
    {
      text: 'aig123',
      link: 'https://www.aig123.com/',
      icon: 'https://www.aig123.com/favicon.png'
    },
    {
      text: '随机图片',
      link: 'https://picsum.photos/',
      icon: 'https://picsum.photos/assets/images/favicon/favicon-32x32.png'
    },
    {
      text: 'drawDB',
      link: 'https://www.drawdb.app/',
      icon: 'https://www.drawdb.app/favicon.ico'
    },
    {
      text: '代码截图生成',
      link: 'https://chalk.ist/',
      icon: 'https://chalk.ist/favicon.ico'
    },
    {
      text: '贝塞尔曲线引导',
      link: 'https://bezier.method.ac/',
      icon: 'https://bezier.method.ac/favicon.ico'
    },
{
    text: '奇迹秀',
    link: 'https://www.qijishow.com/',
    icon: 'https://www.qijishow.com/img/ico.ico',
  },
  {
    text: 'CDN资源',
    link: 'https://staticfile.net/',
    icon: 'https://staticfile.net/images/favicon.ico',
  },
  {
    text: 'CDN资源',
    link: 'https://cdnjs.com/',
    icon: 'https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg',
  },
  {
    text: 'BootCDN',
    link: 'https://www.bootcdn.cn/',
    icon: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
  },
  {
    text: 'CodePen',
    link: 'https://codepen.io/',
    icon: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
  },
  {
    text: 'Manim',
    link: 'https://docs.manim.community/en/stable/',
    icon: 'https://docs.manim.community/en/stable/_static/favicon.ico',
  },
  {
    text: '盲打练习',
    link: 'https://www.biancheng.love/',
    icon: 'https://www.biancheng.love/favicon.ico',
  },
  {
    text: 'EmojiAll',
    link: 'https://www.emojiall.com/',
    icon: 'https://www.emojiall.com/favicon.ico',
  },
  {
    text: '文件格式转换',
    link: 'https://convertio.co/zh/',
    icon: 'https://static.convertio.co/img/apple-touch-icon-180x180-precomposed.png',
  },
    {
    text: '在线工具大全',
    link: 'https://tool.lu/',
    icon: 'https://tool.lu/favicon.ico',
  },
  {
    text: '实用在线工具',
    link: 'https://www.jyshare.com/',
    icon: '',
  },
  {
    text: 'AI大全网站',
    link: 'https://www.ai138.com/',
    icon: '',
  },
  {
    text: 'AI网址大全',
    link: 'https://aibard123.com/',
    icon: '',
  },
  {
    
    text: 'Hugging Face',
    link: 'https://huggingface.co/',
    icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  },
  {
    
    text: 'Ollama',
    link: 'https://ollama.com/',
    icon: 'https://ollama.com/public/ollama.png',
  },
  {
    
    text: '豆包',
    link: 'https://www.doubao.com/',
    icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo-doubao-overflow.png',
  },
  {
    
    text: 'OpenAI官网',
    link: 'https://openai.com/',
    icon: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
  },
  {
    
    text: 'ChatGPT',
    link: 'https://chatgpt.com/',
    icon: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
  },
  {
    
    text: '天工AI',
    link: 'https://www.tiangong.cn/',
    icon: 'https://static.tiangong.cn/wwwsite/assets/tab-logo-B0tzp8eR.png',
  },
  {
    
    text: 'Pulid',
    link: 'https://yunyingmenghai.feishu.cn/wiki/N5XAwFxaBiEhMfk0jGMcqI9Vnve?view=vew8jTRKbz&table=tblCKq0uVrsY6QdN',
    icon: 'https://lf-scm-cn.feishucdn.com/ccm/pc/web/resource/bear/src/common/assets/favicons/icon_file_doc_nor-32x32.8cb0fef16653221e74b9.png',
  },
  {
    
    text: 'Lobehub',
    link: 'https://chat-preview.lobehub.com/',
    icon: 'https://chat-preview.lobehub.com/icons/icon-192x192.png',
  },
  {
    
    text: 'AI魔法',
    link: 'https://www.msbd123.com/',
    icon: 'https://cdn.msbd123.com/wp-content/uploads/2023/03/baidilogo.png',
  },
  {
    
    text: 'Pika',
    link: 'https://pika.art/',
    icon: 'https://pika.art/favicon.ico',
  },
  {
    
    text: 'Luma AI',
    link: 'https://lumalabs.ai/dream-machine',
    icon: 'https://cdn-luma.com/public/captures.lumalabs.ai/images/logo.svg',
  },
  {
    
    text: 'Domo AI',
    link: 'https://domoai.app/',
    icon: 'https://cdn.prod.website-files.com/652242395f6164bbe183da35/65d865c66c071ed1af11d0cd_domoai_32.png',
  },
  {
    
    text: '即梦AI',
    link: 'https://jimeng.jianying.com/',
    icon: 'https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v5.ico',
  },
  {
    
    text: '可灵AI',
    link: 'https://klingai.kuaishou.com/',
    icon: 'https://ali2.a.kwimgs.com/kos/nlav10378/aiwp/assets/point-unit-B4VVBG6I.png',
  },
  {
    
    text: '虚拟信用卡',
    link: 'https://www.laodengai.com/',
    icon: 'https://open-ai-blog.oss-cn-nanjing.aliyuncs.com/img/202403180909475.jpg',
  },
  {
    
    text: 'Sora',
    link: 'https://sora.com/explore/recent',
    icon: 'https://sora.com/favicon-light.ico',
  },
]})

//  个人博客
const blogs = ref({
  text: '个人博客',
  items: [
    {
      text: 'Teek',
      link: 'https://notes.teek.top/',
      icon: 'https://notes.teek.top/favicon.ico'
    },
    {
      text: 'One',
      link: 'https://onedayxyy.cn/',
      icon: 'https://onedayxyy.cn/favicon.ico'
    },
    {
      text: 'Hyde',
      link: 'https://teek.seasir.top/',
      icon: 'https://teek.seasir.top/favicon.ico'
    },
    {
      text: '伊恩教程',
      link: 'https://yiov.top/',
      icon: 'https://yiov.top/logo.png'
    },
    {
    
    text: '全栈工具',
    link: 'https://vitepress.qzxdp.cn/',
    icon: 'https://vitepress.qzxdp.cn/vitepress-logo-mini.svg',
  },
  {
    
    text: 'dfairy的博客',
    link: 'https://dfairy.github.io/dfairyblog/',
    icon: 'https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/test.png',
  },
  {
    
    text: 'CS-Notes 面试笔记',
    link: 'http://www.cyc2018.xyz/',
    icon: 'https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/LogoMakr_0zpEzN.png',
  },
  {
    
    text: 'Hello 算法',
    link: 'https://www.hello-algo.com/',
    icon: 'https://www.hello-algo.com/assets/images/logo.svg',
  },
  {
    
    text: '印记中文文档✨️',
    link: 'https://docschina.org/',
    icon: 'https://docschina.org/favicon.svg',
  },
  {
    
    text: '老陈打码',
    link: 'https://www.cpengx.cn/',
    icon: 'https://threejs-1251830808.cos.ap-guangzhou.myqcloud.com/2022/08/ico.png',
  },
  ]
})

// 设计与调色盘
const designAndColor = ref({
  text: '设计与调色盘',
  items: [
    {
    text: '配色主题',
    link: 'https://flatuicolors.com/',
    icon: 'https://flatuicolors.com/static/favicon.ico',
  },
  {
    text: '中国色',
    link: 'https://www.zhongguose.com/',
    icon: 'https://www.zhongguose.com/img/favicon.ico',
  },
  {
    text: 'Adobe Color',
    link: 'https://color.adobe.com/zh/create/color-wheel',
    icon: 'https://color.adobe.com/apple-touch-icon.png',
  },
  {
    text: 'Colors.lol',
    link: 'https://www.colors.lol/',
    icon: 'https://www.colors.lol/assets/favicon/apple-touch-icon.png',
  },
  {
    text: 'LOL Colors',
    link: 'https://www.webdesignrankings.com/resources/lolcolors/',
    icon: 'https://www.webdesignrankings.com/resources/lolcolors/assets/logo-6c93e489f1cec93de83f7477b6143b2549dd3c2b8e58c5e2c79e52eb6886a5f2.svg',
  },
  {
    text: 'ColorDrop',
    link: 'https://colordrop.io/',
    icon: 'https://colordrop.io/favicon.ico',
  },
  {
    text: '网页配色',
    icon: 'https://www.grabient.com/favicon.ico',
    link: 'https://www.grabient.com/',
  },
  {
    text: '炫酷背景',
    link: 'https://coolbackgrounds.io/',
    icon: 'https://coolbackgrounds.io/images/favicon-fe5a0ff5.png',
  },
  {
    text: '新拟态设计',
    link: 'https://neumorphism.io/',
    icon: 'https://neumorphism.io/favicon.ico',
  },
  {
    text: 'Alteredqualia',
    link: 'https://alteredqualia.com/',
    icon: 'https://alteredqualia.com/favicon.ico',
  },
  {
    text: '可视化圆角设计',
    link: 'https://9elements.github.io/fancy-border-radius/#',
    icon: 'https://9elements.github.io/fancy-border-radius/favicon-32x32.png',
  },
  {
    text: 'CSS Gradient',
    link: 'https://cssgradient.io/',
    icon: 'https://cssgradient.io/icon.svg',
  },
  {
    text: 'Color Hunt',
    link: 'https://colorhunt.co/',
    icon: 'https://colorhunt.co/img/color-hunt-icon-ios.png',
  },
  {
    text: 'Brusheezy',
    link: 'https://www.brusheezy.com/',
    icon: 'https://www.brusheezy.com/favicon.ico',
  },
]})


// 在线阅读
const onlineReading = ref({
  text: '阅读',
  items: [
    {
      text: '全历史',
      link: 'https://www.allhistory.com/',
      icon: 'https://www.allhistory.com/favicon.ico'
    },
    {
      text: '国家图书馆',
      link: 'https://www.nlc.cn/web/index.shtml',
      icon: 'https://www.nlc.cn/template_resource/20823/img/icon-10.png'
    },
    {
      text: '中文古籍',
      link: 'https://gj.library.sh.cn/index',
      icon: ''
    },
    {
      text: '新华词典',
      link: 'https://zd.hwxnet.com/',
      icon: 'https://zd.hwxnet.com/images/favicon.ico'
    },
    {
      text: '微信读书',
      link: 'https://weread.qq.com/',
      icon: 'https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_32h.png'
    },
      
]})

// 自媒体资源
const selfMedia = ref({
    text: '自媒体资源',
    items: [
      {
        text: '朱雀大模型',
        link: 'https://matrix.tencent.com/ai-detect/',
        icon: 'https://matrix.tencent.com/ai-detect/favicon.ico'
      },
      {
        text: '视觉中国',
        link: 'https://www.vcg.com/',
        icon: 'https://vcg00.cfp.cn/static/favicon.ico'
      },
      {
        text: '中国摄影网',
        link: 'http://www.zgsyxr.cn/index.html',
        icon: 'http://www.zgsyxr.cn/favicon.ico'
      },
      {
        text: '摄图网',
        link: 'https://699pic.com/',
        icon: 'https://699pic.com/favicon.ico'
      },
      {
        text: '包图',
        link: 'https://ibaotu.com/',
        icon: 'https://ibaotu.com/favicon.ico'
      },
      {
        text: 'md编辑器',
        link: 'https://md.doocs.org/',
        icon: 'https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/favicon.png'
      },
      {
        text: 'mdnice',
        link: 'https://editor.mdnice.com/',
        icon: 'https://editor.mdnice.com/favicon.svg'
      },
      {
        text: 'coverview',
        link: 'https://coverview.vercel.app/',
        icon: 'https://coverview.vercel.app/logo.png'
      },
      {
        text: 'Unsplash',
        link: 'https://unsplash.com/',
        icon: 'https://unsplash.com/favicon.ico',
      },
      {
        text: '免费素材图片',
        link: 'https://www.pexels.com/zh-cn/',
        icon: 'https://www.pexels.com/assets/static/images/meta/favicon.ico',
      },
      {
        text: '代码动画制作',
        link: 'https://www.hackreels.com/',
        icon: 'https://www.hackreels.com/favicon.ico',
      },
      {
        text: '秀米排版',
        link: 'https://xiumi.us/#/',
        icon: 'https://edt.xiumi.us/images/626835.xiumi_brand_name_w-normal.png',
      },
      {
        text: '壹伴编辑器',
        link: 'https://yiban.io/',
        icon: '	https://assets.yiban.io/assets/imgs/common/icon__logo-white-f7d14e6c8a.png',
      },
      {
        text: '墨滴编辑器',
        link: 'https://www.mdnice.com/',
        icon: 'https://www.mdnice.com/favicon-32x32.png',
      },
    ]
  })

</script>

<!-- <div style="width: 100vw; height: calc(100vh-64px); position: fixed; top: 64px; left: 0; z-index: -1">
  <Programming />
</div> -->

## 前端

<SourceItems :source="frontend" />

## 后端

<SourceItems :source="backend" />

## 程序员学习

<SourceItems :source="programmerOnline" />

## 黑科技

<SourceItems :source="blackTechnology" />

## 在线工具

<SourceItems :source="onlineTools" />

## 设计与调色盘

<SourceItems :source="designAndColor" />

## 个人博客

<SourceItems :source="blogs" />

## 在线阅读

<SourceItems :source="onlineReading" />

## 自媒体资源

<SourceItems :source="selfMedia" />
