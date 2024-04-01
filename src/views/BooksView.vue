<template>
    <div class="container mx-auto">
        <div class="flex flex-col">
            
            <BookCard title="كتاب تربية وطنية" :imgSrc="img" />

        </div>
      
    </div>

</template>
<script setup>
import BookCard from '@/components/BookCard.vue'
import img from '@/assets/images/bok.jpg'
</script>