import  API  from "./api";

export function GetData() {
  return API.get("students");
}