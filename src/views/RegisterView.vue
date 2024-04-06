<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">حساب جديد</h1>
            <BaseInput v-model="formData.name" type="text" label="الاسم" />
            <BaseInput v-model="formData.email" type="email" label="الايميل" />
            <BaseInput v-model="formData.phone_number" type="text" label="رقم الهاتف" />
            <BaseInput v-model="formData.password" type="password" label="كلمة المرور" />

            <div class="mt-5 flex flex-col items-center gap-y-2">
                <Button color="blue">انشاء الحساب</Button>
                <RouterLink :to="{ name: 'Login' }" class="text-blue-600 hover:text-blue-500 text-sm">تسجل الدخول
                </RouterLink>

            </div>
        </div>
    </div>


</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    phone_number: '',
    password: ''
})

</script>