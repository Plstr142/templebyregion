"use client"

import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Hero = ({landmarks}:{landmarks: landmarkCardProps[]}) => {
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {
                landmarks.map((landmark) => {
                    return (
                        <div>
                            <SwiperSlide>
                                <img src={landmarks.image} />
                            </SwiperSlide>
                        </div>
                    )
                })
            }
      </Swiper>
    </div>
  )
}
export default Hero