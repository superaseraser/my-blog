import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Chuanbao的学习空间",
  description: "从 2026 年 3 月开始的航海日记",
  themeConfig: {
    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '打卡记录', link: '/logs/today' }
    ],

    // 2. 侧边栏
    sidebar: [
      {
        text: '学习日志',
        items: [
          { text: '今日打卡', link: '/logs/today' }
        ]
      }
    ],

    // 3. 右上角社交图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/superaseraser' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chuanbao-zheng-05a081202/' }
    ]
  }
})