import React, { useState} from "react";
import { signupUser } from "../../Redux/signup/signupSlice";

const Singup = () => {
     return (  
          <section className="signup-container">
               <h1 className="signup-title">SignUp</h1>
               <form className="signup-form">
                    <input type="text" name="name" placeholder="Please Write your name" className="form-input" />
                    <input type="email" className="form-input" 
                    name="email" placeholder="Please write your email" />
                    <input type="password" className="form-input" name="password" placeholder="Please Enter your password" />
                    <button className="form-button">SignUp</button>
               </form>
               <div className="questions">
                    <p className="login-ques">Have an account already?</p>
                    <p>Login</p>
               </div>
          </section>
     );
}
 
export default Singup;