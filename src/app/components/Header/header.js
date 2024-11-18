import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import LojaHoverComponent from "./HoverComponents/Loja";

export default function Header() {
  const [isHovered, setHovered] = useState(false);
  return (
    <nav className="  relative top-0 z-50">
      <div id="nav-content" className="px-[22px] mx-[256px] h-[44px] ">
        <ul className="flex flex-row text-black justify-between h-full items-center gap-2">
          <li>
            <FaApple className="text-[rgba(0,0,0,0.8)] text-[20px]  align-middle leading-[50px]" />
          </li>
          <li className="z-50">
            <motion.div>
              <a href="#" className="px-[8px]">
                <LojaHoverComponent>
                  <span>Loja</span>
                </LojaHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Mac</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Ipad</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Iphone</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Watch</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>AirPods</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>TV e Casa</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Entretenimento</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Acessórios</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Suporte</span>
            </a>
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
