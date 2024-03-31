import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
export default function EditUser(props) {
    const location = useLocation();
    const userData = location.state && location.state.data;
    const type=["User","Admin"];
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [roal, setRoal] = useState();

    useEffect(()=>{
        try{
            setUsername(userData.name)
            setEmail(userData.email)
            setRoal(userData.roal)
            setAddress(userData.address)
        }catch(e){
            window.location.href="/admin"
        }
    },[])

    const Register = async(e) => {
      e.preventDefault();
      try{
          const response=await axios.put("http://localhost:9090/updateuser",{
            name:username,
            email:email,
            roal:roal,
            address:address
          });
          if(response.data==="User Updated"){
            alert("User Updated 🥳");
            window.location.href="/admin";
          }else{
            document.getElementById("error").innerHTML=response.data;
          } 
      }catch(e){
        document.getElementById("error").innerHTML="Server Error";
      }
    }
    return (
      <div className='md:mt-28 flex justify-center mb-10' id='edit'>
        <hr/>
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-3" action="#" onSubmit={Register}>
            <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Update User</h5>
            <hr/>
            <div className='text-red-500 text-center p-2' id='error'></div>
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
              <input type="user" name="username" disabled id="username" class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="@name" required value={username} onChange={e => { setUsername(e.target.value) }} />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" disabled name="email" id="email" class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@devsshop.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setRoal(e.target.value)}>
    <option disabled selected>User type</option>
    {
      type.map(u=>(
        <option value={u}>{u}</option>
      ))
    }    
  </select>
            </div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your address</label>
              <textarea  name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="address" required value={address} onChange={e => { setAddress(e.target.value) }}></textarea></div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
          </form>
        </div>
      </div>
    )
  }
  
