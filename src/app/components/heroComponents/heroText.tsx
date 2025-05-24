import React from "react";
import Button from "../ui/get-started";
import clsx from "clsx";
import styles from "./styles/heroText.module.css";

const HeroText = () => {
  return (
    <>
      <div
        className={clsx(
          `${styles.heroText} absolute bottom-33 left-0 font-mont w-[60%] pl-14`
        )}
      >
        <h1 className="text-[4rem] font-[700]">Where Learning Takes Shape</h1>
        <p className="text-[1.3rem] font-[200] mb-7">
          We provide everything needed for you to take control of your academic
          life.
        </p>
        <Button />
      </div>
    </>
  );
};

export default HeroText;
