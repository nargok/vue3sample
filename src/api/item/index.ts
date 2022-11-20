import request from "../index";

export const fetchItemList = () => {
  return request.get("/items");
};

export const retrieveItem = (id: number) => {
  return request.get(`/items/${id}`);
};
