"use client";

import { useSprings, config, animated } from "@react-spring/web";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
import styles from "./cloud.module.css";
import {
  FaFileAudio,
  FaCloud,
  FaFileDownload,
  FaFilePdf,
  FaFileUpload,
  FaFileVideo,
} from "react-icons/fa";

const Cloud = ({
  animationDone,
  view,
  size,
}: {
  animationDone: boolean;
  view: boolean;
  size: string;
}) => {
  const n = 5;
  const radiusPercent = 40; // as percentage of container
  const centerPercent = 50;

  const icons = useMemo(
    () => [
      <FaFileDownload
        color="#3627ba"
        key="3"
        size={size}
        className="drop-shadow-[0_0_25px] drop-shadow-[#3627ba]"
      />,
      <FaFilePdf
        color="#3627ba"
        key="0"
        size={size}
        className="drop-shadow-[0_0_25px] drop-shadow-[#3627ba]"
      />,
      <FaFileVideo
        color="#3627ba"
        key="1"
        size={size}
        className="drop-shadow-[0_0_25px] drop-shadow-[#3627ba]"
      />,
      <FaFileUpload
        color="#3627ba"
        key="2"
        size={size}
        className="drop-shadow-[0_0_25px] drop-shadow-[#3627ba]"
      />,
      <FaFileAudio
        color="#3627ba"
        key="4"
        size={size}
        className="drop-shadow-[0_0_25px] drop-shadow-[#3627ba]"
      />,
    ],
    [size]
  );

  //Calculates new positions
  const positions = useMemo(() => {
    return icons.map((_, i) => {
      const angle = (2 * Math.PI * i) / n;
      const x = centerPercent + radiusPercent * Math.cos(angle);
      const y = centerPercent + radiusPercent * Math.sin(angle);
      return { x, y };
    });
  }, [icons]);

  //Animation
  const [springDone, setSpringDone] = useState(false);
  const springs = useSprings(
    n,
    icons.map((_, i) => ({
      from: { left: `${centerPercent}%`, top: `${centerPercent}%` },
      to: {
        left:
          animationDone && view ? `${positions[i].x}%` : `${centerPercent}%`,
        top: animationDone && view ? `${positions[i].y}%` : `${centerPercent}%`,
      },
      delay: i * 250,
      config: config.gentle,
      onRest: () => setSpringDone(true),
    }))
  );

  return (
    <div className="relative w-full aspect-square transition-all">
      {/* Center icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <FaCloud
          color="#3627ba"
          size={size}
          className=" scale-150 drop-shadow-[0_0_25px] drop-shadow-[#3627ba]"
        />
      </div>

      {/* Icons around the circle */}
      <div
        className={clsx(
          `absolute w-full h-full left-0 top-0`,
          animationDone && view && springDone ? styles.animate : ""
        )}
      >
        {positions.length > 0 &&
          springs.map((style, i) => {
            return (
              <animated.div
                key={i}
                className="absolute"
                style={{
                  ...style,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={clsx(
                    "will-change-transform",
                    animationDone && view && springDone ? styles.counter : ""
                  )}
                >
                  {icons[i]}
                </div>
              </animated.div>
            );
          })}
      </div>
    </div>
  );
};

export default Cloud;
