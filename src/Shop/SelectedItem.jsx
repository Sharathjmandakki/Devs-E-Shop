import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Carousel from '../Helpers/Carousel';
export default function SelectedItem(props) {
  const [msg, setMsg] = useState([]);
  const [user, setUser] = useState("");
  const location = useLocation();
  const itemsdata = location.state && location.state.data;
  const arr = itemsdata?.specifications?.split(",");
  const images = itemsdata?.image?.split(",");
  const ilus = [`https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg`]
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:9090/user")
      setUser(response.data.name);
    }
    getUser()
  }, [])
  const navigate = useNavigate()
  const Back = () => {
    navigate(-1)
  }
  const AddToCart = async (item) => {
    try {
      const response = await axios.post("http://localhost:9090/addtocart", {
        id: item.id,
        name: item.name,
        category: item.category,
        cost: item.cost,
        description: item.description,
        // comments: null,
        // uploadedby: null
      })
      alert(response.data)
    } catch (e) {
      alert("error")
      console.log(e);
    }
  }
  const GoTo = async () => {
    navigate(-2);
    // window.location.href="cart"
  }
  const SendMsg = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:9090/sendmsg", {
        user: user,
        msg: msg,
        i: itemsdata
      });
      if (response.data === "Sent") {
        setMsg("")
        alert(response.data)
      }
    } catch {
      console.error("error");
    }
  }
  return (
    <div className='m-10 min-w-96'>
      <div className='text-2xl text-gray-100 flex justify-between mt-5 mb-5 gap-3'><button onClick={() => Back()} className='bg-slate-700 rounded-lg p-2 hover:bg-black'> Go back</button> <button disabled className='cursor-help bg-slate-700 rounded-lg p-2 hover:tracking-wide'> {itemsdata.brand} | {itemsdata.name}</button> </div>
      <hr />
        <div class=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-w-sm  dark:border-gray-700 dark:bg-gray-800  mt-10 mb-10">
          <div className='flex flex-wrap justify-around  items-center ml-10 mr-10'>
            {(images === null || images === undefined) ? <Carousel images={ilus} /> : <Carousel images={images} />}
            <div class="flex flex-col justify-between p-4 leading-normal ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{itemsdata.brand} {itemsdata.name} </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price ₹ {itemsdata.cost}/- </h5>
              <div className='flex flex-wrap gap-10 justify-evenly mt-10 mb-10'>
                <button onClick={() => AddToCart(itemsdata)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Add to cart</button>
                <button onClick={() => GoTo()} class="text-gray bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-100 font-bold rounded-lg px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-500 w-full ">Go to Home</button>
              </div>
              <form className='mb-2 mt-2' onSubmit={SendMsg}>
                <label for="msg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Leave Your Comment</label>
                <input type="text" name="msg" id="msg" class="cursor-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Good " required value={msg} onChange={e => { setMsg(e.target.value) }} />
              </form>
            </div>
            <br />
            {/* <div className='flex flex-wrap'>
            <div class=" overflow-x-auto shadow-md sm:rounded-lg mt-5 mb-5 border">
              <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Specifications
                </caption>
                <tbody>
                  {
                    arr?.map(com => {
                      const [user, message] = com.split(':');
                      return (
                        <tr class="bg-white dark:bg-gray-800">
                          <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user}
                          </th>
                          <td class="px-2 py-2">
                            {message}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <p class="m-5 p-4 text-justify font-normal text-lg text-gray-700 dark:text-gray-400">
            <caption class="text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  description
                </caption>
              {itemsdata.description}</p>
          </div> */}
          </div>
          <hr/>
            <div className="flex flex-wrap ml-10 mr-10">
              <div className="overflow-x-auto shadow-md sm:rounded-lg mt-5 mb-5 pl-5 pr-5 border w-full md:w-1/2">
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Specifications
                  </caption>
                  <tbody>
                    {arr?.map((com) => {
                      const [user, message] = com.split(':');
                      return (
                        <tr className="bg-white dark:bg-gray-800">
                          <th
                            scope="row"
                            className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {user}
                          </th>
                          <td className="px-2 py-2">{message}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="p-10 text-justify font-normal text-lg text-gray-700 dark:text-gray-400 w-full md:w-1/2">
                <caption className="text-lg mb-5 font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Description
                </caption>
                <p>{itemsdata.description}</p>
              </div>
            </div>
        </div>
      <div className='p-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-w-sm  dark:border-gray-700 dark:bg-gray-800'>
        <h1 className='text-center text-3xl mb-10 text-green-400 font-bold tracking-wide'>Comments</h1>
        {
          itemsdata?.comments?.map(com => {
            const [user, message] = com.split(':');
            return (
              <div className=' bg-slate-500 w-full rounded-3xl p-2 text-lg mb-2 '>
                <span className='font-semibold'>@{user}</span>
                <br />
                <p className='p-2 overflow-hidden'>
                  {message}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
