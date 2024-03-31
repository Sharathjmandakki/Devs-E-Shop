import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SelectSearch from 'react-select-search';
import Select from 'react-select'
export default function AddCatgory() {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [list, setList] = useState([]);
  const darkTheme = {
    colors: {
      primary: '#333', // Dark gray for primary elements
      primary25: '#444', // Slightly lighter gray for hover/focus states
      primary50: '#555', // Even lighter gray for disabled states
      neutral0: '#fff', // White for text and background of selected item
      neutral80: '#222', // Dark gray for placeholder text
    },
    borderRadius: 4, // Optional: Change border radius for a softer look
    spacing: { baseUnit: 1 }, // Optional: Adjust spacing for a more compact feel
  };
  
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("http://localhost:9090/category");
        const formattedCategories = response.data.map(category => ({
          value: category,
          label: category
        }));
        setList(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Error fetching categories. Please try again later.");
      }
    };

    getCategories();
  }, []);

  const handleSelectChange = (value) => {
    setCategory(value.value)
  }
  const AddToTrending = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/addcategorytotrending", {
        image: image,
        name: category
      });
      if(response.data==="added"){
        setCategory(" ")
        setImage("")
      }
      alert(response.data)

    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className='md:mt-20 flex justify-center mb-10'>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-3" action="#" onSubmit={AddToTrending}>
          <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Add Category to Trending</h5>
          <hr />
          <div className='text-red-500 text-center p-2' id='error'></div>
          <div>
            <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Image Link</label>
            <input type="text" name="image" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="image link" required value={image} onChange={e => { setImage(e.target.value) }} />
          </div>
          <div>
            <label for="cat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
            <Select
              className="basic-single text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400"
              classNamePrefix="select"
              name="cat"
              id='cat'
              options={list}
              isSearchable={true}
              defaultValue={{ value: '', label: 'Please Select' }}
              onChange={handleSelectChange}
            />
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Trending</button>
        </form>
      </div>
    </div>
  )
}
