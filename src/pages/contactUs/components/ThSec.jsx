import { MapPin } from "lucide-react";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Giza",
    country: "Egypt",
    role: "Headquarters",
    address: "Giza, Egypt",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3453.091287975844!2d31.20857718488446!3d30.06291768187555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAzJzQ2LjUiTiAzMcKwMTInMjMuMCJF!5e0!3m2!1sar!2seg!4v1771617083844!5m2!1sar!2seg",
  },
];

const ThSec = () => {
  const loc = locations[0];

  return (
    <section className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-md">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium"
          >
            Our Offices
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-4xl font-light tracking-tight leading-[1.1] text-foreground mb-6"
          >
            Where to Find Us
          </motion.h2>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin size={14} />
            <span>{loc.address}</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {loc.city}, {loc.country} — {loc.role}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="w-full md:w-[520px] border border-border overflow-hidden"
        >
          <div className="relative w-full h-[320px]">
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(90%) contrast(90%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${loc.city}`}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThSec;
