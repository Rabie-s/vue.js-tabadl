<template>

    <div class="container mx-auto">
        <div class="bg-gray-200 p-5 m-14 rounded-lg">
            <h1 class="text-2xl text-center font-bold">طلب او عرض كتاب لا تحتاجة</h1>

            <Form @submit="submit" method="post" :validation-schema="schema">

                <div class="flex flex-col">
                    <label class="m-1 text-sm">صورة الغلاف</label>
                    <Field name="image" @change="onFileChange" type="file" class="outline outline-none
                     rounded w-full p-1 file:bg-sky-600
                      hover:file:bg-sky-500 file:p-2
                       file:rounded-lg file:text-white
                        file:outline-none file:border-0
                         file:cursor-pointer" />
                    <ErrorMessage class="text-red-500" name="image" />
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">اسم الكتاب</label>
                    <Field name="title" v-model="formData.title"
                        class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="title" />
                </div>

                <div class="flex flex-col">
                    <label class="m-1 text-sm">وصف قصير</label>
                    <Field name="description" v-model="formData.description"
                        class="bg-white text-sm h-[27px] outline-none rounded-lg px-1" />
                    <ErrorMessage class="text-red-500" name="description" />
                </div>

                <label class="m-1 text-sm">طلب ولا عرض؟</label>
                <Field as="select" name="status" v-model="formData.status"
                    class="w-full bg-white text-sm h-[27px] outline-none rounded-lg px-1">
                    <option value="1">معروض</option>
                    <option value="2">مطلوب</option>
                </Field>
                <ErrorMessage class="text-red-500" name="status" />
                
                <div class="mt-5 flex flex-col items-center gap-y-2">
                    <Button color="blue">نشر</Button>
                </div>


            </Form>

        </div>
    </div>


</template>

<script setup>
import Button from '@/components/Button.vue'
import { ref } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios'
import { toast } from 'vue3-toastify';
import { useUserStore } from '@/stores/user.js'
const user = useUserStore();


//form validation
const schema = yup.object({
    image: yup.mixed().required('Image is required'),
    title: yup.string().required(),
    description: yup.string().required(),
    status: yup.string().required()
});

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

async function submit() {
    await axios.post('/books', {
        title: formData.value.title,
        image_path: formData.value.image,
        status: formData.value.status,
        description: formData.value.description,
        user_id: user.userData.id
    }, {
        headers: {
            'Content-Type':'multipart/form-data'
        }
    }).then((response) => {
        console.log(response.data)
        toast.success('تم نشر الاعلان بنجاح',{"theme": "colored"})
        
    }).catch((error) => {
        console.log(error)
    });
}

function clear(){
    formData.value.image = ''
    formData.value.title = ''
    formData.value.status = ''
    formData.value.description = ''
}

</script>