import axios from "axios";


const BASE_URL =  'http://localhost:3003/api';

const API = axios.create({
  baseURL: `${BASE_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});
export default API;