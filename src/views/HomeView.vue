<template>
    <div>
        <img src="../assets/images/6920933.jpg" alt="" srcset="">

        <p class="text-2xl tracking-wide text-center my-5">موقع تبادل يساعدك على التخلص من الكتب التي لا
            تحتاجها
            ،وبنفس الوقت يساعدك على العثور على الكتب
            التي تحتاجها.
        </p>

        <div class="flex justify-center gap-x-3">
            <a class="w-[135px] h-[35px] bg-yellow-600 text-white flex justify-center items-center rounded-lg"
                href="#">بتدور على كتاب؟</a>
            <a class="w-[135px] h-[35px] bg-red-600 text-white flex justify-center items-center rounded-lg"
                href="#">عندك كتاب؟</a>
            <RouterLink :to="{name:'Books'}">Go</RouterLink>
            </div>


    </div>

</template>

<script setup>
import Button from '@/components/Button.vue'
</script>
