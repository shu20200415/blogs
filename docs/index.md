---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

home: true

title: 博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: 个人简介
  text: Stay foolish, Stay hungry
  tagline: /斜杠青年/人间清醒/工具控/
  image:
   # 首页右边的图片 
   src: /avatar.png
   # 图片的描述
   alt: avatar
  # 按钮相关
  actions:
    - theme: brand
      text: 进入主页
      link: /markdown-examples
    - theme: alt
      text: 个人成长
      link: /api-examples
# 按钮下方的描述
features:
  - icon: 🤹
    title: Web前端
    details: 程序媛，国内某互联网厂搬砖
  - icon: 🎨
    title: 喜欢美学
    details: 热爱一切美学，喜欢用各种设计工具造图
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年

---

<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<home />
