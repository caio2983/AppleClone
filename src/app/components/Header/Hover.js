import React from "react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HoverComponent({ children, label, onHover }) {
  const [isHovered, setHovered] = useState(false);
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
    onHover(isHovered);
  }, [isHovered]);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <span>{label}</span>
      <AnimatePresence>
        <motion.div
          animate={isHovered ? "open" : "closed"}
          variants={sidebar}
          initial="closed"
          className="flyout-open"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
