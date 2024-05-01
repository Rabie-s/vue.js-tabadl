<template>
    <button @click="toggleNav = !toggleNav" class="md:hidden text-white text-3xl absolute top-1 right-2">
        <i class="fa-solid fa-bars"></i>
    </button>

    <nav class=" bg-sky-600 flex justify-around flex-col md:flex-row py-1">

        <h1 class="text-3xl font-bold text-white uppercase text-center">Tabadl</h1>


        <ul v-show="toggleNav" class="flex justify-center items-center flex-col md:flex-row gap-y-1 gap-x-2 my-2 md:py-0 text-white">

            <li v-if="user.isAuth" class="text-base bg-yellow-600 hover:bg-yellow-500 py-1 px-2 rounded-md cursor-pointer">
                {{ user.userData.name }}
            </li>

            <li v-if="!user.isAuth" class="text-base bg-yellow-600 hover:bg-yellow-500 py-1 px-2 rounded-md cursor-pointer">
                <RouterLink :to="{ name: 'Register' }">حساب جديد</RouterLink>
            </li>

            <li v-if="!user.isAuth" class="text-base hover:text-black cursor-pointer">
                <RouterLink :to="{ name: 'Login' }">تسجيل الدخول</RouterLink>
            </li>

            <li v-if="user.isAuth !== false" @click="handelLogout" class="text-base hover:text-black cursor-pointer">
                تسجيل الخروج
            </li>

        </ul>



    </nav>

    <div class="bg-red-500 flex justify-around flex-col md:flex-row py-2">
        <div>
            <ul class="flex justify-center items-center flex-col md:flex-row gap-x-2 text-white h-full">

                <li class="text-base hover:text-black cursor-pointer">
                    <RouterLink :to="{ name: 'Home' }">الصفحة الرئيسية</RouterLink>
                </li>

            </ul>
        </div>
    </div>



</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user.js'

const user = useUserStore();
const toggleNav = ref(true)

function handelLogout() {
    user.logout();
}

</script>