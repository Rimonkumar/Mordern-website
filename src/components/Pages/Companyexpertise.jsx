import React, { useState } from 'react';
import bgimg from "../../Photo/image.png";

const Companyexpertise = () => {
    // State to track which accordion item is open
    const [openIndex, setOpenIndex] = useState(3); // Defaulting to the 4th item (index 3) to match the picture

    const expertiseData = [
        {
            title: "User Interface & Experience Design",
            description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
            tags: ["BRANDING", "UX"],
            image: bgimg
        },
        {
            title: "Web Development",
            description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
            tags: ["BRANDING", "UX"],
            image: bgimg
        },
        {
            title: "Search Engine Optimization",
            description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
            tags: ["BRANDING", "UX"],
            image: bgimg
        },
        {
            title: "Low-Code Development",
            description: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
            tags: ["BRANDING", "UX"],
            image: bgimg
        }
    ];

    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
                        Company <br />
                        <span className="text-gray-500 italic">expertise</span>
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="border-t border-gray-800">
                    {expertiseData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="border-b border-gray-800 transition-all duration-500">
                                {/* Accordion Header */}
                                <div 
                                    className="flex items-center py-8 cursor-pointer group"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <div className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-colors ${isOpen ? 'bg-white' : 'group-hover:border-white'}`}>
                                        {isOpen ? (
                                            <span className="text-black text-2xl font-light leading-none">−</span>
                                        ) : (
                                            <span className="text-white text-2xl font-light leading-none">+</span>
                                        )}
                                    </div>
                                    <h3 className={`ml-8 text-xl md:text-2xl font-normal transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Accordion Body (Collapse Content) */}
                                <div 
                                    className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] pb-12' : 'max-h-0'}`}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-0 md:ml-20">
                                        {/* Left Side: Info */}
                                        <div className="flex flex-col justify-center">
                                            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                                                {item.description}
                                            </p>
                                            <div className="flex gap-3">
                                                {item.tags.map((tag, i) => (
                                                    <span key={i} className="px-5 py-1.5 rounded-full border border-gray-800 text-[10px] font-bold tracking-widest uppercase">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: Image */}
                                        <div className="relative">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-50 object-cover rounded-2xl shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Action */}
                <div className="mt-16 flex justify-center">
                    <button className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                            <span className="text-black text-2xl">+</span>
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">Hire us today</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Companyexpertise;