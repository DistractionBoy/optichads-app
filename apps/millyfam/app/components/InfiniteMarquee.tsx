"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative flex overflow-hidden bg-black py-3">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4 mx-4">
            <span className="text-white/80">MILLYFAM</span>
            <span className="text-purple-500">•</span>
            <span className="text-white/80">WEB3 FAMILY</span>
            <span className="text-purple-500">•</span>
            <span className="text-white/80">COMMUNITY FIRST</span>
            <span className="text-purple-500">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
