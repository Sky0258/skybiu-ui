import DefaultTheme from 'vitepress/theme'
import TUI from 'skybiu-ui';
import '/node_modules/s'


export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.use(TUI)
    }
  }