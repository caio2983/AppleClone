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
    <div>
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
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full block "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full block "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-0 mx-auto h-[90vh] w-auto ">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1960x1102.jpg"
              className="h-full w-full "
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
