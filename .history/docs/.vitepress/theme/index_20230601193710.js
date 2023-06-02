// import Theme from 'vitepress/dist/client/theme-default'
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
    ...theme,
    enhanceApp({ app }) {
    registerComponents(app)
    }
}