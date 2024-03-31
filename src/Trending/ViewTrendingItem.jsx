import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewTrendingItem() {
  const [data, setData] = useState();
  const [items, setItems] = useState([]);
  const [name,setName]=useState("")
  useEffect(() => {
    try {
      const data = async () => {
        const response = await axios.get("http://localhost:9090/viewallitems")
        setItems(response.data)
        if (response.data === undefined || response.data === null || response.data.length === 0) {
          setData(false)
        } else {
          setData(true)
        }
      }
      data()
    } catch (e) {
      alert(e)
    }
  }, [])

  const Remove = async (item) => {
    try {
      const response = await axios.post("http://localhost:9090/removeitemfromtrending", {
        id: item.id,
        name: item.name
      })
      alert(response.data)
    } catch (e) {
      alert("error in removing")
    }
  }
  const Add = async (item) => {
    try {
      const response = await axios.post("http://localhost:9090/additemtotrending", {
        id: item.id,
        name: item.name
      })
      alert(response.data)
    } catch (e) {
      alert("error in removing")
    }
  }
  const Search = async (e) => {
    e.preventDefault()
    try {
      if (name === null || name === undefined || name === "" || name === " " || name.length === 0) {
        alert("Empty 🚫")      
      }else{
        const response = await axios.get(`http://localhost:9090/Searcheditems/${name}`)
        setItems(response.data)
      }
    } catch (e) {
      alert("error in Searching")
    }
  }
  return (
    <div className='m-10'>
      <p className='text-5xl font-extrabold text-red-400 flex justify-center mb-6'>
        🔥 Trending Items
      </p>
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div></div>
        <label for="table-search" class="sr-only">Search</label>
        <form class="relative" onSubmit={Search}>
          <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" onChange={e => setName(e.target.value)} />
        </form>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        {(data) ?
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-16 py-3 text-center">
                  Image
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Product
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Add to Trending
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Remove from Trending
                </th>
              </tr>
            </thead>
            <tbody>
              {
                items?.map((c) => (
                  <tr key={c.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4 flex justify-center">
                      {
                        (c.image === null || c.image === undefined || c.image.startsWith("http") === false) ? <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" class="w-16 md:w-32 max-w-full max-h-full rounded-md" alt={c.name} /> : <img src={c.image.split(",")[0]} class="w-16 md:w-32 max-w-full max-h-full rounded-md" alt={c.name} />
                      }
                    </td>
                    <td class="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
                      {c.name}
                    </td>
                    <td class="px-6 py-4 ">
                      {(!c.trending) ?
                        <div className='flex justify-center'>
                          <button onClick={() => Add(c)} class="p-2 font-medium text-green-600 dark:text-green-500 hover:underline">Add</button>
                        </div> : <p className='text-center'>🔥</p>}
                    </td>
                    <td class="px-6 py-4 ">
                      {(c.trending) ?
                        <div className='flex justify-center'>
                          <button onClick={() => Remove(c)} class="p-2 font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                        </div> : <p className='text-center'>🔥</p>}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table> : <div className='text-center text-xl m-10'>No Items In Trending</div>
        }
      </div>
    </div>
  )
}