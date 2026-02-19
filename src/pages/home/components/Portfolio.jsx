import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
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
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground mb-12">
            Selected Work
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { img: "/outDoor1.jpg", label: "Outdoor Advertising" },
            { img: "/Event1.jpg", label: "Events & Activations" },
            { img: "/Production1.jpg", label: "Production & Printing" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors group"
        >
          View Full Portfolio{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
