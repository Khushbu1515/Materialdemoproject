import  API  from "./api";

export function EditData(id,params) {
  return API.put(`students/${id}`,params);
}