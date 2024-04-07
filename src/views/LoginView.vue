<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">تسجيل الدخول</h1>

            <div class="flex flex-col">
                <label class="m-1 text-sm">الايميل</label>
                <input v-model="formData.email" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="flex flex-col">
                <label class="m-1 text-sm">كلمة المرور</label>
                <input v-model="formData.password" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="mt-5 flex flex-col items-center gap-y-2">
                <Button color="blue">تسجيل الدخول</Button>
                <RouterLink :to="{ name: 'Register' }" class="text-blue-600 hover:text-blue-500 text-sm">انشاء حساب جديد
                </RouterLink>
            </div>
        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue'

const formData = ref({
    email: '',
    password: ''
})

</script>