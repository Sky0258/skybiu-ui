import demo from '../../components/demo.vue'

// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default/index.d.ts'

// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

// 插件的主题
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('div', demo)
    registerComponents(app)
  }
}