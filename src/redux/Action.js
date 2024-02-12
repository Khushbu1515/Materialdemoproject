import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/api";

//For Register user
export const Registers = createAsyncThunk(
  "user/signup",
  async (params, thunkAPI) => {
    try {
      const { data } = await API.post("user/signUp", params); 
           
      return data;           
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//For login user
export const logins = createAsyncThunk(
  "user/login",
  async (params, thunkAPI) => {
    try {
      const { data  } = await API.post("user/login", params);
      localStorage.setItem('token', data.JWTtoken);
       console.log(data,"data"); 
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
