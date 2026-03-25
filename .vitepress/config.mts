themeConfig: {
  // 1. 顶部导航栏
  nav: [
    { text: '首页', link: '/' },
    { text: '打卡记录', link: '/logs/2026-03/03-25' }
  ],

  // 2. 侧边栏（这是最 Organize 的地方！）
  sidebar: {
    '/logs/': [
      {
        text: '2026年3月',
        collapsed: false, // 是否默认折叠
        items: [
          { text: '3月25日：初识 VitePress', link: '/logs/2026-03/03-25' },
          { text: '3月26日：部署上线', link: '/logs/2026-03/03-26' }
        ]
      },
      {
        text: '技术专题',
        collapsed: true,
        items: [
          { text: 'Git 常用指令总结', link: '/logs/projects/git-cheatsheet' }
        ]
      }
    ]
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/superaseraser' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/chuanbao-zheng-05a081202/' }
  ]
}