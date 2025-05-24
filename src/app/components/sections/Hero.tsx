import React from "react";
import Renderer from "../heroComponents/Renderer";
import HeroText from "../heroComponents/heroText";
import Navbar from "../heroComponents/Navbar";
import styles from "./styles/Hero.module.css";
import clsx from "clsx";

const Hero = () => {
  return (
    <div className={clsx("h-screen", styles.theme)}>
      <div className={`relative w-full h-full `}>
        <Renderer />
        <Navbar />
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
