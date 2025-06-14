"use client";

import clsx from "clsx";
import React from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import { useSceneStore } from "@/store/useSceneStore";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const word = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDone = useSceneStore((state) => state.animationDone);

  return (
    <div className=" absolute top-0 left-0 font-roboto">
      <nav
        className={clsx(
          "flex items-center w-screen py-4 px-6 justify-between min-h-3 h-fit"
        )}
      >
        <div>
          <Image
            alt="Decks logo"
            src="/images/logo.png"
            width={150}
            height={135}
            priority
          />
        </div>
        <div>
          <div className="menu menu-horizontal gap-5 text-[var(--foreground)] pr-10 ">
            <motion.li
              variants={word}
              initial="hidden"
              animate={animationDone ? "visible" : ""}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className="text-[1.2rem] px-4 py-2 rounded-2xl active:text-[var(--primary)] hover:text-[var(--secondary)] hover:scale-110 active:scale-90 border-1 border-[var(--primary)] transition-color transition-transform cursor-pointer"
            >
              Sign In
            </motion.li>
            <motion.div
              variants={word}
              initial="hidden"
              animate={animationDone ? "visible" : ""}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className={clsx(
                "text-[1.2rem] bg-[var(--primary)] px-6 py-2 rounded-full shadow-[0_0_10px_2px] shadow-[#3627ba] hover:shadow-[#3627ba] hover:shadow-[0_0_25px_5px] transition-shadow active:scale-90 cursor-pointer"
              )}
            >
              <span className=""> Log In</span>
              <MdArrowOutward
                className={clsx(
                  "bg-[var(--primary-foreground)] w-7 h-7 p-1 rounded-full inline-block ml-3",
                  styles.arrow
                )}
              />
            </motion.div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
