"use client";
import React from "react";
import Image from "next/image";
import { BsCheckAll } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      aria-label="about"
      className="flex justify-center items-center my-40 px-5"
    >
      <div className="container justify-center flex item-center gap-[50px] flex-col lg:flex-row">
        <figure className="about-banner relative z-1 md:p-[60px] pr-0">
          <div className="img-holder rounded-[10px] block md:max-w-max md:mx-auto aspect-auto bg[#cccccc] overflow-hidden z-[2] relative">
            <Image
              src="/about-banner.jpg"
              width={520}
              height={370}
              className="img-cover w-full h-full object-cover z-[2]"
            />
          </div>
          <Image
            src="/about-shape-2.svg"
            width={371}
            height={220}
            className="shape about-shape-2 md:block hidden absolute bottom-[-100px] left-[-60px] z-[3]"
          />
          <Image
            src="/about-shape-3.png"
            width={722}
            height={528}
            className="shape about-shape-3 md:block hidden absolute top-[-20px] left-[-100px] z-[0]"
          />
        </figure>
        <div className="about-content lg:relative z-[1] max-w-[370px]">
          <p className="section-subtitle text-left text-[15px] uppercase font-medium mb-[15px] text-[#808080]">
            About Us
          </p>
          <h2 className="h2 section-title  text-left legu text-[#171717] leading-[1] font-[600] text-[32px] z-[2]">
            Over 10 Years in&nbsp;
            <span className="span text-[#ee4962] inline-block">
              Distant Learning&nbsp;
            </span>
            for Skill Development
          </h2>
          <p className="section-text text-left text-[15px] mt-[15px] mb-[25px] z-2">
            Empowering Learners Worldwide with Innovative Educational Technology
            Solutions
          </p>
          <ul className="about-list">
            <li className="about-item mb-[15px] flex items-center gap-[15px]">
              <BsCheckAll className="text-xl text-[#f8b720]" />
              <span className="span text-[#171717] legu ">Expert Trainers</span>
            </li>
            <li className="about-item mb-[15px] flex items-center gap-[15px]">
              <BsCheckAll className="text-[#f8b720] text-xl " />
              <span className="span text-[#171717] legu ">
                Online Remote Learning
              </span>
            </li>
            <li className="about-item mb-[15px] flex items-center gap-[15px]">
              <BsCheckAll className="text-[#f8b720] text-xl " />
              <span className="span text-[#171717] legu ">Lifetime Access</span>
            </li>
          </ul>
          <Image
            src="/about-shape-4.svg"
            width={100}
            height={100}
            className="shape about-shape-4 lg:block hidden lg:top-[30px] lg:right-[-30px] z-[-1] absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
