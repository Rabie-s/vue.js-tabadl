<template>
    <button @click="toggleNav = !toggleNav" class="text-white text-3xl absolute top-1 right-2">
        <i class="fa-solid fa-bars"></i>
    </button>

    <nav class="bg-sky-600 flex items-center flex-col min-h-12">
        <h1 class="text-3xl font-bold text-white uppercase">Tabadl</h1>

        <div v-show="toggleNav">
            <ul class="text-white space-y-2 my-2">
                <li class="text-base hover:text-black cursor-pointer">الصفحة الرئيسية</li>
                <li class="text-base hover:text-black cursor-pointer">تسجيل الدخول</li>
            </ul>
        </div>

    </nav>


</template>

<script setup>
import { ref } from 'vue';
const toggleNav = ref(false)
</script>