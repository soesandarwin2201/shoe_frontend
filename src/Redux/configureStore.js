import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signup/signupSlice";
import loginSlice from "./login/loginSlice";

const store = configureStore({
     reducer: {
          signUp : signupSlice,
          login: loginSlice
     }
});


export default store;