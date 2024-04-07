<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">حساب جديد</h1>

            <div class="flex flex-col">
                <label class="m-1 text-sm">الاسم</label>
                <input v-model="formData.name" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="flex flex-col">
                <label class="m-1 text-sm">الايميل</label>
                <input v-model="formData.email" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="flex flex-col">
                <label class="m-1 text-sm">رقم الهاتف</label>
                <input v-model="formData.phone_number" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="flex flex-col">
                <label class="m-1 text-sm">كلمة المرور</label>
                <input v-model="formData.password" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="mt-5 flex flex-col items-center gap-y-2">
                <Button @click="runRegister" color="blue">انشاء الحساب</Button>
                <RouterLink :to="{ name: 'Login' }" class="text-blue-600 hover:text-blue-500 text-sm">تسجل الدخول
                </RouterLink>

            </div>
        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    phone_number: '',
    password: ''
})



function runRegister() {
    user.register(formData.value.name, formData.value.email, formData.value.phone_number, formData.value.password)
}

</script>