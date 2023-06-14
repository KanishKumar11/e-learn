"use client";
import React from "react";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import {
  IoLibraryOutline,
  IoPeopleOutline,
  IoArrowForward,
} from "react-icons/io5";

const data = [
  {
    id: 1,
    imgUrl: "/course-1.jpg",
    diff: "Beginner",
    time: "3 Weeks",
    title: "Build Responsive Real World Websites with HTML and CSS",
    rating: "5.0/7 Rating",
    price: "1999.00",
    lessons: "8 Lessons",
    students: "20 Students",
  },
  {
    id: 2,
    imgUrl: "/course-2.jpg",
    diff: "Beginner",
    time: "3 Weeks",
    title: "Build Responsive Real World Websites with HTML and CSS",
    rating: "5.0/7 Rating",
    price: "1999.00",
    lessons: "8 Lessons",
    students: "20 Students",
  },
  {
    id: 3,
    imgUrl: "/course-3.jpg",
    diff: "Beginner",
    time: "3 Weeks",
    title: "Build Responsive Real World Websites with HTML and CSS",
    rating: "5.0/7 Rating",
    price: "1999.00",
    lessons: "8 Lessons",
    students: "20 Students",
  },
];

const Course = () => {
  return (
    <section className="my-40 bg-[url(/hero-bg.svg)]  bg-no-repeat bg-cover bg-center py-5 mx-auto flex items-center justify-center">
      <div className="container text-[#808080] ">
        <p class="section-subtitle text-[15px] uppercase font-medium text-center mb-[15px] text-[#808080]">
          Popular Courses
        </p>
        <h2 class="h2 section-title mb-[40px] text-[#171717] text-center text-[32px] font-[600] leading-[1]">
          Pick A Course To Get Started
        </h2>
        <ul className="flex justify-center flex-wrap mx-auto gap-5">
          {data.map((data) => (
            <li key={data.id}>
              <div className="course-card relative bg-white overflow-hidden rounded-[5px] max-w-[300px]">
                <figure className="card-banner img-holder w-full h-auto aspect-auto bg-[#cccccc] overflow-hidden">
                  <Image
                    src={data.imgUrl}
                    className="transition-ease ease-in-out duration-[0.5s] w-full h-full object-cover"
                    width={370}
                    height={220}
                  />
                </figure>
                <div className="abs-badge absolute top-[10px] right-[10px] bg-[#f8b720] text-white flex items-center gap-[5px] leading-[1] px-[8px] py-[6px] pb-[3px] legu rounded-[3px]">
                  <BiTimeFive className="text-lg mb-[5px] " />
                  <span className="span">{data.time}</span>
                </div>
                <div className="card-content p-[25px] gap-3 flex flex-col">
                  <span className="badge bg-[#1ab79d]/20 w-max leading-[25px] py-[10px] px-3 mb-3 text-[#1ab79d] legu rounded-[3px]">
                    {data.diff}
                  </span>
                  <h3 className="text-[23px] font-medium text-[#171717] legu leading-[1] ">
                    <a
                      href="#"
                      className="overflow-hidden mt-[15px] mb-[8px] ease duration-[0.25s]"
                    >
                      {data.title}
                    </a>
                  </h3>
                  <div className="wrapper gap-[10px] flex items-center ">
                    <div className="rating-wrapper gap-[3px] flex items-center text-[#f8b720] ">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="rating-text text-[#171717] font-[500] text-[14px]">
                      ({data.rating})
                    </p>
                  </div>
                  <data
                    className="price text-[#ee4962] legu text-[18px] font-[600] mt-[8px] mb-[15px]"
                    value={data.price}
                  >
                    ₹{data.price}
                  </data>
                  <ul className="card-meta-list flex flex-wrap items-center gap-3 ">
                    <li className="card-meta-item relative gap-[5px] flex items-center ">
                      <IoLibraryOutline className="text-[#a6a6a6]" />
                      <span className="span text-[#171717] text-[13px] after:content-[|] after:inline-block after:text-[#e6e6e6] pt-[10px] pb-[10px]">
                        {data.lessons} |
                      </span>
                    </li>
                    <li className="card-meta-item relative gap-[5px] flex items-center ">
                      <IoPeopleOutline />
                      <span className="span text-[#171717] text-[13px] pt-[10px] pb-[10px]">
                        {data.students}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="btn has-before bg-[#1ab79d] text-white legu text-[18px] flex items-center justify-center px-7 my-20 mx-auto gap-[7px] max-w-max rounded-[5px] overflow-hidden relative z-1 py-5"
        >
          <span className="span">Browse more courses</span>
          <IoArrowForward />
        </a>
      </div>
    </section>
  );
};

export default Course;
