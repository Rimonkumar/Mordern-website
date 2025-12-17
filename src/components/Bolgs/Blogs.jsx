import React from 'react';
import image from "../../Photo/home-9-blog-img3-800x800.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      category: "WEB3",
      date: "NOV 07, 2025",
      title: "Seamless user interfaces, crafted with intent.",
      image: image,
      type: "dark-text" // কালো ব্যাকগ্রাউন্ড কার্ড
    },
    {
      id: 2,
      category: "WEB3",
      date: "NOV 07, 2025",
      title: "Creative web platforms, designed for growth.",
      image: image,
      type: "tall-image" // লম্বা ইমেজ কার্ড
    },
    {
      id: 3,
      category: "WEB3",
      date: "NOV 07, 2025",
      title: "Immersive virtual journeys, built with precision",
      image: image,
      type: "dark-text"
    }
  ];

  return (
    <section className="bg-[#f9f9f9] py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-4">
            Insights
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
            Company blog & updates
          </h2>
        </div>

        {/* Blog Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-black text-white p-8 rounded-[20px] h-48 flex flex-col justify-center">
              <div className="flex gap-4 text-[10px] font-bold tracking-widest text-gray-400 mb-4">
                <span>WEB3</span> <span>NOV 07, 2025</span>
              </div>
              <h3 className="text-xl font-medium leading-snug italic">
                {blogPosts[0].title}
              </h3>
            </div>
            <div className="relative group overflow-hidden rounded-[20px]">
              <img src={image} alt="blog" className="w-full h-[400px] object-cover " />
              {/* Hover Icon */}
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column (Tall) */}
          <div className="flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-[20px]">
              <img src={image} alt="blog" className="w-full h-[450px] object-cover" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-xl font-bold">+</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="flex gap-4 text-[10px] font-bold tracking-widest text-gray-400 mb-2">
                <span>WEB3</span> <span>NOV 07, 2025</span>
              </div>
              <p className="text-lg font-medium text-gray-800 leading-tight">
                {blogPosts[1].title}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-black text-white p-8 rounded-[20px] h-48 flex flex-col justify-center">
              <div className="flex gap-4 text-[10px] font-bold tracking-widest text-gray-400 mb-4">
                <span>WEB3</span> <span>NOV 07, 2025</span>
              </div>
              <h3 className="text-xl font-medium leading-snug">
                {blogPosts[2].title}
              </h3>
            </div>
            <div className="relative group overflow-hidden rounded-[20px]">
              <img src={image} alt="blog" className="w-full object-cover h-[400px]" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blogs;