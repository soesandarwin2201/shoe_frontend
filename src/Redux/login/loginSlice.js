import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk("login/userLogin", async(userInfo, thunkAPI) => {
     const API_URL = 'http://127.0.0.1:3000/login';
     const requestOptions = {
          method: "POST",
          headers: {
               'content-type': 'application/json',
             },
     };
     try{
          return await axios.post(API_URL, JSON.stringify(userInfo), requestOptions);
     }
     catch(error){
          return thunkAPI.rejectWithValue(error, "Error creating request");
     }
});

const token = localStorage.getItem('token') || null;

const LoginSlice = createSlice({
     name: 'login',
     initialState: {
          token,
          isLoading: false,
          success: false,
          error: '',
     },
     
})