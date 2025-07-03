import React from "react";
import Button from "../ui/get-started";
import clsx from "clsx";
import TextAnimation from "../ui/textAnimation";

const HeroText = () => {
  return (
    <>
      <div
        className={clsx(
          `text-[var(--foreground)] w-full h-full absolute flex flex-col justify-center items-center bottom-0 left-[50%] -translate-x-[47%] md:-translate-x-[50%] 
          xl:pl-14 xl:w-[55%] xl:justify-end xl:items-start xl:bottom-[10vh] xl:left-0 xl:translate-x-0`
        )}
      >
        <TextAnimation
          text="Where learning takes shape"
          className="text-[3rem] px-2 w-full font-[300] font-roboto text-center md:px-3 md:text-[6rem] lg:text-[8rem] xl:text-left xl:text-[5.1vw] xl:leading-[12vh]"
          delay={0}
          lh={0.8}
          gap="1.2rem"
        />
        <div className="w-full pb-8 lg:pb-10 xl:pb-[1.85vw]"></div>
        <TextAnimation
          text="Decks streamlines academic management, keeping you from burning out.
          "
          className="text-[1.3rem] font-roboto w-[97%]  text-gray-400 font-[300] text-center md:text-[2rem] md:w-[85%] lg:text-[2.6rem] xl:text-left xl:text-[1.5vw]"
          delay={0.5}
          gap=".55rem"
          lh={1.1}
        />
        <div className="w-full pb-8 md:pb-14 lg:pb-20 xl:pb-[1.85vw]"></div>
        <Button />
      </div>
    </>
  );
};

export default HeroText;
