<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import Calendar from "primevue/calendar";
import Button from "primevue/button";

import InputText from "primevue/inputtext";
import { registerItem, retrieveItem, updateItem } from "@/api/item";
import type { Item } from "@/types/item";

const route = useRoute();
const router = useRouter();
const name = ref<string>();

const targetItemId = Number(route.params.id);

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
