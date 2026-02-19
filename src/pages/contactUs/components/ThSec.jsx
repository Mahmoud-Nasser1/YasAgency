import { MapPin } from "lucide-react";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Cairo",
    country: "Egypt",
    role: "Headquarters",
    address: "Cairo, Egypt",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.366896590554!2d31.21423955975404!3d30.026330275037136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472fa8265ddb%3A0x282c4b44cdf7e83c!2z2YPZhNmK2Kkg2KfZhNmH2YbYr9iz2Kkg2KzYp9mF2LnYqSDYp9mE2YLYp9mH2LHYqQ!5e0!3m2!1sar!2seg!4v1771538474309!5m2!1sar!2seg",
  },
  {
    city: "Athens",
    country: "Greece",
    role: "Branch Office",
    address: "Athens, Greece",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50212.45796867043!2d23.69555505!3d37.97755515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1700000000001!5m2!1sen!2sus",
  },
  {
    city: "Dubai",
    country: "UAE",
    role: "Branch Office",
    address: "Dubai, UAE",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115766.05641027296!2d55.07409255!3d25.20484495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1700000000002!5m2!1sen!2sus",
  },
];

const ThSec = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 font-medium mb-3"
        >
          Our Offices
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-16"
        >
          Where to Find Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group border border-border bg-card overflow-hidden"
            >
              {/* Map */}
              <div className="relative w-full h-56 overflow-hidden">
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

              {/* Info */}
              <div className="p-8 border-t border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-light text-foreground tracking-tight">
                      {loc.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {loc.country}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground border border-border px-3 py-1 shrink-0">
                    {loc.role === "Headquarters" ? "HQ" : "Branch"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={13} />
                  <span>{loc.address}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThSec;
