import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AdminPanal() {
  const [contact, setContact] = useState([])
  const [count, SetCount] = useState([])
  useEffect(() => {
    const Count = async () => {
      const res = await axios.get("http://localhost:9090/counts")
      SetCount(res.data)
    }
    Count()
    const Contact = async () => {
      const res = await axios.get("http://localhost:9090/viewForm")
      setContact(res.data)
    }
    Contact()
  }, [])


  const deleteData = async (del) => {
    try {
      const res = await axios.post("http://localhost:9090/deleteForm", {
        id: del.id
      })
      if (res.data === "deleted") {
        window.location.href = "adminpanal"
      }
    } catch (e) {
      console.log(e);
    }
    // console.log(message.cid);
  }
  return (
    <div className='m-5 p-10'>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
        <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Message no
              </th>
              <th scope="col" class="px-6 py-3">
                User name
              </th>
              <th scope="col" class="px-6 py-3">
                email
              </th>
              <th scope="col" colSpan={2} class="px-6 py-3">
                Message
              </th>
              <th scope="col" class="px-6 py-3">
                remove
              </th>
            </tr>
          </thead>
          <tbody>
            {
              contact.map((by) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">
                    {by.id}
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {by.username}
                  </th>
                  <td class="px-6 py-4">
                    {by.email}
                  </td>
                  <td class="px-6 py-4 text-justify" colSpan={2}>
                    {by.message}
                  </td>
                  <td class="px-6 py-4">
                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => deleteData(by)}> Remove</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
      <div class="relative overflow-x-auto m-2 rounded-xl mb-5 mt-10">
        <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Items
              </th>
              <th scope="col" class="px-6 py-3">
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {
              count.map(c => (
                <tr key={c} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {c.cat}
                  </th>
                  <td class="px-6 py-4 flex flex-wrap justify-normal">
                    {
                      c.items.map(i => (
                        <div class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                          {i.name}
                        </div>
                      ))
                    }
                  </td>
                  <td class="px-6 py-4">
                    {c.count}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
