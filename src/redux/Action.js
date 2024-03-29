import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import API from "../service/api";

//For Register user
export const Registers = createAsyncThunk(
  "auth/signup",
  async (params, thunkAPI) => {
    try {
      const { data } = await API.post("auth/signup", params);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//For login user
export const logins = createAsyncThunk(
  "auth/login",
  async (params, thunkAPI) => {
    try {
      const { data } = await API.post("auth/login", params);
      var date = new Date();
      date.setTime(date.getTime() + 30 * 1000);
      Cookies.set("token", data.token, { expires: date });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
