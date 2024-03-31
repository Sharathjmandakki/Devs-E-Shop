import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [catagory,setCatagory]=useState([]);
    const [name,setName]=useState();
    const[item,setItem]=useState("")
    useEffect(()=>{
        const getCatagory=async()=>{
            try{
                const response=await axios.get("http://localhost:9090/category")
                setCatagory(response.data)
            }catch{
                alert("error")
            }
        }
        getCatagory()
    },[])
    const navigate=useNavigate();
    const getItem=(cat)=>{
      navigate("items", { state: { data: cat } })
    }
    const getSItem=()=>{
        navigate("items", { state: { data: name } })
      }
    return (
        <div className='mt-5 mb-5'>
            <div className='m-2 flex flex-wrap justify-start category-buttons'>
            {
                catagory.map((cat)=>(
                    <button onClick={()=>{setItem(cat);getItem(encodeURIComponent(cat))}} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{cat}</button>
                ))
            }
            </div>
            <form class="flex items-center max-w-lg mx-auto" onSubmit={getSItem}>
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here.. " required value={name} onChange={e=>setName(e.target.value)} />
                    <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

//TODO mic acess