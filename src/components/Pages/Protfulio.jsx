import React from 'react';

import img1 from "../../Photo/car1.jpg";
import img2 from "../../Photo/m2.jpg";

const Portfolio = () => {

    const projects = [
        { id: 1, title: "ALDAN BRANDING", tags: "BRANDING, PRODUCT, UX", year: "2023", image: img1, colSpan: "lg:col-span-1" },
        { id: 2, title: "ALDAN BRANDING", tags: "BRANDING, PRODUCT, UX", year: "2023", image: img1, colSpan: "lg:col-span-1" },
        { id: 3, title: "ALDAN BRANDING", tags: "BRANDING, PRODUCT, UX", year: "2023", image: img2, colSpan: "lg:col-span-2" },
        { id: 4, title: "ALDAN BRANDING", tags: "BRANDING, PRODUCT, UX", year: "2023", image: img1, colSpan: "lg:col-span-1" },
        { id: 5, title: "ALDAN BRANDING", tags: "BRANDING, PRODUCT, UX", year: "2023", image: img1, colSpan: "lg:col-span-1" },
    ];

    return (
        <section className="bg-[#f9f9f9] py-20 px-4 md:px-10 lg:px-20 font-sans text-black">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 border-b border-gray-200 pb-2 w-full max-w-4xl">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium mt-6 leading-tight max-w-2xl">
                        Strategy to build powerful digital solutions.
                    </h2>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8">
                    {projects.map((project) => (
                        <div key={project.id} className={`${project.colSpan} group cursor-pointer`}>
                            {/* Image Container with Hover Effects */}
                            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] md:aspect-auto">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* --- HOVER OVERLAYS --- */}

                                {/* 1. Top-Left Logo (Always Visible or Hover) */}
                                <div className="absolute top-6 left-6 flex items-center gap-2">
                                    <div className="w-6 h-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rotate-45"></div>
                                    </div>
                                    <span className="text-white text-xs font-bold tracking-widest uppercase">Logoipsum</span>
                                </div>

                                {/* 2. Top-Right Arrow (Appears on Hover) */}
                                <div className="absolute top-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                {/* 3. Bottom-Left Tags (Appears on Hover) */}
                                <div className="absolute bottom-6 left-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                                        {project.tags}
                                    </span>
                                </div>
                            </div>

                            {/* Project Footer (Always Visible) */}
                            <div className="flex justify-between items-center mt-4 px-1">
                                <h3 className="text-[11px] font-bold tracking-widest text-gray-800 uppercase">
                                    {project.title}
                                </h3>
                                <span className="text-[11px] font-medium text-gray-400">
                                    {project.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <button className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-90">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="text-[11px] font-bold tracking-widest uppercase">More Works</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;