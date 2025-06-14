import { animated, useSpring, config } from "@react-spring/web";
import React, { useEffect } from "react";
import { GiMoneyStack } from "react-icons/gi";
const Money = ({
  view,
  animationDone,
}: {
  view: boolean;
  animationDone: boolean;
}) => {
  const [spring, api] = useSpring(() => ({
    opacity: 0,
    scale: 2,
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
      <GiMoneyStack size={50} />
    </animated.div>
  );
};

export default Money;
