import React, { useState } from "react";
import { Navigation, Scrollbar, Grid, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function SwiperSmallComponent() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isPaused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const handleMouseOver = (index) => {
    if (swiperInstance) {
      console.log(swiperInstance);
      swiperInstance.setTransition(0);
      setActiveIndex(index);
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseOut = () => {
    if (swiperInstance && isPaused == false) {
      setActiveIndex(null);
      swiperInstance.autoplay.start();
    }
  };

  const handleClick = () => {
    if (swiperInstance) {
      if (!isPaused) {
        swiperInstance.setTransition(0);
        swiperInstance.autoplay.stop();
        setPaused(true);
      } else {
        swiperInstance.setTransition(0);
        swiperInstance.autoplay.start();
        setPaused(false);
      }
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
            className="h-[240px] w-[420px] brightness-100 opacity-5"
          >
            <div className="h-[240px] w-[420px]">
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="h-full w-full block"
              />
            </div>
            <div
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              className={`swiper-overlay ${
                activeIndex === index ? "swiper-overlay-active" : ""
              }`}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
