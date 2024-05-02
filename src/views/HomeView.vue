<template>
  <FormKit
  type="form"
  id="registration-example"
  :form-class="submitted ? 'hide' : 'show'"
  submit-label="Register"
  @submit="submitHandler"
  :actions="false"
  #default="{ value }"
  >
  <h1 class="text-2xl font-bold mb-2">Register!</h1>
    <FormKit type="group"  v-model="address">
    
      <FormKit
      type="text"
      label="Votre adresse"
      name="street"
      placeholder="Adresse"
      validation="required"
      />
      <FormKit
      type="text"
      label="Votre ville"
      placeholder="Ville"
      name="city"
      validation="required"
      />
    
      <FormKit
      type="text"
      name="zip"
      label="Votre code postal"
      placeholder="Code postal"
      validation="required|number"
      />
    </FormKit>
  <FormKit type="submit" label="Valider" />
</FormKit>
<pre wrap>{{ address }}</pre>
<div v-if="submitted">
  <h2 class="text-xl text-green-500">Formulaire validé</h2>
</div>
</template>

<script setup lang="ts">

import {ref} from 'vue';

const address = ref<any>()
const submitted = ref<boolean>(false);

async function submitHandler() {
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}

</script>