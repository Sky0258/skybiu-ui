import DefaultTheme from 'vitepress/theme'
import TUI from 'skybiu-ui';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('TUI')
  }
}