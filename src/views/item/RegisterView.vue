<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import Button from "primevue/button";

import InputText from "primevue/inputtext";
import { registerItem } from "@/api/item";

const router = useRouter();
const name = ref<string>();

const clickButton = async () => {
  const item = { name: name.value };
  await registerItem(item);
  router.push("/item");
};
</script>

<template>
  <div class="input-area">
    <span class="p-float-label">
      <InputText id="name" type="text" v-model="name" />
      <label for="name">Name</label>
    </span>
  </div>
  <Button @click="clickButton">登録</Button>
</template>

<style scoped>
.input-area {
  padding-bottom: 10px;
}
</style>
