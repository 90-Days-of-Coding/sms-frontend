import React from "react";
import Renderer from "../heroComponents/Renderer";
import HeroText from "../heroComponents/HeroText";
import Navbar from "../heroComponents/Navbar";
import styles from "./styles/section.module.css";
import clsx from "clsx";

const Hero = () => {
  return (
    <div className={clsx("min-h-screen hero", styles.theme)}>
      <div className={`relative w-screen h-full `}>
        <Renderer />
        <Navbar />
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
