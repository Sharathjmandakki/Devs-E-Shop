import axios from 'axios';
import React, { useEffect, useState } from 'react'
import payment from '../Shop/Payment';
import AddressModel from '../Shop/AddressModel';
import Sheet from 'react-modal-sheet'
export default function Cart() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);
  const [total, setTotal] = useState();
  const [items, setItems] = useState(false);
  const [images, setImages] = useState()
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const data = async () => {
        const response = await axios.get("http://localhost:9090/user")
        setUser(response.data);
        setCart(response.data.cart);
        if (response.data.cart.length != 0) {
          setItems(true);
          let cost = 0;
          for (let index = 0; index < response.data.cart.length; index++) {
            cost += response.data.cart[index].cost;
          }
          setTotal(cost)
        }
      }
      data()
    } catch (e) {
      alert(e)
    }
  }, [])
  const Remove = async (item) => {
    try {
      const response = await axios.post("http://localhost:9090/deletefromcart", {
        id: item.id,
        name: item.name,
      })
      alert(response.data)
    } catch (e) {
      alert("error in removing")
    }
  }
  const Pay=()=>{

    //check your intrnet
    setOpen(true)
  }
  const CashOnDelivery=async()=>{
    try {
      const res = await axios.post("http://localhost:9090/createOrder", {
        items:user.cart,
        id:0,
        paid:false,
      })
      console.log(res);
      if(res.data==="Created"){
        const response = await axios.post("http://localhost:9090/buyallcart", {
          name:user.username,
          email:user.email,
        })
        alert(response.data)
        if(response.data==="added"){
          window.location.href="myorders"
        }
      }
      
    } catch (e) {
      alert("error in buying")
    }
  }

  return (
    <div className='m-10'>
      <p className='text-5xl font-extrabold text-red-400 flex justify-center mb-2' style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5',fontStyle:'initial'}}>
        Your Cart
      </p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((c) => (
                <tr key={c.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="p-4">
                    {
                      (c.image === null || c.image === undefined) ? <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" class="w-16 md:w-32 max-w-full max-h-full rounded-md" alt="Apple Watch" /> : <img src={c.image.split(",")[1]} class="w-16 md:w-32 max-w-full max-h-full rounded-md" alt={c.name} />
                    }
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {c.name} {(c.trending)?<>🔥</>:<></>}
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    1
                  </td>
                  {/* <td class="px-6 py-4">
                    <div class="flex items-center">
                      <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span class="sr-only">Quantity button</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                      </div>
                      <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span class="sr-only">Quantity button</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td> */}
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Total : ₹ {c.cost}/-
                  </td>
                  <td class="px-6 py-4">
                    <button onClick={() => Remove(c)} class="p-2 font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
              ))
            }
            {
              (items) ? <tr>
                <td colSpan={4}>
                  <p class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl cursor-wait">
                    Total : ₹ {total}/-
                  </p>
                </td>
                <td class="px-6 py-4">
                  <button onClick={() => Pay()} class="bg-white rounded-3xl p-2 font-medium text-blue-600 dark:text-blue-500 hover:bg-black hover:text-amber-400">BUY NOW 🛍️</button>

                </td>
              </tr> : <tr>
                <td colSpan={5} className='text-4xl text-center p-10'>
                  No Items In cart </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      {/* Sheet */}
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container className='mt-5 max-h-80 overflow-y-auto cursor-not-allowed' style={{backgroundColor:'#172030', borderTopLeftRadius:'50px',borderTopRightRadius:'50px'}}>
          <Sheet.Header className='p-5 overflow-hidden flex justify-between min-h-20 cursor-grab'>
            <button type="submit" class="text-white text-5xl font-bold" onClick={() => setOpen(false)} style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5',fontStyle:'initial',textTransform:'capitalize'}}>Place order</button>
            {(window.screen.width<400)?<></>:<button type="submit" class="text-white text-5xl rounded-lg px-5 py-2.5 text-center" onClick={() => setOpen(false)} >❌</button>}
          </Sheet.Header>
          <Sheet.Content>
            <div className='p-10 flex justify-center flex-wrap '>
              <button onClick={()=>{
                CashOnDelivery()
                  }} class="m-5 w-full max-w-60 text-xl border bg-slate-200 rounded-3xl p-5 font-medium text-gray-900 dark:text-gray-900 hover:bg-black hover:text-amber-400">Cash On Dilavey  🚚 </button>
                <button onClick={() => {
                payment()
              }} id="rzp-button1" class="m-5 w-full max-w-60 text-xl border bg-slate-200 rounded-3xl p-5 font-medium  text-gray-900 dark:text-gray-900 hover:bg-black hover:text-amber-400">Pay Now 🪙 </button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  )
}