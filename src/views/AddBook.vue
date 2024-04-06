<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">طلب او عرض كتاب لا تحتاجة</h1>

            <UploadInput label="صورة الغلاف" />
            <BaseInput v-model="formData.title" type="text" label="اسم الكتاب" />
            <!-- <BaseInput v-model="" type="text" label="وصف قصير" /> -->
            <label class="m-1 text-sm">طلب ولا عرض؟</label>
            <select v-model="formData.status" class="w-full bg-white text-sm h-[27px] outline-none rounded-lg px-1">
                <option v-for="option in options1" :value="option.value">{{ option.name }}</option>
            </select>
            <div class="mt-5 flex flex-col items-center gap-y-2">
                <Button color="blue">نشر</Button>
            </div>
        </div>
    </div>


</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue'
import Button from '@/components/Button.vue'
import UploadInput from '@/components/UploadInput.vue'
import { ref } from 'vue'

const formData = ref({
    image: '',
    title: '',
    status: ''

})

const options1 = [
    { name: "Ahmad", value: 1 },
    { name: "Mohammad", value: 2 }
]

</script>