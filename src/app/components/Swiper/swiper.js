import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  Parallax,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComponent() {
  const slides = [
    {
      img: "/slides/badSisters.jpg",
      text: [],
    },
    {
      img: "/slides/shrinking.jpg",
      text: [],
    },
    {
      img: "/slides/disclaimer.jpg",
      text: [],
    },
    {
      img: "/slides/seasonpass.jpg",
      text: [],
    },
    {
      img: "/slides/slowHorses.jpg",
      text: [],
    },
    {
      img: "/slides/tedLasso.jpg",
      text: [],
    },
    {
      img: "/slides/wolfs.jpg",
      text: [],
    },
    {
      img: "/slides/before.jpg",
      text: [],
    },
    {
      img: "/slides/badMonkey.jpg",
      text: [],
    },
    {
      img: "/slides/silo.jpg",
      text: [],
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, Parallax]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={1300}
        slideToClickedSlide={true}
        pagination={{
          type: "bullets",
          clickable: true,
          dynamicBullets: true,
        }}
        preventClicks={false}
        parallax={true}
        style={{
          paddingBottom: "30px",
          paddintTop: "30px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="my-0 mx-auto h-[90vh] w-auto ">
              <img src={slide.img} className="h-full w-full block "></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
