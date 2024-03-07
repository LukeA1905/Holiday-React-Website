import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
const ImageSlider = () => {

  const slides = [
    {
      url: 'https://static01.nyt.com/images/2019/07/10/dining/09dessert1/09dessert1-superJumbo.jpg',
      title: 'Dessert',
    },
    {
      url: 'https://www.spahotel.co.uk/wp-content/uploads/2021/09/Penny-Young-Photography-Spa-Hotel-052-scaled.jpg',
      title: 'Hotel Food'
    },
    {
      url: 'https://www.hotelridderkerk.nl/inc/hotels/15/halls/200/mobile-retina/carousel_1024x768_image00006-3.jpeg',
      title: 'Buffet Food'
    },
    {
      url: 'https://www.cookhouseandpub.co.uk/en-gb/autumn-winter-2023/cookhouse_and_pub_aw23_drinks_mocktails.jpg',
      title: 'Drinks'
    },
    {
      url: 'https://static.euronews.com/articles/stories/07/67/38/98/1440x810_cmsv2_882905dc-4929-5bf1-a2b0-213a10d2e068-7673898.jpg',
      title: 'Room Service'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
      {/*Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/*Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) =>(
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex) }>
                <RxDotFilled/>
            </div>
             ))}
      </div>


    </div>
  );
};

export default ImageSlider;
