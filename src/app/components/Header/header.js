import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import LojaHoverComponent from "./HoverComponents/Loja";
import MacHoverComponent from "./HoverComponents/Mac";
import IpadHoverComponent from "./HoverComponents/Ipad";
import IphoneHoverComponent from "./HoverComponents/Iphone";
import WatchHoverComponent from "./HoverComponents/Watch";
import AirPodsHoverComponent from "./HoverComponents/Airpods";
import TVeCasaHoverComponent from "./HoverComponents/TveCasa";
import EntretenimentoHoverComponent from "./HoverComponents/Entretenimento";
import AcessoriosHoverComponent from "./HoverComponents/Acessorios";
import SuporteHoverComponent from "./HoverComponents/Suporte";
import HoverComponent from "./Hover";

export default function Header() {
  return (
    <nav id="globalnav" className="relative top-0 z-50">
      <div id="nav-content" className="px-[22px] mx-[256px] h-[44px]">
        <ul
          id="globalnav-ul"
          className="flex flex-row text-black justify-between h-full items-center gap-2"
        >
          <li>
            <FaApple className="text-[rgba(0,0,0,0.8)] text-[20px] align-middle leading-[50px]" />
          </li>
          <li>
            <HoverComponent label="Loja">
              <LojaHoverComponent></LojaHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Mac">
              <MacHoverComponent></MacHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="iPad">
              <IpadHoverComponent></IpadHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="iPhone">
              <IphoneHoverComponent></IphoneHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Watch">
              <WatchHoverComponent></WatchHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="AirPods">
              <AirPodsHoverComponent></AirPodsHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="TV e Casa">
              <TVeCasaHoverComponent></TVeCasaHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Entretenimento">
              <EntretenimentoHoverComponent></EntretenimentoHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Acessórios">
              <AcessoriosHoverComponent></AcessoriosHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Suporte">
              <SuporteHoverComponent></SuporteHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <IoIosSearch className="text-[rgba(0,0,0,0.8)] text-[20px]"></IoIosSearch>
          </li>
          <li>
            <IoBagOutline className="text-[rgba(0,0,0,0.8)] text-[20px]"></IoBagOutline>
          </li>
        </ul>
      </div>
    </nav>
  );
}
