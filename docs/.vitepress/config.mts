import { defineConfig } from 'vitepress';
import { nav } from './relaConf/index';
import { sidebar } from './relaConf/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blogs/",
  title: "blogs",// 标题
  description: "blog-web",// 描述
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,// 自定义的nav
    // 侧边栏
    sidebar: sidebar,
    // 右上角github图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 锚点导航Anchor
    outline:{
      level: [2,6],
      label: '目录'
    },
    // 搜索(本地搜索和algolia)
    search:{
      provider: 'local'
    },
    // 国际化i18n
    i18nRouting: true
  }
})
