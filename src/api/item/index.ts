import request from "../index";

export const fetchItemList = () => {
  return request.get("/items");
};
