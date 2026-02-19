import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";

const SecondSec = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-foreground mb-6 font-medium">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed">
              Yas Agency launched in 2010 as a social insight department and has
              since evolved its offerings to become a digital engagement agency.
              We employ over 120 team members across three countries, with Cairo
              being our HQ and branches in Athens and Dubai. The agency
              maintains a number of strategic alliances and partnerships with
              global industry leaders such as LinkedIn and Hootsuite.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-foreground mb-6 font-medium">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed">
              Yas Agency mission is to provide our clients with extraordinary
              creative media services and deep analysis of the local market
              dynamics. We aim to satisfy their requirements and enhance their
              optimum decisions, in addition to providing cost-effective media
              buys.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondSec;
