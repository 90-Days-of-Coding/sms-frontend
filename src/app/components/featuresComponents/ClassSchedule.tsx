"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import TextAnimation from "../ui/textAnimation";
import { useRef } from "react";
import { useInView } from "motion/react";
import { animated, config, useSpring } from "@react-spring/web";
import { useSceneStore } from "@/store/useSceneStore";
import ClockIcon from "../ui/ClassSchedule/clockIcon";

const ClassSchedule = () => {
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
    <div className="relative" ref={ref}>
      <div className="blob p-[12rem] blur-3xl rounded-full bg-[var(--primary)] absolute animate-pulse bottom-0 left-[50%] -translate-x-[50%] md:top-20 md:right-100"></div>
      <div className="flex flex-col gap-14 z-1">
        <div className="feat-text text-[var(--foreground)] font-roboto mt-8 ">
          <div className="flex items-center  mb-3 md:mb-6 gap-2 md:gap-4 lg:gap-6">
            <ClockIcon view={view} animationDone={animationDone} />
            <TextAnimation
              text="Stay informed. Stay prepared"
              className="text-[2rem] w-full md:text-[2.6rem] font-[400] xl:w-[50%]"
              delay={0.2}
              lh={1}
              gap="1rem"
              execute={view}
            />
          </div>
          <TextAnimation
            text="Plan your day with precision. View real-time class sessions and upcoming schedules just like a clockwork. Stay organized and never miss a beat."
            className="text-[1.4rem] md:text-[1.9rem] font-[200] w-full md:w-[100%]  xl:w-[45%]"
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
              src="/images/schedule.png"
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

export default ClassSchedule;
