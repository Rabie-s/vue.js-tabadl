import { defineStore } from "pinia";
import axios from 'axios';
import { toast } from 'vue3-toastify';
import router from "@/router";

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
        // Action to fetch CSRF token
        async csrfCookie() {
            try {
                await axios.get(import.meta.env.VITE_SANCTUM_CSRF_URL);
            } catch (error) {
                console.error('Error fetching CSRF cookie:', error);
            }
        },

        // Action to register user
        async register(data) {
            await this.csrfCookie(); // Ensure CSRF cookie is obtained before registering
            try {
                const result = await axios.post('register', {
                    name: data.name,
                    email: data.email,
                    phone_number: data.phone_number,
                    password: data.password
                });
                // Handle successful registration
                if (result.status === 200 && result.data.token) {
                    this.errors = false;
                    this.isAuth = true;
                    this.token = result.data.token;
                    this.userData = result.data.user;
                    router.push({ name: 'Books' });
                }
            } catch (error) {
                // Handle registration errors
                toast.error('An unknown error occurred.', { "theme": "colored" });
            }
        },

        // Action to log in user
        async login(data) {
            await this.csrfCookie(); // Ensure CSRF cookie is obtained before logging in
            try {
                const result = await axios.post('login', {
                    email: data.email,
                    password: data.password
                });
                // Handle successful login
                if (result.status === 200 && result.data.token) {
                    this.errors = false;
                    this.isAuth = true;
                    this.token = result.data.token;
                    this.userData = result.data.user;
                    router.push({ name: 'Books' });
                }
            } catch (error) {
                // Handle login errors
                console.error(error);
                if (error.response.status === 401) {
                    toast.error('Invalid email or password.', { "theme": "colored" });
                }
            }
        },

        // Action to log out user
        async logout() {
            await this.csrfCookie(); // Ensure CSRF cookie is obtained before logging out
            try {
                const result = await axios.post('logout');
                // Handle successful logout
                if (result.status === 200) {
                    this.userData = null;
                    this.token = null;
                    this.isAuth = false;
                    this.errors = false;
                    this.errorMessages = [];
                    router.push({ name: 'Home' });
                }
            } catch (error) {
                // Handle logout errors
                toast.error('An unknown error occurred.', { "theme": "colored" });
            }
        }
    },
    persist: true, // Persist state across page reloads
});
