<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">طلب او عرض كتاب لا تحتاجة</h1>

            <UploadInput label="صورة الغلاف"/>
            <BaseInput type="text" label="اسم الكتاب" />
            <BaseInput type="text" label="وصف قصير" />
            <BaseInput type="text" label="طلب ولا عرض؟" />

            <div class="mt-5 flex flex-col items-center gap-y-2">
                <Button color="blue">نشر</Button>
            </div>
        </div>
    </div>


</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue'
import Button from '@/components/Button.vue';
import UploadInput from '@/components/UploadInput.vue';


</script>