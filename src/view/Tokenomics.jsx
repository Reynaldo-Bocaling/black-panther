import React from "react";
import { motion } from "framer-motion";
import { tokenomics } from "../constant/indedx";
const Tokenomics = () => {
  return (
    <>
      <section
        className="w-full h-screen text-white bg-black font-orbit overflow-hidden relative z-10 px-10 py-10 flex items-center"
        id="tokenomics"
      >
        <div className="Toastify"></div>
        <div className=" items-center gap-x-3 absolute w-full max-w-[1595px] mx-auto left-0 right-0 top-[13rem] lg:flex hidden px-10">
          <h1 className="w-5 h-5 flex items-center justify-center font-orbit">
            03
          </h1>
          <div className="w-20 h-[1px] bg-white/70"></div>
        </div>
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-65, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="title font-alien text-white/5 text-[14rem] absolute left-0 right-0 mx-auto top-10 select-none z-10   opacity: 0; translate-x-[-250px] "
        >
          TOKENOMICS
        </motion.h1>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full">
            <img
              src="/img/tokenomics.jpeg"
              alt="Hellcat"
              className="opacity: 1; translate-y-[-19.5194px]"
            />
          </div>
          <div className="font-orbit relative z-10  mx-auto w-full">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: [-65, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className=""
              >
                <h1 className="title md:text-9xl font-bold sm:text-5xl text-3xl">
                  TOKENOMICS
                </h1>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-65, 0], opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="xl:max-w-[50rem] normal font-alien max-w-[30rem] text-white/70 mt-2 sm:text-2xl text-[24px]">
                  Embrace the power. Honor the legend. Unleash the Hellcat.
                </p>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: [-65, 0], opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex max-w-[1600px] flex-col items-start md:flex-row">
                  <div className="relative w-full ">
                    <h1 className="title mt-20 text-4xl font-bold opacity-50 md:text-5xl">
                      Token Details
                    </h1>
                    <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-5 lg:gap-x-0 lg:text-left text-center justify-start">
                      {tokenomics.map((item, index) => (
                        <li key={index} className="flex ">
                          <div className="">
                            <h2 className="title text-3xl font-bold lg:text-2xl">
                              {item.value}
                            </h2>
                            <h4 className="title max-w-[6.5rem] text-base opacity-50">
                              {item.label}
                            </h4>
                          </div>
                          <div className="mx-10 hidden h-full w-[1px] bg-white opacity-20 lg:block"></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-65, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className=""
              >
                <button className="flex gap-x-2 items-center">
                  <p className="xl:max-w-[50rem] font-alien max-w-[30rem] text-white/70 mt-2 sm:text-2xl text-[20px]">
                    0x00000000000000000000000000000000000000000
                  </p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"></path>
                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"></path>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
