import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Chuanbao的学习空间",
  description: "始于2026 年 3 月25日",
  themeConfig: {
    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '打卡记录', link: '/logs/2026/2026-03/03-25' }
    ],

    // 2. 侧边栏 (这里已经帮你修好了括号和路径)
    sidebar: [
      {
        text: '📅 2026年3月',
        collapsed: false,
        items: [
          // 路径必须和你的文件夹 C:\Users\chuan\my-blog\logs\2026\2026-03 一致
          { text: '3月25日：初探 VitePress', link: '/logs/2026/2026-03/03-25' },
          { text: '3月26日：部署与优化', link: '/logs/2026/2026-03/03-26' }
        ]
      },
      {
        text: '📁 技术专题',
        collapsed: true,
        items: [
          { text: 'Git 常用指令', link: '/logs/git-tips' }
        ]
      }
    ],

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/superaseraser' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chuanbao-zheng-05a081202/' }
    ]
  }
})