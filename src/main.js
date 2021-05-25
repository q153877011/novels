import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store"

import 'element-plus/lib/theme-chalk/index.css'
import ElmentPlus from 'element-plus'

let app = createApp(App);
app.use(router);
app.use(store);
app.use(ElmentPlus);
app.mount("#app");
