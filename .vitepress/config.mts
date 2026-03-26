import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  // 1. 基础配置
  title: "Chuanbao",
ignoreDeadLinks: true, // 👈 加入这一行，无视所有死链，强制构建
  description: "蛋白质设计与实验笔记",
  
  // 🌟 自定义域名必备：设置站点地图，让 Google 更好搜到你
  sitemap: {
    hostname: 'https://chuanbaozheng.com'
  },

  // 🌟 确保 base 为根目录，这样自定义域名的图片/样式才不会错位
  base: '/',

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
        useFolderTitleFromIndexFile: true, // 如果文件夹里有 index.md，用它的标题
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
    aside: true,

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