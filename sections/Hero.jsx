"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../src/styles";
import { fadeIn, staggerContainer } from "../src/utils/motion";

const Hero = () => (
  <section
    className={`${styles.xPaddings} bg-[url(/hero-bg.svg)] w-full sm:pl-16 md:pl-20 min-h-full py-20 flex z-2 relative px-10 bg-no-repeat bg-cover bg-center`}
    id="home"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` lg:flex-row flex flex-col gap-8 w-full`}
    >
      <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-20">
        <div className="justify-center items-center md:w-[640px] flex-1 gap-10 max-w-[600px] relative">
          <h2
            className={`${styles.heroHeading} relative md:text-[53px] md:max-w-[640px] text-[32px] legu text[#171717] text-left z-[4] `}
          >
            Getting<span className="text-green-600">&nbsp;Quality&nbsp;</span>
            <br />
            Education Is Now
            <br /> More
            <span className="text-green-600">&nbsp;Easy&nbsp;</span>
          </h2>
          <p
            className={`${styles.paragraph} text-[#171717] pop mt-5 pt-10 text-[21px]`}
          >
            Provides you with the latest learning system and material that help
            your knowledge growing.
          </p>
          <div className="p-[10px] hover:scale-110 bg-green-600 font-medium rounded-xl w-max py-4 px-8 mt-10 flex text-white pop">
            <a href="#contact" className="flex">
              Get Started
            </a>
          </div>
          <div className="absolute -left-5 -top-10 w-72 h-72 rounded-full bg-transparent border-[0.05px] border-green-600/50 border-solid z-[0] lg:block hidden" />
        </div>
        <div className="flex-1 relative flex justify-center">
          <div>
            <figure className="hero-banner md:relative md:z-1 grid grid-cols-5 mmd:grid-cols-10 items-start gap-[30px]">
              <div className="img-holder md:justify-self-end md:max-w-max rounded-tr-[70px] rounded-bl-[110px] col-span-3 mmd:col-span-5 one  mmd:w-[270px] mmd:h-[300px] w-[200px] h-[220px] aspect-auto bg-[#cccccc] overflow-hidden">
                <Image
                  height={300}
                  width={270}
                  src="/hero-banner-1.jpg"
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="img-holder mmd:mt-0 mt-[175px] ml-[-90px] mmd:ml-0 md:max-w-max md:mt-[200px] rounded-tl-[50px] rounded-br-[90px] col-span-2 mmd:col-span-4 one mmd:w-[270px] mmd:h-[300px] w-[200px] h-[220px] aspect-auto bg-[#cccccc] overflow-hidden">
                <Image
                  height={200}
                  width={270}
                  src="/hero-banner-2.jpg"
                  alt="Hero Image"
                  className="object-cover w-full h-full "
                  priority
                />
              </div>
              <Image
                src="/hero-shape-1.svg"
                className="w-[380px] h-[190px] absolute hidden md:block md:bottom-[-40px] md:left-[-40px]"
                width={380}
                height={190}
                priority
              />
              <Image
                src="/hero-shape-2.png"
                className="w-[622px] h-[551px] absolute hidden lg:block lg:top-[-80px] lg:z-[0] "
                width={622}
                height={551}
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
