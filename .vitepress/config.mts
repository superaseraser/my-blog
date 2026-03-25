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

    // 2. 侧边栏 (所有专区都在这一个数组 [] 里面)
    sidebar: [
      {
        text: '📅 2026年3月',
        collapsed: false,
        items: [
          { text: '3月25日：初探 VitePress', link: '/logs/2026/2026-03/03-25' },
          { text: '3月26日：部署与优化', link: '/logs/2026/2026-03/03-26' }
        ]
      },
     
      {
        text: '🎓 Learning 专区',
        collapsed: false,
        items: [
          // 这里的 link 必须和你文件夹路径匹配
          { text: '📚 读的书', link: '/logs/learning/books/books' },
          { text: '🔬 实验技能分享', link: '/logs/learning/lab-skills/lab-skills' },
          { text: '🧬 蛋白质设计', link: '/logs/learning/protein-design/protein-design' }
        ]
      },
      {
        text: '☕ 碎碎念/杂项',
        collapsed: true,
        items: [
          { text: '🌈 随性杂谈', link: '/logs/misc/index' },
          { text: '💭 每日思考', link: '/logs/misc/daily-thoughts' }
        ]
      },
 {
        text: '📁 技术专题',
        collapsed: true,
        items: [
          { text: 'Git 常用指令', link: '/logs/git-tips' }
        ]
      },

    ],

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/superaseraser' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chuanbao-zheng-05a081202/' }
    ]
  }
})