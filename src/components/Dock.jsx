"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dock({ items, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative flex items-center gap-2 p-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl ${className}`}
      role="toolbar"
      aria-label="Application dock"
    >
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <button
            key={index}
            onClick={item.onClick}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            className="relative flex items-center justify-center w-14 h-14 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label={item.label}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -16, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-xl border border-white/10 pointer-events-none"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon */}
            <motion.div
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center"
            >
              {item.icon}
            </motion.div>
          </button>
        );
      })}
    </motion.nav>
  );
}
