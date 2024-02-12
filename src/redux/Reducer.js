import { createSlice } from '@reduxjs/toolkit';
import {Registers,logins} from "./action"

const initialState = {
    register:{},
    isLoggedIn:false,
    login:{},     
  errors:{}
};

const mySlice = createSlice({
  name: 'mySlice',
    initialState,
    reducers: {
      logout: (state) => {
        state.isLoggedIn = false;
        state.login = null;
      },
    },
extraReducers: (builder) => {
 
  builder.addCase(Registers.fulfilled, (state, action) => {
    
    state.isLoggedIn = false;
    state.register = action.payload;
    state.errors = null;
  });
  builder.addCase(Registers.rejected, (state, action) => {
    
    state.isLoggedIn = false;
    state.register = null;
    state.errors = action.payload;
  });
  builder.addCase(logins.fulfilled, (state, action) => {
    
    state.isLoggedIn = true;
    state.login = action.payload;
    state.errors = null;
  });
  builder.addCase(logins.rejected, (state, action) => {
    
    state.isLoggedIn = false;
    state.login = null;
    state.errors = action.payload;
  });
} 
})
export const { logout } = mySlice.actions;
export default mySlice.reducer;