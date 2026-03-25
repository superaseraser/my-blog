import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的学习空间",
  description: "记录成长，每日打卡",
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '打卡', link: '/logs/today' }
    ],
    // 侧边栏：这里就是你以后管理内容的地方
    sidebar: [
      {
        text: '📅 学习打卡',
        items: [
          { text: '今日打卡', link: '/logs/today' },
        ]
      },
      {
        text: '📚 知识库',
        items: [
          { text: '我的笔记', link: '/notes/index' },
        ]
      }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ]
  }
})