import { createApp } from 'vue';
import App from './App.vue';
import '../node_modules/skybiu-ui/dist/style.css'

import 'vitepress-theme-demoblock/theme/styles/index.css'
// import TUI from '../packages/index';
import TUI from 'skybiu-ui';

const app = createApp(App);
app.use(TUI);
app.mount('#app')