import type { Item } from "@/types/item";
import request from "../index";

export const fetchItemList = () => {
  return request.get("/items");
};

export const retrieveItem = (id: number) => {
  return request.get(`/items/${id}`);
};

export const updateItem = (item: Item) => {
  return request.post("/items/update", item);
};
