import  API  from "./api";

export function CreateForm(params) {
  return API.post("students", params);
}