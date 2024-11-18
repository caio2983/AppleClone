import Image from "next/image";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function LojaHoverComponent() {
  const [isHovered, setHovered] = useState(false);
  const sidebar = {
    open: {
      opacity: 1,

      height: "50vh",

      zIndex: 999,
      transition: {
        stiffness: 20,
        restDelta: 1.5,
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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=""
    >
      <span>Loja</span>
      <AnimatePresence>
        <motion.div
          animate={isHovered ? "open" : "closed"}
          variants={sidebar}
          initial="closed"
          className="flyout-open"
        >
          <div className="w-full h-full flex ml-[256px]">
            <div className="flex flex-col pr-[88px]">
              <h2 className="submenu-header">Comprar</h2>
              <ul className="nav-list">
                <li className="nav-list-item">
                  <a className="nav-submenu-link">Comprar os Lançamentos</a>
                </li>
                <li className="nav-list-item">
                  <a className="nav-submenu-link">Mac</a>
                </li>
                <li className="nav-list-item">
                  <a className="nav-submenu-link">Ipad</a>
                </li>
                <li className="nav-list-item">
                  <a className="nav-submenu-link">Iphone</a>
                </li>
                <li className="nav-list-item">
                  <a className="nav-submenu-link">Apple Watch</a>
                </li>
                <li className="nav-list-item">
                  <a className="nav-submenu-link">Acessórios</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col pr-[44px]">
              <h2 className="submenu-header">Links rápidos</h2>
              <ul className="nav-list">
                <li className="nav-list-item-smaller">
                  <a className="nav-submenu-link">Comprar presentes de Natal</a>
                </li>
                <li className="nav-list-item-smaller">
                  <a className="nav-submenu-link">Encontre uma loja</a>
                </li>
                <li className="nav-list-item-smaller">
                  <a className="nav-submenu-link">Status do pedido</a>
                </li>
                <li className="nav-list-item-smaller">
                  <a className="nav-submenu-link">Financiamento</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col pr-[44px]">
              <h2 className="submenu-header">Comprar nas lojas especiais</h2>
              <ul className="nav-list">
                <li className="nav-list-item-smaller">
                  <a className="nav-submenu-link">Educação</a>
                </li>
                <li className="nav-list-item-smaller">
                  <a className="nav-submenu-link">Negócios</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
