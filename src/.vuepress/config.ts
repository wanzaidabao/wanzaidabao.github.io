import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "湾湾的二岸笔记",
  description: "台湾人到大陆的生活指南GoPass",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
