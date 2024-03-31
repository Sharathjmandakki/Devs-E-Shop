import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Settings from '../Helpers/Settings'
export default function Admin() {
   const title = "<Dev's Shop/>";
    const navigate=useNavigate();
    const [pg,setPg]=useState(0);
    const [tab,setTab]=useState(0);
    const [tb, setTb] = useState(0);
    const Togglebutton = () => {
        if (tb === 0) {
            setTb(1);
        } else {
            setTb(0)
        }
    }
    const Home=()=>{
        setTab(0);
    }
    const Myorders=()=>{
        setTab(1);
    }
    const Cart=()=>{
        setTab(2);
    }
    const AddItem=()=>{
        setTab(3);
    }
    const Adminpanal=()=>{
        setTab(4);
    }
    const Users=()=>{
        setTab(5);
    }
    const AddUser=()=>{
        setTab(6);
    } 
    const Trend=()=>{
        setTab(7);
    }
    return (
        <div>
            <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="" onClick={Home} class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white" >{title} | Admin</span>
                    </Link>
                    <button onClick={Togglebutton} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span> 
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class={tb === 0 ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <Link to="" onClick={Home} class={(tab==0)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Home</Link>
                            </li>
                            <li>
                                <Link to="myorders" onClick={Myorders} class={(tab==1)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>My Orders</Link>
                            </li>
                            <li>
                                <Link to="cart" onClick={Cart} class={(tab==2)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Cart</Link>
                            </li>
                            <li>
                                <Link to="add" onClick={AddItem} class={(tab==3)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Add Item</Link>
                            </li>
                            <li>
                                <Link to="adminpanal" onClick={Adminpanal} class={(tab==4)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Admin Panal</Link>
                            </li>
                            <li>
                                <Link to="users" onClick={Users} class={(tab==5)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Users & Orders</Link>
                            </li>
                            <li>
                                <Link to="adduser" onClick={AddUser} class={(tab==6)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Add New User</Link>
                            </li>
                            <li>
                                <Link to="trending" onClick={Trend} class={(tab==7)?"block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent":"block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Trending</Link>
                            </li>
                            <Settings/>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

