import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="relative slidingText w-full   p-5 ovesrflow-hidden">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p
            key={i}
            className="normal mx-10 text-gray-500 text-xl  font-semibold tracking-wider"
          >
            BUY NOW
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
