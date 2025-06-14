"use client";

import React, { useEffect, useRef } from "react";
import { animated, config } from "@react-spring/web";
import Image from "next/image";
import TextAnimation from "../ui/textAnimation";
import { useInView } from "motion/react";
import { useSpring } from "@react-spring/web";
import { useSceneStore } from "@/store/useSceneStore";
import Money from "../ui/MarketPlace/money";
import Skills from "../ui/MarketPlace/skills";

const Marketplace = () => {
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
      <div className=" absolute top-2 right-10 w-[50rem] h-[50rem]">
        <Skills view={view} animationDone={animationDone} />
      </div>
      <div className="flex flex-col gap-14 z-1">
        <div className="feat-text text-[var(--foreground)] font-roboto mt-8 ">
          <div className="flex items-center gap-4 mb-6">
            <Money view={view} animationDone={animationDone} />
            <TextAnimation
              text="Expertise into Income"
              className="text-[2rem] font-[400] w-[45%]"
              delay={0.2}
              lh={1}
              gap="1rem"
              execute={view}
            />
          </div>
          <TextAnimation
            text="Got a talent? Get paid for it! Student marketplace allows you to showcase, connect with clients and monetize your skills."
            className="text-[1.8rem] font-[200] w-[40%]"
            delay={1}
            lh={1}
            gap=".52rem"
            execute={view}
          />
        </div>
        <div className="display w-full pr-8 flex justify-end">
          <animated.div
            className="bg-[var(--primary)]/10 backdrop-blur-lg p-5 rounded-lg "
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

export default Marketplace;
