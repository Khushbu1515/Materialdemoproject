import  API  from "./api";

export function DeleteData(id) {
  return API.delete(`students/${id}`);
}