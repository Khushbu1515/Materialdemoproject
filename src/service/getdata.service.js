import  API  from "./api";

export function GetData(params) {
  return API.get("students", params);
}