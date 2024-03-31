import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import SelectedItem from './SelectedItem';

export default function ListItems() {
  const location = useLocation();
  const itemsdata = location.state && location.state.data;
  const [items, setItems] = useState([]);
  const [bool,setBool]=useState(false)
  useEffect(() => {
    try {
      const getItems = async (itemsdata) => {
        const response = await axios.get(`http://localhost:9090/Searcheditems/${itemsdata}`,)
        setItems(response.data)
      }
      getItems(itemsdata)
    } catch (e) {
      alert(e)
    }
  }, [itemsdata])

  const AddToCart=async(item)=>{
    try{
      const response=await axios.post("http://localhost:9090/addtocart",{
        id: item.id,
        name: item.name,
        category: item.category,
        cost: item.cost,
        description: item.description,
        // comments: null,
        // uploadedby: null
      })
      alert(response.data)
    }catch(e){
      alert("error")
      console.log(e);
    }
  }
  const navigate=useNavigate()
  const Back = () => {
    navigate(-1)
  }
  const goTo=(item)=>{
    navigate("/item", { state: { data: item } })
  }
  return (
    <div className='m-5'>
      <div className='text-2xl text-gray-100 flex  justify-between  mt-5 mb-5 gap-3'><button onClick={() => Back()} className='bg-slate-700 rounded-lg p-2 hover:bg-black'> Go back</button> <button disabled className='cursor-help bg-slate-700 rounded-lg p-2 tracking-wide '>Category : {itemsdata}</button> </div>
      <hr />
      <div className='flex flex-wrap justify-center p-5'>
      {
        items.map((item) => (
          <div class="w-full flex-col flex justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 p-1">
            <button onClick={()=>goTo(item)}>
              {
                (item.trending)?<p className='absolute text-xl m-2 font-bold' style={{background: '-webkit-linear-gradient(#ff4800, #ff9d00,#ff4800)',webkitBackgroundClip: 'text',webkitTextFillColor: 'transparent'}}>Trending 🔥</p>:<></>
              }
            {
              (item.image===null||item.image===undefined)?
              <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg" class=" max-w-full max-h-full rounded-md" alt="Apple Watch" />:<img src={item.image.split(",")[0]} class="max-w-full max-h-full rounded-md" alt={item.name} />
            }
            </button>
            <div class="px-5 pb-5 mt-2 mb-2">
              <button onClick={()=>goTo(item)}>
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-right">{item.brand}'s {item.name}</h5>{/* {item.description} */}
              </button>
              <div class="flex text-justify justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white text-justify">₹ {item.cost}/-</span>
                <button onClick={()=>AddToCart(item)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
