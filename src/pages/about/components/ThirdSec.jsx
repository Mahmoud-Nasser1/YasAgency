import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";

const ThirdSec = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "120+", label: "Team Members" },
            { number: "3", label: "Countries" },
            { number: "15+", label: "Years of Excellence" },
            { number: "500+", label: "Projects Delivered" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center py-8"
            >
              <p className="text-5xl md:text-6xl font-extralight text-foreground mb-3">
                {stat.number}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
