"use client";

import React from "react";
import { useSprings, animated, config } from "@react-spring/web";
import { useSceneStore } from "@/store/useSceneStore";

interface AnimatedTextProps {
  text: string;
  className: string;
  delay: number;
  gap: string;
  lh: number;
}

const TextAnimation: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay,
  gap,
  lh,
}) => {
  const words = text.split(" ");
  const animationDone = useSceneStore((state) => state.animationDone);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { opacity: 0, y: 20 },
      to: {
        opacity: animationDone ? 1 : 0,
        y: animationDone ? 0 : 20,
      },
      delay: delay * 1000 + i * 100, // Convert delay from seconds to ms
      config: config.gentle,
    }))
  );

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: gap,
        lineHeight: lh,
        flexDirection: "row",
        willChange: "transform, opacity",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {springs.map((style, i) => (
        <animated.span key={i} style={style}>
          {words[i]}
        </animated.span>
      ))}
    </div>
  );
};

export default TextAnimation;
