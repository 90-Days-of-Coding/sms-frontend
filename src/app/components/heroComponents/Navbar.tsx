import clsx from "clsx";
import React from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" absolute top-0 left-0 font-mont">
      <nav
        className={clsx(
          styles.nav,
          "navbar w-screen py-0 px-6 justify-between"
        )}
      >
        <div>
          <Image
            alt="Decks logo"
            src="/images/logo.png"
            width={135}
            height={110}
          />
        </div>
        <div>
          <ul className="menu menu-horizontal gap-5 text-[1.3rem] text-[var(--color-text-primary)] pr-10">
            <li>Hero</li>

            <li>Features</li>

            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
