import TUI from 'skybiu-ui';
import '/skybiu-ui/dist/style.css'


export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.use(ElementPlus)
    }
  }