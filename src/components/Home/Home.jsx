import React from "react";
import heroImg from "../../Photo/home-1-img-slide-300x300.jpg";

const Home = () => {
  return (
    <section id="home" className="pt-24 bg-white">
      {/* OUTER GAP */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* HERO CONTAINER */}
        <div className="relative mx-auto max-w-7xl h-[80vh] overflow-hidden rounded-3xl">

          {/* 🎥 VIDEO BACKGROUND */}
          <iframe
            className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
            src="https://www.youtube.com/embed/mwAkzWCCwGE?autoplay=1&mute=1&controls=0&loop=1&playlist=mwAkzWCCwGE&modestbranding=1&showinfo=0"
            allow="autoplay; fullscreen"
          ></iframe>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-12">

            {/* LEFT TEXT */}
            <div className="max-w-xl text-white">
              <h1 className="text-[64px] md:text-[120px] font-bold leading-none">
                Floka
              </h1>
              <p className="text-[40px] md:text-[64px] text-white/40 font-light">
                Studio
              </p>


            </div>

            {/* RIGHT CARD */}
            <div>
              <div className="hidden md:flex bg-white rounded-2xl p-5 items-center gap-4 shadow-xl max-w-sm">
                <img
                  src={heroImg}
                  alt="Head of Idea"
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    Head of Idea
                  </p>
                  <p className="font-semibold text-black">
                    Almond D. Nelsi
                  </p>

                  <button className="mt-4 flex items-center gap-3 text-sm font-medium">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white text-lg">
                      +
                    </span>
                    LET’S TALK
                  </button>
                </div>
              </div>
              <p className="mt-6 w-64 text-white/80">
                No cookie-cutter websites. No fluff.
                
                Just real tools and smart strategies to grow your business
                and elevate your brand.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
