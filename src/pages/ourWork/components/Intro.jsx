import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";

const Intro = () => {
  return (
    <section className="h-[70vh] px-24 flex items-center bg-black overflow-hidden">
      <div className="max-w-4xl mx-8 text-white mt-12">

        {/* Tagline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] font-medium mb-10"
        >
          High Visibility, Higher Impact
        </motion.p>

        {/* Title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-5xl md:text-6xl font-bold tracking-[0.15em]"
        >
          Our Work
        </motion.h1>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="origin-left mt-6 w-3/4 h-[3px]
                     bg-gradient-to-r
                     from-white/20
                     via-blue-gray-100
                     to-white/20
                     rounded-full"
        />

      </div>
    </section>
  );
};

export default Intro;
