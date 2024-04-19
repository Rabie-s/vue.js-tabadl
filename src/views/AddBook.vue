<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">طلب او عرض كتاب لا تحتاجة</h1>

            <form @submit.prevent="submit" method="post">

                <div class="flex flex-col">
                    <label class="m-1 text-sm">صورة الغلاف</label>
                    <input ref="inputImage" accept=".png, .jpg, .jpeg" @change="onFileChange" type="file" class="outline outline-none
                     rounded w-full p-1 file:bg-sky-600
                      hover:file:bg-sky-500 file:p-2
                       file:rounded-lg file:text-white
                        file:outline-none file:border-0
                         file:cursor-pointer" />
                    <span class="text-red-500" v-for="error in v$.image.$errors">{{ error.$message }}</span>

                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">اسم الكتاب</label>
                    <input v-model="formData.title" class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <span class="text-red-500" v-for="error in v$.title.$errors">{{ error.$message }}</span>
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">وصف قصير</label>
                    <input v-model="formData.description"
                        class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <span class="text-red-500" v-for="error in v$.description.$errors">{{ error.$message }}</span>
                </div>

                <label class="m-1 text-sm">طلب ولا عرض؟</label>
                <select v-model="formData.status" class="w-full bg-white text-sm h-[27px] outline-none rounded-lg px-1">
                    <option value="1">معروض</option>
                    <option value="2">مطلوب</option>
                </select>
                <span class="text-red-500" v-for="error in v$.status.$errors">{{ error.$message }}</span>


                <div class="mt-5 flex flex-col items-center gap-y-2">
                    <Button type="submit" color="blue">نشر</Button>
                </div>


            </form>

        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { ref } from 'vue'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import { useUserStore } from '@/stores/user.js'
const user = useUserStore();



const inputImage = ref(null)
const formData = ref({
    image: '',
    title: '',
    status: '',
    description: '',
})
//catch a file inside file input
function onFileChange(e) {
    formData.value.image = e.target.files[0]
}

//form rules validation
const rules = {
    image: { required },
    title: { required },
    status: { required },
    description: { required }
}

const v$ = useVuelidate(rules, formData)





async function submit() {
    await axios.post('v1/books', {
        title: formData.value.title,
        image_path: formData.value.image,
        status: formData.value.status,
        description: formData.value.description,
        user_id: user.userData.id
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(async (response) => {
        const result = await v$.value.$validate()
        if (result) {
            console.log(response.data)
            toast.success('تم نشر الاعلان بنجاح', { "theme": "colored" })
            clear()
        }
    }).catch((error) => {
        console.log(error)
    });
}

function clear() {
    formData.value.image = ''
    formData.value.title = ''
    formData.value.status = ''
    formData.value.description = ''
    inputImage.value.value = null
    v$.value.$reset()
}

</script>