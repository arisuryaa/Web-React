import React from "react";
import Navbar from "../Elements/Navbar";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactHome from "../Elements/ContactHome";
import Ktp from "../Elements/Ktp";
import Footer from "../Elements/Footer";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scrollRight = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const scrollLeft = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div className="w-full h-[130vh] bg-[#272727]">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-screen z-[2] relative">
        <motion.img
          src="../public/img/3dicons.svg"
          initial={{ y: 0 }}
          animate={{ y: [-25, 0, -25], transition: { repeat: Infinity, duration: 2 } }}
          className="absolute transition-all ease-out scaleX left-20 h-28"
          alt=""
        />
        <motion.img
          src="../public/img/3dicons.svg"
          initial={{ y: 0 }}
          animate={{ y: [25, 0, 25], transition: { repeat: Infinity, duration: 2, delay: 2 } }}
          className="absolute transition-all ease-out right-20 h-28"
          alt=""
        />

        <motion.h1
          className="text-[8.5rem] min-w-fit whitespace-nowrap font-semibold z-[1] text-white absolute top-0 "
          initial={{ x: -1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 1,
              delay: 3,
            },
          }}
          style={{ x: scrollLeft }}
        >
          SOFTWARE ENGINER
        </motion.h1>
        <motion.h1
          className="text-[8.5rem] min-w-fit whitespace-nowrap font-semibold z-[3] absolute TextStroke top-0 "
          initial={{ x: -1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 1,
              delay: 3,
            },
          }}
          style={{ x: scrollLeft }}
        >
          SOFTWARE ENGINER
        </motion.h1>
        <img src="../public/img/Pic.png" className=" w-auto h-[26rem] z-[2] rounded-md" alt="" />
        <motion.h1
          className="text-[8.5rem] min-w-fit whitespace-nowrap font-semibold z-[1] text-white absolute bottom-0"
          initial={{ x: 1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 1,
              delay: 3,
            },
          }}
          style={{ x: scrollRight }}
        >
          FRONT END DEVELOPER
        </motion.h1>
        <motion.h1
          className="text-[8.5rem] min-w-fit whitespace-nowrap font-semibold z-[3] absolute TextStroke bottom-0"
          initial={{ x: 1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 1,
              delay: 3,
            },
          }}
          style={{ x: scrollRight }}
        >
          FRONT END DEVELOPER
        </motion.h1>
      </div>
      <ContactHome />
      <Ktp />
      <Footer />
    </div>
  );
};

export default Hero;
