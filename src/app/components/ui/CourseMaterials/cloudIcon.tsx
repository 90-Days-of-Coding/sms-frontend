import { animated, useSpring, config } from "@react-spring/web";
import React, { useEffect } from "react";
import { CiCloud } from "react-icons/ci";
const CloudIcon = ({
  view,
  animationDone,
}: {
  view: boolean;
  animationDone: boolean;
}) => {
  const [spring, api] = useSpring(() => ({
    opacity: 0,
    scale: 0,
  }));

  useEffect(() => {
    if (animationDone && view) {
      api.start({
        opacity: 1,
        scale: 1,
        config: config.gentle,
      });
    }
  });

  return (
    <animated.div style={spring} className="z-1 md:scale-150">
      <CiCloud size={35} strokeWidth={".6px"} />
    </animated.div>
  );
};

export default CloudIcon;
