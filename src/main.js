import '@babel/polyfill'
import 'mutationobserver-shim'
//import './plugins/bootstrap-vue'
require('@/assets/main.scss');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
