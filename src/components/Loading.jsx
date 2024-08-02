import React, { useEffect, useRef } from "react";
import desktopLoader from "/vid/intro.mp4";
import mobileLoader from "/vid/intro.mp4";

const Loading = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="h-screen w-full flex items-start pt-20 justify-center">
      <h1 className="blink title text-2xl md:text-5xl font-bold text-white ">
        Loading..
      </h1>
      <video
        loop
        playsInline
        muted
        autoPlay
        preload="yes"
        ref={videoRef}
        className="fixed z-[-1] left-0 top-14 h-screen w-full object-cover pointer-events-none  opacity-[0.3ss5]"
      >
        <source
          src={isMobile ? mobileLoader : desktopLoader}
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
  );
};

export default Loading;
