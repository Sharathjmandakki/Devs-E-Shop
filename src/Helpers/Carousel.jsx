import React, { useEffect, useState } from 'react';
import './Carousel.css';
const Carousel = ({ images }) => {
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
    <div className="carousel" style={{width:'380px', marginTop:'20px'}} >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === activeIndex ? 'carousel-item active' : 'carousel-item'}
          >
            <img src={image} className="carousel-image" alt={`Slide ${index + 1}`} style={{width:'300'}}/>
          </div>
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

export default Carousel;
