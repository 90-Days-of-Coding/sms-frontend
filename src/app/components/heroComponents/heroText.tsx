import React from "react";
import Button from "../ui/get-started";
import clsx from "clsx";
import styles from "./styles/heroText.module.css";
import TextAnimation from "./textAnimation";

const HeroText = () => {
  return (
    <>
      <div
        className={clsx(
          `${styles.heroText} absolute flex flex-col items-start gap-4 overflow-hidden bottom-10 left-0 font-mont w-[60%] pl-14 pb-4`
        )}
      >
        <TextAnimation
          text="Where Learning Takes Shape"
          className="text-[3.5rem] font-[700]"
          delay={0}
          gap="1rem"
        />
        <TextAnimation
          text="Engineered for ease. Built for students."
          className="text-[1.3rem] font-[200]"
          delay={0.5}
          gap=".55rem"
        />
        <Button />
      </div>
    </>
  );
};

export default HeroText;
