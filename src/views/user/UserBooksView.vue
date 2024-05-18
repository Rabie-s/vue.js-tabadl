<template>

    <div class="overflow-auto rounded-lg shadow my-4">
        <table dir="ltr" class="text-black w-full">
            <thead class="border-b-2 bg-gray-200">
                <tr>
                    <th class="text-left text-lg p-2">#</th>
                    <th class="text-left text-lg p-2">عنوان الكتاب</th>
                    <th class="text-left text-lg p-2">تاريخ النشر</th>
                    <th class="text-left text-lg p-2">هل تمت العملية</th>
                </tr>
            </thead>

            <tbody v-for="(book, index) in booksData">

                <tr class="odd:bg-gray-100">
                    <td class="text-base p-2 mb-5 whitespace-nowrap">{{ index + 1 }}</td>
                    <td class="text-base p-2 mb-5 whitespace-nowrap">{{ book.title }}</td>
                    <td class="text-base p-2 mb-5 whitespace-nowrap">{{ book.created_at }}</td>
                    <td>
                        <Button @click="handelCompleteBook(book.id, true)" class="w-[50px] h-[30px]"
                            color="green">نعم</Button>
                    </td>
                </tr>

            </tbody>

        </table>
    </div>

</template>
<script setup>
import Button from '@/components/Button.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue';
import { completeBook } from '@/services/bookService';

const booksData = ref({});


// Function to fetch all books
async function getAllBooks() {
    try {
        const response = await axios.get('v1/userBooks');
        booksData.value = response.data;
        console.log(response.data)
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Function to fetch all books
async function handelCompleteBook(bookId, boolean) {
    await completeBook(bookId, boolean)
    await getAllBooks()
}



// Fetch all books on component mount
onMounted(() => {
    getAllBooks();
});


</script>