import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import TUI from '../package/index';

const app = createApp(App);
app.use(TUI);
app.mount('#app')