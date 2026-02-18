import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../../components/animation/FadeUp ";
const SecAbout = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 font-medium">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8">
            A Legacy of Digital Excellence Since 2010
          </h2>
          <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed max-w-3xl mb-10">
            From a social insight department to a full-service digital
            engagement agency — 120+ team members across Cairo, Athens, and
            Dubai.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { n: "120+", l: "Team Members" },
              { n: "3", l: "Countries" },
              { n: "15+", l: "Years" },
              { n: "500+", l: "Projects" },
            ].map((s) => (
              <div key={s.l} className="text-center py-6 border border-border">
                <p className="text-3xl font-extralight text-foreground mb-1">
                  {s.n}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors group"
          >
            Learn More{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SecAbout;
