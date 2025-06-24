"use client";
import { Button } from "@/components/ui/button"
// import { toast, Toaster } from "sonner";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const page = () => {
  // const handleClick = () => {
  //   toast("Hello!");
  // };

  return (
    <>
      {/* <div className="">
        <div className="">page</div>
        <h1>Hello</h1>
        <Button variant={"default"} size={"lg"}>Logo</Button>
        <Button onClick={handleClick}>Toast me!</Button>
      </div> */}

      <div className="">
        <h1>Hello</h1>
          <div className="">
            <input type="text" className="bg-gray border border-gray-500 justify-center w-[50%]"/>
          </div>
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="/assets/images/WatArun.jpg" alt="Temple 1" className="w-55 h-55" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/WatPhraBorommathatChaiya.jpg" alt="Temple 2" className="w-55 h-55" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/WatPhraThatDoiSuthep.jpg" alt="Temple 3" className="w-55 h-55" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/WatYansangwararam.jpg" alt="Temple 4" className="w-55 h-55" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default page