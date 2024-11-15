"use client";

import Image from "next/image";
import Header from "./components/Header/header";
import HolidayBlock from "./components/HolidayBlock/holiday";
import IphoneBlock from "./components/IphoneBlock/iphone";
import { useEffect, useState } from "react";
import React from "react";
import SquaresBlock from "./components/SquaresBlock/squares";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HolidayBlock></HolidayBlock>

      <IphoneBlock></IphoneBlock>
      <SquaresBlock></SquaresBlock>
    </div>
  );
}
