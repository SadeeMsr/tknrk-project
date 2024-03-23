"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../../styles/Slider.module.css";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import useScreenSize from "@/hooks/useScreenSize";

export default function Slider({ latestProjects }) {
  const screenSize = useScreenSize();

  return (
    <Swiper
      slidesPerView={screenSize.width < 780 ? 1 : 3}
      initialSlide="3"
      centeredSlides={true}
      loop={true}
      spaceBetween={screenSize.width < 780 ? 0 : 20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
      }}
      modules={[Autoplay]}
      className="mySwiper select-none"
    >
      {latestProjects.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="relative h-72 cursor-pointer hover:opacity-75">
              <Image
                alt="Random"
                src={item.imgPath}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="text-xl mt-5">{item.title}</h1>
            <p className="text-slate-600 text-sm uppercase">{item.subtitle}</p>
          </SwiperSlide>
        );
      })}

    
    </Swiper>
  );
}
