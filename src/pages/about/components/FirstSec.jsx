import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";

const FirstSec = () => {
  return (
    <section className="pt-32 pb-20 px-6 py-24 md:px-12 lg:px-24 xl:px-32 ">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 font-medium"
        >
          About Us
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground mb-8"
        >
          A Legacy of Digital
          <br />
          Excellence Since 2010
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="w-24 h-px bg-foreground/20"
        />
      </div>
    </section>
  );
};

export default FirstSec;
