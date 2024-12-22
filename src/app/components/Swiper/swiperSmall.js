import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  Parallax,
  Grid,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperSmallComponent() {
  const slides = [
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
    { img: "/slides/slidesSmall/HelloKitty.jpg", text: [] },
  ];

  return (
    <div>
      <Swiper
        modules={[Scrollbar, Grid, Autoplay]}
        spaceBetween={10}
        slidesPerView={3.85}
        grid={{
          rows: 2,
          fill: "row",
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="swiper-transition"
        speed={5000}
        scrollbar={{ draggable: false }}
        centeredSlides={true}
        loop={true}
        style={{
          paddingBottom: "30px",
          paddingTop: "30px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className=" h-[240px] w-[420px]">
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="h-full w-full block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
