<template>
    <div class="container mx-auto">
        <div class="flex flex-col">
            <div v-for="book in booksData.data" class="bg-gray-200 p-2 m-2 rounded-lg">
                <div class="flex items-center gap-x-3">
                    <img class="w-[132px] h-[109px] rounded-lg" :src="imagePath + book.image_path" alt="">
                    <div class="w-full flex flex-col gap-y-2">
                        <h2 class="text-lg">{{ book.title }}</h2>
                        <RouterLink :to="{ name: 'Book', params: { id: book.id } }">
                            <Button class="w-full" color="blue">عرض</Button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class=" text-center">
            <TailwindPagination :data="booksData" @pagination-change-page="getAllBooks"/>
        </div>

    </div>
</template>
<script setup>
import TailwindPagination from '@/components/TailwindPagination/TailwindPagination.vue'

import Button from '@/components/Button.vue';
import axios from 'axios'
import { onMounted, ref } from 'vue';

const imagePath = 'http://127.0.0.1:8000/images/'
const booksData = ref({})

async function getAllBooks(page = 1) {
    await axios.get(`v1/books?page=${page}`, {
    }).then((response) => {
        // handle success
        booksData.value = response.data
    }).catch((error) => {
        // handle error
        console.log('error')
        console.log(error);

    });
}


onMounted(() => {
    getAllBooks()
})



</script>