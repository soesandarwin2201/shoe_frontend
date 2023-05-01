import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem('token') || null;

export const signupUser = createAsyncThunk("sigup/signupUser", async(userInfo, thunkAPI) => {
     const API_URL = 'http://127.0.0.1:3000/signup';
     const requestOptions = {
          method : 'POST',
          headers: {
               'content-type': 'application/json',
             },
     };
     try {
          return await axios.post(API_URL,JSON.stringify(userInfo), requestOptions);          
     }
     catch(error) {
          return thunkAPI.rejectWithValue(error, "Error creating request")
;    }
});

const signupSlice = createSlice({
     name: 'signup',
     initialState: {
          isLoading: false,
          succes: false,
          error: '',
          message: '',
          token,
     },
     reducers: {
          reset: (state) => ({
               ...state,
               isLoading: false,
               succes: false,
               error: '',
               message: '',
          }),
     },
     extraReducers: (builder) => {
          builder.addCase(signupUser.pending, (state) => ({
               ...state,
               isLoading: true,
               error : ''
          }));

          builder.addCase(signupUser.fulfilled, (state, action) => {
               localStorage.setItem('token', action.payload.data.token);
               return {
                   ...state,
                   isLoading: false,
                   success: true,
                   message: action.payload.data.message,
                   token: action.payload.data.token,
               };
           });

          builder.addCase(signupUser.rejected,(state, action) => ({
               ...state,
               isLoading: false,
               error: action.payload,
          }));
     }
});

export const { reset } = signupSlice.actions;
export default signupSlice.reducer;