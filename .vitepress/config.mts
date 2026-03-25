import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  // ... 其他配置
  appearance: 'dark', // 🌟 必须是 'dark'，这样网站一打开就是黑的，且不给用户切换的机会
  
  themeConfig: {
    // 确保 outline 开启，这样“本页目录”才会显示
    outline: {
      label: '本页目录',
      level: [2, 3] 
    },
    
    // 强制侧边栏一直存在（即使没目录也占位，显得专业）
    aside: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about-me' },
      { text: '打卡记录', link: '/logs/2026/2026-03/03-25' }
    ],

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/superaseraser' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chuanbao-zheng-05a081202/' }
    ],

    footer: {
      message: '🧪 ',
      copyright: `Copyright © 2026-${new Date().getFullYear()} Chuanbao`
    }
  }
})