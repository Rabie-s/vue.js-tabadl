import { defineStore } from "pinia"
import axios from 'axios'
import { toast } from 'vue3-toastify';
import router from "@/router"

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userData: null,
        token: null,
        isAuth: false,
        errors: false,
        errorMessages: [],
    }),

    actions: {

        async register(data) {
            try {
                await axios.get('http://localhost:8000/sanctum/csrf-cookie')
                const result = await axios.post('register', {
                    name: data.name,
                    email: data.email,
                    phone_number: data.phone_number,
                    password: data.password
                })
                if (result.status === 200 && result.data.token) {
                    this.errors = false
                    this.isAuth = true
                    this.token = result.data.token
                    this.userData = result.data.user
                    router.push({ name: 'Books' })
                }

            } catch (error) {
                toast.error('حدث خطأ غير معروف', { "theme": "colored" })
            }

        },

        async login(data) {
            try {
                await axios.get('http://localhost:8000/sanctum/csrf-cookie')
                const result = await axios.post('login', {
                    email: data.email,
                    password: data.password
                })
                if (result.status === 200 && result.data.token) {
                    this.errors = false
                    this.isAuth = true
                    this.token = result.data.token
                    this.userData = result.data.user
                    router.push({ name: 'Books' })
                }

            } catch (error) {
                console.log(error)
                if (error.response.status === 401) {
                    toast.error('البريد الالكتروني او كلمة السر غير صحيح', { "theme": "colored" })
                }
            }

        },

        async logout() {
            try {
                await axios.get('http://localhost:8000/sanctum/csrf-cookie')
                const result = await axios.post('logout')
                if (result.status === 200) {
                    this.userData = null
                    this.token = null
                    this.isAuth = false
                    this.errors = false
                    this.errorMessages = []
                    router.push({ name: 'Home' })
                }

            } catch (error) {
                toast.error('حدث خطأ غير معروف', { "theme": "colored" })
            }

        }


    },
    persist: true,

})