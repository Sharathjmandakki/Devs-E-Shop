import axios from 'axios';
import React, { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  const [address, setAddress] = useState("");
  const Register = async(e) => {
    e.preventDefault();
    try{
      if(password===rpassword){
        const response=await axios.post("http://localhost:9090/adduser",{
          name:username,
          email:email,
          password:password,
        });
        if(response.data==="User Added"){
          alert("🥳");
          window.location.href="/login";
        }else{
          document.getElementById("error").innerHTML=response.data;
        }
    }else{
      document.getElementById("error").innerHTML="Password should match";
    }
    }catch(e){
      document.getElementById("error").innerHTML="Server Error";
    }
  }
  const navgate = useNavigate();
  const back = () => {
    navgate(-1);
  }
  return (
    <div className='md:mt-28 flex justify-center'>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-3" action="#" onSubmit={Register}>
          <div className='flex justify-between' >
            <button onClick={back}><MdArrowBackIos className='text-2xl text-center font-medium text-gray-900 dark:text-white' /></button>
            <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Register to Dev's Shop</h5>
          </div>
          <hr />
          <div className='text-red-500 text-center p-2' id='error'></div>
          <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
            <input type="user" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="@name" required value={username} onChange={e => { setUsername(e.target.value) }} />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@devsshop.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
          </div>
          <div>
            <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
            <textarea name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Address" value={address} onChange={e => { setAddress(e.target.value) }} />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required value={password} onChange={e => { setPassword(e.target.value) }} />
          </div>
          <div>
            <label for="rpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renter Your password</label>
            <input type="password" name="rpassword" id="rpassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required value={rpassword} onChange={e => { setRPassword(e.target.value) }} />
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
      </div>
    </div>
  )
}
