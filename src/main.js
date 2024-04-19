import '@/assets/style.css'
import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from 'axios';
import App from './App.vue'
import router from './router'

import { useUserStore } from '@/stores/user.js'

//vue3-toastify css
import 'vue3-toastify/dist/index.css';
//end vue3-toastify css


const app = createApp(App)
//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
const user = useUserStore();
//end pinia

//axios
axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common = { 'Authorization': `Bearer ${user.token}` }
//end axios

app.use(router)
app.mount('#app')
