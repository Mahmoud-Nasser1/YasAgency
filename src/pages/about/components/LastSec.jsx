import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";

const LastSec = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="border border-border p-10 md:p-16"
        >
          <h3 className="text-xs uppercase tracking-[0.25em] text-foreground mb-10 font-medium">
            Intelligence-First Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg text-foreground mb-4 font-medium">
                Market Mastery
              </h4>
              <p className="text-[#a3a3a3] leading-relaxed">
                We leverage our roots as a Social Insight Department to decode
                local market dynamics.
              </p>
            </div>
            <div>
              <h4 className="text-lg  mb-4 font-medium">
                Data-Driven Decisions
              </h4>
              <p className="text-[#a3a3a3] leading-relaxed">
                We transform deep analysis into actionable strategies that
                empower our clients to make optimum business decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LastSec;
