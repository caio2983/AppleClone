"use client";

import Image from "next/image";
import Header from "./components/Header/header";
import HolidayBlock from "./components/HolidayBlock/holiday";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] max-w-[100vw]">
      <Header></Header>
      <HolidayBlock></HolidayBlock>
    </div>
  );
}
