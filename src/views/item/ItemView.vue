<script setup lang="ts">
import { ref } from "vue";

import Calendar from "primevue/calendar";
import Button from "primevue/button";
import { fetchItemList } from "@/api/item";

import ItemTable from "../../components/item/ItemTable.vue";
import type { Item } from "@/types/item";

// interface Item {
//   id: number;
//   name: string;
// }

const value = ref();
const items = ref<Item[]>([]);

const load = async () => {
  const result = await fetchItemList().catch((e) => console.error(e.message));
  items.value = result.data;
};

load();

const clickButton = () => {
  console.log("ボタンおしたよ");
  console.log("items", items.value);
  console.log("items length", items.value.length);
};
</script>

<template>
  <main>
    <Calendar v-model="value" />
    <div>
      <Button
        @click="clickButton"
        label="click me"
        class="p-button-secondary"
      ></Button>
      <template v-if="items.length > 0">
        <ItemTable :data="items" />
      </template>
    </div>
  </main>
</template>
