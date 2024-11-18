import Image from "next/image";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function LojaHoverComponent() {
  const [isHovered, setHovered] = useState(true);
  const sidebar = {
    open: {
      opacity: 1,

      height: "70vh",

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
      // onMouseLeave={() => setHovered(false)}
      className=""
    >
      <span>Loja</span>
      <AnimatePresence>
        <motion.div
          animate={isHovered ? "open" : "closed"}
          variants={sidebar}
          initial="open"
          className="flyout-open w-full px-[128px] left-0 top-[44px]"
        >
          <div className="w-full h-full flex justify-center">
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

            <div className="flex flex-col bg-slate-500 ">
              <p>Links rápidos</p>
              <p>Comprar presentes de Natal</p>
              <p>Encontre uma loja</p>
              <p>Status do pedido</p>
              <p>Financiamento</p>
            </div>

            <div className="flex flex-col bg-slate-500">
              <p>Links rápidos</p>
              <p>Comprar presentes de Natal</p>
              <p>Encontre uma loja</p>
              <p>Status do pedido</p>
              <p>Financiamento</p>
            </div>

            <div className="flex flex-col bg-orange-400 w-1/4">
              <p>Comprar nas lojas especiais</p>
              <p>Educação</p>
              <p>Negócios</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
