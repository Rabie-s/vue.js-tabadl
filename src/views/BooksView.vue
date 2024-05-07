<template>
    <div class="container mx-auto">
        <!-- Filter section -->
        <div class="bg-gray-200 p-1 rounded-lg m-3">
            <div>
                <label class="m-1 text-sm">طلب ولا عرض؟</label>
                <select @change="getAllBooks" v-model="filters.status"
                    class="bg-white text-sm h-[27px] outline-none rounded-lg px-1">
                    <option value="">الكل</option>
                    <option value="1">معروض</option>
                    <option value="2">مطلوب</option>
                </select>
            </div>
        </div>

        <!-- Search section -->
        <div class="bg-gray-200 p-1 rounded-lg m-3 flex gap-x-2">
            <label class="m-1 text-sm">بحث</label>
            <input ref="searchInput" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
            <Button @click="setSearchValue" class="h-auto" color="blue">بحث</Button>
        </div>

        <!-- Book display section -->
        <div class="flex flex-col">
            <div v-for="book in booksData.data" :key="book.id" class="bg-gray-200 p-2 m-2 rounded-lg">
                <div class="flex items-center gap-x-3">
                    <img class="w-[132px] h-[109px] rounded-lg" :src="imagePath + book.image_path" />
                    <div class="w-full flex flex-col gap-y-2">
                        <h2 class="text-lg">{{ book.title }}</h2>
                        <router-link :to="{ name: 'Book', params: { id: book.id } }">
                            <Button class="w-full" color="blue">عرض</Button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class=" text-center">
            <TailwindPagination :data="booksData" @pagination-change-page="getAllBooks" />
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import TailwindPagination from '@/components/TailwindPagination/TailwindPagination.vue'
import axios from 'axios'
import { onMounted, ref, watchEffect } from 'vue';

const imagePath = 'http://127.0.0.1:8000/images/';

const searchInput = ref(null)
const filters = ref({
    status: '',
    search: ''
})
const booksData = ref({});

// Function to set search value
function setSearchValue() {
    filters.value.search = searchInput.value.value
}

// Function to fetch all books
async function getAllBooks(page = 1) {
    try {
        const response = await axios.get(`v1/books?page=${page}&status=${filters.value.status}&search=${filters.value.search}`);
        booksData.value = response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Fetch all books on component mount
onMounted(() => {
    getAllBooks();
});

// Watch for changes in the status and fetch books accordingly
watchEffect(() => {
    getAllBooks();
});
</script>