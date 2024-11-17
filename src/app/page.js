"use client";

import Image from "next/image";
import Header from "./components/Header/header";
import HolidayBlock from "./components/HolidayBlock/holiday";
import IphoneBlock from "./components/IphoneBlock/iphone";
import { useEffect, useState } from "react";
import React from "react";
import SquaresBlock from "./components/SquaresBlock/squares";
import SwiperComponent from "./components/Swiper/swiper";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSwiper } from "swiper/react";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HolidayBlock></HolidayBlock>

      <IphoneBlock></IphoneBlock>
      <SquaresBlock></SquaresBlock>
      <SwiperComponent></SwiperComponent>
    </div>
  );
}
