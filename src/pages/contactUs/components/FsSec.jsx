import { fadeUp } from "../../../components/animation/FadeUp ";
import { motion } from "framer-motion";

const FsSec = () => {
  return (
    <section className="pt-40 pb-24 px-6 py-24 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 font-medium"
        >
          Get In Touch
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="text-5xl md:text-6xl font-bold  tracking-tight leading-[1.1] text-foreground mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="origin-left mt-6 mb-7 w-1/5 h-[3px]
                           bg-gradient-to-r
                           from-white/20
                           via-blue-gray-100
                           to-white/20
                           rounded-full"
        />
        <motion.p
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed max-w-xl"
        >
          We operate across three continents. Reach out through any of our
          offices or contact us directly.
        </motion.p>
      </div>
    </section>
  );
};

export default FsSec;
