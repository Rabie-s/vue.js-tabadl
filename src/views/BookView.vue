<template>
    <div class="container mx-auto">

        <div class="mx-60">
            <div class="bg-gray-200 flex justify-center py-2 rounded-lg">
                <img class="h-96 w-full rounded-lg" :src="imagePath + bookData.image_path">
            </div>

            <div class="bg-gray-200 p-2 m-2 rounded-lg space-y-4">
                <h1 class="text-lg">{{ bookData.title }}</h1>
                <h2 class="text-lg">{{ bookData.created_at }}</h2>

                <a aria-label="Chat on WhatsApp" v-if="bookData.user"
                    :href="'https://wa.me/' + bookData.user.phone_number">
                    <Button class="w-full" color="green">تواصل على الواتس</Button>
                </a>

            </div>

            <div v-if="bookData.user" class="bg-gray-200 p-2 m-2 rounded-lg space-y-4">
                <h1 class="text-lg">اسم الناشر : {{ bookData.user.name }}</h1>
            </div>
        </div>

    </div>




</template>

<script setup>
import { useRoute } from 'vue-router';
import Button from '@/components/Button.vue';
import axios from 'axios'
import { onMounted, ref } from 'vue';
const route = useRoute()
const idRouteParameter = route.params.id


const imagePath = 'http://127.0.0.1:8000/images/'
const bookData = ref({})


async function getBook(id) {
    await axios.get(`v1/books/${id}`, {
    }).then((response) => {
        // handle success
        bookData.value = response.data[0]
    }).catch((error) => {
        // handle error
        console.log('error');

    });
}

onMounted(() => {
    getBook(idRouteParameter)
})


</script>