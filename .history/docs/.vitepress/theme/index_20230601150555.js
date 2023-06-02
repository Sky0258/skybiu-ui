import DefaultTheme from 'vitepress/theme'
import TUI from 'skybiu-ui';

import { tButton } from '../../../packages';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('tButton')
  }
}