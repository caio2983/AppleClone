import React, { useState } from "react";
import { Navigation, Scrollbar, Grid, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function SwiperSmallComponent() {
  const [swiperInstance, setSwiperInstance] = useState(null);

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

  const handleMouseOver = () => {
    if (swiperInstance) {
      console.log(swiperInstance);
      swiperInstance.setTransition(0);

      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseOut = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div>
      <Swiper
        modules={[Scrollbar, Grid, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={3.85}
        autoplay={{
          disableOnInteraction: false,
          delay: 0,
        }}
        className="swiper-transition swiper-small"
        speed={1000}
        scrollbar={{ draggable: false }}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        style={{
          paddingBottom: "30px",
          paddingTop: "30px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="h-[240px] w-[420px] brightness-100"
          >
            <div
              className="h-[240px] w-[420px]"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
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
