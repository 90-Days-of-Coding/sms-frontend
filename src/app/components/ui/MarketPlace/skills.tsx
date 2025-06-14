"use client";

import React, { useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import clsx from "clsx";
import styles from "../AppMessaging/message.module.css";
import { MdFunctions, MdVideoLibrary } from "react-icons/md";
import { FaCode, FaHashtag, FaPalette, FaPenNib } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Skills = ({
  view,
  animationDone,
}: {
  view: boolean;
  animationDone: boolean;
}) => {
  const icons = [
    <MdFunctions key={0} size={50} />,
    <FaPenNib key={1} size={50} />,
    <FaPalette key={2} size={50} />,
    <FaCode key={3} size={50} />,
    <MdVideoLibrary key={4} size={50} />,
    <FaHashtag key={5} size={50} />,
    <GiSkills key={6} size={50} />,
  ];

  const pos = [
    "top-12 left-56 rotate-[20deg]",
    "top-24 right-10 rotate-[40deg]",
    "top-1/3 left-1/2 -translate-x-1/2 rotate-[63deg]",
    "top-1/2 right-20 -translate-y-1/2 rotate-[25deg]",
    "top-34 right-56 rotate-[92deg]",
    "top-[85%] left-8 rotate-[45deg]",
    "top-48 left-34 rotate-[22deg]",
  ];

  const [rest, setRest] = useState(false);
  const springs = useSprings(
    icons.length,
    icons.map((_, i) => ({
      from: {
        opacity: 0,
        scale: 0,
      },
      to: {
        opacity: animationDone && view ? 1 : 0,
        scale: animationDone && view ? 1 : 0,
      },
      delay: i * 200,
    }))
  );

  useEffect(() => {
    setTimeout(() => {
      setRest(true);
    }, 3000);
  }, []);

  return (
    <div className={clsx("relative")}>
      {springs.map((style, i) => (
        <animated.div
          className={clsx(
            pos[i],
            rest ? styles.float : "",
            "absolute bg-[var(--primary)]/20 backdrop-blur-md border-[var(--primary)] border-2 shadow-[0_0_20px_1px] shadow-[#3627ba]/55 p-5 rounded-full"
          )}
          key={i}
          style={style}
        >
          {icons[i]}
        </animated.div>
      ))}
    </div>
  );
};

export default Skills;
