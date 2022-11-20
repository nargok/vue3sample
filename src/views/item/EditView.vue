<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import Calendar from "primevue/calendar";
import Button from "primevue/button";

import InputText from "primevue/inputtext";
import { retrieveItem, updateItem } from "@/api/item";
import type { Item } from "@/types/item";

const route = useRoute();
const router = useRouter();
const item = ref<Item>();

const targetItemId = Number(route.params.id);

const load = async () => {
  const result = await retrieveItem(Number(targetItemId)).catch((e) =>
    console.error(e.message)
  );
  item.value = result.data;
};

load();

const clickButton = async () => {
  await updateItem(item.value);
  router.push("/item");
};
</script>

<template>
  <div v-if="item" class="input-area">
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="item.name" />
      <label for="username">Name</label>
    </span>
  </div>
  <Button @click="clickButton">更新</Button>
</template>

<style scoped>
.input-area {
  padding-bottom: 10px;
}
</style>
