"use client";

import Image from "next/image";
import Header from "./components/Header/header";
import HolidayBlock from "./components/HolidayBlock/holiday";
import IphoneBlock from "./components/IphoneBlock/iphone";
import { useEffect, useState } from "react";
import React from "react";
import SquaresBlock from "./components/SquaresBlock/squares";
import SwiperComponent from "./components/Swiper/swiper";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSwiper } from "swiper/react";
import SwiperSmallComponent from "./components/Swiper/swiperSmall";

export default function Home() {
  return (
    <div className="relative z-0 ">
      <Header></Header>
      <HolidayBlock></HolidayBlock>

      <IphoneBlock></IphoneBlock>
      <SquaresBlock></SquaresBlock>
      <SwiperComponent></SwiperComponent>
      <SwiperSmallComponent></SwiperSmallComponent>
    </div>
  );
}
