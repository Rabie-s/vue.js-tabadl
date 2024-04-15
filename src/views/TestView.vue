<template>


  <form @submit.prevent="send">
    <div class="flex flex-col">
      <label class="m-1 text-sm">الايميل</label>
      <input v-model="form.email" type="email" class="bg-white text-sm h-[27px] rounded-lg px-1 border border-black" />
      <div v-for="error of v$.email.$errors">
        <span>{{ error.$message }}</span>
      </div>
    </div>

    <div class="flex flex-col">
      <label class="m-1 text-sm">كلمة السر</label>
      <input v-model="form.password" type="password" class="bg-white text-sm h-[27px] rounded-lg px-1 border border-black" />
      <div v-for="error of v$.password.$errors">
        <span>{{ error.$message }}</span>
      </div>
    </div>

  </form>

  <button @click="send">Send</button>

</template>
<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const form = ref({
  email:'',
  password:''
})

const rules = {
  email:{required,email},
  password:{required}
}

const v$ = useVuelidate(rules,form)

async function send(e){
  const submit = await v$.value.$validate()
  if(submit){
    console.log('yes')
  }
}


</script>