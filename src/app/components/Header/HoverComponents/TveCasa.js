import Image from "next/image";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function TVeCasaHoverComponent() {
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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=""
    >
      <span>TV e Casa</span>
      <AnimatePresence>
        <motion.div
          animate={isHovered ? "open" : "closed"}
          variants={sidebar}
          initial="closed"
          className="flyout-open"
        >
          TV e Casa Hover
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
