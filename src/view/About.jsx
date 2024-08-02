import React from "react";
import about_img from "/img/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <section
        className="w-full min-h-screen h-auto bg-black text-white overflow-hidden font-orbit relative z-10 px-10 py-10 pb-20"
        id="about"
      >
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-65, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-alien title  text-white/5 text-[14rem] absolute left-0 top-10 select-none z-10 "
        >
          BLACK PANTHER
        </motion.h1>
        <div className=" items-center gap-x-3 absolute w-full max-w-[1595px] mx-auto left-0 right-0 top-[13rem] lg:flex hidden px-10">
          <h1 className="w-5 h-5 flex items-center justify-center font-orbit">
            02
          </h1>
          <div className="w-20 h-[1px] bg-white/70"></div>
        </div>
        <div className="max-w-[1500px] mx-auto mt-[12.5rem] flex lg:flex-row flex-col items-center gap-y-10">
          <div className="w-full relative text-center lg:text-left">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: [-65, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className=""
              >
                <h2 className="title uppercase tracking-widest md:text-6xl font-bold sm:text-5xl text-3xl">
                  The Stealthy Guardian
                </h2>
              </motion.div>
            </div>
            <div className="flex flex-col gap-y-3 leading-7 text-white/60 mt-8 max-w-[30rem] relative z-10 mx-auto lg:mx-0">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ y: [-65, 0], opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className=""
                >
                  <p className="normal font-alien sm:text-2xl text-[12px]">
                    Choose wisely, for the Black Panther commands respect and
                    loyalty. Embrace the crypto-powered Black Panther, Batman's
                    elusive ally, and unlock endless potential. Disregard it,
                    and face a relentless adversary in the world of crypto
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[40rem] h-[70vh] relative group flex items-center w-full max-w-[20rem] opacity-[1]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              className=""
            >
              <img
                src={about_img}
                alt="Alien"
                loading="lazy"
                className="z-0 opacity-50 w-[50rem] mx-auto left-0 right-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
