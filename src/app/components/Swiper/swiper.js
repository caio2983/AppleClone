import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSwiper } from "swiper/react";

export default function SwiperComponent() {
  const swiper = useSwiper();
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1.2}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/689x387.jpg"></img>
      </SwiperSlide>
    </Swiper>
  );
}
