"use client";
import styles from "../src/styles";
import Image from "next/image";
import { FaPaintBrush, FaVolumeUp } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const courses = [
  {
    id: 1,
    icon: <FaPaintBrush />,
    title: "Design & Development",
    desc: "Master Design and Development Skills with Interactive E-Learning Courses",
    value: "7 Courses",
    color: "green-500",
  },
  {
    id: 2,
    icon: <FaVolumeUp />,
    title: "Marketing & Communication",
    desc: "Master Marketing & Communication in a Dynamic Learning Environment.",
    value: "7 Courses",
    color: "pink-500",
  },
  {
    id: 3,
    icon: <MdDevices />,
    title: "Digital Marketing",
    desc: "Unlock the Power of Digital Marketing Techniques",
    value: "7 Courses",
    color: "green-500",
  },
  {
    id: 4,
    icon: <VscGraph />,
    title: "Business & Consulting",
    desc: "Unlock the Power of Digital Marketing Techniques.",
    value: "7 Courses",
    color: "pink-500",
  },
  {
    id: 5,
    icon: <VscGraph />,
    title: "Finance Management",
    desc: "Unlock the Power of Digital Marketing Techniques.",
    value: "7 Courses",
    color: "green-500",
  },
  {
    id: 6,
    icon: <VscGraph />,
    title: "Self Development",
    desc: "Unlock the Power of Digital Marketing Techniques.",
    value: "7 Courses",
    color: "pink-500",
  },
];

const Category = () => {
  return (
    <section
      className={`flex justify-center items-center ${styles.padding} relative mt-20 font-[legu]`}
    >
      <div className="bg-green-500/10 h-1 w-1" />
      <div className="bg-pink-500/10 h-1 w-1" />
      <div className="container">
        <p className="text-[15px] uppercase font-medium tracking-[1px] text-center mb-[15px] text-[#ee4962] legu">
          Categories
        </p>
        <h2 className="text-[#171717] text-center text-5xl font-bold legu">
          Explore
          <span className="text-[#1ab79d]">&nbsp;courses&nbsp;</span>
          by category
        </h2>
        <p className="text-[15px] text-center my-[15px] mx-[25px] mb-[40px] pop text-[#808080]">
          Browse top class courses by browsing our catgeory which will be more
          easy for you.
        </p>
        <ul className="flex flex-wrap gap-[30px] justify-center items-center">
          {courses.map((course) => (
            <li key={course.id}>
              <div
                className={`category-card bg-${course.color}/10 py-[50px] px-[30px] rounded-[5px] flex justify-center items-center text-center h-[410px] flex-col w-[300px]`}
              >
                <div
                  className={`card-icon text-[40px] bg-yellow-500/10 w-[80px] min-h-[80px] text-${course.color} grid place-items-center rounded-full mx-auto mb-[30px] `}
                >
                  {course.icon}
                </div>
                <h3 className="text-[#171717] leading-[1] font-medium text-[23px]">
                  <a href="#" className="card-title">
                    {course.title}
                  </a>
                </h3>
                <p className="card-text h-[215px] text-[#171717] text-[15px] mt-[15px] ml-[25px]">
                  {course.desc}
                </p>
                <span
                  className={`card-badge bg-${course.color}/10 mt-5 text-${course.color} text-[15px] font-medium py-[2px] px-[18px] max-w-max mx-auto rounded-[5px]`}
                >
                  {course.value}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
