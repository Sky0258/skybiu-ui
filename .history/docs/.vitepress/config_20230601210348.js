// import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default {
    themeConfig: {
        siteTitle: "skybiu-ui",
        nav: [{
                text: '安装指南',
                link: '/menu/guide.md'
            },
            {
                text: '组件',
                link: '/menu/tButton.md'
            },
            {
                icon: 'github',
                text: 'github',
                link: '/2'
            },
            {
                text: 'npm',
                link: 'https://www.npmjs.com/package/skybiu-ui'
            }
        ],
        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/vuejs/vitepress'
        }],
        sidebar: [
            {
                text: 'Guide',
                items: [{
                        text: '快速安装',
                        link: '/menu/guide.md'
                }]
            },
            {
                text: '组件',
                collapsible: true,       // 菜单下拉
                collapsed: false,        // 设置默认不收起
                items: [
                    {
                        text: 'tButton 按钮',
                        link: '/menu/tButton.md'
                    },
                    {
                        text: 'tInput 输入框',
                        link: '/menu/tInput.md'
                    },
                ]
            },
        ],
    },
    markdown: {
        config: (md) => {
          const {
            demoBlockPlugin
          } = require('vitepress-theme-demoblock')
          md.use(demoBlockPlugin)
        },
        lineNumbers: true
    }
}