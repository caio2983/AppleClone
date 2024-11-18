import Image from "next/image";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function iPhoneHoverComponent() {
  const [isHovered, setHovered] = useState(false);
  const sidebar = {
    open: {
      opacity: 1,

      height: "50vh",

      zIndex: 999,
      transition: {
        stiffness: 20,
        restDelta: 4,
      },
    },
    closed: {
      opacity: 0,
      translateY: "0",
      height: 0,

      transition: {
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar iPhone</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">
              Explorar todos os modelos de iPhone
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPhone 16 Pro</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPhone 16</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPhone 15</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPhone 14</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPhone SE</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar iPhone</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar iPhone</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acesórios para o iPhone</a>
          </li>

          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Financiamento</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Mais para o iPhone</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para o iPhone</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">iOS 18</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apple Intelligence</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apps da Apple</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Privacidade no iPhone</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">iCloud+</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Carteira, Apple Pay</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Siri</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
