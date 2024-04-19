import { defineStore } from "pinia"
import axios from 'axios'
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

            await axios.get('http://localhost:8000/sanctum/csrf-cookie')
            await axios.post('register', {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                password: data.password
            }).then((response) => {
                this.errors = false
                this.isAuth = true
                this.token = response.data.token
                this.userData = response.data.user
                router.push({ name: 'Books' })
            }).catch((error) => {
                this.errors = true
                this.errorMessages = error.response.data.errors
            });

        },

        async login(data) {
            await axios.get('http://localhost:8000/sanctum/csrf-cookie')
            await axios.post('login', {
                email: data.email,
                password: data.password

            }).then((response) => {
                this.errors = false
                this.isAuth = true
                this.token = response.data.token
                this.userData = response.data.user
                router.push({ name: 'Books' })

            }).catch((error) => {
                this.errors = true
                this.errorMessages = error.response.data.errors
            });

        },


    },
    persist: true,

})