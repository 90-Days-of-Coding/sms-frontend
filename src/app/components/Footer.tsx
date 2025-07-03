"use client";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import TextAnimation from "./ui/textAnimation";
import styles from "../components/sections/styles/section.module.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useSceneStore } from "@/store/useSceneStore";
import Button from "./ui/get-started";

export function Footer() {
  const ref = useRef(null);
  const view = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const animationDone = useSceneStore((state) => state.animationDone);
  return (
    <footer
      className={clsx(
        "bg-[#020211] border-t border-gray-800 transition-colors duration-300 w-full font-roboto",
        styles.theme
      )}
      ref={ref}
    >
      <div className="pt-8 md:pt-10 md:pl-9">
        <Image
          alt="Decks logo"
          src="/images/logo.png"
          width={200}
          height={175}
          priority
        />
      </div>

      <div className="">
        <div className="flex flex-col lg:flex-row justify-between items-center py-10 px-8 md:p-16 lg:gap-7">
          <div className="w-full text-[1.2rem] font-[200] mb-6 md:text-[2rem] lg:text-[2.3rem] lg:w-[50%]">
            <TextAnimation
              text="Decks provide the tools you need to stay organized, avoid burnout, focused and on top of your studies."
              gap=".8rem"
              execute={view}
              className="mb-6 md:mb-9"
            />
            <div className="scale-90 md:scale-70 xl:scale-105 flex w-full justify-center items-center">
              <Button />
            </div>
          </div>

          <div className="flex md:flex-col justify-end items-end md:items-center gap-6 mt-7">
            <div className="flex lg:flex-col gap-3 text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem]">
              <a
                href="#"
                className="text-sm  text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <TextAnimation
                  text="Privacy Policy"
                  gap=".4rem"
                  delay={0.2}
                  execute={view}
                />
              </a>
              <a
                href="#"
                className="text-sm  text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <TextAnimation
                  text="Terms of Service"
                  gap=".4rem"
                  delay={0.7}
                  execute={view}
                />
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <TextAnimation
                  text="Contact Us"
                  gap=".4rem"
                  delay={1.2}
                  execute={view}
                />
              </a>
            </div>

            <div className="flex gap-5 md:gap-13">
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: view && animationDone ? 1 : 0,
                  y: view && animationDone ? 0 : -20,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0,
                }}
                href="#"
                className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors md:scale-160"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: view && animationDone ? 1 : 0,
                  y: view && animationDone ? 0 : -20,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                href="#"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors md:scale-160"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: view && animationDone ? 1 : 0,
                  y: view && animationDone ? 0 : -20,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors md:scale-160"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <hr />

        {/* Left section */}
        <div className="flex flex-col items-center text-center gap-2 mt-6 pb-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-[1.1rem] lg:text-[1.57rem]">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center md:text-[1.1rem] lg:text-[1.5rem]">
            Made with 💖 by our team
          </p>
        </div>
      </div>
    </footer>
  );
}
