import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../components/animation/FadeUp ";

const LastSec = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="body-large mb-10">
            Let's discuss how we can elevate your brand's visibility.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground/10 hover:text-foreground transition-all duration-500 opacity-0 animate-fade-in"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LastSec;
