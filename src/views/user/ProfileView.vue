<template>

    <button @click="toggleSideNav=!toggleSideNav" class="text-left w-full absolute p-5">
        <i class="fa-solid fa-bars"></i>
    </button>

    <div class="flex">

        <div>
            <SideNav :toggleSideNav="toggleSideNav"/>
        </div>

        <div class="container mx-auto">
            <router-view />
        </div>


    </div>

</template>

<script setup>
import SideNav from '@/components/SideNav.vue';
import { ref } from 'vue'

const toggleSideNav = ref(false)
</script>