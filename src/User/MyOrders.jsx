import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState([]);
    const [items, setItems] = useState([]);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        const getDate = async (user) => {
            try {
                const response = await axios.post("http://localhost:9090/vieworders", {
                    name: user,
                })
                setOrders(response.data.reverse())
                setItems(response.data.item)
                if (orders!== null || orders !== undefined || orders.length !== 0) {
                    setBool(true)
                    
                }
            } catch(e) {
                console.log(e);
                setBool(false);
            }
        }
        const getUser = async () => {
            const response = await axios.get("http://localhost:9090/user")
            setUser(response.data);
            if (response.data !== null || response.data !== undefined) {
                getDate(String(response.data.name));
            }
        }
        getUser()
    }, [])

    return (
        (bool) ?
            <div className='m-10'>
                <p className='text-5xl text-red-400 font-extrabold text-center'style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5',fontStyle:'initial'}}>You Orders </p>
                {
                    orders?.map((o) => (
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mb-5">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                    <div className='flex justify-between'><span className='text-lg'>Ourder no : #{o.oid} </span>
                                     {(o.paid)?<span className='text-lg'>🪙 Paid amount : ₹ {o.total}/-</span>:<span className='text-lg'>🚚 COD : ₹ {o.total}/-</span>}
                                     {(o.deliveryDate===null||o.deliveryDate===undefined)?<span className='text-lg text-red-400'>Not Delivery Yet</span>:<span className='text-lg text-green-400'>Delivered on {o.deliveryDate}</span>}
                                     </div>
                                    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{(o.paid)?<span className='text-green-500'>Paid</span>:<span className='text-red-500'>Orderd</span>} on <span className='text-green-500'>{o.date}</span></p>
                                </caption>
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Brand
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        o.item.map((i) => (
                                            <tr key={i.id} class="bg-white dark:bg-gray-800">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {i.name} {(i.trending)?<>🔥</>:<></>}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {i.brand}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {i.category}
                                                </td>
                                                <td class="px-6 py-4">
                                                    ₹ {i.cost}/-
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    ))
                }
                <marquee class="text-red-500 text-lg">You can cancel the order by contact. ⚠️ only 90% cost of order will be refunded.</marquee>
            </div> : <div className='m-10'>
                <p className='text-5xl text-red-500 font-extrabold text-center' style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5',fontStyle:'initial'}}>Your Orders Appears Here </p>
            </div>
    )
}
