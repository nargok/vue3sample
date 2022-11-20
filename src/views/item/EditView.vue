<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import Calendar from "primevue/calendar";
import Button from "primevue/button";

import InputText from "primevue/inputtext";

const router = useRouter();
const value = ref();

const clickButton = () => {
  console.log("登録するよ");
  router.push("/item");
};
</script>

<template>
  <div class="input-area">
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="value" />
      <label for="username">Name</label>
    </span>
  </div>
  <Button @click="clickButton">登録</Button>
</template>

<style scoped>
.input-area {
  padding-bottom: 10px;
}
</style>
