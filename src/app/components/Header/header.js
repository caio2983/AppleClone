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
            <motion.div>
              <a href="#" className="px-[8px]">
                <MacHoverComponent>
                  <span>Mac</span>
                </MacHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <IpadHoverComponent>
                  <span>Ipad</span>
                </IpadHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <IphoneHoverComponent>
                  <span>Iphone</span>
                </IphoneHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <WatchHoverComponent>
                  <span>Watch</span>
                </WatchHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <AirPodsHoverComponent>
                  <span>AirPods</span>
                </AirPodsHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <TVeCasaHoverComponent>
                  <span>Tv e Casa</span>
                </TVeCasaHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <EntretenimentoHoverComponent>
                  <span>Entretenimento</span>
                </EntretenimentoHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <AcessoriosHoverComponent>
                  <span>Acessorios</span>
                </AcessoriosHoverComponent>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div>
              <a href="#" className="px-[8px]">
                <SuporteHoverComponent>
                  <span>Suporte</span>
                </SuporteHoverComponent>
              </a>
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
    </nav>
  );
}
