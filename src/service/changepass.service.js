import  API  from "./api";

export function ChangePass(params) {
  return API.put("auth/change-password", params);
}