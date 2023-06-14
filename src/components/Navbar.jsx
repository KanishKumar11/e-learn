"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 relative`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 px-10`}
      >
        <Image
          className="h-[40px] leading-[30px] object-contain z-10"
          src="./logo.svg"
          alt="Logo"
          height={40}
          width={145.25}
        />

        <Image
          src="./menu.svg"
          onClick={toggleDrawer}
          alt="menu"
          width={28}
          height={28}
          className="w-[28px] text-black h-[28px] object-contain lg:hidden justify-center items-center cursor-pointer self-center"
        />

        <ul className="text-black gap-7 justify-center items-center xs:hidden sm:hidden md:hidden hidden lg:flex">
          <li className="hover:underline text-black">
            <a href="#home">Home</a>
          </li>
          <li className="hover:underline text-black">
            <a href="#courses">Courses</a>
          </li>
          <li className="hover:underline text-black">
            <a href="#mentors">Mentors</a>
          </li>
          <li className="hover:underline text-black">
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="gap-4 justify-center items-center lg:flex hidden">
          <div className="hover:underline text-green-700">
            <a href="#">Sign In</a>
          </div>
          <div className="p-[12px] bg-green-700 text-white px-7 rounded-xl lg:block hidden">
            <a href="#contact"> Register</a>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="inset-10 z-50 flex items-center justify-center">
          <div
            className="absolute w-full h-full opacity-25"
            onClick={toggleDrawer}
          />
          <div className="p-8 rounded-lg glassmorphism h-[500px] w-[300px] m-auto top-[50px] z-[9995000]">
            <div className="flex justify-between items-center mb-4">
              {/* <h2 className="font-bold text-2xl">SuperBeta</h2> */}
              <img src="./logo.svg" alt="" />
              <div onClick={toggleDrawer}>
                <img
                  src="./close.svg"
                  alt="Close"
                  className="w-[28px] h-[28px] cursor-pointer"
                />
              </div>
            </div>
            <ul className="flex flex-col gap-4 text-black font-semibold">
              <li className="hover:underline text-black border-solid border-[2px] border-[white] p-[10px] rounded-xl flex justify-between">
                <a href="#home">Home</a>
                <img src="./arrow.svg" alt="" srcset="" className="h-[20px]" />
              </li>
              <li className="hover:underline text-black border-solid border-[2px] border-[white] p-[10px] rounded-xl flex justify-between">
                <a href="#courses">Courses</a>
                <img src="./arrow.svg" alt="" srcset="" className="h-[20px]" />
              </li>
              <li className="hover:underline text-black border-solid border-[2px] border-[white] p-[10px] rounded-xl flex justify-between">
                <a href="#mentors">Mentors</a>
                <img src="./arrow.svg" alt="" srcset="" className="h-[20px]" />
              </li>
              <li className="hover:underline text-black border-solid border-[2px] border-[white] p-[10px] rounded-xl flex justify-between">
                <a href="#">Sign In</a>
                <img src="./arrow.svg" alt="" srcset="" className="h-[20px]" />
              </li>
              <li className=" text-black border-solid border-[2px] border-[white] p-[10px] rounded-xl flex justify-between items-center">
                <div className="p-[12px] bg-green-700 text-white px-7 rounded-xl">
                  <a href="#contact"> Register</a>
                </div>
                <img src="./arrow.svg" alt="" srcset="" className="h-[20px]" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
