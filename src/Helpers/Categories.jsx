import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Categories(props) {
  const images=props.images;
  const catgo=props.catgo;
  const navigate=useNavigate();
  const getItem=(cat)=>{
    navigate("items", { state: { data: cat } })
  }
  return (
    <div className='mt-10 mb-10'>
      <h1 className='text-5xl text-center font-bold text-green-400 mt-10 mb-5 ' style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5'}}>Trending 🔥 Categories</h1>
    <div className='flex flex-wrap justify-center mt-2 mb-2'>
      {
        images.map((i,index)=>(
          <button key={index} onClick={()=>{getItem(catgo[index])}} className='m-2 rounded-2xl bg-slate-600 p-3' >
            <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src={i} className='rounded-2xl' width="300px"/>
            <p className='absolute text-xl text-white font-extrabold' style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)',fontFamily: `"Rubik Scribble`,fontStyle: 'normal',letterSpacing:'3px',wordSpacing:'5px' }}>{catgo[index]}</p>   
            </div>
          </button>
        ))
      }
    </div>
    </div>
  )
}
