import Theme from 'vitepress/dist/client/theme-default/index.js'
// import TUI from '../../../packages/index'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    registerComponents(app)
  },
}
