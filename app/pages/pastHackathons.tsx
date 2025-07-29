'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import hackScreenshot from '@/public/hackScreenshot.png'
import Image from 'next/image';

const images = [
  hackScreenshot,
  hackScreenshot, 
  hackScreenshot,
];

const pastHackathons = () => {
  return (
    <div>
        <h1 className= "font-inter text-[67px] font-bold ">Past Hackathons</h1>
        <div className="w-full max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 3000 }}
            className="rounded-2xl overflow-hidden"
          >
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={image}
                  alt={`Slide ${i}`}
                  className="w-full h-[400px] object-cover"
                  width={800}
                  height={400}
                  priority={i === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default pastHackathons