import React from "react";
import FastMarquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
   
    <div className="relative overflow-hidden w-full bg-white py-10">
      
     
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      
      <FastMarquee speed={200} direction="left" pauseOnHover>
        <span className="text-6xl md:text-8xl font-medium text-gray-800 mx-10">
          Design, and strategy See how our projects shape digital world.
        </span>
        <span className="text-6xl md:text-8xl font-medium text-gray-400 mx-10">
          Clarity, Speed, and Functionality.
        </span>
      </FastMarquee>

      
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      
    </div>
  );
};

export default MarqueeText;