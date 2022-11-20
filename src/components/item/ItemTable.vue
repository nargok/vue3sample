<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row";
import Button from "primevue/button";
import type { Item } from "@/types/item";

const router = useRouter();
const value = ref();

interface Props {
  data: Item[];
}

defineProps<Props>();

const handleEditButton = (data: Item) => {
  router.push(`/item/${data.id}`);
};
</script>

<template>
  <DataTable :value="data">
    <Column field="id" header="ID"></Column>
    <Column field="name" header="Name"></Column>
    <Column header="Action">
      <template #body="slotProps">
        <Button
          type="button"
          icon="pi pi-search"
          class="p-button-success"
          style="margin-right: 0.5em"
        ></Button>
        <Button
          type="button"
          icon="pi pi-pencil"
          class="p-button-warning"
          @click="handleEditButton(slotProps.data)"
        ></Button>
      </template>
    </Column>
  </DataTable>
</template>
