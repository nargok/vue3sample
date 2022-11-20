import type { Item } from "@/types/item";
import request from "../index";

interface ItemRegisterForm {
  name: string;
}

export const fetchItemList = () => {
  return request.get("/items");
};

export const retrieveItem = (id: number) => {
  return request.get(`/items/${id}`);
};

export const registerItem = (item: ItemRegisterForm) => {
  return request.post("/items/", item);
};

export const updateItem = (item: Item) => {
  return request.post("/items/update", item);
};

export const deleteItem = (id: number) => {
  return request.delete(`/items/${id}`);
};
