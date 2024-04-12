<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">طلب او عرض كتاب لا تحتاجة</h1>

            <div class="flex flex-col">
                <label class="m-1 text-sm">صورة الغلاف</label>
                <input type="file" class="outline outline-none
                     rounded w-full p-1 file:bg-sky-600
                      hover:file:bg-sky-500 file:p-2
                       file:rounded-lg file:text-white
                        file:outline-none file:border-0
                         file:cursor-pointer">
            </div>

            <div class="flex flex-col">
                <label class="m-1 text-sm">اسم الكتاب</label>
                <input v-model="formData.title" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <div class="flex flex-col">
                <label class="m-1 text-sm">وصف قصير</label>
                <input v-model="formData.description" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
            </div>

            <label class="m-1 text-sm">طلب ولا عرض؟</label>
            <select v-model="formData.status" class="w-full bg-white text-sm h-[27px] outline-none rounded-lg px-1">
                <option v-for="option in options1" :value="option.value">{{ option.name }}</option>
            </select>
            <div class="mt-5 flex flex-col items-center gap-y-2">
                <Button @click="addBook" color="blue">نشر</Button>
            </div>
        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue'
import { ref } from 'vue'
import axios from 'axios'

const formData = ref({
    image: '',
    title: '',
    status: '',
    description: '',

})

function addBook() {
    axios.post('books', {
        title: "test4",
        image_path: "book2.jpg",
        status: "wanted",
        description: "short desc",
        user_id: "6"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
}

//example
const options1 = [
    { name: "Ahmad", value: 1 },
    { name: "Mohammad", value: 2 }
]

</script>