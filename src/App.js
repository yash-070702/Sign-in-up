import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Si1Password } from "react-icons/si";

const App = () => {

const[signup,signupcontroller]=useState(false);


  return (

   signup? ( <div className="wrapper" >
 




   <div className="form-container rotate-6 sign-in">
       <form action="#">
           <h2 className=''>Login</h2>
           <div className="form-group">
               <input type="text" required/>
               <FaUser className="fas fa-user" />
               <label for="">username</label>
               </div>
               <div className="form-group">
                   <input type="password" required/>
                   <i className="fas fa-lock"></i>
                   <label for="">password</label>
                   </div>
               <div className="forgot-pass">
                   <a href="#">forgot password</a>
               </div>
               <button type="submit" className="btn">login</button>
               <div className="link">
                   <p> Don't have an account?<a href="#"  onClick={()=>{signupcontroller(true)}} className="signup-link">Sign-up </a></p>
               </div>
               <div className="link"> <p>&copy; 2024 LOG-EYE . All Rights Reserved.</p></div>
   
       </form>
   </div>
   
   <div className="form-container sign-up ">
       <form action="#">
           <h2 className='mt-[30px]'>Sign-Up</h2>
           <div className="form-group">
               <input type="text" required/>
               <i><FaUser className="fas fa-user" /></i>
               <label for="">username</label>
               </div>
               <div className="form-group">
                   <input type="email" required />
                   <i><MdOutlineAlternateEmail className="fas fa-at" /></i>
                   <label for="">Email</label>
                   </div>
               <div className="form-group">
                   <input type="password" required />
                   <i className="fas fa-lock"><RiLockPasswordLine /></i>
                   <label for="">password</label>
                   </div>
                   <div className="form-group">
                       <input type="password" required />
                       <i className="fas fa-lock"><Si1Password /></i>
                       <label for=""> confirm password</label>
                       </div>
               
               <button type="submit" class="btn">Sign Up</button>
               <div className="link">
                   <p>You already have an account?<a href="#" onClick={()=>{signupcontroller(false)}}  className="signin-link">Sign-in</a>
                   </p>
               </div>
           <div className="link"> <p>&copy; 2024 LOG-EYE . All Rights Reserved.</p></div>
   
       </form>
   </div>
   
   
       </div>):(   <div className="wrapper " >
 

   <div className="form-container sign-up rotate-6">
       <form action="#">
           <h2>Sign-Up</h2>
           <div className="form-group">
               <input type="text" required/>
               <i className="fas fa-user"></i>
               <label for="">username</label>
               </div>
               <div className="form-group">
                   <input type="email" required />
                   <i className="fas fa-at"></i>
                   <label for="">Email</label>
                   </div>
               <div className="form-group">
                   <input type="password" required />
                   <i className="fas fa-lock"></i>
                   <label for="">password</label>
                   </div>
                   <div className="form-group">
                       <input type="password" required />
                       <i className="fas fa-lock"></i>
                       <label for=""> confirm password</label>
                       </div>
               
               <button type="submit" class="btn">Sign Up</button>
               <div className="link">
                   <p>You already have an account?<a href="#" onClick={()=>{signupcontroller(false)}}  className="signin-link">Sign-in</a>
                   </p>
               </div>
           <div className="link"> <p>&copy; 2024 LOG-EYE . All Rights Reserved.</p></div>
   
       </form>
   </div>
   
   
   <div className="form-container sign-in">
       <form action="#">
           <h2>Login</h2>
           <div className="form-group">
               <input type="text" required/>
               <i><FaUser className="fas fa-user" /></i>
               <label for="">username</label>
               </div>
               <div className="form-group">
                   <input type="password" required/>
                   <i className="fas fa-lock"><RiLockPasswordLine /></i>
                   <label for="">password</label>
                   </div>
               <div className="forgot-pass">
                   <a href="#">forgot password</a>
               </div>
               <button type="submit" className="btn">login</button>
               <div className="link">
                   <p> Don't have an account?<a href="#"  onClick={()=>{signupcontroller(true)}} className="signup-link">Sign-up </a></p>
               </div>
               <div className="link"> <p>&copy; 2024 LOG-EYE . All Rights Reserved.</p></div>
   
       </form>
   </div>
   
   
       </div>)
   
  )
}

export default App
