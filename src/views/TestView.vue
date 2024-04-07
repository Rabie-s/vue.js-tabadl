<template>
    <h1>TEst</h1>

</template>
<script setup>
/* import {useUserStore} from '@/stores/user'

const user = useUserStore()
console.log(user.isAuth) */
import axios from 'axios';

import { onMounted } from 'vue';

onMounted(() => {
    axios.get('books', {
        headers: {
            Authorization: `Bearer 4|ZLtWb3lNeYSItKyUVCiTErMwOd8cGWrLRSmrY7Qk55e62ba0`,
            Accept: 'application/json',
        }
    })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})





</script>