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
    <nav id="globalnav" className="  relative top-0 z-50">
      <div id="nav-content" className="px-[22px] mx-[256px] h-[44px] ">
        <ul
          id="globalnav-ul"
          className="flex flex-row text-black justify-between h-full items-center gap-2"
        >
          <li>
            <FaApple className="text-[rgba(0,0,0,0.8)] text-[20px]  align-middle leading-[50px]" />
          </li>
          <li>
            <motion.div>
              <LojaHoverComponent></LojaHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <MacHoverComponent></MacHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <IpadHoverComponent></IpadHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <IphoneHoverComponent></IphoneHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <WatchHoverComponent></WatchHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <AirPodsHoverComponent></AirPodsHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <TVeCasaHoverComponent></TVeCasaHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <EntretenimentoHoverComponent></EntretenimentoHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <AcessoriosHoverComponent></AcessoriosHoverComponent>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <SuporteHoverComponent></SuporteHoverComponent>
            </motion.div>
          </li>

          <li>
            <IoIosSearch className="text-[rgba(0,0,0,0.8)] text-[20px]"></IoIosSearch>
          </li>
          <li>
            <IoBagOutline className="text-[rgba(0,0,0,0.8)] text-[20px]"></IoBagOutline>
          </li>
        </ul>
      </div>

      <li>
        <HoverComponent>
          <div>aaa</div>
        </HoverComponent>
      </li>
    </nav>
  );
}
