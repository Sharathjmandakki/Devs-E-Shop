import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:9090/user')
        .then(response => {
            const userData = response.data;
            setUsername(userData.name);
            setEmail(userData.email);
            })
        .catch(error => {
            navigate("/login", { replace: true })
        });
  },[])
  const Contact=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:9090/addform",{
        email:email,
        username:username,
        message:message,
      })
      if(response.data==="added"){
        alert("sent")
        setMessage("")
      }
    }catch{
      alert("Somting went wrong")
    }
  }
  return (
    <div className='md:mt-28 flex justify-center'>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-3" action="#" onSubmit={Contact}>
          <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white" >Message to Dev's Shop team</h5>
          <hr />
          <div className='text-red-500 text-center p-2' id='error'></div>
          <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
            <input type="user" name="username" id="username" disabled class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="@name" required value={username} onChange={e => { setUsername(e.target.value) }} />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" disabled class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@devsshop.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
          </div>
          <div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
            <textarea name="message" id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="message" required value={message} onChange={e => { setMessage(e.target.value) }} />
          </div>
          <button type="submit" class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send </button>
        </form>
      </div>
    </div>
  )
}