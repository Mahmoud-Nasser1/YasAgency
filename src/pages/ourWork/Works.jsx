import React from "react";
import { FcAdvertising } from "react-icons/fc";

const Works = () => {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-secondery"></div>

      <div className="relative z-10 max-w-4xl mx-8 text-white mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/40">
          <FcAdvertising className="w-5 h-5 text-white" />
          <span className="text-white">Connecting the World Since 2010</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Our Work
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Making travel accessible, affordable, and unforgettable for millions
          worldwide
        </p>
      </div>
    </section>
  );
};

export default Works;
