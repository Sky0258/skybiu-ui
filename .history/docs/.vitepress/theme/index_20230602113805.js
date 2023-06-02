import TUI from 'skybiu-ui';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.use(ElementPlus)
    }
  }