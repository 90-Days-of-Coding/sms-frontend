"use client";

import React, { useState } from "react";
import { animated, config, useSprings } from "@react-spring/web";
import clsx from "clsx";
import { RxAvatar } from "react-icons/rx";
import styles from "./message.module.css";
const MessageICon = ({
  view,
  animationDone,
}: {
  view: boolean;
  animationDone: boolean;
}) => {
  const classNames = [
    "absolute top-0 left-34 bg-[var(--primary)]/20 backdrop-blur-md border-[var(--primary)] border-2 shadow-[0_0_20px_1px] shadow-[#3627ba]/55 p-5 rounded-3xl flex justify-around gap-4 rotate-z-6",

    "absolute top-35 right-12 bg-[var(--primary)]/20 backdrop-blur-md border-[var(--primary)] border-2 shadow-[0_0_20px_1px] shadow-[#3627ba]/55 p-5 rounded-3xl flex justify-around gap-4 -rotate-z-6",

    "absolute top-70 left-34 bg-[var(--primary)]/20 backdrop-blur-md border-[var(--primary)] border-2 shadow-[0_0_20px_1px] shadow-[#3627ba]/55 p-5 rounded-3xl flex justify-around gap-4 rotate-z-6",
  ];

  const msg = [
    "What time is the group study?",
    "Group study is by 8AM.",
    "Thanks! I will surely attend it.",
  ];

  const [rest, setRest] = useState(false);
  const springs = useSprings(
    msg.length,
    msg.map((_, i) => ({
      from: {
        opacity: 0,
        y: 30,
      },
      to: {
        opacity: animationDone && view ? 1 : 0,
        y: animationDone && view ? 0 : 30,
      },
      onRest: () => setRest(true),
      config: config.default,
      delay: i * 200,
    }))
  );
  return (
    <div className={clsx("relative -translate-y-14")}>
      {springs.map((style, i) => (
        <animated.div
          className={clsx(classNames[i], rest ? styles.float : "")}
          key={i}
          style={style}
        >
          <RxAvatar size={40} className="" />
          <p className="text-[1.5rem] w-[14rem] ">{msg[i]}</p>
        </animated.div>
      ))}
    </div>
  );
};

export default MessageICon;
