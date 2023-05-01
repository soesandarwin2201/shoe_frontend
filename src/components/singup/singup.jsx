import React, { useState} from "react";
import { signupUser } from "../../Redux/signup/signupSlice";

const Singup = () => {
     const [name,setName] = useState('');
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');
     return (  
          <section className="signup-container">
               <h1 className="signup-title">SignUp</h1>
               <form className="signup-form">
                    <input type="text" name="name" placeholder="Please Write your name" className="form-input" 
                    onChange={(e) => setName(e.target.value)} />
                    <input type="email" className="form-input" 
                    name="email" placeholder="Please write your email" 
                    onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="form-input" name="password" placeholder="Please Enter your password"  
                    onChange={(e) => setPassword(e.target
                         .value)} />
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