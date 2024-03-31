import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:9090/user')
        .then(response => {
            const userData = response.data;
            setUsername(userData.name);
            setEmail(userData.email);
            setAddress(userData.address);
            })
        .catch(error => {
            navigate("/login", { replace: true })
        });
    },[])
    const back = (e) => {
        e.preventDefault()
        navigate(-1);
    }
    return (
      <div className='md:mt-28 flex justify-center'>
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-3" action="#" onSubmit={back}>
            <div className='flex justify-between' >
              <button onClick={back}><MdArrowBackIos className='text-2xl text-center font-medium text-gray-900 dark:text-white' /></button>
              <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">About Me</h5>
            </div>
            <hr />
            <div className='text-red-500 text-center p-2' id='error'></div>
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
              <input disabled type="user" name="username" id="username" class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="@name" required value={username} onChange={e => { setUsername(e.target.value) }} />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input disabled type="email" name="email" id="email" class=" cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@devsshop.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your address</label>
              <textarea disabled name="address" id="address" class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="address" required value={address} onChange={e => { setAddress(e.target.value) }} />
            </div> 
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Previous Page</button>
          </form>
        </div>
      </div>
    )
  }
  
