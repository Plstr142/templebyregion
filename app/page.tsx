"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

import { Roboto } from "next/font/google";

const roboto = Roboto({
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

const Page = () => {
  // State สำหรับจำนวนคอลัมภ์และ auto play
  const [columns, setColumns] = useState(4);
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <>
      {/* แบบ Grab cursor */}

      <div
        id="temple"
        className={`templeall min-h-screen bg-cover bg-center flex flex-col items-center`}
        style={{
          backgroundImage: "url('/assets/images/bg-temple.jpg')", // เปลี่ยน path ตามไฟล์จริง
        }}
      >
        <div className={`text-center flex flex-col items-center justify-center bg-transparent ${roboto.className} pt-8`}>
          <h1 className="text-5xl font-bold text-[#6d6867d8] tracking-wide mb-6">TEMPLE IN THAILAND</h1>
          <div className="relative mb-4">
            <input
              type="text"
              className="bg-white border border-[#8B5E3C] focus:border-[#C19A6B] focus:ring-2 focus:ring-[#EED6C4] w-[300px] p-3 rounded shadow-md placeholder:text-gray-500"
              placeholder="Search any one place"
            />
          </div>
          {/* ปุ่มเลือกจำนวนคอลัมภ์ */}
          <div className="flex gap-2 mb-4">
            {[2, 3, 4].map((col) => (
              <button
                key={col}
                className={`px-4 py-2 rounded border ${columns === col ? "bg-[#1a2d63] text-white" : "bg-white text-[#6d6867d8]"}`}
                onClick={() => setColumns(col)}
              >
                {col} Columns
              </button>
            ))}
          </div>
          {/* ปุ่มเปิด/ปิด Auto Play */}
          <div className="flex gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded border ${autoPlay ? "bg-[#6d6867d8] text-white" : "bg-white text-[#6d6867d8]"}`}
              onClick={() => setAutoPlay(true)}
            >
              Auto Play
            </button>
            <button
              className={`px-4 py-2 rounded border ${!autoPlay ? "bg-[#6d6867d8] text-white" : "bg-white text-[#6d6867d8]"}`}
              onClick={() => setAutoPlay(false)}
            >
              No Auto Play
            </button>
          </div>
        </div>

        <div className="w-full max-w-7xl pt-4 pb-12">
          <Swiper
            slidesPerView={columns}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{ clickable: true }}
            modules={autoPlay ? [Pagination, Autoplay] : [Pagination]}
            autoplay={autoPlay ? { delay: 2000, disableOnInteraction: false } : false}
            className="mySwiper"
          >
            {templeImages.map((temple) => (
              <SwiperSlide key={temple.id}>
                <div
                  id="watthai"
                  className="wat flex justify-center items-center h-[340px] bg-white/80 rounded-lg shadow-lg"
                >
                  <Image
                    src={temple.src}
                    alt={temple.alt}
                    width={260}
                    height={260}
                    className="object-contain rounded"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <div className='pt-16'>
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
        </div> */}





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
export default Page