"use client";

import { FaTwitter, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
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
        "bg-[#020211] border-t border-gray-800 py-8 p-10 transition-colors duration-300 w-full font-roboto",
        styles.theme
      )}
      ref={ref}
    >
      <div className=" p-8 pb-0">
        <Image
          alt="Decks logo"
          src="/images/logo.png"
          width={200}
          height={175}
          priority
        />
      </div>

      <div></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center p-8 py-16 px-16">
          <div className="w-[35%] text-[1.5rem] font-[200]">
            <TextAnimation
              text="Decks is your go-to student management system, designed to streamline academic life and help you avoid burnout. We provide the tools you need to stay organized, focused and on top of your studies."
              gap=".8rem"
              execute={view}
              className="mb-6"
            />
            <Button />
          </div>

          <div className="flex flex-col justify-end items-center gap-6">
            <div className="flex flex-col gap-5 text-[1.5rem]">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
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
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
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

            <div className="flex gap-5">
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
                className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
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
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
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
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <hr />

        {/* Left section */}
        <div className="flex flex-col items-center text-center gap-2 mt-12">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
            Made with <FaHeart className="mx-1 text-red-500" /> by our team
          </p>
        </div>
      </div>
    </footer>
  );
}
