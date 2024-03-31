import React, { useEffect, useState } from 'react';
import './AutoCarousel.css';
import { useNavigate } from 'react-router-dom';
const Items = ({ images,catgo }) => {
  const navigate=useNavigate();
  const getItem=(cat)=>{
    navigate("/item", { state: { data: cat } })
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };
  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };
  const handleClickIndicator = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide after 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);
  return (
    <div className="carousel" >
      <h1 className='text-5xl text-center font-bold text-green-400 mt-10 mb-5 ' style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5'}}>Trending 🔥 items</h1>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <button onClick={()=>getItem(catgo[index])}
            key={index}
            className={index === activeIndex ? 'carousel-item active' : 'carousel-item'}
          >
            <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src={image} className="carousel-image" alt={`Slide ${index + 1}`} />
            <p className='absolute text-5xl text-white font-extrabold' style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)',fontFamily: `Rubik Scribble`,fontStyle: 'normal',letterSpacing:'3px',wordSpacing:'5px' }}>{catgo[index].brand+"'s | "+catgo[index].name}</p>   
            </div>
          </button>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'indicator active' : 'indicator'}
            onClick={() => handleClickIndicator(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Items;
