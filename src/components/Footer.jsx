"use client";
import Image from "next/image";
import React from "react";
import { IoChevronUp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-black">
      <div className="footer-bottom py-[30px]">
        <div className="container">
          <p className="copyright text-center text-[#bababa] text-[15px]">
            Copyright 2022 All Rights Reserved by{" "}
            <a href="#" class="copyright-link text-[#1ab79d]">
              EduWeb
            </a>
          </p>
        </div>
      </div>
      <a
        href="#top"
        class="back-top-btn rounded-full bg-[#1ab79d] fixed bottom-[40px] right-[30px] text-white p-[15px] block"
        aria-label="back top top"
        data-back-top-btn
      >
        <IoChevronUp />
      </a>
    </footer>
  );
};

export default Footer;
