"use client";
// import { Button } from "@/components/ui/button"
// import { toast, Toaster } from "sonner";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const templeImages = [
  {
    src: "/assets/images/WatArun.jpg",
    alt: "Temple 1",
    id: 1
  },
  {
    src: "/assets/images/WatPhraBorommathatChaiya.jpg",
    alt: "Temple 2",
    id: 2
  },
  {
    src: "/assets/images/WatPhraThatDoiSuthep.jpg",
    alt: "Temple 3",
    id: 3
  },
  {
    src: "/assets/images/WatYansangwararam.jpg",
    alt: "Temple 4",
    id: 4
  },
  {
    src: "/assets/images/WatChediLuang.jpeg",
    alt: "Temple 4",
    id: 5
  },
  {
    src: "/assets/images/WatNongWang.jpeg",
    alt: "Temple 4",
    id: 6
  },
  {
    src: "/assets/images/WatPhraKaew.jpg",
    alt: "Temple 4",
    id: 7
  },
  {
    src: "/assets/images/WatSothonWararamWorawihan.jpg",
    alt: "Temple 4",
    id: 8
  },
  {
    src: "/assets/images/WatThamKhaoNoi.jpeg",
    alt: "Temple 4",
    id: 9
  }
];

const page = () => {
  // const handleClick = () => {
  //   toast("Hello!");
  // };

  return (
    <>
      {/* แบบ Grab cursor */}
      <div className={`text-center flex flex-col items-center justify-center bg-transparent ${playfair.className}`}>
        <h1 className="text-5xl font-bold text-[#6d6867d8] tracking-wide mb-6">TEMPLE IN THAILAND</h1>

        <div className="relative">
          <input
            type="text"
            className="bg-white border border-[#8B5E3C] focus:border-[#C19A6B] focus:ring-2 focus:ring-[#EED6C4] w-[300px] p-3 rounded shadow-md placeholder:text-gray-500"
            placeholder="Search any one place"
          />
        </div>
      </div>

      <div className='pt-16'>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {templeImages.map((temple) => (
            <SwiperSlide key={temple.id}>
              <div className="flex justify-center items-center h-full">
                <Image
                  src={temple.src}
                  alt={temple.alt}
                  width={300}
                  height={300}
                  className="w-55 h-55"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className='pt-16'>
        <Swiper slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">

              <Image
                src="/assets/images/WatArun.jpg"
                alt="Temple 1"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">

              <Image
                src="/assets/images/WatPhraBorommathatChaiya.jpg"
                alt="Temple 2"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <Image
                src="/assets/images/WatPhraThatDoiSuthep.jpg"
                alt="Temple 3"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <Image
                src="/assets/images/WatYansangwararam.jpg"
                alt="Temple 4"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div> */}



{/* <div className="">
        <div className="">page</div>
        <h1>Hello</h1>
        <Button variant={"default"} size={"lg"}>Logo</Button>
        <Button onClick={handleClick}>Toast me!</Button>
      </div> */}


      {/* แบบ pagination */}
      {/* <div className={`text-center flex flex-col items-center justify-center bg-transparent ${playfair.className}`}>
        <h1 className="text-5xl font-bold text-[#6d6867d8] tracking-wide mb-6">TEMPLE IN THAILAND</h1>

        <div className="relative">
          <input
            type="text"
            className="bg-white border border-[#8B5E3C] focus:border-[#C19A6B] focus:ring-2 focus:ring-[#EED6C4] w-[300px] p-3 rounded shadow-md placeholder:text-gray-500"
            placeholder="Search any one place"
          />
        </div>
      </div>

      <div className='pt-16'>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">

              <Image
                src="/assets/images/WatArun.jpg"
                alt="Temple 1"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">

              <Image
                src="/assets/images/WatPhraBorommathatChaiya.jpg"
                alt="Temple 2"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <Image
                src="/assets/images/WatPhraThatDoiSuthep.jpg"
                alt="Temple 3"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <Image
                src="/assets/images/WatYansangwararam.jpg"
                alt="Temple 4"
                width={300}
                height={300}
                className="w-55 h-55"
                priority
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div> */}


    </>
  )
}
export default page