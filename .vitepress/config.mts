import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  // 基础配置
  title: "Chuanbao",
  description: "蛋白质设计与实验笔记",
  
  // 🌟 允许黑白切换（配合我们之前写好的丝滑 CSS）
  appearance: true, 
  lastUpdated: true,

  themeConfig: {
    // 1. 顶部导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about-me' },
      { text: '打卡记录', link: '/logs/2026/2026-03/03-25' }
    ],

    // 2. 侧边栏自动生成
    sidebar: generateSidebar([
      {
        documentRootPath: '/',
        scanStartPath: 'logs',
        resolvePath: '/logs/',
        useTitleFromFileHeading: true,
        collapsed: true,
        hyphenToSpace: true,
        sortMenusByName: true
      }
    ]),

    // 3. 文章大纲与目录
    outline: {
      label: '本页目录',
      level: [2, 3] 
    },
    aside: true, // 侧边栏占位

    // 4. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/superaseraser' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chuanbao-zheng-05a081202/' }
    ],

    // 5. 页脚与更新时间
    lastUpdatedText: '最后更新时间',
    footer: {
      message: 'chuanbaozheng77@gmail.com',
      copyright: `Copyright © 2026-${new Date().getFullYear()} Chuanbao`
    }
  }
})