import DefaultTheme from 'vitepress/theme'
import TUI from 'skybiu-ui';
import '../../../'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.use(TUI)
    }
  }