import React, { useEffect, useRef } from "react";
import BackgroundVideo from "/vid/hero_vg.mp4";
import { navlinks, social } from "../constant/indedx";
import { motion } from "framer-motion";
import { TfiAngleDoubleDown, TfiAngleDown } from "react-icons/tfi";
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <section className="h-[80vh] md:min-h-screen w-full relative">
      <div className="relative max-w-[1500px] mx-auto items-center justify-center h-[80vh] md:h-screen z-20 overflow-hidden flex flex-col pb-20 md:pb-0">
        <div className="font-orbit  text-center  sm:mt-20 md:mt-2 flex-shrink-0">
          <motion.h1
            initial={{ letterSpacing: 0, opacity: 1 }}
            whileInView={{ letterSpacing: ["-14px", 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="title text-white tracking-widest md:text-9xl font-bold sm:text-5xl text-3xl"
          >
            Black Panther
          </motion.h1>
          <div className="max-w-5xl  overflow-y-hidden">
            <motion.p
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [-35, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="normal    text-white/60 tracking-wider mt-5  leading-4 sm:leading-0 sm:text-2xl text-[24px]"
            >
              Discover the hilarious world of Batman's pet Black Panther in our
              crypto meme site. Dive into our unique stories and memes, blending
              superhero fun with crypto insights. Perfect for fans of both
              genres!
            </motion.p>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="flex items-center justify-center gap-7 mt-9"
          >
            {social.map((Item, index) => (
              <li
                key={index}
                className="h-[60px] w-[60px] rounded-full bg-[rgba(70,71,72,0.5)] flex items-center justify-center"
              >
                <a href={Item.url}>
                  <img src={Item.icon} alt="" className="w-[35px]" />
                </a>
              </li>
            ))}
          </motion.ul>

          <button className="shake-button mt-16 mb-9 opacity-40">
            <TfiAngleDoubleDown size={50} className="text-white" />
          </button>
        </div>
      </div>

      <ul className="z-30 sides absolute font-orbit uppercase left-0 md:gap-x-20 w-full md:w-fit h-fit md:-rotate-90 bottom-0 flex justify-center md:top-0 my-auto md:-ml-28 mb-36 md:mb-auto  gap-x-10  text-white">
        {navlinks.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer md:text-sm text-[12px] group"
          >
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="w-fit h-fit -rotate-90 absolute right-5 -mr-24 bottom-0 z-10 top-0 my-auto items-center gap-x-4 sm:flex hidden opacity-[1]">
        <h1 className=" tracking-widest text-sm text-white">
          The Batman's Pet
        </h1>
        <div className="w-20 h-[1px] bg-white z-10 bottom-5 right-5"></div>
      </div>

      {/* background vid */}
      <video
        loop
        playsInline
        muted
        autoPlay
        preload="yes"
        ref={videoRef}
        className="absolute z-[-1] left-0 top-0 h-screen w-full object-cover opacity-[0.15]"
      >
        <source
          src={BackgroundVideo}
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </section>
  );
};

export default Hero;
