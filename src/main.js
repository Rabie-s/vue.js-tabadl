import '@/assets/style.css'
import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from 'axios';
import App from './App.vue'
import router from './router'

import { useUserStore } from '@/stores/user.js'




const app = createApp(App)
//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
const user = useUserStore();
//end pinia

//axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common = {'Authorization': `Bearer ${user.token}`}
//end axios

app.use(router)
app.mount('#app')
