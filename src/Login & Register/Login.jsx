import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const Update=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:9090/login",{
        email:email,
        password:password
      });
      if(response.data==="Admin"){
        window.location.href="/admin";
      }else if(response.data==="User"){
        window.location.href="/";
      }else{
        document.getElementById("error").innerHTML=response.data;
      }
    }catch(e){
      document.getElementById("error").innerHTML="Server Error";
    }
  }
  return (
    <div className='md:mt-28 flex justify-center'>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-3" action="#" onSubmit={Update}>
          <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Sign in to Dev's Shop</h5>
          <hr/>
          <div className='text-red-500 text-center p-2' id='error'></div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@devsshop.com" required value={email} onChange={e=>{setEmail(e.target.value)}} />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required value={password} onChange={e=>{setPassword(e.target.value)}} />
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div class="flex justify-between">
          <Link to="/register" class="text-blue-700 hover:underline hover:text-white dark:text-blue-500">Create account</Link>
          <Link to="/update" class="text-blue-700 hover:underline hover:text-white dark:text-blue-500">Reset Password?</Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}
