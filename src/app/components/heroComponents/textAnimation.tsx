"use client";

import React from "react";
import { motion } from "motion/react";
import { useSceneStore } from "@/store/useSceneStore";

interface AnimatedTextProps {
  text: string;
  className: string;
  delay: number;
  gap: string;
}

const container = {
  hidden: {},
  visible: {},
};

const word = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0 },
};

const TextAnimation: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay,
  gap,
}) => {
  const words = text.split(" ");

  const animationDone = useSceneStore((state) => state.animationDone);
  // const resetAnimation = useSceneStore((state) => state.resetAnimation);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={animationDone ? "visible" : ""}
      transition={{
        ease: "easeOut",
        staggerChildren: 0.09,
        delayChildren: delay,
      }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: gap,
        flexDirection: "row",
        willChange: "transform, opacity",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          transition={{
            duration: 0.5,
          }}
        >
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;
