export default {
    themeConfig: {
        siteTitle: "skybiu-ui",
        nav: [{
                text: '安装指南',
                link: '../menu/a.md'
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
        sidebar: [{
            text: 'Guide',
            items: [{
                    text: '快速安装',
                    link: '../menu/a.md'
                },
                {
                    text: 'Getting Started',
                    link: '../menu/b.md'
                },
            ]
        }]
    }
}