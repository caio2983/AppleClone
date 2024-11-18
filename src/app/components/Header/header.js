import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import LojaHoverComponent from "./HoverComponents/Loja";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const sidebar = {
    open: {
      opacity: 1,

      height: "70vh",
      position: "relative",
      zIndex: 999,
      transition: {
        stiffness: 20,
        restDelta: 4,
      },
    },
    closed: {
      opacity: 1,
      translateY: "0",
      height: 0,
      visibility: "hidden",
      position: "relative",
      backgroundColor: "#1300ff",
      transition: {
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <nav className="  relative top-0 z-50">
      <div id="nav-content" className="px-[22px] mx-[256px] h-[44px] ">
        <ul className="flex flex-row text-black justify-between h-full items-center gap-2">
          <li>
            <FaApple className="text-[rgba(0,0,0,0.8)] text-[20px]  align-middle leading-[50px]" />
          </li>
          <li className="relative z-50">
            <motion.div
              onHoverStart={() => setOpen(!isOpen)}
              onHoverEnd={() => setOpen(!isOpen)}
            >
              <a href="#" className="px-[8px]">
                <span>Loja</span>
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

      <AnimatePresence>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={sidebar}
          initial="closed"
          className="submenu"
        >
          <LojaHoverComponent></LojaHoverComponent>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
