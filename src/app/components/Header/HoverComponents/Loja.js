import Image from "next/image";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function LojaHoverComponent() {
  const [isHovered, setHovered] = useState(false);
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
      onMouseLeave={() => setHovered(false)}
      className=""
    >
      <span>Loja</span>
      <AnimatePresence>
        <motion.div
          animate={isHovered ? "open" : "closed"}
          variants={sidebar}
          initial="open"
          className="flyout-open w-full left-0 top-[44px]"
        >
          <div className="w-full h-full bg-slate-600 flex justify-center">
            <div className="flex flex-col bg-red-800 w-1/4">
              <p>Comprar</p>
              <p>Comprar os Lançamentos</p>
              <p>Mac</p>
              <p>Ipad</p>
              <p>Iphone</p>
              <p>Apple Watch</p>
              <p>Acessórios</p>
            </div>

            <div className="flex flex-col bg-slate-500 w-1/4">
              <p>Links rápidos</p>
              <p>Comprar presentes de Natal</p>
              <p>Encontre uma loja</p>
              <p>Status do pedido</p>
              <p>Financiamento</p>
            </div>

            <div className="flex flex-col bg-slate-500 w-1/4">
              <p>Links rápidos</p>
              <p>Comprar presentes de Natal</p>
              <p>Encontre uma loja</p>
              <p>Status do pedido</p>
              <p>Financiamento</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
