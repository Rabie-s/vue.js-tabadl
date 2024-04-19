<template>
    <div class="container mx-auto">
        <div class="flex flex-col">
            <div v-for="book in booksData" class="bg-gray-200 p-2 m-2 rounded-lg">
                <div class="flex items-center gap-x-3">
                    <img class="w-[132px] h-[109px] rounded-lg" :src="imagePath + book.image_path" alt="">
                    <div class="w-full flex flex-col gap-y-2">
                        <h2 class="text-lg">{{ book.title }}</h2>
                        <Button class="w-full" color="blue">عرض</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<h1>{{ booksData.value }}</h1>

</template>
<script setup>

import Button from '@/components/Button.vue';
import axios from 'axios'
import { onMounted, ref } from 'vue';

const imagePath = 'http://127.0.0.1:8000/images/'
const booksData = ref({})

async function getAllBooks() {
    await axios.get(`v1/books`, {
    }).then((response) => {
            // handle success
            console.log(response)
            booksData.value = response.data
        }).catch((error) => {
            // handle error
            console.log('error')
            console.log(error);

        });
}


onMounted(() => {
    console.log('test')
    getAllBooks()
})



</script>