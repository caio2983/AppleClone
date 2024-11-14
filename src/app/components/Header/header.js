import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import React from "react";

export default function Header() {
  return (
    <nav className="  bg-slate-600 relative top-0">
      <div id="nav-content" className="px-[22px] mx-[256px] h-[44px] ">
        <ul className="flex flex-row text-black justify-between h-full items-center gap-2">
          <li>
            <FaApple className="text-[rgba(0,0,0,0.8)] text-[20px]  align-middle leading-[50px]" />
          </li>
          <li>
            <a href="#" className="px-[8px]">
              <span>Loja</span>
            </a>
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
