import { defineStore } from "pinia";
import axios from 'axios';
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'ahmad',
        isAuth: false
    }),
    actions: {
        register(name,email,phone_number,password){
            axios.post('user/register/',{
                name:name,
                email:email,
                phone_number:phone_number,
                password:password
            }).then(function(response){
                console.log(response)
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})