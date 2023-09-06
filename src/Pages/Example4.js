import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../index.css'

function Example4() {
    const [isActive,setActive] = useState("close");
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            Array(50).fill().map((e,i)=>{
                return(
                    <SwiperSlide key={i}>Slide {1+1}</SwiperSlide>
                    
                )
            })
        }
      ...
    </Swiper>

     {/* isActive === "open" ? "close" : "open" */}

    <button onClick={()=>{setActive(isActive === "open" ? "close" : "open")}}>클릭</button>
    <span>{isActive}</span>
    {/* <p style={{display: isActive ==="open" ? "block" : "none"}}>Lorem ipsum dolor sit amet.</p> */}

{
    isActive === "open" &&
    <p className={`text-center font-bold bolder ${isActive ==="open" ? "on" : ""}`}>Lorem ipsum dolor sit amet.</p>
}
{/* ↑디스플레이논 없이 쓰는 문법 */}

    </>
  )
}

export default Example4