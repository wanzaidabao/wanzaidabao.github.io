import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/faq/": "structure",
  "/": [
    "",
    "portfolio",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
    {
      text: "常见问题bat",
      link: "faq",
      icon: "circle-question",
      // 会在 `/faq` 开头的路径激活
      // 所以当你前往 `/faq/xxx.html` 时也会激活
      activeMatch: "^/faq",
    },
],
});
