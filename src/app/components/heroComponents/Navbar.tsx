"use client";

import clsx from "clsx";
import React from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import { useSceneStore } from "@/store/useSceneStore";

const Navbar = () => {
  const word = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const animationDone = useSceneStore((state) => state.animationDone);

  return (
    <div className=" absolute top-0 left-0 font-mont">
      <nav
        className={clsx(
          styles.nav,
          "navbar w-screen py-0 px-6 justify-between min-h-3 h-fit"
        )}
      >
        <div>
          <Image
            alt="Decks logo"
            src="/images/logo.png"
            width={150}
            height={130}
            className="px-4"
          />
        </div>
        <div>
          <ul className="menu menu-horizontal gap-5 text-[1rem] text-[var(--color-text-primary)] pr-10">
            <motion.li
              variants={word}
              initial="hidden"
              animate={animationDone ? "visible" : ""}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Contact
            </motion.li>
            <motion.li
              variants={word}
              initial="hidden"
              animate={animationDone ? "visible" : ""}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              Sign In
            </motion.li>
            <motion.li
              variants={word}
              initial="hidden"
              animate={animationDone ? "visible" : ""}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
            >
              Log In
            </motion.li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
