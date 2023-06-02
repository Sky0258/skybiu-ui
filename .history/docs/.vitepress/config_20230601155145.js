export default {
    themeConfig: {
        siteTitle: "skybiu-ui",
        nav: [{
                text: '安装指南',
                link: '../menu/guide.md'
            },
            {
                text: '组件',
                link: '/guide'
            },
            {
                icon: 'github',
                text: 'github',
                link: '/2'
            },
            {
                text: 'npm',
                link: '/1'
            }
        ],
        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/vuejs/vitepress'
        }],
        sidebar: {
            '/guide/': [
                text: 'Guide',
                items: [{
                        text: '快速安装',
                        link: '../menu/guide.md'
                }]
            },
            {
                text: '组件',
                collapsible: true,       // 菜单下拉
                collapsed: false,        // 设置默认不收起
                items: [
                    {
                        text: 'tButton 按钮',
                        link: '../menu/tButton.md'
                    },
                    {
                        text: 'tInput 输入框',
                        link: '../menu/tInput.md'
                    },
                ]
            },
        }
    }
}