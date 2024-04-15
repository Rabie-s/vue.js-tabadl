<template>

    <div class="container mx-auto" :validation-schema="schema">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">تسجيل الدخول</h1>

            <Form method="post" @submit="handelLogin" :validation-schema="schema">

                <div class="bg-red-500 text-white rounded-lg px-2">
                    <ul v-if="user.errors">
                        <li v-for="error in user.errorMessages">{{ error }}</li>
                    </ul>
                </div>

                <div class="bg-green-500 text-white rounded-lg px-2">
                    <ul v-if="!user.errors">
                        <li>{{ user.successMessage }}</li>
                    </ul>
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">الايميل</label>
                    <Field type="email" name="email" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="email" />
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">كلمة المرور</label>
                    <Field type="password" name="password"
                        class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="password" />
                </div>

                <div class="mt-5 flex flex-col items-center gap-y-2">
                    <Button color="blue">تسجيل الدخول</Button>
                    <RouterLink :to="{ name: 'Register' }" class="text-blue-600 hover:text-blue-500 text-sm">انشاء حساب
                        جديد
                    </RouterLink>
                </div>
            </Form>
        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '@/stores/user.js'
const user = useUserStore();

//form validation
const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});


async function handelLogin(formData) {
    await user.login(formData)
}

</script>