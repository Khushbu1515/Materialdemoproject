import  API  from "./api";

export function ViewData(id) {
  return API.get(`students/${id}`);
}