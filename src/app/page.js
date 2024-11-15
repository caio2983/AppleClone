"use client";

import Image from "next/image";
import Header from "./components/Header/header";
import HolidayBlock from "./components/HolidayBlock/holiday";
import IphoneBlock from "./components/IphoneBlock/iphone";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  return (
    <div className="  max-w-[100vw] ">
      <Header></Header>
      <HolidayBlock></HolidayBlock>
      <div id="iphone-blocks" className="flex flex-col gap-[16px]">
        <IphoneBlock></IphoneBlock>
        <IphoneBlock></IphoneBlock>
      </div>
    </div>
  );
}
