import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../components/animation/FadeUp ";
import {
  ArrowRight,
  Monitor,
  Megaphone,
  Printer,
  Film,
  Globe,
  Users,
  BarChart3,
} from "lucide-react";
const serviceNames = [
  "Outdoor",
  "Events",
  "Printing",
  "Production",
  "E-Marketing",
  "Influencers",
  "Social Media",
];

const serviceIcons = [
  Monitor,
  Megaphone,
  Printer,
  Film,
  Globe,
  Users,
  BarChart3,
];

const SecService = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 font-medium">What We Do</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground mb-12">
            Our Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-border mb-12">
          {serviceNames.map((name, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-background p-6 flex flex-col items-center gap-3 hover:bg-secondary transition-colors duration-500"
              >
                <Icon size={24} strokeWidth={1} className="text-foreground" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-center">
                  {name}
                </span>
              </motion.div>
            );
          })}
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors group"
        >
          View All Services{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default SecService;
