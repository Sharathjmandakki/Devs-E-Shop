import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [specifications, setSpecifications] = useState();
  const [description, setDescription] = useState("");
  const [descriptionarr, setDescriptionArr] = useState([]);
  const [trending, setTrending] = useState(false);
  const [cost, setCost] = useState();
  const AddItem = async(e) => {
    e.preventDefault();
    try{

      // alert(name+" "+category+" "+cost+" "+brand+" "+description+" "+specifications+" "+image+" "+trending)
      // // if(res.data!==null|res.data!==undefined){
      // //   setDescriptionArr(res.data);
      // // }      
      const response=await axios.post("http://localhost:9090/additem",{
          name:name,
          category:category,
          cost:cost,
          brand:brand,
          description:description,
          specifications:specifications,
          image:image,
          trending:trending,
        });
        if(response.data==="Added"){
          alert("🥳");
          window.location.href="/admin";
        }else{
          document.getElementById("error").innerHTML=response.data;
        }
    }catch(e){
      document.getElementById("error").innerHTML="Server Error";
    }
  }
  return (
    <div className='md:mt-20 flex justify-center mb-10'>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-3" action="#" onSubmit={AddItem}>
          <marquee class="text-red-500 text-lg">enter image links and specifications in comma separated ( , )</marquee>
          <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Add Admin or User</h5>
          <hr/>
          <div className='text-red-500 text-center p-2' id='error'></div>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
            <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="item name" required value={name} onChange={e => { setName(e.target.value) }} />
          </div>
          <div>
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Category</label>
            <input type="text" name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="category" required value={category} onChange={e => { setCategory(e.target.value) }} />
          </div>
          <div>
            <label for="cost" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Cost</label>
            <input type="number"min={0} name="cost" id="cost" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="499" required value={cost} onChange={e => { setCost(e.target.value) }} />
          </div>
          <div>
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Brand</label>
            <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="brand" required value={brand} onChange={e => { setBrand(e.target.value) }} />
          </div>          
          <div>
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item description</label>
            <textarea  name="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="4K processing—that's 8 million pixels worth of detail—for a picture that's sharp and clear, even close-up." value={description} onChange={e => { setDescription(e.target.value) }} />
          </div>
          <div>
            <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Images (at list 2 with a comma separated)</label>
            <input type="text" name="image" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="image link , image link , image link" required value={image} onChange={e => { setImage(e.target.value) }} />
          </div>
          <div>
            <label for="specifications" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item specifications</label>
            <textarea  name="specifications" id="specifications" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="color : red , brand : apple ," value={specifications} onChange={e => { setSpecifications(e.target.value) }} />
          </div>
          
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" value={trending} onChange={e=>setTrending(!trending)}/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Add Item To Trending Section</span>
</label>

          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
        </form>
      </div>
    </div>
  )
}

