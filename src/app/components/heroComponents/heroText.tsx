import React from "react";
import Button from "../ui/get-started";
import clsx from "clsx";
import TextAnimation from "../ui/textAnimation";

const HeroText = () => {
  return (
    <>
      <div
        className={clsx(
          `text-[var(--foreground)] w-[55%] h-full absolute flex flex-col justify-end items-start gap-4 bottom-20 left-0 pl-14`
        )}
      >
        <TextAnimation
          text="Where learning takes shape"
          className="text-[4rem] w-full font-[300] font-roboto"
          delay={0}
          lh={0.8}
          gap="1.2rem"
        />
        <div className="w-full p-1"></div>
        <TextAnimation
          text="Decks streamlines academic management, keeping you from burning out.
          "
          className="text-[1.3rem] font-roboto w-[85%] text-gray-300 font-[300]"
          delay={0.5}
          gap=".55rem"
          lh={1.1}
        />
        <div className="w-full pb-1"></div>
        <Button />
      </div>
    </>
  );
};

export default HeroText;
