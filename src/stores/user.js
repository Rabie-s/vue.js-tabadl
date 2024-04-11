import { defineStore } from "pinia"
import axios from 'axios'
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: null,
        isAuth: false,
        errors: false,
        errorMessages: [],
        successMessage: null
    }),
    actions: {

        async register(data) {
            await axios.post('user/register', {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                password: data.password
            }).then((response) => {
                this.successMessage = response.data.success
                this.isAuth = true
                this.user = response.data.user
                this.errors = false
            }).catch((error) => {
                this.errors = true
                this.errorMessages = error.response.data.errors
            });
        },

        async login(data) {
            await axios.post('user/login', {
                email: data.email,
                password: data.password
            }).then((response) => {
                this.isAuth = true
                this.user = response.data.user
            }).catch((error) => {
                this.errors = true
                this.errorMessages = error.response.data.errors
            });
        },


    }



})