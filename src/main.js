import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App).use(toast).use(router).mount('#app')
