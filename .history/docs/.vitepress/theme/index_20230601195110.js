import Theme from 'vitepress/dist/client/theme-default/index.js'
import TUI from '../../../packages/index'

export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    app.use(TUI)
  },
}
