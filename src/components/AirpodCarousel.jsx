import { useRef, useState } from "react";
import products from "../utils/products"

function AirpodCarousel (){

    const airpodsData = Object.values(products.airPods);

    const [carouselClass, setCarouselClass] = useState('');
    const listRef = useRef(null);
  
    // Handle the slider action
    const showSlider = (type) => {
      const listElement = listRef.current;
      const items = listElement.querySelectorAll('.item');
  
      setCarouselClass(''); // Clear any existing class
      setTimeout(() => {
        if (type === 'next') {
          listElement.appendChild(items[0]);
          setCarouselClass('next');
        } else {
          listElement.prepend(items[items.length - 1]);
          setCarouselClass('prev');
        }
      }, 0);
      
      disableClick(); // Disable clicks temporarily
    };
  
    // Temporarily disable click during transitions
    const disableClick = () => {
      document.getElementById('next').style.pointerEvents = 'none';
      document.getElementById('prev').style.pointerEvents = 'none';
      setTimeout(() => {
        document.getElementById('next').style.pointerEvents = 'auto';
        document.getElementById('prev').style.pointerEvents = 'auto';
      }, 2000);
    };
  
    // Handle the "See More" button
    const showDetails = () => {
      setCarouselClass('showDetail');
    };
  
    // Handle "See All" button to return to the main carousel
    const hideDetails = () => {
      setCarouselClass('');
    };
    

    return(
        <div>
            <div className={`carousel ${carouselClass} relative h-[100vh] w-full overflow-hidden`}>
                <div className="list" ref={listRef}>
                {/* Map through the carousel items */}
                {airpodsData.map((item, index) => (
                    <CarouselItem key={index} item={item} showDetails={showDetails} />
                ))}
                </div>
                <div className="absolute bottom-20 w-[1140px] max-w-[90%] flex justify-between left-1/2 transform -translate-x-1/2">
                    <button id="prev" onClick={() => showSlider('prev')}>{'<'}</button>
                    <button id="next" onClick={() => showSlider('next')}>{'>'}</button>
                    <button id="back" onClick={hideDetails}>See All &#8599;</button>
                </div>
            </div>
        </div>
    )
}

// Carousel Item
const CarouselItem = ({ item, showDetails }) => (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <div className="introduce">
        <div className="title">{item.sliderTitle}</div>
        <div className="topic">{item.topic}</div>
        <div className="des">{item.shortDescription}</div>
        <button className="seeMore" onClick={showDetails}>SEE MORE &#8599;</button>
      </div>
      <div className="detail">
        <div className="title">{item.detailTitle}</div>
        <div className="des">{item.detailDescription}</div>
        <div className="specifications">
          {item.specifications.map((spec, index) => (
            <div key={index}>
              <p>{spec.name}</p>
              <p>{spec.value}</p>
            </div>
          ))}
        </div>
        <div className="checkout">
          <button>Price</button>
          <button>{item.price}</button>
        </div>
      </div>
    </div>
);

export default AirpodCarousel;