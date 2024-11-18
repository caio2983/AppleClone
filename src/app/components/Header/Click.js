import React from "react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";

export default function ClickComponent({ children, onClick, element }) {
  const [isActive, setActive] = useState(false);
  const sidebar = {
    open: {
      opacity: 1,
      width: "100vw",
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

  useEffect(() => {
    onClick(isActive);
  }, [isActive]);

  return (
    <div onClick={() => setActive(true)}>
      {children}
      <AnimatePresence>
        <motion.div
          animate={isActive ? "open" : "closed"}
          variants={sidebar}
          initial="closed"
          className="flyout-open"
          onMouseLeave={() => setActive(false)}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
}
