import React from "react";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <motion.section initial={{ y: 0 }} animate={{ y: -1000, transition: { duration: 1, delay: 3 } }} exit={{ display: "none" }} className="fixed top-0 bottom-0 left-0 right-0 bg-[#272727] z-10">
      <div className="flex flex-col items-center justify-center w-full h-screen text-center leading-[0]">
        <motion.span className="text-3xl font-semibold text-white leading-[0]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1 }, transitionEnd: { display: "none" } }}>
          Hello
        </motion.span>
        <motion.span className="text-3xl font-semibold text-white leading-[0]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.3 }, transitionEnd: { display: "none" } }}>
          Bonjour
        </motion.span>
        <motion.span className="text-3xl font-semibold text-white leading-[0]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.6 }, transitionEnd: { display: "none" } }}>
          Assalamu'alaikum.
        </motion.span>
        <motion.span className="text-3xl font-semibold text-white leading-[0]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.9 }, transitionEnd: { display: "none" } }}>
          Ni hao.
        </motion.span>
        <motion.span className="text-3xl font-semibold text-white leading-[0]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.2 }, transitionEnd: { display: "none" } }}>
          おはようございます
        </motion.span>
        <motion.span className="text-3xl font-semibold text-white leading-[0]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.5 } }}>
          Nenik
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Loader;
