export default {
    themeConfig: {
        siteTitle: "skybiu-ui",
        nav: [
            { text: '安装指南', link: '/guide' },
            { icon: 'github',text: 'github', link: '/2'},
            { text: 'npm', link: '/1'}
          ],
          socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            // You can also add custom icons by passing SVG as string:
            {
              icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
            }
          ]
    }
}