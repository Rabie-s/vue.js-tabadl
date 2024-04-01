<template>
    <div class="bg-gray-200 p-4 m-4">
        <SelectInput v-model="name" label="test" :options="options1" />
    </div>
    <h1>{{ name }}</h1>


</template>
<script setup>
import SelectInput from '@/components/SelectInput.vue'
import { ref,onMounted } from 'vue';

const options1 = [
    { name: "Ahmad", value: 1 },
    { name: "Mohammad", value: 2 }
]
const name = ref('aa')
/* onMounted(()=>{
    console.log(options1[1].name)
}) */

</script>