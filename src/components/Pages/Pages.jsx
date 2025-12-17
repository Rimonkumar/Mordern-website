import React from "react";
import profileImg from "../../Photo/home1-author-img1.jpg";
import CircularText from "./CircularText";
import Marquee from "./Marquee";

const Pages = () => {
  return (
    <section className="bg-white py-24 text-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 space-y-20">

        {/* ================= TOP TEXT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-4 max-w-sm">

            {/* CIRCULAR LOGO SECTION */}
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center relative overflow-hidden">
              <CircularText
                text="DIGITAL*AGENCY*FLOKA*"
                spinDuration={10}
                className="text-gray-400"
              >
                
                <span className="text-xl font-bold text-black uppercase">f</span>
              </CircularText>
            </div>

            <p className="text-gray-500 leading-relaxed">
              We design every project with long-term success in mind.
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium leading-tight">
            Our approach is straightforward
            <br />
            prioritizing functionality,
            <br />
            speed, and clarity for solutions.
          </h2>
        </div>

        {/* ================= EXPERIENCE / MAIN CARDS SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT CARD */}
          <div className="lg:col-span-3 bg-gray-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative z-10">
            <div>
              <h3 className="text-7xl font-bold">
                25<span className="text-gray-300">+</span>
              </h3>
              <p className="text-gray-400 mt-3">Years of experience</p>
              <div className="h-px bg-gray-200 my-6"></div>
              <p className="text-gray-700 mt-20 mb-6 leading-relaxed">
                Explore how we transform ideas into extraordinary digital experiences.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex -space-x-2 mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={profileImg} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                ))}
              </div>
              <p className="text-sm mt-3 text-gray-600">1200+ happy users review</p>
            </div>
          </div>

          {/* CENTER IMAGE CARD (The CEO Card) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-black h-[400px] sm:h-[450px] lg:h-[480px] z-20 group">
            <img
              src={profileImg}
              alt="CEO"
              className="absolute top-[-10%] left-[-5%] w-[115%] h-[115%] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
              <div className="self-end text-right text-xs space-y-3 pt-4 pr-4">
                <div>
                  <p className="font-semibold uppercase">Ultra Prestigious</p>
                  <p className="opacity-70">Winner</p>
                </div>
                <div>
                  <p className="font-semibold uppercase">Hyper Best</p>
                  <p className="opacity-70">Award Winning</p>
                </div>
              </div>
              <div className="max-w-xl">
                <p className="text-lg sm:text-xl leading-relaxed font-light">
                  “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
                </p>
                <p className="mt-4 text-sm opacity-80 font-medium">Merizo H. Yelso / CEO</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-6 relative z-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <p className="text-gray-500 text-base mb-1">Follow us</p>
              <h3 className="text-xl font-semibold mb-4">For check updates</h3>
              <div className="flex flex-wrap gap-2">
                {['DRIBBBLE', 'BEHANCE', 'LINKEDIN', 'X'].map((s) => (
                  <button key={s} className="px-4 py-1 text-xs font-bold border border-gray-200 rounded-full hover:bg-gray-50">{s}</button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-gray-500 text-base mb-4">Impressions</h3>
              <div className="flex flex-col gap-3">
                <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 justify-between">
                  <span className="font-medium">Solutions</span> <span>100%</span>
                </div>
                <div className="bg-black text-white h-12 rounded-xl flex items-center px-4 justify-between">
                  <span className="font-medium">UI/UX</span> <span>90%</span>
                </div>
                <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 justify-between" style={{width: '75%'}}>
                  <span className="font-medium">Explore</span> <span>72%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
       <div>
        {/* <Marquee></Marquee> */}
       </div>
    </section>
  );
};

export default Pages;