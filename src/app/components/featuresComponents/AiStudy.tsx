"use client";

import React, { useEffect, useRef } from "react";
import { animated, config } from "@react-spring/web";
import Image from "next/image";
import TextAnimation from "../ui/textAnimation";
import { useInView } from "motion/react";
import { useSpring } from "@react-spring/web";
import { useSceneStore } from "@/store/useSceneStore";
import AiIcon from "../ui/AIStudy/aiIcon";
import Gpt from "../ui/AIStudy/gpt";

const AiStudy = () => {
  const ref = useRef(null);
  const refImg = useRef(null);

  const view = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: true,
  });
  const viewImg = useInView(refImg, {
    margin: "0px 0px -100px 0px",
    once: true,
  });

  const animationDone = useSceneStore((state) => state.animationDone);

  const [spring, api] = useSpring(() => ({
    opacity: 0,
    y: 20,
  }));

  useEffect(() => {
    if (viewImg && animationDone) {
      api.start({
        opacity: 1,
        y: 0,
        config: config.default,
      });
    }
  }, [animationDone, api, viewImg]);

  return (
    <div className="relative mt-[10rem]" ref={ref}>
      <div className=" absolute right-10 top-30 left-[50%] -translate-x-[50%] md:top-5 md:right-50 w-[25rem] h-[25rem] md:w-[50rem] md:h-[50rem]">
        <Gpt view={view} animationDone={animationDone} />
      </div>

      <div className="flex flex-col gap-14 z-1">
        <div className="feat-text text-[var(--foreground)] font-roboto mt-8 ">
          <div className="flex items-start w-full mb-3 md:mb-6 gap-2 md:gap-4">
            <AiIcon view={view} animationDone={animationDone} />
            <TextAnimation
              text="AI-Powered Studying"
              className="text-[2.2rem] md:text-[2.7rem] font-[400] w-full"
              delay={0.2}
              lh={1}
              gap="1rem"
              execute={view}
            />
          </div>
          <TextAnimation
            text="Your favourite AI agent is now closer than ever, automating your reading and transforming complex materials into personalized insights and custom flashcards."
            className="text-[1.4rem] md:text-[1.9rem] font-[200] w-full xl:w-[45%]"
            delay={1}
            lh={1}
            gap=".52rem"
            execute={view}
          />
        </div>
        <div className="display w-full md:pr-8 md:flex md:justify-end">
          <animated.div
            className="bg-[var(--primary)]/10 backdrop-blur-lg p-2 md:p-5 rounded-lg "
            style={spring}
            ref={refImg}
          >
            <Image
              alt="a dashboard showing the class schedule feature"
              className="rounded-lg"
              src="/images/materials.png"
              width={800}
              height={421}
              aria-label="image-schedule"
              quality={100}
              priority
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default AiStudy;
