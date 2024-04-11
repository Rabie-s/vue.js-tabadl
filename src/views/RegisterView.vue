<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">حساب جديد</h1>

            <Form method="post" @submit="handelRegister" :validation-schema="schema">

                <div class="bg-red-500 text-white rounded-lg px-2">
                    <ul v-if="user.errors">
                        <li v-for="error in user.errorMessages">{{ error[0] }}</li>
                    </ul>
                </div>

                <div class="bg-green-500 text-white rounded-lg px-2">
                    <ul v-if="!user.errors">
                        <li>{{ user.successMessage }}</li>
                    </ul>
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">الاسم</label>
                    <Field type="name" name="name" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="name" />
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">الايميل</label>
                    <Field type="email" name="email" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="email" />
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">رقم الهاتف</label>
                    <Field type="number" name="phone_number"
                        class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="phone_number" />
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">كلمة المرور</label>
                    <Field type="password" name="password"
                        class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="password" />
                </div>

                <div class="mt-5 flex flex-col items-center gap-y-2">
                    <Button color="blue">انشاء الحساب</Button>
                    <RouterLink :to="{ name: 'Login' }" class="text-blue-600 hover:text-blue-500 text-sm">تسجل الدخول
                    </RouterLink>

                </div>
            </Form>

        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '@/stores/user.js'
const user = useUserStore();


//form validation
const schema = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    phone_number: yup.string().required(),
    password: yup.string().required().min(8),
});


async function handelRegister(formData) {
    await user.register(formData)
}



</script>