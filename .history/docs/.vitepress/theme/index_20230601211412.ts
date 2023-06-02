import Theme from 'vitepress/dist/client/theme-default/index'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'

// 插件的主题
import { registerComponents } from './register-components.js'

export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    registerComponents(app)
  },
}
