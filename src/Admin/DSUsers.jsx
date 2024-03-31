import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function DSUsers() {
    const [allusers, setAllUsers] = useState([]);
    const [user, setUser] = useState("")
    const [name,setName]=useState()
    const [orders,setOrders]=useState([])
    const navigate = useNavigate();
    const edit = async (user) => {
        navigate("edituser", { state: { data: user } })
    }
    const deleteUser = async (user) => {
        try {
            const response = await axios.post("http://localhost:9090/deleteuser", {
                uid: user.uid,
                name: user.name
            })
            if (response.data === "Error") {
                alert("Somting went wrong")
            } else {
                alert(response.data)
                window.location.href = "/admin"
            }

        } catch (e) {
            alert("Server Error");
        }
    }
    const deliveredOn=async(o)=>{
        try{
            const response=await axios.post("http://localhost:9090/delivereddate",{
                oid:o,
            })
            alert(response.data)
        }catch{
            alert("Somting went wrong")
        }
    }

    useEffect(() => {
        const getAllUser = async () => {
            try {
                const response = await axios.get("http://localhost:9090/alluser")
                setAllUsers(response.data)
                const res=await axios.get("http://localhost:9090/allorders")
                setOrders(res.data)
            } catch (e) {
                navigate("/login", { replace: true })
            }
        }
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const response = await axios.get("http://localhost:9090/alluser")
        setAllUsers(response.data)
    }
    const search = async (e) => {
        e.preventDefault();
        if (user === "" || user === null) {
            getAllUser()
        } else {
            try {
                const response = await axios.post("http://localhost:9090/searchuser", {
                    email: user,
                    name: user,
                })
                setAllUsers(response.data)
            } catch {
                alert("User Dosen't exist")
            }
        }
    }
    const searchOrder = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9090/order", {
                    oid: name,
                    user:name,
                })
                setOrders(response.data)
        } catch {
            alert("Oredr Dosen't exist")
        }
    }

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-2 p-2">
            <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                {/* <div>
                  <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                      <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                      </svg>
                      Last 30 days
                      <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                      </svg>
                  </button>
                  <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                      <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                          <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                  <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="filter-radio-example-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                  <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="filter-radio-example-2" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                  <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="filter-radio-example-3" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                  <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="filter-radio-example-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                  <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="filter-radio-example-5" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div> */}
                <div></div>
                <label for="table-search" class="sr-only">Search</label>
                <form class="relative" onSubmit={search}>
                    <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for User" onChange={e => setUser(e.target.value)} />
                </form>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Dev's Shop id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Roal
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allusers && allusers.map((user) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">
                                    {user.uid}
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name}
                                </th>
                                <td class="px-6 py-4">
                                    {user.email}
                                </td>
                                <td class="px-6 py-4">
                                    {user.address}
                                </td>
                                <td class="px-6 py-4">
                                    {user.roal}
                                </td>
                                <td class="px-6 py-4">
                                    <a href='#edit' class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => edit(user)}>🖋️ Edit</a>
                                </td>
                                <td class="px-6 py-4">
                                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => deleteUser(user)}>🧹 Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Outlet />
            <hr className='m-5' />
            <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <div></div>
                <label for="table-search" class="sr-only">Search Order</label>
                <form class="relative" onSubmit={searchOrder}>
                    <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Using Order id" value={name} onChange={e => setName(e.target.value)} />
                </form>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Order id
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Ordered On
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Order By
                        </th>
                        <th scope="col" class="px-6 py-3">
                            paid amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            viva
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Items
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Delivered On
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map((o) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {o.oid}
                                </th>
                                <td class="px-6 py-4">
                                    {o.date}
                                </td>
                                <td class="px-6 py-4">
                                    {o.user}
                                </td>
                                <td class="px-6 py-4">
                                ₹ {o.total}/-
                                </td>
                                <td class="px-6 py-4">
                                {(o.paid)?"Online":"COD"}
                                </td>
                                <td class="px-6 py-4 flex flex-wrap">
                                    {
                                        o.item.map((i) => (
                                            <div class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                {i.name}
                                            </div>
                                        ))
                                    }
                                </td>
                                <td class="px-6 py-4">
                                {(o.deliveryDate===null||o.deliveryDate===undefined)?<button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => deliveredOn(o.oid)}>Delivered</button>
                                :<div className='cursor-not-allowed'>{o.deliveryDate}</div>
                                }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
