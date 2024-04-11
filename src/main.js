import '@/assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/user';


//axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
//end axios

//pinia
const app = createApp(App)
app.use(createPinia())
//end pinia


app.use(router)
app.mount('#app')
