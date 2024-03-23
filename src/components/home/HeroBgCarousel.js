"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/HeroBgCarousel.module.css";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import AnimatedText from "./AnimatedText";
import CircleSentence from "../shared/CircleSentence";

export default function HeroBgCarousel({ carouselImg, placeholderTexts }) {
  const [replay, setReplay] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  function handleSlideChange(item) {
    setPlaceholderIndex(
      (prevIndex) => (prevIndex + 1) % placeholderTexts.length
    );
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="relative lg:ms-32 ms-8">
        <div
          className="lg:w-[55%] w-full absolute flex flex-col h-screen justify-center"
          style={{ zIndex: 5 }}
        >
          <h1 className="text-white lg:text-5xl text-4xl font-bold capitalize">
            Tanya Karim N.R. Khan & Associates
          </h1>
          <motion.div
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="mt-5">
              <AnimatedText
                placeHolders={{ ...placeholderTexts[placeholderIndex] }}
                textStyle={"text-xl"}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Swiper
        onSlideChange={handleSlideChange}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper bg-[rgba(0,0,0,0.7)]"
      >
        {carouselImg.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="flex justify-center items-center relative overflow-hidden bg-[rgba(0,0,0,1)]"
                style={{ height: "100vh" }}
              >
                <Image
                  src={item.path}
                  fill
                  sizes="100vw"
                  className="hover:scale-125 duration-[10000ms]"
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                  alt="random"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
