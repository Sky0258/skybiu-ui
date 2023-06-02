import DefaultTheme from 'vitepress/theme'
import TUI from 'skybiu-ui';
import '../../../node_modules/skybiu-ui/dist/style.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.use(TUI)
    }
  }