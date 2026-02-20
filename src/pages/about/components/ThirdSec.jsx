import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";

const ThirdSec = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-foreground mb-6 font-medium">
              Influencer Marketing
            </h3>

            <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed">
              We help you manage and scale influencer marketing programs built
              on real relationships. From influencer identification and
              validation to contracts, campaign management, reporting, and
              real-time alerts, we handle everything to ensure your brand
              message reaches the right audience.
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
              Why Influencers Are Powerful Storytellers
            </h3>

            <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed">
              Influencers understand social platforms deeply. They speak the
              audience’s language, know how to address your market, stay ahead
              of trends, and deliver your message in their own authentic voice,
              making them the most effective storytellers for modern brands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
