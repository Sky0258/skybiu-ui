export default {
    themeConfig: {
        siteTitle: "skybiu-ui",
        nav: [{
                text: '安装指南',
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
                    text: 'Introduction',
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