import { animated, useSpring, config } from "@react-spring/web";
import React, { useEffect } from "react";
import { CiCloud } from "react-icons/ci";
const ClockIcon = ({
  view,
  animationDone,
}: {
  view: boolean;
  animationDone: boolean;
}) => {
  console.log(view);

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
    <animated.div style={spring}>
      <CiCloud size={70} />
    </animated.div>
  );
};

export default ClockIcon;
