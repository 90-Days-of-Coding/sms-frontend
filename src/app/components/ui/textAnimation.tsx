"use client";

import React, { useMemo } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useSceneStore } from "@/store/useSceneStore";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number; // in seconds
  gap?: string;
  lh?: number;
  execute?: boolean;
}

const TextAnimation: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0,
  gap = "1rem",
  lh = 1.5,
  execute = true,
}) => {
  const words = useMemo(() => text.trim().split(/\s+/), [text]);
  const animationDone = useSceneStore((state) => state.animationDone);

  const show = animationDone && execute;

  const springs = useSprings(
    words.length,
    useMemo(
      () =>
        words.map((_, i) => ({
          from: { opacity: 0, transform: "translateY(20px)" },
          to: {
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0px)" : "translateY(20px)",
          },
          delay: delay * 1000 + i * 100,
          config: {
            mass: 1,
            tension: 200,
            friction: 20,
            clamp: false,
          },
        })),
      [show, delay, words]
    )
  );

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap,
        lineHeight: lh,
        flexDirection: "row",
        willChange: "transform, opacity",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {springs.map((style, i) => (
        <animated.span key={i} style={style} aria-hidden={!show}>
          {words[i]}
        </animated.span>
      ))}
    </div>
  );
};

export default TextAnimation;
